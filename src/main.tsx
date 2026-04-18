import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { AppPreferencesProvider } from './context/AppPreferencesContext'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppPreferencesProvider>
      <App />
    </AppPreferencesProvider>
  </StrictMode>,
)
