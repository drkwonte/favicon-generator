/**
 * Learn article shell: title, summary, placeholder body, basic JSON-LD for crawlers.
 */
import { useEffect, useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'

import { PolicyProse } from '../../components/layout/PolicyProse'
import { StaticShell } from '../../components/layout/StaticShell'
import { useAppPreferences } from '../../context/AppPreferencesContext'
import { getLearnArticle, pickText } from '../../features/learn/learn.catalog'

function setMetaDescription(content: string) {
  let el = document.querySelector('meta[name="description"]') as HTMLMetaElement | null
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('name', 'description')
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export function LearnArticlePage() {
  const { categorySlug, articleSlug } = useParams<{
    categorySlug: string
    articleSlug: string
  }>()
  const { locale, t } = useAppPreferences()

  const resolved = useMemo(() => {
    if (!categorySlug || !articleSlug) return undefined
    return getLearnArticle(categorySlug, articleSlug)
  }, [categorySlug, articleSlug])

  const titleText = resolved ? pickText(resolved.article.title, locale) : ''
  const summaryText = resolved ? pickText(resolved.article.summary, locale) : ''

  useEffect(() => {
    if (!resolved) {
      document.title = t('meta.learnNotFoundTitle')
      return
    }
    document.title = `${titleText} — Favify`
    setMetaDescription(summaryText)
    return () => {
      document.title = t('meta.homeTitle')
    }
  }, [resolved, titleText, summaryText, t])

  useEffect(() => {
    if (!resolved) return
    const { category, article } = resolved
    const url = typeof window !== 'undefined' ? window.location.href : ''
    const payload = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: pickText(article.title, locale),
      description: pickText(article.summary, locale),
      author: { '@type': 'Organization', name: 'Favify' },
      inLanguage: locale === 'ko' ? 'ko' : 'en',
      isPartOf: {
        '@type': 'CreativeWorkSeries',
        name: pickText(category.title, locale),
      },
      mainEntityOfPage: url,
    }
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-favify-learn-ld', '1')
    script.textContent = JSON.stringify(payload)
    document.head.appendChild(script)
    return () => {
      script.remove()
    }
  }, [resolved, locale])

  if (!resolved) {
    return (
      <StaticShell>
        <PolicyProse>
          <p className="doc-lead">{t('learn.notFoundArticle')}</p>
          <p>
            <Link to="/" className="font-semibold text-primary">
              {t('nav.home')}
            </Link>
          </p>
        </PolicyProse>
      </StaticShell>
    )
  }

  const { category, article } = resolved

  return (
    <StaticShell>
      <PolicyProse>
        <p className="doc-meta">
          <Link to={`/learn/${category.slug}`}>{pickText(category.title, locale)}</Link>
        </p>
        <h2>{pickText(article.title, locale)}</h2>
        <p className="doc-lead">{pickText(article.summary, locale)}</p>
        <p>{t('learn.articlePlaceholder')}</p>
      </PolicyProse>
    </StaticShell>
  )
}
