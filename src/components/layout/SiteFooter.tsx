/**
 * Sitewide footer: compact legal links (not duplicated in the header).
 */
import { Link } from 'react-router-dom'

import { useAppPreferences } from '../../context/AppPreferencesContext'
import { SITE_DISPLAY_NAME } from '../../features/legal/publisher.constants'

const FOOTER_LEGAL_SEPARATOR_CLASS =
  'select-none px-2 text-on-surface-variant/35' as const

export function SiteFooter() {
  const { t } = useAppPreferences()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-outline-variant/30 bg-surface-container-low py-8 text-on-surface-variant sm:py-10">
      <div className="mx-auto flex max-w-screen-2xl flex-col gap-4 px-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-8">
        <nav
          className="flex flex-wrap items-center font-body text-sm leading-normal"
          aria-label="Footer"
        >
          <Link
            to="/guide"
            className="font-medium text-on-surface hover:text-primary"
          >
            {t('footer.guide')}
          </Link>
          <span className={FOOTER_LEGAL_SEPARATOR_CLASS} aria-hidden>
            |
          </span>
          <Link
            to="/about"
            className="font-medium text-on-surface hover:text-primary"
          >
            {t('footer.about')}
          </Link>
          <span className={FOOTER_LEGAL_SEPARATOR_CLASS} aria-hidden>
            |
          </span>
          <Link
            to="/privacy"
            className="font-semibold text-on-surface hover:text-primary"
          >
            {t('footer.privacy')}
          </Link>
          <span className={FOOTER_LEGAL_SEPARATOR_CLASS} aria-hidden>
            |
          </span>
          <Link
            to="/terms"
            className="font-medium text-on-surface hover:text-primary"
          >
            {t('footer.terms')}
          </Link>
        </nav>
        <p className="font-body text-xs text-on-surface-variant/85 sm:text-right">
          © {year} {SITE_DISPLAY_NAME}. {t('footer.rights')}
        </p>
      </div>
    </footer>
  )
}
