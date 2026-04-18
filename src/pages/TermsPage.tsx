/**
 * Terms of Use — sets expectations, limits liability, and supports policy review.
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

export function TermsPage() {
  const { t, locale } = useAppPreferences()
  const email = getPublisherContactEmail()

  useEffect(() => {
    document.title = t('meta.termsTitle')
  }, [t, locale])

  return (
    <StaticShell>
      <PolicyProse>
        <p className="doc-meta">
          {t('common.lastUpdated')} {LEGAL_LAST_UPDATED}
        </p>
        <h2>{t('terms.agreementH')}</h2>
        <p>{t('terms.agreementP').replaceAll('Favify', SITE_DISPLAY_NAME)}</p>
        <h2>{t('terms.permittedH')}</h2>
        <p>{t('terms.permittedP')}</p>
        <h2>{t('terms.adviceH')}</h2>
        <p>{t('terms.adviceP')}</p>
        <h2>{t('terms.disclaimersH')}</h2>
        <p>{t('terms.disclaimersP')}</p>
        <h2>{t('terms.liabilityH')}</h2>
        <p>
          {t('terms.liabilityP')
            .replaceAll('FAVIFY', SITE_DISPLAY_NAME.toUpperCase())
            .replaceAll('Favify', SITE_DISPLAY_NAME)}
        </p>
        <h2>{t('terms.thirdH')}</h2>
        <p>{t('terms.thirdP')}</p>
        <h2>{t('terms.termH')}</h2>
        <p>{t('terms.termP')}</p>
        <h2>{t('terms.contactH')}</h2>
        <p>
          {t('terms.contactPBefore')} <a href={`mailto:${email}`}>{email}</a>.
        </p>
      </PolicyProse>
    </StaticShell>
  )
}
