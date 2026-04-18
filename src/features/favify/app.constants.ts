/**
 * Cross-screen app settings: brand shell, upload rules, favicon export,
 * and loading copy shared by multiple steps.
 */

export const BRAND_NAME = 'Favify'
export const NAV_HEIGHT_PX = 80

/** Allowed MIME types for the portrait uploader (must match `<input accept>`. */
export const ACCEPTED_IMAGE_TYPES = ['image/png', 'image/jpeg', 'image/webp'] as const

export const MAX_UPLOAD_BYTES = 10 * 1024 * 1024

export const FAVICON_ZIP_FILENAME = 'favify-favicon-package.zip'
