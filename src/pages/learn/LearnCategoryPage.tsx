/**
 * Learn hub: lists articles in one category (SEO landing per series).
 */
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import { PolicyProse } from '../../components/layout/PolicyProse'
import { StaticShell } from '../../components/layout/StaticShell'
import { useAppPreferences } from '../../context/AppPreferencesContext'
import { getLearnCategory, pickText } from '../../features/learn/learn.catalog'

export function LearnCategoryPage() {
  const { categorySlug } = useParams<{ categorySlug: string }>()
  const { locale, t } = useAppPreferences()
  const category = categorySlug ? getLearnCategory(categorySlug) : undefined

  useEffect(() => {
    if (!category) {
      document.title = t('meta.learnNotFoundTitle')
      return
    }
    document.title = `${pickText(category.title, locale)} — Favify`
  }, [category, locale, t])

  if (!category) {
    return (
      <StaticShell>
        <PolicyProse>
          <p className="doc-lead">{t('learn.notFoundCategory')}</p>
          <p>
            <Link to="/" className="font-semibold text-primary">
              {t('nav.home')}
            </Link>
          </p>
        </PolicyProse>
      </StaticShell>
    )
  }

  return (
    <StaticShell>
      <PolicyProse>
        <p className="doc-meta">{t('learn.seriesLabel')}</p>
        <h2>{pickText(category.title, locale)}</h2>
        <p className="doc-lead">{pickText(category.description, locale)}</p>
        <p>{t('learn.categoryIntro')}</p>
        <ul>
          {category.articles.map((article) => (
            <li key={article.slug}>
              <Link to={`/learn/${category.slug}/${article.slug}`} className="font-semibold">
                {pickText(article.title, locale)}
              </Link>
              <span className="text-on-surface-variant"> — {pickText(article.summary, locale)}</span>
            </li>
          ))}
        </ul>
      </PolicyProse>
    </StaticShell>
  )
}
