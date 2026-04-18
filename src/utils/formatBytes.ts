/** Human-readable file size for validation messages. */
export function formatBytes(bytes: number) {
  const kb = 1024
  const mb = kb * 1024
  if (bytes >= mb) return `${(bytes / mb).toFixed(1)} MB`
  return `${Math.ceil(bytes / kb)} KB`
}
