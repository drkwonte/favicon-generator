import { useEffect, useMemo } from 'react'

export function useObjectUrl(value: Blob | MediaSource | null) {
  const url = useMemo(() => {
    if (!value) return null
    return URL.createObjectURL(value)
  }, [value])

  useEffect(() => {
    if (!url) return
    return () => {
      URL.revokeObjectURL(url)
    }
  }, [url])

  return url
}

