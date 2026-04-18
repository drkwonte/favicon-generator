/**
 * Theme (light/dark) and UI locale (en/ko). Persisted to localStorage.
 */
import {
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

import { getMessage, type Locale } from '../i18n/messages'

const THEME_STORAGE_KEY = 'favify-theme' as const
const LOCALE_STORAGE_KEY = 'favify-locale' as const

export type ThemeMode = 'light' | 'dark'

type AppPreferencesContextValue = {
  theme: ThemeMode
  setTheme: (theme: ThemeMode) => void
  toggleTheme: () => void
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (path: string, vars?: Record<string, string>) => string
}

const AppPreferencesContext = createContext<AppPreferencesContextValue | null>(null)

function readStoredTheme(): ThemeMode {
  try {
    const raw = localStorage.getItem(THEME_STORAGE_KEY)
    if (raw === 'dark' || raw === 'light') return raw
  } catch {
    /* private mode etc. */
  }
  return 'light'
}

function readStoredLocale(): Locale {
  try {
    const raw = localStorage.getItem(LOCALE_STORAGE_KEY)
    if (raw === 'ko' || raw === 'en') return raw
  } catch {
    /* ignore */
  }
  return 'en'
}

export function AppPreferencesProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeMode>(readStoredTheme)
  const [locale, setLocaleState] = useState<Locale>(readStoredLocale)

  const setTheme = useCallback((next: ThemeMode) => {
    setThemeState(next)
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next)
    } catch {
      /* ignore */
    }
  }, [])

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark'
      try {
        localStorage.setItem(THEME_STORAGE_KEY, next)
      } catch {
        /* ignore */
      }
      return next
    })
  }, [])

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    try {
      localStorage.setItem(LOCALE_STORAGE_KEY, next)
    } catch {
      /* ignore */
    }
  }, [])

  useLayoutEffect(() => {
    const isDark = theme === 'dark'
    document.documentElement.classList.toggle('dark', isDark)
    if (document.body) {
      document.body.classList.toggle('dark', isDark)
    }
    document.documentElement.lang = locale === 'ko' ? 'ko' : 'en'
  }, [theme, locale])

  const t = useCallback(
    (path: string, vars?: Record<string, string>) => getMessage(locale, path, vars),
    [locale],
  )

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme,
      locale,
      setLocale,
      t,
    }),
    [theme, setTheme, toggleTheme, locale, setLocale, t],
  )

  return (
    <AppPreferencesContext.Provider value={value}>
      {children}
    </AppPreferencesContext.Provider>
  )
}

// Hook is intentionally exported from the provider module (paired context API).
/* eslint-disable react-refresh/only-export-components */
export function useAppPreferences(): AppPreferencesContextValue {
  const ctx = useContext(AppPreferencesContext)
  if (!ctx) {
    throw new Error('useAppPreferences must be used within AppPreferencesProvider')
  }
  return ctx
}
/* eslint-enable react-refresh/only-export-components */
