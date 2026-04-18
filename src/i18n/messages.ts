/**
 * UI copy for `en` and `ko`. Hero three-line headline and brand name stay English in UI.
 * Use `t('key.path', { var: '…' })` for `{var}` placeholders.
 */
export type Locale = 'en' | 'ko'

type MessagesRoot = Record<string, unknown>

const en: MessagesRoot = {
  meta: {
    homeTitle: 'Favify',
    aboutTitle: 'About — Favify',
    guideTitle: 'Guide — Favify',
    privacyTitle: 'Privacy Policy — Favify',
    termsTitle: 'Terms of Use — Favify',
  },
  nav: { guide: 'Guide' },
  header: {
    useLight: 'Switch to light theme',
    useDark: 'Switch to dark theme',
    useEnglish: 'Use English',
    useKorean: 'Use Korean',
  },
  footer: {
    guide: 'Guide',
    about: 'About',
    privacy: 'Privacy Policy',
    terms: 'Terms of Use',
    rights: 'All rights reserved.',
  },
  common: { lastUpdated: 'Last updated:', remove: 'Remove' },
  hero: {
    subtitle1: 'Bring your site to life with your avatar',
    subtitle2: 'Get your favicon in seconds',
    carouselAlt:
      'Rotating previews of stylized 3D human avatars from portrait photos',
  },
  upload: {
    title: 'Start your transformation',
    subtitle:
      'Drag and drop your high-resolution portrait here. PNG, JPG, or WebP supported.',
    privacyNote:
      'Favicon files are built in your browser. Optional portrait styling may use a third party—see the Privacy Policy.',
  },
  flow: {
    selectPhoto: 'Select Photo',
    generateAvatar: 'Generate your Avatar',
    previewContinue: 'Preview & continue',
    spinnerAvatar: 'Creating your avatar…',
    spinnerPrepare: 'Preparing your preview…',
    spinnerFavicons: 'Building your favicons…',
    uploadBadType: 'Unsupported file type. Please upload PNG/JPEG/WebP.',
    uploadTooLarge: 'File is too large (max {max}).',
  },
  confirm: {
    previewTitle: 'Your preview',
    previewBody:
      'When this looks good, generate your favicon package from this image.',
    refineTitle: 'Refine Character',
    refineBody:
      'Love the result? Generate your favicons or try another version.',
    generateFavicons: 'Generate Favicons',
    regenerate: 'Regenerate Character',
    buildTime: 'Estimated build time: 12s',
    altStyled: 'Generated 3D-style avatar based on your uploaded portrait',
    altPlain: 'Cropped portrait preview used as the source for your favicon files',
  },
  export: {
    title: 'Your Character Favicons',
    subtitle:
      "We've crafted your character into every favicon format needed for modern browsers and mobile home screens.",
    htmlBlock: 'HTML Implementation',
    standardFiles: 'Standard Files',
    pwaTitle: 'PWA Ready',
    pwaBody:
      'Web app manifest and icon sizes are included for installable PWAs.',
    newRun: 'New Favicon',
    copyCode: 'Copy code',
    copied: 'Copied!',
    copyFailed: 'Could not copy',
    alt180: 'Apple touch icon preview at 180×180',
    alt32: 'Favicon preview at 32×32',
    alt16: 'Favicon preview at 16×16',
    snippetLine1: 'Paste into your',
    snippetLine2: 'section:',
    downloadZip: 'Download All Assets',
    tabBadge: 'Tab',
    copySuccessBanner: 'Copied to clipboard.',
    copyFailBanner: 'Copy failed. Select the snippet manually.',
    altTab: 'Favicon in browser tab at 16×16',
  },
  about: {
    whatHeading: 'What Favify is',
    whatBody:
      'Favify helps site owners turn a portrait photo into a stylized 3D-style avatar preview and a downloadable favicon package (PNG sizes, ICO, and a starter web app manifest). The flow is meant to be quick, transparent, and easy to reason about inside the browser.',
    techHeading: 'What to expect technically',
    techBodyBeforePrivacy:
      'Cropping, favicon resizing, ICO/PNG packaging, and the ZIP download all run in your browser, so those steps stay on your device. You do not need an account for the main flow on the home page. When a feature involves third-party services or personal data, we document it in the',
    privacyLink: 'Privacy Policy',
    techBodyAfterLink: '.',
    roadmapHeading: 'Product direction',
    roadmapBody:
      'Features will keep evolving (cropping refinements, batch export, ad placements, and more). If we add monetization or ads, we will update the Privacy Policy and on-page notices so visitors understand what partners may process and how to exercise choices where applicable.',
  },
  privacy: {
    overviewH: 'Overview',
    overviewP:
      'This Privacy Policy explains how Favify (“we”, “us”) handles information when you visit this website or use the browser-based tools we host here. We aim to collect the minimum data needed to run the service and to describe third parties (such as Google) that may receive data when you enable optional features.',
    contactH: 'Contact',
    contactPBefore: 'Questions about this policy:',
    browserH: 'What runs in your browser',
    browserP1:
      'Much of Favify is implemented as client-side JavaScript. When you upload a portrait, prepare crops, or build a favicon ZIP, those operations can stay on your device without our servers seeing your image—',
    browserStrong: 'unless you use a feature that explicitly calls a third-party API',
    browserP2: '.',
    geminiH: 'Optional portrait styling (Google Gemini)',
    geminiP1:
      'Some deployments of Favify are built with optional AI-assisted portrait styling. In that case, your browser may send a square crop of your photo and short instructions to Google’s Gemini API so you can receive a stylized image. That processing is governed by',
    googlePrivacy: 'Google’s Privacy Policy',
    geminiP2:
      'and Google’s terms for that service. We do not ask visitors to create an account for the main flow, and we do not ask visitors to enter or paste an API key—whether this option is available is decided when the site is built and deployed.',
    geminiP3:
      'If the build you are using does not include that option, portrait preparation uses a normal crop in your browser only, and your image is not sent to Google for styling.',
    cookiesH: 'Cookies and similar technologies',
    cookiesP:
      'Today, this site may rely on standard browser storage only as needed for the app to function. If we enable Google AdSense or similar ad technologies in the future, those providers may set cookies or use local storage for purposes such as measurement, fraud prevention, and personalization. We will update this policy and provide appropriate consent controls where required by law.',
    loggingH: 'Logging and hosting',
    loggingP:
      'Like most websites, the hosting provider or CDN in front of this site may create access logs (IP address, user agent, URL, timestamp). We use such information only for security, debugging, and aggregate analytics unless a separate notice says otherwise.',
    childrenH: 'Children’s privacy',
    childrenP:
      'Favify is not directed to children under 13 (or the age required in your jurisdiction). Do not upload photos of children if doing so would violate local law or platform policies.',
    intlH: 'International visitors',
    intlP:
      'If you access the site from the European Economic Area, the United Kingdom, or other regions with privacy laws, you may have rights to access, correct, delete, or restrict certain processing. Contact us at the email above and we will respond within a reasonable timeframe.',
    changesH: 'Changes',
    changesP:
      'We may update this Privacy Policy when features change. Material changes will be reflected by updating the “Last updated” date and, where appropriate, an on-site notice.',
  },
  terms: {
    agreementH: 'Agreement',
    agreementP:
      'By accessing or using Favify, you agree to these Terms of Use. If you do not agree, please stop using the site.',
    permittedH: 'Permitted use',
    permittedP:
      'You may use the tools to create assets for websites or applications you control, subject to third-party licenses (for example, fonts, APIs, and generated imagery). You may not use the site to harass others, upload illegal content, attempt to break security, or generate material that infringes someone else’s rights.',
    adviceH: 'No professional advice',
    adviceP:
      'Outputs (including HTML snippets) are provided as a convenience. You remain responsible for validating accessibility, branding, security headers, caching, and compliance with your employer or clients.',
    disclaimersH: 'Disclaimers',
    disclaimersP:
      'THE SITE AND TOOLS ARE PROVIDED “AS IS” WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT GENERATED IMAGES WILL MATCH YOUR EXPECTATIONS OR THAT THIRD-PARTY APIS WILL BE AVAILABLE.',
    liabilityH: 'Limitation of liability',
    liabilityP:
      'TO THE MAXIMUM EXTENT PERMITTED BY LAW, FAVIFY AND ITS OPERATORS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA, OR GOODWILL, ARISING OUT OF OR RELATED TO YOUR USE OF THE SITE.',
    thirdH: 'Third-party services',
    thirdP:
      'Features that call third-party APIs (including optional hosted image services), advertising networks, analytics vendors, or other integrations are also subject to those vendors’ terms. When in conflict, the more specific vendor terms govern the vendor’s processing.',
    termH: 'Termination',
    termP:
      'We may suspend or discontinue the site or any feature at any time. Provisions that by their nature should survive (disclaimers, limitations, indemnities) will survive termination.',
    contactH: 'Contact',
    contactPBefore: 'Legal notices:',
  },
  guide: {
    intro:
      'How this site’s tool works, what you get in the ZIP, and answers to common favicon questions.',
    howH: 'How to use Favify',
    step1:
      'Upload a portrait. Drag and drop or use “Select Photo”. We accept PNG, JPEG, and WebP (up to 10 MB).',
    step2:
      'Continue to preview. We prepare a square crop you can review. Deployments that include optional portrait styling may show an extra stylized look—otherwise you work from the crop alone.',
    step3:
      'Generate favicons. When the preview looks right, run Generate Favicons. All resizing and packaging happen in your browser.',
    step4:
      'Download the ZIP. Grab the package and extract it to your site’s public root (or another path you configure consistently with the HTML snippet).',
    step5:
      'Add the tags to your site. Copy the snippet from the export step into your page <head>.',
    zipH: 'What’s inside the download',
    zipIntro: 'Each ZIP is built to match common favicon and PWA conventions:',
    zipIco:
      'favicon.ico — multi-size ICO (16×16, 32×32, 48×48) for legacy browsers and defaults.',
    zipPng:
      'PNG icons — 16×16, 32×32, Apple touch 180×180, and Android Chrome 192×192 and 512×512.',
    zipManifest:
      'site.webmanifest — starter web app manifest pointing at the larger icons.',
    htmlH: 'HTML snippet (reference)',
    htmlP:
      'Paths assume files live at your site root. Adjust href values if you use a subdirectory.',
    whyH: 'Why use Favify?',
    why1: 'No account for the main flow on the home page.',
    why2:
      'Browser-side packaging for the favicon build so your source image stays on your device for that step.',
    why3: 'One download with ICO, PNG set, manifest, and ready-to-paste <head> links.',
    tipsH: 'Tips for the best results',
    tip1:
      'Use a clear, well-lit portrait with your face centered; avoid heavy crops or tiny faces in the frame.',
    tip2:
      'Prefer at least about 512×512 source resolution when possible; larger sources give sharper downscales for small tab icons.',
    tip3:
      'Keep important detail inside the center square; extreme wide shots may lose context when we square-crop.',
    faqH: 'Frequently asked questions',
    faq1H: 'What is a favicon?',
    faq1P:
      'A favicon is the small icon browsers show on tabs, bookmarks, and history. Good favicons help people spot your site quickly. Modern sites usually ship several PNG sizes plus a legacy ICO file.',
    faq2H: 'Which image formats can I upload?',
    faq2P:
      'PNG, JPEG, and WebP. SVG upload is not supported in this tool—rasterize first if your brand mark is vector-only.',
    faq3H: 'Where should I put the files?',
    faq3P:
      'The default snippet expects icons at the site root (same folder as your homepage). If you publish under a subpath, update each href to match.',
    faq4H: 'Is this free?',
    faq4PBefore:
      'The tool on this site is free to use for generating packages from your own images, subject to the',
    termsLink: 'Terms of Use',
    faq4PMid: '. For how data is handled, read the',
    privacyLink: 'Privacy Policy',
    faq4PAfter: '.',
    faq5H: 'Do you store my photos on your servers?',
    faq5PBefore:
      'Favicon resizing and ZIP creation run in your browser. Optional portrait styling, when enabled for a given deployment, is described in the',
    faq5PAfter: '.',
  },
}

const ko: MessagesRoot = {
  meta: {
    homeTitle: 'Favify',
    aboutTitle: '소개 — Favify',
    guideTitle: '가이드 — Favify',
    privacyTitle: '개인정보처리방침 — Favify',
    termsTitle: '이용약관 — Favify',
  },
  nav: { guide: '가이드' },
  header: {
    useLight: '라이트 테마로 전환',
    useDark: '다크 테마로 전환',
    useEnglish: '영어로 보기',
    useKorean: '한국어로 보기',
  },
  footer: {
    guide: '가이드',
    about: '소개',
    privacy: '개인정보처리방침',
    terms: '이용약관',
    rights: '모든 권리를 보유합니다.',
  },
  common: { lastUpdated: '최종 수정:', remove: '제거' },
  hero: {
    subtitle1: '아바타로 사이트에 활기를 더해 보세요',
    subtitle2: '몇 초 만에 파비콘 패키지를 받을 수 있습니다',
    carouselAlt: '인물 사진을 바탕으로 만든 3D 스타일 아바타 예시가 순환됩니다',
  },
  upload: {
    title: '시작하기',
    subtitle:
      '해상도가 충분한 인물 사진을 끌어다 놓거나 파일을 선택하세요. PNG, JPEG, WebP 형식을 지원합니다.',
    privacyNote:
      '파비콘 파일은 브라우저에서 생성됩니다. 선택적으로 적용되는 초상 스타일 기능은 제3자 서비스를 이용할 수 있으며, 자세한 내용은 개인정보처리방침을 참고해 주세요.',
  },
  flow: {
    selectPhoto: '사진 선택',
    generateAvatar: '아바타 만들기',
    previewContinue: '미리보기로 이동',
    spinnerAvatar: '아바타를 생성하는 중…',
    spinnerPrepare: '미리보기를 준비하는 중…',
    spinnerFavicons: '파비콘을 만드는 중…',
    uploadBadType: '지원하지 않는 형식입니다. PNG, JPEG 또는 WebP 이미지를 올려 주세요.',
    uploadTooLarge: '파일 용량이 너무 큽니다(최대 {max}).',
  },
  confirm: {
    previewTitle: '미리보기',
    previewBody: '화면이 마음에 들면 파비콘 패키지를 생성하세요.',
    refineTitle: '캐릭터 조정',
    refineBody: '마음에 드시면 파비콘을 만들거나, 다른 결과를 한 번 더 요청해 보세요.',
    generateFavicons: '파비콘 만들기',
    regenerate: '다시 만들기',
    buildTime: '예상 소요 시간: 약 12초',
    altStyled: '업로드한 인물 사진을 바탕으로 생성한 3D 스타일 아바타',
    altPlain: '파비콘 원본으로 쓸 정사각형 크롭 미리보기',
  },
  export: {
    title: '캐릭터 파비콘',
    subtitle:
      '최신 브라우저와 모바일 홈 화면에 맞춘 크기와 형식으로 아이콘을 구성했습니다.',
    htmlBlock: 'HTML에 넣기',
    standardFiles: '포함된 파일',
    pwaTitle: 'PWA 지원',
    pwaBody:
      '설치형 웹앱(PWA)에 쓸 수 있도록 웹 앱 매니페스트와 대표 아이콘 크기를 함께 넣었습니다.',
    newRun: '처음부터 다시',
    copyCode: '코드 복사',
    copied: '복사했습니다!',
    copyFailed: '복사에 실패했습니다',
    alt180: '180×180 애플 터치 아이콘 미리보기',
    alt32: '32×32 파비콘 미리보기',
    alt16: '16×16 파비콘 미리보기',
    snippetLine1: '아래 코드를',
    snippetLine2: '안에 붙여 넣으세요:',
    downloadZip: '전체 패키지 받기',
    tabBadge: '탭',
    copySuccessBanner: '클립보드에 복사했습니다.',
    copyFailBanner: '복사에 실패했습니다. 코드를 직접 선택해 복사해 주세요.',
    altTab: '브라우저 탭에 표시되는 16×16 크기 파비콘',
  },
  about: {
    whatHeading: 'Favify란',
    whatBody:
      'Favify는 웹사이트 운영자가 인물 사진을 3D 스타일 아바타 미리보기와, 여러 크기의 PNG·ICO, 그리고 웹 앱 매니페스트 초안이 담긴 파비콘 패키지로 정리할 수 있도록 돕는 도구입니다. 흐름은 단순하고, 브라우저 안에서 무엇이 일어나는지 확인하기 쉽게 만들었습니다.',
    techHeading: '기술적으로 알아두실 점',
    techBodyBeforePrivacy:
      '이미지 크롭, 파비콘 리사이즈, ICO·PNG 묶음, ZIP 다운로드는 모두 브라우저에서 처리되며, 이 단계에서는 사진이 사용자 기기 밖으로 전송되지 않습니다. 홈 화면의 주된 흐름은 계정 없이 이용할 수 있습니다. 외부 서비스나 개인정보와 연결되는 기능에 대해서는',
    privacyLink: '개인정보처리방침',
    techBodyAfterLink: '에 정리해 두었습니다.',
    roadmapHeading: '앞으로의 방향',
    roadmapBody:
      '기능은 계속 바뀔 수 있습니다(예: 크롭 편의, 일괄보내기, 광고 배치 등). 수익화나 광고가 도입되면, 어떤 데이터가 어떤 파트너에 전달될 수 있는지와 거부 방법을 개인정보처리방침과 페이지 안내에 반영하겠습니다.',
  },
  privacy: {
    overviewH: '개요',
    overviewP:
      '본 방침은 Favify(이하 “저희”)가 이 웹사이트를 방문하거나 브라우저에서 제공하는 도구를 이용할 때, 정보를 어떻게 다루는지 설명합니다. 서비스 운영에 필요한 최소한의 범위를 지향하며, 선택 기능을 켰을 때 정보가 전달될 수 있는 제3자(예: Google)에 대해서도 밝힙니다.',
    contactH: '문의',
    contactPBefore: '본 방침에 관한 문의:',
    browserH: '브라우저에서 처리되는 작업',
    browserP1:
      'Favify의 대부분은 사용자 기기에서 실행되는 JavaScript로 구현되어 있습니다. 인물 사진을 올리고 크롭을 준비하거나 파비콘 ZIP을 만들 때, 그 과정은 서버가 이미지를 보지 않고 기기 안에서만 이루어질 수 있습니다. ',
    browserStrong:
      '다만 제3자 API를 직접 호출하는 기능을 사용하는 경우에는 예외가 될 수 있습니다.',
    browserP2: '',
    geminiH: '선택 기능: 초상 스타일(Google Gemini)',
    geminiP1:
      '일부 배포본에는 AI로 초상 스타일을 보정하는 선택 기능이 포함될 수 있습니다. 이 경우 브라우저가 정사각형으로 잘린 사진과 짧은 지시문을 Google Gemini API로 보내, 스타일이 적용된 이미지를 받습니다. 그 처리는',
    googlePrivacy: 'Google 개인정보처리방침',
    geminiP2:
      '과 해당 서비스 약관의 적용을 받습니다. 저희는 일반적인 이용 흐름을 위해 방문자에게 계정을 요구하지 않으며, API 키를 입력하거나 붙여 넣게 하지도 않습니다. 이 기능을 넣을지 여부는 사이트를 빌드하고 배포하는 쪽에서 결정합니다.',
    geminiP3:
      '사용 중인 빌드에 그 기능이 없다면, 초상 준비는 브라우저에서 일반적인 크롭만 수행되며, 스타일링을 위해 Google로 이미지가 보내지지 않습니다.',
    cookiesH: '쿠키와 비슷한 기술',
    cookiesP:
      '지금은 앱이 동작하는 데 필요한 범위에서 브라우저 저장소를 쓸 수 있습니다. 이후 Google AdSense 같은 광고 기술을 도입하면, 측정·부정 이용 방지·맞춤 제공 등을 위해 쿠키나 로컬 저장소를 사용할 수 있으며, 법에서 요구하는 동의 절차를 갖춘 뒤 방침을 고치겠습니다.',
    loggingH: '접속 기록과 호스팅',
    loggingP:
      '다른 웹사이트와 마찬가지로, 호스팅사나 앞단 CDN이 IP 주소, 브라우저 정보, 요청 URL·시각 등 접속 기록을 남길 수 있습니다. 별도로 안내하지 않는 한, 보안·장애 대응·집계 분석 목적으로만 쓰겠습니다.',
    childrenH: '아동',
    childrenP:
      'Favify는 만 13세 미만(또는 관할 법령이 정한 연령) 아동을 대상으로 하지 않습니다. 현지 법령이나 플랫폼 정책에 어긋난다면 아동의 사진을 올리지 마십시오.',
    intlH: '해외 이용자',
    intlP:
      '유럽경제지역(EEA), 영국 등 개인정보 보호법이 적용되는 지역에서는 열람·정정·삭제·처리 제한 등 권리를 가질 수 있습니다. 위 이메일로 연락해 주시면 합리적인 기간 안에 답변드리겠습니다.',
    changesH: '방침의 변경',
    changesP:
      '기능이 바뀌면 방침을 고칠 수 있습니다. 중요한 변경은 “최종 수정” 날짜를 바꾸고, 필요하면 사이트 안에서도 알리겠습니다.',
  },
  terms: {
    agreementH: '약관에 동의하기',
    agreementP:
      'Favify에 접속하거나 이용하는 경우, 본 이용약관에 동의한 것으로 봅니다. 동의하지 않는다면 이용을 중단해 주세요.',
    permittedH: '허용되는 이용',
    permittedP:
      '본인이 관리하는 웹사이트나 애플리케이션을 위해 자산을 만드는 목적으로 도구를 쓸 수 있습니다. 이때 글꼴·API·생성된 이미지 등 제3자 라이선스를 지켜야 합니다. 타인을 괴롭거나, 불법적인 내용을 올리거나, 보안을 훼손하거나, 타인의 권리를 침해하는 결과물을 만들어서는 안 됩니다.',
    adviceH: '전문적인 법률·기술 자문이 아님',
    adviceP:
      '결과물(HTML 조각 포함)은 편의를 위해 제공됩니다. 접근성, 브랜딩, 보안 헤더, 캐시 정책, 고용주나 고객과의 계약 준수 여부는 전부 이용자의 책임입니다.',
    disclaimersH: '면책',
    disclaimersP:
      '본 사이트와 도구는 “있는 그대로” 제공되며, 상품성·특정 목적에의 적합성·비침해성 등 명시적이거나 묵시적인 어떠한 보증도 하지 않습니다. 생성 이미지가 기대에 맞을 것이나 제3자 API가 항상 이용 가능할 것도 보증하지 않습니다.',
    liabilityH: '책임의 한계',
    liabilityP:
      '관련 법령이 허용하는 한도 안에서, Favify와 운영자는 본 사이트 이용과 관련하여 발생한 간접적·부수적·특별·결과적 또는 징벌적 손해, 영업 이익·데이터·평판의 손실 등에 대해 책임을 지지 않습니다.',
    thirdH: '제3자 서비스',
    thirdP:
      '제3자 API(선택적인 이미지 생성 서비스 포함), 광고, 분석 연동은 각 서비스 제공자의 약관을 따릅니다. 내용이 겹칠 때는 해당 처리에 대해 더 구체적으로 정한 약관이 우선합니다.',
    termH: '서비스 종료',
    termP:
      '언제든지 사이트나 일부 기능을 중단하거나 바꿀 수 있습니다. 그 성격상 계속 효력을 가져야 하는 조항(면책, 책임 제한 등)은 종료 후에도 유지됩니다.',
    contactH: '법적 통지',
    contactPBefore: '법적 문의:',
  },
  guide: {
    intro:
      '이 페이지에서는 이 사이트의 도구를 어떻게 쓰는지, ZIP 안에 무엇이 들어 있는지, 그리고 파비콘에 대해 자주 묻는 질문을 정리했습니다.',
    howH: 'Favify 사용 방법',
    step1:
      '인물 사진을 올립니다. 끌어다 놓거나 “사진 선택”을 누르세요. PNG, JPEG, WebP를 지원하며, 파일당 최대 10MB까지입니다.',
    step2:
      '“미리보기로 이동”을 누르면 정사각형으로 잘린 미리보기를 준비합니다. 배포 설정에 따라 AI로 스타일을 입힌 결과가 나올 수도 있고, 그렇지 않으면 크롭된 이미지가 그대로 다음 단계로 넘어갑니다.',
    step3:
      '미리보기가 괜찮다면 “파비콘 만들기”를 누릅니다. 크기 조정과 묶음 작업은 모두 브라우저에서 이루어집니다.',
    step4:
      'ZIP 파일을 내려받아, 웹사이트의 공개 디렉터리(또는 HTML 스니펫의 경로와 맞춰 둔 위치)에 풀어 넣습니다.',
    step5:
      '마지막 화면에 나온 HTML 조각을 복사해, 사이트의 <head> 안에 붙여 넣습니다.',
    zipH: 'ZIP에 들어 있는 것',
    zipIntro: 'ZIP은 흔히 쓰이는 파비콘·PWA 관행에 맞춰 다음을 담습니다.',
    zipIco:
      'favicon.ico — 구형 브라우저를 위한 ICO(16×16, 32×32, 48×48 멀티 사이즈).',
    zipPng:
      'PNG 아이콘 — 16×16, 32×32, Apple Touch용 180×180, Android Chrome용 192×192와 512×512.',
    zipManifest:
      'site.webmanifest — 큰 아이콘을 가리키는 웹 앱 매니페스트 초안.',
    htmlH: 'HTML 조각(참고용)',
    htmlP:
      '기본 경로는 사이트 루트를 가정합니다. 하위 경로에 올릴 경우에는 각 href를 실제 위치에 맞게 고쳐 주세요.',
    whyH: 'Favify를 쓰는 이유',
    why1: '홈 화면의 주된 흐름은 계정 없이 이용할 수 있습니다.',
    why2: '파비콘 묶음을 만드는 동안, 원본 이미지는 그 단계에서 기기 밖으로 나가지 않습니다.',
    why3: 'ICO·PNG 묶음·매니페스트·<head>에 넣을 링크를 한 번에 받을 수 있습니다.',
    tipsH: '좋은 결과를 위한 팁',
    tip1:
      '얼굴이 화면 중앙에 오도록 밝고 선명한 인물 사진을 쓰세요. 얼굴이 너무 작게 잡히거나 과하게 잘린 사진은 피하는 것이 좋습니다.',
    tip2:
      '가능하면 한 변이 512픽셀 이상인 원본을 권장합니다. 여유 있는 원본이 작은 탭 아이콘에서 더 또렷하게 보입니다.',
    tip3:
      '중요한 부분은 정사각형 가운데에 두세요. 좌우로 매우 넓게 퍼진 구도는 정사각형으로 자를 때 내용이 잘릴 수 있습니다.',
    faqH: '자주 묻는 질문',
    faq1H: '파비콘이 무엇인가요?',
    faq1P:
      '파비콘은 브라우저 탭, 북마크, 방문 기록 등에 보이는 작은 아이콘입니다. 잘 만든 파비콘은 사이트를 한눈에 알아보게 해 줍니다. 요즘은 여러 크기의 PNG와, 예전 브라우저를 위한 ICO를 함께 쓰는 경우가 많습니다.',
    faq2H: '어떤 이미지 형식을 올릴 수 있나요?',
    faq2P:
      'PNG, JPEG, WebP입니다. 이 도구는 SVG 업로드를 지원하지 않습니다. 벡터 로고라면 래스터 이미지로 변환한 뒤 올려 주세요.',
    faq3H: '파일은 어디에 두면 되나요?',
    faq3P:
      '기본 HTML 조각은 아이콘이 사이트 루트(첫 화면과 같은 공개 폴더)에 있다고 가정합니다. 하위 경로에 두었다면 각 href를 그에 맞게 수정해야 합니다.',
    faq4H: '무료인가요?',
    faq4PBefore:
      '본인의 이미지로 패키지를 만드는 한, 이 사이트의 도구는 무료로 쓸 수 있습니다. 이용 조건은 ',
    termsLink: '이용약관',
    faq4PMid: '을, 개인정보 처리에 관해서는 ',
    privacyLink: '개인정보처리방침',
    faq4PAfter: '을 각각 확인해 주세요.',
    faq5H: '사진이 서버에 저장되나요?',
    faq5PBefore:
      '파비콘 크기 조정과 ZIP 만들기는 브라우저에서 이루어집니다. 선택적인 초상 스타일 기능은 배포마다 다를 수 있으며, 그 내용은 ',
    faq5PAfter: '에 적어 두었습니다.',
  },
}

export const messagesByLocale: Record<Locale, MessagesRoot> = {
  en,
  ko,
}

function isRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === 'object' && v !== null && !Array.isArray(v)
}

export function getMessage(
  locale: Locale,
  path: string,
  vars?: Record<string, string>,
): string {
  const parts = path.split('.').filter(Boolean)
  let cur: unknown = messagesByLocale[locale]
  for (const p of parts) {
    if (!isRecord(cur)) return path
    const next = cur[p]
    if (next === undefined) return path
    cur = next
  }
  if (typeof cur !== 'string') return path
  if (!vars) return cur
  return Object.entries(vars).reduce(
    (acc, [key, value]) => acc.replaceAll(`{${key}}`, value),
    cur,
  )
}
