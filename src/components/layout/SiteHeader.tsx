/**
 * Global top bar: brand, guide link, and optional actions (e.g. export ZIP on home).
 * Legal policy links stay in the footer only.
 */
import type { ReactNode } from 'react'
import { Link, NavLink } from 'react-router-dom'

import { BRAND_NAME } from '../../features/favify/app.constants'
import { useAppPreferences } from '../../context/AppPreferencesContext'
import { HeaderToolbar } from './HeaderToolbar'

type SiteHeaderProps = {
  /** Optional right-side slot (e.g. ZIP download on the home export step). */
  trailing?: ReactNode
}

export function SiteHeader({ trailing }: SiteHeaderProps) {
  const { t } = useAppPreferences()

  return (
    <header className="fixed top-0 z-50 w-full border-b border-outline-variant/20 bg-surface/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-full max-w-screen-2xl items-center justify-between gap-3 px-6 sm:gap-4 sm:px-8">
        <div className="flex min-w-0 flex-1 items-center gap-4 sm:gap-10">
          <Link
            to="/"
            className="font-headline text-2xl font-black tracking-tighter text-[#2E5BFF]"
          >
            {BRAND_NAME}
          </Link>
          <nav className="flex shrink-0 items-center" aria-label="Site pages">
            <NavLink
              to="/guide"
              className={({ isActive }) =>
                [
                  'font-body text-sm font-semibold underline-offset-4 hover:text-primary hover:underline',
                  isActive ? 'text-primary' : 'text-on-surface/90',
                ].join(' ')
              }
            >
              {t('nav.guide')}
            </NavLink>
          </nav>
        </div>
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <HeaderToolbar />
          {trailing ? <div className="flex items-center">{trailing}</div> : null}
        </div>
      </div>
    </header>
  )
}
