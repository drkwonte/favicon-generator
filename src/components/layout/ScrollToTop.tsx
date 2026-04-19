/**
 * Restores window scroll to the top on client-side route changes.
 * Browsers do not reset scroll position when only the SPA path changes.
 */
import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function ScrollToTop() {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
