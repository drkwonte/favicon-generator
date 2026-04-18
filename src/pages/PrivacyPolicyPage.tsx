/**
 * Privacy Policy — keep accurate when you add analytics, ads, accounts, or server-side features.
 */
import { useEffect } from 'react'

import { PolicyProse } from '../components/layout/PolicyProse'
import { StaticShell } from '../components/layout/StaticShell'
import { useAppPreferences } from '../context/AppPreferencesContext'
import {
  getPublisherContactEmail,
  LEGAL_LAST_UPDATED,
  SITE_DISPLAY_NAME,
} from '../features/legal/publisher.constants'

export function PrivacyPolicyPage() {
  const { t, locale } = useAppPreferences()
  const email = getPublisherContactEmail()

  useEffect(() => {
    document.title = t('meta.privacyTitle')
  }, [t, locale])

  return (
    <StaticShell>
      <PolicyProse>
        <p className="doc-meta">
          {t('common.lastUpdated')} {LEGAL_LAST_UPDATED}
        </p>
        <h2>{t('privacy.overviewH')}</h2>
        <p>{t('privacy.overviewP').replaceAll('Favify', SITE_DISPLAY_NAME)}</p>
        <h2>{t('privacy.contactH')}</h2>
        <p>
          {t('privacy.contactPBefore')} <a href={`mailto:${email}`}>{email}</a>.
        </p>
        <h2>{t('privacy.browserH')}</h2>
        <p>
          {t('privacy.browserP1').replaceAll('Favify', SITE_DISPLAY_NAME)}
          <strong>{t('privacy.browserStrong')}</strong>
          {t('privacy.browserP2')}
        </p>
        <h2>{t('privacy.geminiH')}</h2>
        <p>
          {t('privacy.geminiP1').replaceAll('Favify', SITE_DISPLAY_NAME)}{' '}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noreferrer"
          >
            {t('privacy.googlePrivacy')}
          </a>{' '}
          {t('privacy.geminiP2')}
        </p>
        <p>{t('privacy.geminiP3')}</p>
        <h2>{t('privacy.cookiesH')}</h2>
        <p>{t('privacy.cookiesP')}</p>
        <h2>{t('privacy.loggingH')}</h2>
        <p>{t('privacy.loggingP')}</p>
        <h2>{t('privacy.childrenH')}</h2>
        <p>{t('privacy.childrenP').replaceAll('Favify', SITE_DISPLAY_NAME)}</p>
        <h2>{t('privacy.intlH')}</h2>
        <p>{t('privacy.intlP')}</p>
        <h2>{t('privacy.changesH')}</h2>
        <p>{t('privacy.changesP')}</p>
      </PolicyProse>
    </StaticShell>
  )
}
