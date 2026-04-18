/**
 * Publisher identity for policy pages, footers, and AdSense contact fields.
 * Set `VITE_PUBLISHER_CONTACT_EMAIL` in `.env` before production / AdSense review.
 */
export function getPublisherContactEmail(): string {
  const raw = import.meta.env.VITE_PUBLISHER_CONTACT_EMAIL
  if (typeof raw === 'string' && raw.trim()) return raw.trim()
  return 'contact@example.com'
}

/** Shown in copyright and policy footers until you deploy a canonical domain. */
export const SITE_DISPLAY_NAME = 'Favify'

/** Update whenever policy copy materially changes (shown on legal pages). */
export const LEGAL_LAST_UPDATED = 'April 18, 2026'
