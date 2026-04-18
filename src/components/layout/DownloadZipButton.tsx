/**
 * Primary download control for the favicon ZIP (shown from the home flow export step).
 */
import { useAppPreferences } from '../../context/AppPreferencesContext'

type DownloadZipButtonProps = {
  onClick: () => void
}

export function DownloadZipButton({ onClick }: DownloadZipButtonProps) {
  const { t } = useAppPreferences()

  return (
    <button
      type="button"
      onClick={onClick}
      className="gradient-primary-btn inner-glow inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-headline text-xs font-extrabold text-on-primary shadow-md transition-transform active:scale-95 sm:px-8 sm:text-sm"
    >
      <span className="material-symbols-outlined text-lg">download</span>
      {t('export.downloadZip')}
    </button>
  )
}
