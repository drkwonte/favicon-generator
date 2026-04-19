파비콘 파일을 만들었다면, 이제 무엇을 해야 할까요? 웹사이트에 파비콘을 추가하는 것은 생각보다 간단합니다. 파일을 올바른 위치에 놓고, HTML에 몇 줄을 추가하는 것이 전부입니다. 이 가이드는 전체 과정을 단계별로 안내합니다.

---

## 1단계: 파비콘 파일 준비하기

HTML을 건드리기 전에 파비콘 파일이 준비되어 있는지 확인하세요. 완전한 파비콘 패키지에는 다음 파일들이 포함되어야 합니다.

- `favicon.ico` — 모든 브라우저를 위한 범용 폴백
- `favicon-16x16.png` — 표준 브라우저 탭 아이콘
- `favicon-32x32.png` — 고해상도 탭 및 Windows 바로가기
- `apple-touch-icon.png` (180×180) — iOS 홈 화면 아이콘
- `android-chrome-192x192.png` — 안드로이드 홈 화면 아이콘
- `android-chrome-512x512.png` — PWA 스플래시 화면
- `site.webmanifest` — 안드로이드 및 PWA 아이콘 설정 파일

아직 파일이 없다면 **Favify**를 사용하세요. 사진 하나만 업로드하면 완전한 패키지가 자동으로 생성됩니다.

---

## 2단계: 서버에 파일 업로드하기

가장 간단하고 안정적인 방법은 모든 파비콘 파일을 웹사이트의 **루트 디렉토리** — 홈페이지(`index.html`)가 있는 폴더 — 에 배치하는 것입니다.

```
your-website/
├── index.html
├── favicon.ico
├── favicon-16x16.png
├── favicon-32x32.png
├── apple-touch-icon.png
├── android-chrome-192x192.png
├── android-chrome-512x512.png
└── site.webmanifest
```

루트에 파일을 놓으면 경로가 단순하게 유지되고(`/favicon.ico`), 브라우저가 별도의 설정 없이 파일을 찾을 수 있습니다. 대부분의 브라우저는 HTML 태그가 없어도 루트에서 `favicon.ico`를 자동으로 찾지만, 완전한 커버리지를 위해 HTML 코드를 함께 추가하는 것이 좋습니다.

### 하위 디렉토리 사용하기

아이콘을 하위 폴더(예: `/icons/` 또는 `/assets/favicons/`)에 정리하고 싶다면 그렇게 해도 됩니다. 단, HTML의 모든 `href` 경로를 해당 경로로 업데이트해야 합니다.

```
your-website/
├── index.html
└── icons/
    ├── favicon.ico
    ├── favicon-16x16.png
    └── ...
```

이 경우 HTML 링크는 `/icons/favicon.ico`, `/icons/favicon-16x16.png` 형식으로 작성합니다.

---

## 3단계: HTML에 코드 추가하기

HTML 파일을 열고 `<head>` 섹션을 찾아 다음 코드를 추가하세요.

```html
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<link rel="manifest" href="/site.webmanifest" />
<link rel="icon" href="/favicon.ico" sizes="any" />
```

각 줄의 역할은 다음과 같습니다.

| 태그 | 역할 |
|------|------|
| `apple-touch-icon` | iOS에 홈 화면 바로가기 아이콘 경로 전달 |
| `icon` (32×32 PNG) | 모던 브라우저용 고해상도 탭 아이콘 |
| `icon` (16×16 PNG) | 모던 브라우저용 표준 탭 아이콘 |
| `manifest` | 안드로이드/PWA 아이콘 설정을 위한 webmanifest 연결 |
| `icon` (ICO) | 레거시 브라우저를 위한 범용 폴백 |

### 순서가 중요합니다

브라우저는 이 태그들을 순서대로 읽으며 각 환경에 가장 적합한 것을 선택합니다. `favicon.ico` 태그를 `sizes="any"`와 함께 마지막에 배치하면, 위쪽의 더 구체적인 PNG 항목을 덮어쓰지 않으면서 폴백으로 작동합니다.

---

## 4단계: site.webmanifest 설정하기

`site.webmanifest` 파일은 안드로이드 Chrome과 PWA를 지원하는 브라우저에 홈 화면 바로가기와 스플래시 화면에 사용할 아이콘을 알려줍니다. 파일을 열고 다음 내용이 포함되어 있는지 확인하세요.

```json
{
  "name": "사이트 이름",
  "short_name": "사이트",
  "icons": [
    {
      "src": "/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "theme_color": "#ffffff",
  "background_color": "#ffffff",
  "display": "standalone"
}
```

`name`과 `short_name`을 실제 사이트 이름으로 바꾸고, `theme_color`와 `background_color`는 브랜드 색상에 맞게 수정하세요.

---

## 5단계: 정상 작동 확인하기

파일을 업로드하고 HTML을 업데이트한 뒤 브라우저에서 사이트를 열면 탭에 파비콘이 표시되어야 합니다. 바로 보이지 않는다면 강력 새로고침(Windows: `Ctrl+Shift+R`, Mac: `Cmd+Shift+R`)으로 브라우저 캐시를 초기화해 보세요.

브라우저 개발자 도구로도 확인할 수 있습니다.

1. 개발자 도구 열기 (`F12` 또는 마우스 오른쪽 클릭 → 검사)
2. **Network** 탭으로 이동
3. 페이지 새로고침 후 `favicon`으로 필터링
4. 파비콘 파일이 `200` 상태 코드로 로드되는지 확인

더 꼼꼼하게 확인하고 싶다면 [RealFaviconGenerator](https://realfavicongenerator.net/favicon_checker) 같은 도구에 URL을 입력해 모든 파비콘 크기가 올바르게 설정되어 있는지 점검할 수 있습니다.

---

## 플랫폼별 적용 방법

### WordPress

WordPress에서는 기본 제공되는 사이트 아이콘 기능으로 파비콘을 추가할 수 있습니다.

1. **외모 → 사용자 정의 → 사이트 아이콘**으로 이동
2. **사이트 아이콘 선택** 클릭
3. 이미지 업로드 (WordPress는 최소 512×512 권장)
4. **공개** 클릭

WordPress가 HTML을 자동으로 처리합니다. 더 세밀한 제어가 필요하다면 테마의 `header.php` 파일에 직접 HTML 코드를 추가하거나, **Insert Headers and Footers** 같은 플러그인을 활용할 수 있습니다.

### Squarespace

1. **페이지 → 웹사이트 도구 → 파비콘**으로 이동
2. 파비콘 이미지 업로드
3. 저장 후 게시

Squarespace는 단일 이미지 업로드만 지원하므로 180×180 이상의 정사각형 PNG를 사용하세요.

### Webflow

1. **프로젝트 설정 → 일반**으로 이동
2. **Favicon & App Icon** 항목으로 스크롤
3. 정사각형 PNG (최소 180×180) 업로드
4. 저장 후 사이트 게시

### Notion (공개 페이지)

Notion은 페이지 아이콘을 지원하지만, 현재 공개 페이지에 대한 커스텀 파비콘 파일 적용은 지원하지 않습니다. Notion 탭에 표시되는 페이지 아이콘(이모지 또는 이미지)은 Notion 내부에서 설정하는 것으로, HTML을 통한 제어는 불가능합니다.

### 정적 사이트 및 커스텀 HTML

Next.js, Astro, Hugo 같은 프레임워크를 사용하는 정적 사이트라면 파비콘 파일을 `public/` 디렉토리(또는 동등한 정적 에셋 폴더)에 배치하고, 베이스 레이아웃 템플릿에 HTML 코드를 추가하세요. 대부분의 프레임워크는 `public/`의 파일을 자동으로 루트 URL에서 제공합니다.

---

## 자주 발생하는 문제와 해결 방법

**파비콘이 표시되지 않습니다.**
HTML의 파일 경로가 실제 파일 위치와 일치하는지 확인하세요. `/favicon.ico`와 `/icons/favicon.ico`의 경로 불일치가 가장 흔한 원인입니다.

**일부 브라우저에서만 파비콘이 표시됩니다.**
PNG 버전(모던 브라우저용)과 ICO 파일(레거시 브라우저용)이 모두 있는지 확인하세요. 하나의 형식에만 의존하면 일부 환경에서 표시되지 않을 수 있습니다.

**파일을 교체했는데 기존 파비콘이 계속 나타납니다.**
브라우저는 파비콘을 적극적으로 캐싱합니다. 강력 새로고침(`Ctrl+Shift+R` / `Cmd+Shift+R`)을 시도하거나 시크릿 창을 열어 업데이트된 버전을 확인하세요.

**iOS 홈 화면 아이콘이 흐릿하게 보입니다.**
`apple-touch-icon.png`가 정확히 180×180 픽셀인지, `<head>` 안에 해당 HTML 태그가 있는지 확인하세요. 태그가 없으면 iOS는 페이지 스크린샷을 대신 사용합니다.

**webmanifest가 404 오류를 반환합니다.**
`site.webmanifest` 파일이 올바른 위치에 업로드되어 있는지, HTML의 `href` 경로가 정확한지 확인하세요.

---

## HTML 코드 전체 참조

`<head>` 태그 안에 붙여넣을 전체 코드입니다.

```html
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<link rel="manifest" href="/site.webmanifest" />
<link rel="icon" href="/favicon.ico" sizes="any" />
```

파일이 하위 디렉토리에 있다면 `/`를 해당 폴더 경로로 변경하세요.

```html
<link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
<link rel="manifest" href="/icons/site.webmanifest" />
<link rel="icon" href="/icons/favicon.ico" sizes="any" />
```

---

## 지금 시작할 준비가 되셨나요?

파비콘 추가에서 가장 어려운 부분은 대개 파일을 만드는 것입니다. **Favify**를 사용하면 그 과정이 자동으로 해결됩니다. 사진을 업로드하고, 올바른 크기의 파비콘 패키지를 받고, 완성된 HTML 코드를 사이트에 바로 붙여넣으세요.

[→ 지금 파비콘 만들기](/)
