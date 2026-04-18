/**
 * Product guide: how to use Favify, output formats, and favicon FAQs.
 */
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { PolicyProse } from '../components/layout/PolicyProse'
import { StaticShell } from '../components/layout/StaticShell'
import { useAppPreferences } from '../context/AppPreferencesContext'
import { SITE_DISPLAY_NAME } from '../features/legal/publisher.constants'
import { FAVICON_HTML_SNIPPET } from '../utils/faviconHtmlSnippet'

export function GuidePage() {
  const { t, locale } = useAppPreferences()

  useEffect(() => {
    document.title = t('meta.guideTitle')
  }, [t, locale])

  return (
    <StaticShell>
      <PolicyProse>
        <p className="doc-lead">{t('guide.intro')}</p>
        <h2>
          {t('guide.howH').replace('Favify', SITE_DISPLAY_NAME)}
        </h2>
        <ol>
          <li>{t('guide.step1')}</li>
          <li>{t('guide.step2')}</li>
          <li>{t('guide.step3')}</li>
          <li>{t('guide.step4')}</li>
          <li>{t('guide.step5')}</li>
        </ol>

        <h2>{t('guide.zipH')}</h2>
        <p>{t('guide.zipIntro')}</p>
        <ul>
          <li>{t('guide.zipIco')}</li>
          <li>{t('guide.zipPng')}</li>
          <li>{t('guide.zipManifest')}</li>
        </ul>

        <h2>{t('guide.htmlH')}</h2>
        <p>{t('guide.htmlP')}</p>
        <pre>{FAVICON_HTML_SNIPPET.trim()}</pre>

        <h2>{t('guide.whyH').replace('Favify', SITE_DISPLAY_NAME)}</h2>
        <ul>
          <li>{t('guide.why1')}</li>
          <li>{t('guide.why2')}</li>
          <li>{t('guide.why3')}</li>
        </ul>

        <h2>{t('guide.tipsH')}</h2>
        <ul>
          <li>{t('guide.tip1')}</li>
          <li>{t('guide.tip2')}</li>
          <li>{t('guide.tip3')}</li>
        </ul>

        <h2>{t('guide.faqH')}</h2>

        <h3>{t('guide.faq1H')}</h3>
        <p>{t('guide.faq1P')}</p>

        <h3>{t('guide.faq2H')}</h3>
        <p>{t('guide.faq2P')}</p>

        <h3>{t('guide.faq3H')}</h3>
        <p>{t('guide.faq3P')}</p>

        <h3>{t('guide.faq4H')}</h3>
        <p>
          {t('guide.faq4PBefore')} <Link to="/terms">{t('guide.termsLink')}</Link>
          {t('guide.faq4PMid')} <Link to="/privacy">{t('guide.privacyLink')}</Link>
          {t('guide.faq4PAfter')}
        </p>

        <h3>{t('guide.faq5H')}</h3>
        <p>
          {t('guide.faq5PBefore')} <Link to="/privacy">{t('guide.privacyLink')}</Link>
          {t('guide.faq5PAfter')}
        </p>
      </PolicyProse>
    </StaticShell>
  )
}
