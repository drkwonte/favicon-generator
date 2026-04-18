/**
 * Header controls: locale (EN / 한) and light/dark theme toggle.
 */
import { useAppPreferences } from '../../context/AppPreferencesContext'

const LOCALE_BUTTON_BASE =
  'rounded-full px-2.5 py-1 font-body text-xs font-bold transition-colors sm:px-3 sm:text-sm' as const

export function HeaderToolbar() {
  const { locale, setLocale, theme, toggleTheme, t } = useAppPreferences()

  return (
    <div className="flex shrink-0 items-center gap-2 sm:gap-3">
      <div
        className="flex rounded-full border border-outline-variant/50 bg-surface-container-lowest/60 p-0.5"
        role="group"
        aria-label={locale === 'ko' ? '언어' : 'Language'}
      >
        <button
          type="button"
          onClick={() => {
            setLocale('en')
          }}
          aria-pressed={locale === 'en'}
          aria-label={t('header.useEnglish')}
          className={[
            LOCALE_BUTTON_BASE,
            locale === 'en'
              ? 'bg-primary text-on-primary shadow-sm'
              : 'text-on-surface-variant hover:text-on-surface',
          ].join(' ')}
        >
          EN
        </button>
        <button
          type="button"
          onClick={() => {
            setLocale('ko')
          }}
          aria-pressed={locale === 'ko'}
          aria-label={t('header.useKorean')}
          className={[
            LOCALE_BUTTON_BASE,
            locale === 'ko'
              ? 'bg-primary text-on-primary shadow-sm'
              : 'text-on-surface-variant hover:text-on-surface',
          ].join(' ')}
        >
          한
        </button>
      </div>

      <button
        type="button"
        onClick={toggleTheme}
        aria-label={theme === 'dark' ? t('header.useLight') : t('header.useDark')}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-outline-variant/50 bg-surface-container-lowest/60 text-on-surface transition-colors hover:border-primary/40 hover:text-primary"
      >
        <span className="material-symbols-outlined text-[22px]">
          {theme === 'dark' ? 'light_mode' : 'dark_mode'}
        </span>
      </button>
    </div>
  )
}
