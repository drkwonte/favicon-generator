export function base64ToBlob(base64Data: string, mimeType: string) {
  const binaryString = atob(base64Data)
  const length = binaryString.length
  const bytes = new Uint8Array(length)
  for (let i = 0; i < length; i += 1) {
    bytes[i] = binaryString.charCodeAt(i)
  }
  return new Blob([bytes], { type: mimeType })
}

export function blobToBase64(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onloadend = () => {
      const result = reader.result
      if (typeof result !== 'string') {
        reject(new Error('Failed to read blob as base64'))
        return
      }
      const commaIndex = result.indexOf(',')
      if (commaIndex === -1) {
        reject(new Error('Unexpected FileReader result format'))
        return
      }
      resolve(result.slice(commaIndex + 1))
    }
    reader.onerror = () => {
      reject(reader.error ?? new Error('FileReader failed'))
    }
    reader.readAsDataURL(blob)
  })
}

