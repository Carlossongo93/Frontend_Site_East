/**
 * @file ImpactStats component displaying key metrics about EAST-GABON's impact.
 */

import { useTranslation } from 'react-i18next'

interface Stat {
  value: string
  label: string
  description?: string
}

/**
 * ImpactStats displays impressive metrics to build credibility.
 */
export default function ImpactStats() {
  const { t } = useTranslation()

  // Les textes et descriptions proviennent maintenant de i18n.ts
  const stats: Stat[] = [
    {
      value: '50+',
      label: t('home.stats.items.projects.label'),
      description: t('home.stats.items.projects.desc'),
    },
    {
      value: '15+',
      label: t('home.stats.items.years.label'),
      description: t('home.stats.items.years.desc'),
    },
    {
      value: '30+',
      label: t('home.stats.items.clients.label'),
      description: t('home.stats.items.clients.desc'),
    },
    {
      value: '95%',
      label: t('home.stats.items.satisfaction.label'),
      description: t('home.stats.items.satisfaction.desc'),
    },
  ]

  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 text-white">
          <h2 className="text-3xl font-bold md:text-4xl">
            {t('home.stats.title')}
          </h2>
          <p className="mt-3 text-base text-blue-100">
            {t('home.stats.description')}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div className="text-5xl font-bold text-lime-300 md:text-6xl">
                {stat.value}
              </div>
              <h3 className="mt-3 text-lg font-semibold">{stat.label}</h3>
              {stat.description && (
                <p className="mt-1 text-sm text-blue-100">{stat.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}