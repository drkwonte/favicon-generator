/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GEMINI_API_KEY?: string
  /** Shown in Privacy / Terms / footer when set (replace before AdSense review). */
  readonly VITE_PUBLISHER_CONTACT_EMAIL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
