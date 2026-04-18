/**
 * Static file list for the favicon export screen.
 * Keep in sync with `utils/buildFaviconZip.ts` output filenames.
 */

export const COPIED_FEEDBACK_MS = 2000

export const PACKAGE_FILE_NAMES = [
  'favicon.ico',
  'favicon-16x16.png',
  'favicon-32x32.png',
  'apple-touch-icon.png',
  'android-chrome-192x192.png',
  'android-chrome-512x512.png',
  'site.webmanifest',
] as const
