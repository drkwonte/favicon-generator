/** Editorial page: product purpose, technical expectations, and roadmap notes. */
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { PolicyProse } from '../components/layout/PolicyProse'
import { StaticShell } from '../components/layout/StaticShell'
import { useAppPreferences } from '../context/AppPreferencesContext'
import { LEGAL_LAST_UPDATED } from '../features/legal/publisher.constants'

export function AboutPage() {
  const { t, locale } = useAppPreferences()

  useEffect(() => {
    document.title = t('meta.aboutTitle')
  }, [t, locale])

  return (
    <StaticShell>
      <PolicyProse>
        <p className="doc-meta">
          {t('common.lastUpdated')} {LEGAL_LAST_UPDATED}
        </p>
        <h2>{t('about.whatHeading')}</h2>
        <p>{t('about.whatBody')}</p>
        <h2>{t('about.techHeading')}</h2>
        <p>
          {t('about.techBodyBeforePrivacy')}{' '}
          <Link to="/privacy">{t('about.privacyLink')}</Link>
          {t('about.techBodyAfterLink')}
        </p>
        <h2>{t('about.roadmapHeading')}</h2>
        <p>{t('about.roadmapBody')}</p>
      </PolicyProse>
    </StaticShell>
  )
}
