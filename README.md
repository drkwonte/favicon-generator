# Favify

Portrait → stylized avatar → favicon ZIP in the browser (React, TypeScript, Vite). PWA is intentionally not used.

## Cloudflare Pages

**Build log `HEAD is now at …` must match the latest commit on `main`.** If it shows an older SHA (for example `91b6812` or `ca0cc1a`), the project is still deploying a pinned/rolled-back revision: open **Settings → Builds & deployments → Production branch**, set it to **`main`**, clear **build cache** if needed, then redeploy.

| Setting | Value |
| --- | --- |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | `/` (repository root) |

**Why there is no `package-lock.json` in git:** Cloudflare Pages runs `npm clean-install` (`npm ci`) whenever a lockfile is present. Vite’s optional native/WASM deps can make that lockfile disagree between Windows (local) and Linux (CI), which breaks `npm ci` with `EUSAGE` / “Missing … from lock file”. Without a committed lockfile, Pages falls back to **`npm install`**, which tolerates those graphs. Run `npm install` locally after cloning; do not commit `package-lock.json` (it is gitignored).

Copy `.env.example` to `.env` locally; set `VITE_*` vars in the Cloudflare project **Settings → Environment variables** for production builds if needed.

---

## React + TypeScript + Vite (template notes)

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
