/**
 * @file ServiceHighlights component showcasing key services on the home page.
 */

import { Link } from 'react-router'
import { useTranslation } from 'react-i18next'

/**
 * ServiceHighlights lists 3 key services with a link to the full services page.
 */
export default function ServiceHighlights() {
  const { t } = useTranslation()

  // Les données proviennent directement de i18n.ts, plus besoin de vérifier isFr manuellement !
  const services = [
    {
      id: 's1',
      title: t('home.services.items.s1.title'),
      description: t('home.services.items.s1.desc'),
    },
    {
      id: 's2',
      title: t('home.services.items.s2.title'),
      description: t('home.services.items.s2.desc'),
    },
    {
      id: 's3',
      title: t('home.services.items.s3.title'),
      description: t('home.services.items.s3.desc'),
    },
  ]

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-blue-900">
              {t('sections.servicesTitle')}
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-600">
              {t('sections.servicesIntro')}
            </p>
          </div>
          <Link
            to="/services"
            className="text-sm font-semibold text-blue-900 underline-offset-4 hover:underline"
          >
            {t('common.viewAll')}
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.id}
              className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50/80 p-5 shadow-sm"
            >
              <h3 className="text-sm font-semibold text-blue-900">
                {service.title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-slate-700">
                {service.description}
              </p>
              <span className="mt-3 inline-flex w-fit rounded-full bg-lime-600/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-lime-700">
                {t('home.services.keyService')}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}