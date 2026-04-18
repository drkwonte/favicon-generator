/**
 * Home route: favicon tool plus optional header action (ZIP download on export).
 */
import { useEffect } from 'react'

import { DownloadZipButton } from '../components/layout/DownloadZipButton'
import { StaticShell } from '../components/layout/StaticShell'
import { useAppPreferences } from '../context/AppPreferencesContext'
import { FavifyToolMain } from '../features/favify/FavifyToolMain'
import { useFavifyFlow } from '../features/favify/useFavifyFlow'

export function HomePage() {
  const { t, locale } = useAppPreferences()
  const flow = useFavifyFlow()

  useEffect(() => {
    document.title = t('meta.homeTitle')
  }, [t, locale])

  const headerTrailing = flow.showNavDownload ? (
    <DownloadZipButton onClick={flow.onDownloadZip} />
  ) : null

  return (
    <StaticShell headerTrailing={headerTrailing}>
      <FavifyToolMain flow={flow} />
    </StaticShell>
  )
}
