/**
 * @file HeroSection component for the home page hero banner.
 */

import { Link } from 'react-router'
import { useTranslation } from 'react-i18next'

/**
 * HeroSection displays the main marketing message and primary calls to action.
 */
export default function HeroSection() {
  const { t } = useTranslation()

  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-900 to-lime-600 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-10 md:grid-cols-2 md:py-16">
        <div className="flex flex-col justify-center gap-6">
          <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl">
            {t('hero.title')}
          </h1>
          <p className="max-w-xl text-sm text-blue-100 md:text-base">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-wrap gap-3">
            <PrimaryButton to="/services">{t('hero.ctaServices')}</PrimaryButton>
            <SecondaryButton to="/portfolio">
              {t('hero.ctaPortfolio')}
            </SecondaryButton>
            <SecondaryButton to="/quote" variant="light">
              {t('hero.ctaQuote')}
            </SecondaryButton>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="relative h-56 w-full max-w-md overflow-hidden rounded-2xl border border-blue-400/40 bg-blue-950/40 p-4 shadow-xl backdrop-blur">
            <img
              src="https://pub-cdn.sider.ai/u/U0L5HAK1Y90/web-coder/6950810df028f342ba2e2e5f/resource/14b63e25-3ad5-4988-b822-40b2377ee496.jpg"
              alt="Construction site illustration"
              className="h-full w-full rounded-xl object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-blue-950/70 via-transparent" />
            <div className="absolute bottom-4 left-4 right-4 space-y-1 text-xs">
              <div className="font-semibold uppercase tracking-wide text-lime-300">
                {t('home.hero.overlayBadge')}
              </div>
              <div className="text-[11px] text-blue-100">
                {t('home.hero.overlayText')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/**
 * Props for hero buttons.
 */
interface HeroButtonProps {
  /**
   * Target path for the button.
   */
  to: string
  /**
   * Visual variant.
   */
  variant?: 'solid' | 'outline' | 'light'
  /**
   * Button label.
   */
  children: React.ReactNode
}

/**
 * PrimaryButton renders the main solid hero action.
 */
function PrimaryButton({ to, children }: HeroButtonProps) {
  return (
    <Link
      to={to}
      className="rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wide text-blue-900 shadow-sm transition hover:bg-blue-50"
    >
      {children}
    </Link>
  )
}

/**
 * SecondaryButton renders secondary hero actions with outline or light styles.
 */
function SecondaryButton({ to, children, variant = 'outline' }: HeroButtonProps) {
  const base =
    'rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide transition'
  const styles =
    variant === 'light'
      ? 'bg-blue-800/70 text-white hover:bg-blue-700'
      : 'border border-blue-200 bg-blue-900/40 text-blue-50 hover:bg-blue-900'
  return (
    <Link to={to} className={`${base} ${styles}`}>
      {children}
    </Link>
  )
}