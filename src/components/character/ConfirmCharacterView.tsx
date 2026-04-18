/**
 * Step after avatar generation: large preview + actions to build favicons
 * or request another character from the same source photo.
 */
import { useAppPreferences } from '../../context/AppPreferencesContext'

export type ConfirmCharacterViewProps = {
  characterImageUrl: string
  isBusy: boolean
  /** When false, the preview is a local crop only—no AI restyle, so “regenerate” is hidden. */
  stylizedAvatarEnabled: boolean
  onRegenerate: () => void
  onGenerateFavicons: () => void
  faviconError: string | null
}

export function ConfirmCharacterView({
  characterImageUrl,
  isBusy,
  stylizedAvatarEnabled,
  onRegenerate,
  onGenerateFavicons,
  faviconError,
}: ConfirmCharacterViewProps) {
  const { t } = useAppPreferences()

  const stepTitle = stylizedAvatarEnabled
    ? t('confirm.refineTitle')
    : t('confirm.previewTitle')
  const stepDescription = stylizedAvatarEnabled
    ? t('confirm.refineBody')
    : t('confirm.previewBody')
  const previewAlt = stylizedAvatarEnabled
    ? t('confirm.altStyled')
    : t('confirm.altPlain')

  return (
    <div className="mx-auto max-w-screen-2xl px-6 pb-12 pt-6 md:px-12">
      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
        <div className="flex flex-col gap-6 lg:col-span-7 xl:col-span-8">
          <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden rounded-xl bg-surface-container shadow-sm sm:min-h-[520px] lg:min-h-[600px]">
            <div className="pointer-events-none absolute inset-0 bg-secondary-container/30 transition-colors duration-500" />
            <div className="relative z-10 character-shadow">
              <img
                alt={previewAlt}
                src={characterImageUrl}
                className="max-h-[min(500px,55vh)] w-auto max-w-full transform transition-transform duration-700 hover:scale-105"
              />
            </div>
            {isBusy ? (
              <div className="absolute inset-0 z-20 flex items-center justify-center bg-surface/50 backdrop-blur-sm">
                <div
                  className="h-12 w-12 animate-spin rounded-full border-4 border-primary/25 border-t-primary"
                  aria-hidden="true"
                />
              </div>
            ) : null}
          </div>
        </div>

        <aside className="flex min-h-[420px] flex-col gap-8 rounded-xl bg-surface-container-low p-8 shadow-sm sm:min-h-[520px] lg:col-span-5 lg:min-h-[600px] xl:col-span-4">
          <header>
            <h1 className="font-headline text-3xl font-extrabold tracking-tight text-on-surface">
              {stepTitle}
            </h1>
            <p className="mt-2 font-body text-on-surface-variant">
              {stepDescription}
            </p>
          </header>
          <div className="flex flex-1 flex-col justify-center gap-6">
            <div className="space-y-4">
              {faviconError ? (
                <p className="rounded-lg border border-error/30 bg-error-container/10 px-4 py-3 font-body text-sm text-error">
                  {faviconError}
                </p>
              ) : null}
              <button
                type="button"
                onClick={onGenerateFavicons}
                disabled={isBusy}
                className="bezel-effect primary-gradient flex w-full items-center justify-center gap-3 rounded-full py-4 font-headline text-lg font-bold text-on-primary shadow-xl transition-all active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
              >
                <span className="material-symbols-outlined">auto_fix_high</span>
                {t('confirm.generateFavicons')}
              </button>
              {stylizedAvatarEnabled ? (
                <button
                  type="button"
                  onClick={onRegenerate}
                  disabled={isBusy}
                  className="flex w-full items-center justify-center gap-3 rounded-full border border-outline-variant bg-surface-container-lowest py-4 font-headline text-lg font-bold text-on-surface shadow-sm transition-all hover:bg-surface-container-high active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <span className="material-symbols-outlined">casino</span>
                  {t('confirm.regenerate')}
                </button>
              ) : null}
            </div>
            <p className="text-center font-headline text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
              {t('confirm.buildTime')}
            </p>
          </div>
        </aside>
      </div>
    </div>
  )
}
