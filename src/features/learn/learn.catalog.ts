/**
 * Learn hub: SEO/GEO-oriented articles grouped by category.
 * Copy lives here (en/ko titles); long-form body can be filled in later per article.
 */
import addFaviconHtmlEn from './bodies/en/add-favicon-html.md?raw'
import aiAvatarsPersonalBrandingEn from './bodies/en/ai-avatars-personal-branding.md?raw'
import aiPhotoTo3dAvatarEn from './bodies/en/ai-photo-to-3d-avatar.md?raw'
import aiPortraitStylesEn from './bodies/en/ai-portrait-styles.md?raw'
import avatarFaviconPlatformsEn from './bodies/en/avatar-favicon-platforms.md?raw'
import developersPersonalBrandingFaviconEn from './bodies/en/developers-personal-branding-favicon.md?raw'
import faviconBrandingEn from './bodies/en/favicon-branding.md?raw'
import faviconFileFormatsEn from './bodies/en/favicon-file-formats.md?raw'
import faviconFromPhotoEn from './bodies/en/favicon-from-photo.md?raw'
import faviconSizesEn from './bodies/en/favicon-sizes.md?raw'
import firstImpressionFaviconEn from './bodies/en/first-impression-favicon.md?raw'
import portraitTipsAiAvatarEn from './bodies/en/portrait-tips-ai-avatar.md?raw'
import whatIsAFaviconEn from './bodies/en/what-is-a-favicon.md?raw'
import whatIsDigitalAvatarEn from './bodies/en/what-is-digital-avatar.md?raw'
import addFaviconHtmlKo from './bodies/ko/add-favicon-html.md?raw'
import aiAvatarsPersonalBrandingKo from './bodies/ko/ai-avatars-personal-branding.md?raw'
import aiPhotoTo3dAvatarKo from './bodies/ko/ai-photo-to-3d-avatar.md?raw'
import aiPortraitStylesKo from './bodies/ko/ai-portrait-styles.md?raw'
import avatarFaviconPlatformsKo from './bodies/ko/avatar-favicon-platforms.md?raw'
import developersPersonalBrandingFaviconKo from './bodies/ko/developers-personal-branding-favicon.md?raw'
import faviconBrandingKo from './bodies/ko/favicon-branding.md?raw'
import faviconFileFormatsKo from './bodies/ko/favicon-file-formats.md?raw'
import faviconFromPhotoKo from './bodies/ko/favicon-from-photo.md?raw'
import faviconSizesKo from './bodies/ko/favicon-sizes.md?raw'
import portraitTipsAiAvatarKo from './bodies/ko/portrait-tips-ai-avatar.md?raw'
import whatIsAFaviconKo from './bodies/ko/what-is-a-favicon.md?raw'
import whatIsDigitalAvatarKo from './bodies/ko/what-is-digital-avatar.md?raw'

export type LearnLocaleText = {
  en: string
  ko: string
}

export type LearnArticle = {
  slug: string
  title: LearnLocaleText
  /** Short meta / lead for `<meta name="description">` and listing cards */
  summary: LearnLocaleText
  /** Full article body (Markdown). Omit a locale until the translation is ready. */
  bodyMarkdown?: Partial<LearnLocaleText>
}

export type LearnCategory = {
  slug: string
  nav: LearnLocaleText
  /** H1 on category index */
  title: LearnLocaleText
  description: LearnLocaleText
  articles: LearnArticle[]
}

export const LEARN_CATEGORIES: LearnCategory[] = [
  {
    slug: 'favicon-basics',
    nav: { en: 'Favicon Basics', ko: '파비콘 기초' },
    title: { en: 'Favicon Basics', ko: '파비콘 기초' },
    description: {
      en: 'Foundational favicon topics—formats, sizes, HTML, and branding—built for search.',
      ko: '형식, 크기, HTML, 브랜딩 등 파비콘 기초를 검색 친화적으로 정리한 시리즈입니다.',
    },
    articles: [
      {
        slug: 'what-is-a-favicon',
        title: {
          en: "What Is a Favicon? A Complete Beginner's Guide",
          ko: '파비콘이란 무엇인가? 완벽 입문 가이드',
        },
        summary: {
          en: 'What favicons are, where they appear, and why every site should ship one.',
          ko: '파비콘의 정의, 노출 위치, 모든 사이트에 필요한 이유를 한 번에 정리합니다.',
        },
        bodyMarkdown: {
          en: whatIsAFaviconEn,
          ko: whatIsAFaviconKo,
        },
      },
      {
        slug: 'favicon-file-formats',
        title: {
          en: 'Favicon File Formats Explained: ICO vs PNG vs SVG',
          ko: '파비콘 파일 형식 완전 정리: ICO, PNG, SVG 비교',
        },
        summary: {
          en: 'When to use ICO, PNG, or SVG favicons and how browsers pick them.',
          ko: 'ICO·PNG·SVG 파비콘의 차이와 브라우저 선택 방식을 비교합니다.',
        },
        bodyMarkdown: {
          en: faviconFileFormatsEn,
          ko: faviconFileFormatsKo,
        },
      },
      {
        slug: 'favicon-sizes',
        title: {
          en: 'Favicon Sizes: Which Ones Do You Actually Need?',
          ko: '파비콘 사이즈 총정리: 실제로 필요한 크기는?',
        },
        summary: {
          en: '16×16 through touch icons: a practical size checklist for 2025.',
          ko: '16×16부터 터치 아이콘까지, 실무에 필요한 크기만 추려 정리합니다.',
        },
        bodyMarkdown: {
          en: faviconSizesEn,
          ko: faviconSizesKo,
        },
      },
      {
        slug: 'add-favicon-html',
        title: {
          en: 'How to Add a Favicon to Your Website (HTML Guide)',
          ko: '웹사이트에 파비콘 추가하는 방법 (HTML 가이드)',
        },
        summary: {
          en: 'Link tags, rel values, and cache-busting patterns that work everywhere.',
          ko: 'link 태그·rel 값·캐시 무력화 패턴까지 HTML로 적용하는 법을 다룹니다.',
        },
        bodyMarkdown: {
          en: addFaviconHtmlEn,
          ko: addFaviconHtmlKo,
        },
      },
      {
        slug: 'favicon-branding',
        title: {
          en: 'Why Your Favicon Matters for Branding',
          ko: '파비콘이 브랜딩에 중요한 이유',
        },
        summary: {
          en: 'Tabs, bookmarks, and mobile home screens: favicons as micro-brand assets.',
          ko: '탭·북마크·모바일 홈 화면에서 파비콘이 브랜드 자산으로 작동하는 이유입니다.',
        },
        bodyMarkdown: {
          en: faviconBrandingEn,
          ko: faviconBrandingKo,
        },
      },
    ],
  },
  {
    slug: 'ai-avatar',
    nav: { en: 'AI & Avatar', ko: 'AI·아바타' },
    title: { en: 'AI & Avatar', ko: 'AI 이미지·아바타' },
    description: {
      en: 'How AI turns portraits into stylized avatars and how to use them across the web.',
      ko: 'AI가 초상을 스타일 아바타로 바꾸는 원리와 웹에서의 활용을 다룹니다.',
    },
    articles: [
      {
        slug: 'ai-photo-to-3d-avatar',
        title: {
          en: 'How AI Turns Your Photo into a 3D-Style Avatar',
          ko: 'AI는 어떻게 사진을 3D 스타일 아바타로 변환하는가',
        },
        summary: {
          en: 'Pipeline overview from portrait crop to stylized output—built for generative search.',
          ko: '크롭부터 스타일 출력까지 파이프라인을 개요로 설명해 생성형 검색에도 대응합니다.',
        },
        bodyMarkdown: {
          en: aiPhotoTo3dAvatarEn,
          ko: aiPhotoTo3dAvatarKo,
        },
      },
      {
        slug: 'what-is-digital-avatar',
        title: {
          en: 'What Is a Digital Avatar? And Why You Need One',
          ko: '디지털 아바타란 무엇인가? 그리고 왜 필요한가',
        },
        summary: {
          en: 'Digital avatars for profiles, games, and sites—and how favicons extend that identity.',
          ko: '프로필·게임·사이트에서의 디지털 아바타와 파비콘으로 정체성을 이어가는 방법입니다.',
        },
        bodyMarkdown: {
          en: whatIsDigitalAvatarEn,
          ko: whatIsDigitalAvatarKo,
        },
      },
      {
        slug: 'ai-portrait-styles',
        title: {
          en: 'AI Portrait Styles: Cartoon, 3D, Anime and More',
          ko: 'AI 초상화 스타일 가이드: 카툰, 3D, 애니메이션 등',
        },
        summary: {
          en: 'Style families, prompt patterns, and what works best for small-tab favicons.',
          ko: '스타일 종류·프롬프트 패턴·작은 탭 파비콘에 잘 맞는 스타일까지 정리합니다.',
        },
        bodyMarkdown: {
          en: aiPortraitStylesEn,
          ko: aiPortraitStylesKo,
        },
      },
      {
        slug: 'ai-avatars-personal-branding',
        title: {
          en: 'Using AI Avatars for Personal Branding',
          ko: 'AI 아바타로 퍼스널 브랜딩하기',
        },
        summary: {
          en: 'From GitHub to Notion: consistent avatar + favicon combos for creators.',
          ko: 'GitHub부터 Notion까지, 아바타와 파비콘을 맞추는 크리에이터 브랜딩 팁입니다.',
        },
        bodyMarkdown: {
          en: aiAvatarsPersonalBrandingEn,
          ko: aiAvatarsPersonalBrandingKo,
        },
      },
    ],
  },
  {
    slug: 'how-to-tips',
    nav: { en: 'How-To & Tips', ko: '활용 가이드' },
    title: { en: 'How-To & Tips', ko: '활용 가이드' },
    description: {
      en: 'Practical workflows—photos to favicons and platform-specific tips.',
      ko: '사진에서 파비콘까지 실무 워크플로와 플랫폼별 팁을 모았습니다.',
    },
    articles: [
      {
        slug: 'favicon-from-photo',
        title: {
          en: 'How to Make a Favicon from a Photo in Seconds',
          ko: '사진으로 파비콘 만드는 방법 (초간단)',
        },
        summary: {
          en: 'The fastest path through Favify from upload to ZIP export.',
          ko: 'Favify에서 업로드부터 ZIP 다운로드까지 가장 빠른 경로를 안내합니다.',
        },
        bodyMarkdown: {
          en: faviconFromPhotoEn,
          ko: faviconFromPhotoKo,
        },
      },
      {
        slug: 'portrait-tips-ai-avatar',
        title: {
          en: 'Best Portrait Tips for a Great AI Avatar',
          ko: '좋은 AI 아바타를 위한 최적의 사진 촬영 팁',
        },
        summary: {
          en: 'Lighting, framing, and resolution tips before you hit generate.',
          ko: '생성 전 조명·구도·해상도 등 촬영 팁을 정리했습니다.',
        },
        bodyMarkdown: {
          en: portraitTipsAiAvatarEn,
          ko: portraitTipsAiAvatarKo,
        },
      },
      {
        slug: 'avatar-favicon-platforms',
        title: {
          en: 'How to Use Your Avatar as a Favicon for WordPress / Notion / Squarespace',
          ko: '워드프레스 / 노션 / 스쿼어스페이스에 아바타 파비콘 적용하기',
        },
        summary: {
          en: 'Where each platform expects icons and how to upload your generated pack.',
          ko: '플랫폼별 아이콘 위치와 생성한 팩을 올리는 방법을 요약합니다.',
        },
        bodyMarkdown: {
          en: avatarFaviconPlatformsEn,
          ko: avatarFaviconPlatformsKo,
        },
      },
      {
        slug: 'developers-personal-branding-favicon',
        title: {
          en: 'Personal Branding for Developers: Start with Your Favicon',
          ko: '개발자를 위한 퍼스널 브랜딩: 파비콘부터 시작하기',
        },
        summary: {
          en: 'Why engineers should own their tab icon alongside GitHub and portfolio avatars.',
          ko: 'GitHub·포트폴리오와 함께 탭 아이콘까지 챙기는 개발자 브랜딩을 제안합니다.',
        },
        bodyMarkdown: {
          en: developersPersonalBrandingFaviconEn,
          ko: developersPersonalBrandingFaviconKo,
        },
      },
    ],
  },
  {
    slug: 'web-identity',
    nav: { en: 'Web Identity', ko: '웹 정체성' },
    title: { en: 'Web Identity', ko: '웹 정체성·브랜딩' },
    description: {
      en: 'Broader reads on first impressions, consistency, and creator identity on the open web.',
      ko: '첫인상, 일관성, 크리에이터 정체성 등 넓은 주제의 읽을거리입니다.',
    },
    articles: [
      {
        slug: 'first-impression-favicon',
        title: {
          en: "Your Website's First Impression Starts with a Favicon",
          ko: '웹사이트의 첫인상은 파비콘에서 시작된다',
        },
        summary: {
          en: 'Why the smallest asset sets tone before your hero section loads.',
          ko: '히어로가 로드되기 전, 가장 작은 자산이 톤을 만든다는 관점을 풀어냅니다.',
        },
        bodyMarkdown: {
          en: firstImpressionFaviconEn,
        },
      },
      {
        slug: 'consistent-web-identity',
        title: {
          en: 'How to Build a Consistent Web Identity',
          ko: '일관된 웹 정체성 만드는 법',
        },
        summary: {
          en: 'Color, type, avatar, and favicon as one system across properties.',
          ko: '색·타이포·아바타·파비콘을 채널 전반에서 하나의 시스템으로 맞추는 법입니다.',
        },
      },
      {
        slug: 'developers-creators-personal-favicon',
        title: {
          en: 'Why Developers and Creators Need a Personal Favicon',
          ko: '개발자와 크리에이터에게 퍼스널 파비콘이 필요한 이유',
        },
        summary: {
          en: 'Trust, recall, and ownership in crowded tabs and link previews.',
          ko: '붐비는 탭·링크 프리뷰에서 신뢰·기억·소유감을 높이는 퍼스널 파비콘의 역할입니다.',
        },
      },
    ],
  },
]

export type LocaleCode = 'en' | 'ko'

export function pickText(text: LearnLocaleText, locale: LocaleCode): string {
  return locale === 'ko' ? text.ko : text.en
}

export function pickArticleMarkdown(article: LearnArticle, locale: LocaleCode): string | undefined {
  const raw = locale === 'ko' ? article.bodyMarkdown?.ko : article.bodyMarkdown?.en
  if (typeof raw !== 'string' || !raw.trim()) return undefined
  return raw.trim()
}

export function getLearnCategory(slug: string): LearnCategory | undefined {
  return LEARN_CATEGORIES.find((c) => c.slug === slug)
}

export function getLearnArticle(
  categorySlug: string,
  articleSlug: string,
): { category: LearnCategory; article: LearnArticle } | undefined {
  const category = getLearnCategory(categorySlug)
  if (!category) return undefined
  const article = category.articles.find((a) => a.slug === articleSlug)
  if (!article) return undefined
  return { category, article }
}
