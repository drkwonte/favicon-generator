function isSupportedImageType(mimeType: string) {
  return mimeType === 'image/png' || mimeType === 'image/jpeg' || mimeType === 'image/webp'
}

async function decodeImageFromBlob(blob: Blob): Promise<HTMLImageElement> {
  const url = URL.createObjectURL(blob)
  try {
    const image = new Image()
    image.decoding = 'async'
    const loaded = new Promise<void>((resolve, reject) => {
      image.onload = () => resolve()
      image.onerror = () => reject(new Error('Failed to decode image'))
    })
    image.src = url
    await loaded
    return image
  } finally {
    URL.revokeObjectURL(url)
  }
}

export async function squareCenterCropToPng(source: Blob, outputSizePx: number): Promise<Blob> {
  if (!isSupportedImageType(source.type)) {
    throw new Error('Unsupported source image type.')
  }

  const image = await decodeImageFromBlob(source)
  const sourceWidth = image.naturalWidth
  const sourceHeight = image.naturalHeight
  if (!sourceWidth || !sourceHeight) throw new Error('Invalid image dimensions.')

  const side = Math.min(sourceWidth, sourceHeight)
  const sx = Math.floor((sourceWidth - side) / 2)
  const sy = Math.floor((sourceHeight - side) / 2)

  const canvas = document.createElement('canvas')
  canvas.width = outputSizePx
  canvas.height = outputSizePx
  const ctx = canvas.getContext('2d')
  if (!ctx) throw new Error('Canvas 2D context not available')

  ctx.drawImage(image, sx, sy, side, side, 0, 0, outputSizePx, outputSizePx)

  return await new Promise<Blob>((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (!blob) reject(new Error('Failed to encode PNG'))
        else resolve(blob)
      },
      'image/png',
    )
  })
}

