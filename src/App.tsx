/**
 * Application router. Tool UI lives at `/`; informational pages back AdSense quality.
 */
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { AboutPage } from './pages/AboutPage'
import { GuidePage } from './pages/GuidePage'
import { HomePage } from './pages/HomePage'
import { LearnArticlePage } from './pages/learn/LearnArticlePage'
import { LearnCategoryPage } from './pages/learn/LearnCategoryPage'
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage'
import { TermsPage } from './pages/TermsPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/guide" element={<GuidePage />} />
        <Route path="/learn/:categorySlug/:articleSlug" element={<LearnArticlePage />} />
        <Route path="/learn/:categorySlug" element={<LearnCategoryPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
