type IcoEntryInput = {
  sizePx: number
  pngBytes: Uint8Array
}

const ICO_RESERVED = 0
const ICO_TYPE_ICON = 1
const ICO_HEADER_BYTES = 6
const ICO_ENTRY_BYTES = 16

function writeUint16LE(view: DataView, offset: number, value: number) {
  view.setUint16(offset, value, true)
}

function writeUint32LE(view: DataView, offset: number, value: number) {
  view.setUint32(offset, value, true)
}

function sizeByte(sizePx: number) {
  return sizePx >= 256 ? 0 : sizePx
}

export function encodeIcoFromPngEntries(entries: IcoEntryInput[]): Uint8Array {
  if (entries.length === 0) throw new Error('ICO requires at least one entry.')

  const sorted = [...entries].sort((a, b) => a.sizePx - b.sizePx)
  const imageDataOffsetStart = ICO_HEADER_BYTES + ICO_ENTRY_BYTES * sorted.length

  const totalImageBytes = sorted.reduce((sum, e) => sum + e.pngBytes.byteLength, 0)
  const totalBytes = imageDataOffsetStart + totalImageBytes

  const buffer = new ArrayBuffer(totalBytes)
  const view = new DataView(buffer)
  const out = new Uint8Array(buffer)

  // ICONDIR
  writeUint16LE(view, 0, ICO_RESERVED)
  writeUint16LE(view, 2, ICO_TYPE_ICON)
  writeUint16LE(view, 4, sorted.length)

  // ICONDIRENTRY
  let dataOffset = imageDataOffsetStart
  for (let i = 0; i < sorted.length; i += 1) {
    const entry = sorted[i]
    const entryOffset = ICO_HEADER_BYTES + i * ICO_ENTRY_BYTES

    out[entryOffset + 0] = sizeByte(entry.sizePx) // width
    out[entryOffset + 1] = sizeByte(entry.sizePx) // height
    out[entryOffset + 2] = 0 // color count
    out[entryOffset + 3] = 0 // reserved

    // For PNG-compressed ICO images, planes/bitcount are ignored by many readers,
    // but setting sane values improves compatibility.
    writeUint16LE(view, entryOffset + 4, 1) // planes
    writeUint16LE(view, entryOffset + 6, 32) // bitcount

    writeUint32LE(view, entryOffset + 8, entry.pngBytes.byteLength) // bytes in res
    writeUint32LE(view, entryOffset + 12, dataOffset) // image offset

    out.set(entry.pngBytes, dataOffset)
    dataOffset += entry.pngBytes.byteLength
  }

  return out
}

