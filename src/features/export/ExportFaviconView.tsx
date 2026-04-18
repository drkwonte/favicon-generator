/**
 * Final step: previews at key sizes, HTML snippet for `<head>`,
 * package file list, and entry back to a new run.
 */
import { useCallback, useState } from 'react'

import { useAppPreferences } from '../../context/AppPreferencesContext'
import { COPIED_FEEDBACK_MS, PACKAGE_FILE_NAMES } from './export.constants'

export type ExportPreviewUrls = {
  url16: string
  url32: string
  url180: string
}

type ExportFaviconViewProps = {
  previews: ExportPreviewUrls
  htmlSnippet: string
  onNewFavicon: () => void
}

export function ExportFaviconView({
  previews,
  htmlSnippet,
  onNewFavicon,
}: ExportFaviconViewProps) {
  const { t } = useAppPreferences()
  const [copyHint, setCopyHint] = useState<'idle' | 'copied' | 'failed'>('idle')

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(htmlSnippet)
      setCopyHint('copied')
      window.setTimeout(() => setCopyHint('idle'), COPIED_FEEDBACK_MS)
    } catch {
      setCopyHint('failed')
      window.setTimeout(() => setCopyHint('idle'), COPIED_FEEDBACK_MS)
    }
  }, [htmlSnippet])

  return (
    <div className="mx-auto max-w-screen-2xl px-6 pb-12 pt-6 md:px-12">
      <header className="mb-10 max-w-3xl">
        <h1 className="font-headline text-3xl font-extrabold tracking-tight text-on-surface md:text-4xl">
          {t('export.title')}
        </h1>
        <p className="mt-3 font-body text-lg leading-relaxed text-on-surface-variant">
          {t('export.subtitle')}
        </p>
      </header>

      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
        <div className="flex flex-col gap-8 lg:col-span-8">
          <div className="flex flex-col items-center justify-center gap-10 rounded-xl bg-surface-container-low p-8 shadow-sm sm:flex-row sm:items-end sm:justify-center">
            <div className="character-shadow flex flex-col items-center gap-3">
              <img
                alt={t('export.alt180')}
                src={previews.url180}
                className="h-36 w-36 rounded-full border-4 border-surface-container-highest object-cover shadow-md sm:h-44 sm:w-44"
              />
              <span className="font-label text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
                180 × 180
              </span>
            </div>
            <div className="character-shadow flex flex-col items-center gap-3">
              <img
                alt={t('export.alt32')}
                src={previews.url32}
                className="h-20 w-20 rounded-lg border-2 border-surface-container-highest object-cover shadow-md"
              />
              <span className="font-label text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
                32 × 32
              </span>
            </div>
            <div className="flex flex-col items-center gap-3 rounded-lg border border-outline-variant/40 bg-surface-container-highest/50 px-4 py-3">
              <div className="flex items-center gap-2 text-on-surface-variant">
                <span className="material-symbols-outlined text-xl">language</span>
                <span className="font-label text-[10px] font-bold uppercase tracking-widest">
                  {t('export.tabBadge')}
                </span>
              </div>
              <img
                alt={t('export.altTab')}
                src={previews.url16}
                className="h-4 w-4 object-cover"
              />
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-outline-variant/30 bg-inverse-surface shadow-lg">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <h2 className="font-headline text-sm font-bold text-white">
                {t('export.htmlBlock')}
              </h2>
              <button
                type="button"
                onClick={() => {
                  void handleCopy()
                }}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 font-label text-xs font-semibold text-white transition-colors hover:bg-white/20"
              >
                <span className="material-symbols-outlined text-base">content_copy</span>
                {t('export.copyCode')}
              </button>
            </div>
            {copyHint === 'copied' ? (
              <p className="border-b border-white/10 bg-tertiary/20 px-4 py-2 font-body text-xs font-medium text-tertiary-fixed">
                {t('export.copySuccessBanner')}
              </p>
            ) : null}
            {copyHint === 'failed' ? (
              <p className="border-b border-white/10 bg-error/20 px-4 py-2 font-body text-xs font-medium text-on-error">
                {t('export.copyFailBanner')}
              </p>
            ) : null}
            <pre className="max-h-64 overflow-x-auto overflow-y-auto p-4 font-mono text-xs leading-relaxed text-white/90 md:text-sm">
              {htmlSnippet.trim()}
            </pre>
          </div>
        </div>

        <aside className="flex flex-col gap-6 lg:col-span-4">
          <div className="rounded-xl bg-surface-container-low p-6 shadow-sm">
            <h2 className="font-headline text-lg font-bold text-on-surface">
              {t('export.standardFiles')}
            </h2>
            <ul className="mt-4 space-y-2 font-body text-sm text-on-surface-variant">
              {PACKAGE_FILE_NAMES.map((name) => (
                <li
                  key={name}
                  className="flex items-center gap-2 rounded-lg bg-surface-container-lowest/80 px-3 py-2"
                >
                  <span className="material-symbols-outlined text-base text-primary">
                    draft
                  </span>
                  <span className="truncate font-mono text-xs">{name}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-outline-variant/40 bg-surface-container-lowest p-6 shadow-sm">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-tertiary">widgets</span>
              <div>
                <h2 className="font-headline text-sm font-bold text-on-surface">
                  {t('export.pwaTitle')}
                </h2>
                <p className="mt-1 font-body text-xs leading-relaxed text-on-surface-variant">
                  {t('export.pwaBody')}
                </p>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={onNewFavicon}
            className="w-full rounded-full border border-outline-variant bg-surface-container-lowest py-4 font-headline text-sm font-bold text-on-surface shadow-sm transition-colors hover:bg-surface-container-high active:scale-[0.98]"
          >
            {t('export.newRun')}
          </button>
        </aside>
      </div>
    </div>
  )
}
