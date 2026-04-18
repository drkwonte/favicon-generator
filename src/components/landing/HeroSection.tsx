/**
 * Marketing hero: headline + rotating sample avatars (not user content).
 */
import { useAppPreferences } from '../../context/AppPreferencesContext'
import { HERO_LINE_1, HERO_LINE_2, HERO_LINE_3 } from '../../features/landing/landing.constants'
import { HERO_AVATAR_SOURCES } from '../../features/landing/landing.media'

type HeroSectionProps = {
  activeSlideIndex: number
}

export function HeroSection({ activeSlideIndex }: HeroSectionProps) {
  const { t } = useAppPreferences()

  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-8 py-16 text-center lg:flex-row lg:items-center lg:text-left">
      <div className="z-10 w-full max-w-xl space-y-8 lg:w-1/2 lg:max-w-none">
        <h1 className="font-headline text-5xl font-black leading-[1.12] tracking-tight text-on-surface md:text-6xl">
          <span className="block">{HERO_LINE_1}</span>
          <span className="mt-2 block text-primary md:mt-3">{HERO_LINE_2}</span>
          <span className="mt-2 block text-on-surface md:mt-3">{HERO_LINE_3}</span>
        </h1>

        <div className="mx-auto max-w-xl space-y-2 text-lg leading-relaxed text-on-surface-variant md:text-xl lg:mx-0">
          <p>{t('hero.subtitle1')}</p>
          <p>{t('hero.subtitle2')}</p>
        </div>
      </div>

      <div className="relative flex w-full max-w-md justify-center lg:max-w-none lg:w-1/2 lg:justify-start">
        <div className="pointer-events-none absolute -right-20 -top-20 hidden h-80 w-80 rounded-full bg-primary/10 blur-[100px] lg:block" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 hidden h-80 w-80 rounded-full bg-tertiary/10 blur-[100px] lg:block" />

        <div className="glass-card relative w-full rounded-xl border border-white/20 p-6 shadow-2xl sm:p-8">
          <div className="group relative aspect-square overflow-hidden rounded-lg">
            {HERO_AVATAR_SOURCES.map((src, index) => (
              <img
                key={src}
                alt={index === activeSlideIndex ? t('hero.carouselAlt') : ''}
                src={src}
                aria-hidden={index !== activeSlideIndex}
                className={[
                  'absolute inset-0 h-full w-full object-cover transition-all duration-700',
                  'group-hover:scale-105',
                  index === activeSlideIndex ? 'z-[1] opacity-100' : 'z-0 opacity-0',
                ].join(' ')}
              />
            ))}
            <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-black/30 to-transparent" />
            <div
              className="absolute bottom-6 right-6 z-[3] flex gap-1.5"
              aria-hidden="true"
            >
              {HERO_AVATAR_SOURCES.map((_, index) => (
                <span
                  key={index}
                  role="presentation"
                  className={[
                    'h-1.5 w-1.5 rounded-full transition-colors duration-300',
                    index === activeSlideIndex ? 'bg-white' : 'bg-white/40',
                  ].join(' ')}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
