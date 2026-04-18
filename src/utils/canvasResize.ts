import { squareCenterCropToPng } from './imagePrep'

export async function resizeImageBlobToSquarePng(
  sourcePngBlob: Blob,
  outputSizePx: number,
): Promise<Blob> {
  // We treat the master as an image and re-render for crisp sizing.
  return squareCenterCropToPng(sourcePngBlob, outputSizePx)
}
