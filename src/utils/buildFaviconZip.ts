import JSZip from 'jszip'

import { resizeImageBlobToSquarePng } from './canvasResize'
import { encodeIcoFromPngEntries } from './icoEncoder'

const ICO_SIZES = [16, 32, 48] as const
const PNG_SPECS = [
  { filename: 'favicon-16x16.png', sizePx: 16 },
  { filename: 'favicon-32x32.png', sizePx: 32 },
  { filename: 'apple-touch-icon.png', sizePx: 180 },
  { filename: 'android-chrome-192x192.png', sizePx: 192 },
  { filename: 'android-chrome-512x512.png', sizePx: 512 },
] as const

const MANIFEST_FILENAME = 'site.webmanifest' as const
const ICO_FILENAME = 'favicon.ico' as const

async function blobToUint8Array(blob: Blob) {
  const arrayBuffer = await blob.arrayBuffer()
  return new Uint8Array(arrayBuffer)
}

export async function buildFaviconZipFromMasterPng(masterPng: Blob): Promise<Blob> {
  const zip = new JSZip()

  const icoEntries: Array<{ sizePx: number; pngBytes: Uint8Array }> = []
  for (const sizePx of ICO_SIZES) {
    const pngBlob = await resizeImageBlobToSquarePng(masterPng, sizePx)
    icoEntries.push({ sizePx, pngBytes: await blobToUint8Array(pngBlob) })
  }

  const icoBytes = encodeIcoFromPngEntries(icoEntries)
  zip.file(ICO_FILENAME, icoBytes, { binary: true })

  for (const spec of PNG_SPECS) {
    const pngBlob = await resizeImageBlobToSquarePng(masterPng, spec.sizePx)
    zip.file(spec.filename, pngBlob)
  }

  const manifest = {
    name: 'Favify site icons',
    short_name: 'Favify',
    icons: [
      { src: 'android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { src: 'android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    theme_color: '#09090b',
    background_color: '#09090b',
    display: 'standalone',
  }
  zip.file(MANIFEST_FILENAME, JSON.stringify(manifest, null, 2))

  return zip.generateAsync({ type: 'blob' })
}

