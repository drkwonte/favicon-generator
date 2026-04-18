import forms from '@tailwindcss/forms'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'surface-container-low':
          'rgb(var(--color-surface-container-low) / <alpha-value>)',
        'surface-container': 'rgb(var(--color-surface-container) / <alpha-value>)',
        'surface-tint': 'rgb(var(--color-surface-tint) / <alpha-value>)',
        'surface-container-lowest':
          'rgb(var(--color-surface-container-lowest) / <alpha-value>)',
        'secondary-container': 'rgb(var(--color-secondary-container) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        'secondary-fixed-dim': 'rgb(var(--color-secondary-fixed-dim) / <alpha-value>)',
        'surface-container-highest':
          'rgb(var(--color-surface-container-highest) / <alpha-value>)',
        'secondary-fixed': 'rgb(var(--color-secondary-fixed) / <alpha-value>)',
        'surface-variant': 'rgb(var(--color-surface-variant) / <alpha-value>)',
        'on-surface': 'rgb(var(--color-on-surface) / <alpha-value>)',
        'on-primary': 'rgb(var(--color-on-primary) / <alpha-value>)',
        'on-secondary-fixed-variant':
          'rgb(var(--color-on-secondary-fixed-variant) / <alpha-value>)',
        'tertiary-fixed-dim': 'rgb(var(--color-tertiary-fixed-dim) / <alpha-value>)',
        'surface-bright': 'rgb(var(--color-surface-bright) / <alpha-value>)',
        'on-secondary-fixed': 'rgb(var(--color-on-secondary-fixed) / <alpha-value>)',
        'inverse-surface': 'rgb(var(--color-inverse-surface) / <alpha-value>)',
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        'on-primary-fixed': 'rgb(var(--color-on-primary-fixed) / <alpha-value>)',
        'on-background': 'rgb(var(--color-on-background) / <alpha-value>)',
        'primary-fixed-dim': 'rgb(var(--color-primary-fixed-dim) / <alpha-value>)',
        'on-error': 'rgb(var(--color-on-error) / <alpha-value>)',
        'error-container': 'rgb(var(--color-error-container) / <alpha-value>)',
        'surface-container-high':
          'rgb(var(--color-surface-container-high) / <alpha-value>)',
        'on-tertiary-container':
          'rgb(var(--color-on-tertiary-container) / <alpha-value>)',
        'inverse-primary': 'rgb(var(--color-inverse-primary) / <alpha-value>)',
        'outline-variant': 'rgb(var(--color-outline-variant) / <alpha-value>)',
        'inverse-on-surface': 'rgb(var(--color-inverse-on-surface) / <alpha-value>)',
        'on-tertiary-fixed-variant':
          'rgb(var(--color-on-tertiary-fixed-variant) / <alpha-value>)',
        'on-primary-fixed-variant':
          'rgb(var(--color-on-primary-fixed-variant) / <alpha-value>)',
        'on-secondary-container':
          'rgb(var(--color-on-secondary-container) / <alpha-value>)',
        error: 'rgb(var(--color-error) / <alpha-value>)',
        'surface-dim': 'rgb(var(--color-surface-dim) / <alpha-value>)',
        'on-primary-container': 'rgb(var(--color-on-primary-container) / <alpha-value>)',
        'primary-container': 'rgb(var(--color-primary-container) / <alpha-value>)',
        'secondary-dim': 'rgb(var(--color-secondary-dim) / <alpha-value>)',
        'on-tertiary-fixed': 'rgb(var(--color-on-tertiary-fixed) / <alpha-value>)',
        'on-secondary': 'rgb(var(--color-on-secondary) / <alpha-value>)',
        'tertiary-dim': 'rgb(var(--color-tertiary-dim) / <alpha-value>)',
        'on-surface-variant': 'rgb(var(--color-on-surface-variant) / <alpha-value>)',
        'primary-dim': 'rgb(var(--color-primary-dim) / <alpha-value>)',
        'error-dim': 'rgb(var(--color-error-dim) / <alpha-value>)',
        'primary-fixed': 'rgb(var(--color-primary-fixed) / <alpha-value>)',
        outline: 'rgb(var(--color-outline) / <alpha-value>)',
        'on-error-container': 'rgb(var(--color-on-error-container) / <alpha-value>)',
        'tertiary-fixed': 'rgb(var(--color-tertiary-fixed) / <alpha-value>)',
        'tertiary-container': 'rgb(var(--color-tertiary-container) / <alpha-value>)',
        tertiary: 'rgb(var(--color-tertiary) / <alpha-value>)',
        background: 'rgb(var(--color-background) / <alpha-value>)',
        'on-tertiary': 'rgb(var(--color-on-tertiary) / <alpha-value>)',
      },
      borderRadius: {
        DEFAULT: '1rem',
        lg: '2rem',
        xl: '3rem',
        full: '9999px',
      },
      fontFamily: {
        headline: ['Plus Jakarta Sans', 'system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
        body: ['Be Vietnam Pro', 'system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
        label: ['Plus Jakarta Sans', 'system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        card: '0 8px 32px rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [forms],
}

