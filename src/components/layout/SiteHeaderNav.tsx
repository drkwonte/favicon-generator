/**
 * Primary site navigation: Guide + learn categories. Desktop inline links; mobile drawer.
 */
import { useCallback, useEffect, useId, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import { useAppPreferences } from '../../context/AppPreferencesContext'
import { LEARN_CATEGORIES, pickText } from '../../features/learn/learn.catalog'

const NAV_LINK_CLASS =
  'font-body text-sm font-semibold underline-offset-4 hover:text-primary hover:underline' as const

function navLinkActiveClass(base: string, isActive: boolean): string {
  return [base, isActive ? 'text-primary' : 'text-on-surface/90'].join(' ')
}

const NAV_LINK_STACKED =
  'font-body text-sm font-semibold underline-offset-4 hover:text-primary block rounded-lg px-2 py-2.5 hover:bg-surface-container-high' as const

export function SiteHeaderNav() {
  const { locale, t } = useAppPreferences()
  const menuId = useId()
  const [mobileOpen, setMobileOpen] = useState(false)

  const closeMobile = useCallback(() => {
    setMobileOpen(false)
  }, [])

  useEffect(() => {
    if (!mobileOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMobile()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
    }
  }, [mobileOpen, closeMobile])

  const renderNavLinks = (onNavigate: (() => void) | undefined, layout: 'inline' | 'stack') => {
    const base = layout === 'stack' ? NAV_LINK_STACKED : NAV_LINK_CLASS
    return (
      <>
        <NavLink
          to="/guide"
          className={({ isActive }) => navLinkActiveClass(base, isActive)}
          onClick={onNavigate}
          end
        >
          {t('nav.guide')}
        </NavLink>
        {LEARN_CATEGORIES.map((cat) => (
          <NavLink
            key={cat.slug}
            to={`/learn/${cat.slug}`}
            className={({ isActive }) => navLinkActiveClass(base, isActive)}
            onClick={onNavigate}
          >
            {pickText(cat.nav, locale)}
          </NavLink>
        ))}
      </>
    )
  }

  return (
    <div className="flex min-w-0 flex-1 items-center justify-end md:justify-start">
      <nav
        className="hidden min-w-0 flex-wrap items-center justify-end gap-x-5 gap-y-1 md:flex lg:gap-x-6"
        aria-label={t('nav.mainLabel')}
      >
        {renderNavLinks(undefined, 'inline')}
      </nav>

      <div className="flex shrink-0 items-center md:hidden">
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-outline-variant/50 bg-surface-container-lowest/60 text-on-surface"
          aria-expanded={mobileOpen}
          aria-controls={menuId}
          aria-label={mobileOpen ? t('nav.closeMenu') : t('nav.openMenu')}
          onClick={() => {
            setMobileOpen((o) => !o)
          }}
        >
          <span className="material-symbols-outlined text-[22px]">
            {mobileOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {mobileOpen ? (
        <div className="fixed inset-0 z-[60] md:hidden" role="presentation">
          <button
            type="button"
            className="absolute inset-0 bg-inverse-surface/40 backdrop-blur-sm"
            aria-label={t('nav.closeMenu')}
            onClick={closeMobile}
          />
          <div
            id={menuId}
            className="absolute right-0 top-0 flex h-full w-[min(100%,20rem)] flex-col border-l border-outline-variant/30 bg-surface shadow-xl"
          >
            <div className="flex items-center justify-between border-b border-outline-variant/20 px-4 py-3">
              <span className="font-label text-xs font-bold uppercase tracking-wide text-on-surface-variant">
                {t('nav.menuHeading')}
              </span>
              <button
                type="button"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full text-on-surface hover:bg-surface-container-high"
                aria-label={t('nav.closeMenu')}
                onClick={closeMobile}
              >
                <span className="material-symbols-outlined text-[22px]">close</span>
              </button>
            </div>
            <nav
              className="flex flex-1 flex-col gap-1 overflow-y-auto p-3"
              aria-label={t('nav.mainLabel')}
            >
              {renderNavLinks(closeMobile, 'stack')}
            </nav>
            <div className="border-t border-outline-variant/20 p-3">
              <Link
                to="/"
                className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-primary hover:bg-surface-container-high"
                onClick={closeMobile}
              >
                {t('nav.home')}
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
