/**
 * Product guide: how to use Favify, output formats, and favicon FAQs.
 */
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { PolicyProse } from '../components/layout/PolicyProse'
import { StaticShell } from '../components/layout/StaticShell'
import { useAppPreferences } from '../context/AppPreferencesContext'
import { PACKAGE_FILE_NAMES } from '../features/export/export.constants'
import { SITE_DISPLAY_NAME } from '../features/legal/publisher.constants'
import { FAVICON_HTML_SNIPPET } from '../utils/faviconHtmlSnippet'

const GUIDE_ZIP_DESC_KEYS = [
  'guide.zipDescIco',
  'guide.zipDesc16',
  'guide.zipDesc32',
  'guide.zipDescApple',
  'guide.zipDescAndroid192',
  'guide.zipDescAndroid512',
  'guide.zipDescManifest',
] as const

export function GuidePage() {
  const { t, locale } = useAppPreferences()

  useEffect(() => {
    document.title = t('meta.guideTitle')
  }, [t, locale])

  const pageTitle = t('guide.pageTitle').replaceAll('Favify', SITE_DISPLAY_NAME)

  return (
    <StaticShell>
      <PolicyProse>
        <h1>{pageTitle}</h1>
        <p className="doc-lead">{t('guide.intro')}</p>

        <h2>{t('guide.stepsH')}</h2>
        <ol>
          <li>
            <strong>{t('guide.step1Bold')}</strong> {t('guide.step1Body')}
          </li>
          <li>
            <strong>{t('guide.step2Bold')}</strong> {t('guide.step2Body')}
          </li>
          <li>
            <strong>{t('guide.step3Bold')}</strong> {t('guide.step3Body')}
          </li>
          <li>
            <strong>{t('guide.step4Bold')}</strong> {t('guide.step4Body')}
          </li>
          <li>
            <strong>{t('guide.step5Bold')}</strong> {t('guide.step5Body')}
            <pre>{FAVICON_HTML_SNIPPET.trim()}</pre>
          </li>
        </ol>

        <h2>{t('guide.zipH')}</h2>
        <div className="guide-table-wrap">
          <table className="guide-zip-table">
            <thead>
              <tr>
                <th scope="col">{t('guide.zipColFile')}</th>
                <th scope="col">{t('guide.zipColDesc')}</th>
              </tr>
            </thead>
            <tbody>
              {PACKAGE_FILE_NAMES.map((filename, index) => (
                <tr key={filename}>
                  <td>
                    <code>{filename}</code>
                  </td>
                  <td>{t(GUIDE_ZIP_DESC_KEYS[index])}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

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
        <p>
          {t('guide.faq3PBefore')}
          <Link to="/terms">{t('guide.termsLink')}</Link>
          {t('guide.faq3PAfter')}
        </p>

        <h3>{t('guide.faq4H')}</h3>
        <p>
          {t('guide.faq4PBefore')}
          <Link to="/privacy">{t('guide.privacyLink')}</Link>
          {t('guide.faq4PMid')}
        </p>

        <p>
          <Link to="/">{t('guide.cta')}</Link>
        </p>
      </PolicyProse>
    </StaticShell>
  )
}
