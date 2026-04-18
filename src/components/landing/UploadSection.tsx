/**
 * Drag-and-drop portrait upload + primary CTA (select photo vs continue to preview).
 */
import type { RefObject } from 'react'

import { useAppPreferences } from '../../context/AppPreferencesContext'
import { ACCEPTED_IMAGE_TYPES } from '../../features/favify/app.constants'

type UploadSectionProps = {
  fileInputRef: RefObject<HTMLInputElement | null>
  sourceObjectUrl: string | null
  sourceFile: File | null
  uploadError: string | null
  generationError: string | null
  primaryActionLabel: string
  /** When false, primary CTA continues with a local crop (no optional AI stylize). */
  stylizedPrimaryAction: boolean
  isGenerating: boolean
  onDropFile: (file: File | null) => void
  onPrimaryAction: () => void
  onClearPhoto: () => void
}

export function UploadSection({
  fileInputRef,
  sourceObjectUrl,
  sourceFile,
  uploadError,
  generationError,
  primaryActionLabel,
  stylizedPrimaryAction,
  isGenerating,
  onDropFile,
  onPrimaryAction,
  onClearPhoto,
}: UploadSectionProps) {
  const { t } = useAppPreferences()

  return (
    <section className="mx-auto max-w-5xl px-8 py-16">
      <div className="rounded-xl bg-surface-container p-2 shadow-sm">
        <div
          className={[
            'group flex flex-col items-center justify-center rounded-lg border-4 border-dashed p-12 text-center transition-all duration-300 md:p-24',
            'border-outline-variant/30 bg-surface-container-lowest hover:border-primary/40 hover:bg-surface-container-low',
          ].join(' ')}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault()
            const file = e.dataTransfer.files?.[0] ?? null
            onDropFile(file)
          }}
        >
          <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-primary-container/20 transition-transform duration-500 group-hover:scale-110">
            <span className="material-symbols-outlined text-5xl text-primary">
              cloud_upload
            </span>
          </div>

          <h2 className="mb-4 font-headline text-3xl font-black text-on-surface">
            {t('upload.title')}
          </h2>
          <p className="mb-10 max-w-sm leading-relaxed text-on-surface-variant">
            {t('upload.subtitle')}
          </p>

          {sourceFile && !uploadError && sourceObjectUrl ? (
            <div className="mb-8 overflow-hidden rounded-lg border border-outline-variant/40 shadow-sm">
              <img
                alt="Selected portrait preview"
                src={sourceObjectUrl}
                className="mx-auto max-h-48 w-auto max-w-full object-contain"
              />
            </div>
          ) : null}

          <input
            ref={fileInputRef}
            type="file"
            accept={ACCEPTED_IMAGE_TYPES.join(',')}
            className="hidden"
            onChange={(e) => onDropFile(e.currentTarget.files?.[0] ?? null)}
          />

          <div className="flex flex-col gap-4 sm:flex-row">
            <button
              type="button"
              onClick={onPrimaryAction}
              disabled={isGenerating}
              className="gradient-primary-btn inner-glow inline-flex items-center gap-3 rounded-full px-10 py-4 font-headline text-sm font-extrabold text-on-primary transition-transform active:scale-95 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {primaryActionLabel}
              <span className="material-symbols-outlined">
                {!sourceFile || uploadError
                  ? 'add_photo_alternate'
                  : stylizedPrimaryAction
                    ? 'auto_awesome'
                    : 'arrow_forward'}
              </span>
            </button>

            {sourceFile ? (
              <button
                type="button"
                onClick={onClearPhoto}
                disabled={isGenerating}
                className="rounded-full bg-surface-container-highest px-10 py-4 font-headline text-sm font-bold text-on-primary-container transition-colors hover:bg-surface-container-high disabled:cursor-not-allowed disabled:opacity-60"
              >
                {t('common.remove')}
              </button>
            ) : null}
          </div>

          {uploadError ? (
            <p className="mt-6 text-sm font-semibold text-error">{uploadError}</p>
          ) : null}

          {generationError ? (
            <p className="mt-4 max-w-md text-sm font-semibold text-error">
              {generationError}
            </p>
          ) : null}

          {!uploadError && !generationError ? (
            <p className="mt-8 text-xs font-medium uppercase tracking-[0.2em] text-on-surface-variant/50">
              {t('upload.privacyNote')}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  )
}
