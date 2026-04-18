# Favify

Portrait → stylized avatar → favicon ZIP in the browser (React, TypeScript, Vite). PWA is intentionally not used.

## Cloudflare Pages — 대시보드에서 이렇게 설정

아래는 **Cloudflare 대시보드** 기준 클릭 경로다. (레이블이 `Build` / `Builds & deployments` 처럼 조금 다를 수 있으나 같은 설정 화면이다.)

### 1) 프로덕션이 항상 GitHub `main` **최신 커밋**을 따르도록

1. [Cloudflare 대시보드](https://dash.cloudflare.com/) 로그인  
2. 왼쪽 **Workers & Pages**  
3. 배포 중인 **Pages 프로젝트** 선택 (예: `favicon-generator`)  
4. 상단 **Settings** 탭  
5. 왼쪽 또는 본문에서 **Build** 또는 **Builds & deployments** 로 이동  
6. **Configure Production deployments** (프로덕션 배포 구성) 블록을 연다  
7. **Production branch** 를 **`main`** 으로 설정  
8. **Enable automatic production branch deployments** 가 있다면 **켜져 있는지** 확인 (꺼져 있으면 `main`에 푸시해도 프로덕션이 안 올라간다)  
9. 반드시 **Save** 로 저장  

공식 문서: [Branch deployment controls](https://developers.cloudflare.com/pages/configuration/branch-build-controls/)

### 2) 빌드 명령·산출물 폴더 (Vite)

1. 같은 프로젝트 **Settings**  
2. **Builds & deployments** (또는 **Build**) 안의 **Build configuration** / **Configure build** 로 진입  
3. 아래처럼 맞춘다:

| 항목 | 값 |
| --- | --- |
| Framework preset | 없으면 **None** — 있으면 **React (Vite)** 도 무방 |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | `/` (모노레포가 아니면 비우거나 `/` = 저장소 루트) |

공식 문서: [Build configuration](https://developers.cloudflare.com/pages/configuration/build-configuration/)

### 3) 로그에 **옛날 커밋 SHA**만 나올 때 (가장 흔한 원인)

빌드 로그에 `HEAD is now at ca0cc1a…` 처럼 **짧은 커밋 해시**만 보이면, 그 배포는 **그 시점의 스냅샷**이다.

- **Deployments** 탭에서 예전 배포 옆 **⋯(점 세 개) → Retry / Rebuild** 만 누르면, **같은 커밋만** 다시 클론한다. 최신 `main`이 아니다.  
- 예전에 **[Rollback to this deployment](https://developers.cloudflare.com/pages/configuration/rollbacks/)** 로 프로덕션을 되돌렸다면, 프로덕션은 계속 그 커밋을 가리킨다. **최신 빌드로 되돌리려면** Deployments 목록에서 원하는(최신 성공) 배포의 ⋯ 메뉴에서 **Rollback to this deployment** 로 **더 새로운** 배포를 프로덕션으로 지정한다.  
- 확실히 하려면 GitHub `main`에 **아무 커밋이나 하나 더 푸시**해 새 배포를 만든다.

### 4) 빌드 캐시가 의심될 때

1. **Settings** → **Build** → **Build cache**  
2. **Clear Cache**  

공식 문서: [Build caching](https://developers.cloudflare.com/pages/configuration/build-caching/)

### 5) `package-lock.json` 을 Git에 안 두는 이유

저장소에 `package-lock.json` 이 있으면 Pages는 **`npm ci`** 를 쓴다. Vite 쪽 optional/WASM 의존성 때문에 **Windows에서 만든 lock과 Linux 빌더가 어긋나** `npm ci` 가 실패하는 경우가 있다. lock 을 올리지 않으면 Pages는 **`npm install`** 로 설치한다. 로컬에서는 `npm install` 후 생기는 lock 은 **`.gitignore` 때문에 커밋하지 않는다.**

### 6) 빌드용 환경 변수 (`VITE_*` 등)

1. **Settings** → **Environment variables**  
2. **Production** (및 필요 시 Preview) 에 `VITE_GEMINI_API_KEY`, `VITE_PUBLISHER_CONTACT_EMAIL` 등 추가  

로컬은 `.env` 파일을 사용한다.

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
