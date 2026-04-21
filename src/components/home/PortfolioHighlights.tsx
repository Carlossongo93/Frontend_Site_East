/**
 * @file PortfolioHighlights component showcasing a few placeholder projects.
 */

import { Link } from 'react-router'
import { useTranslation } from 'react-i18next'

/**
 * PortfolioHighlights displays a small grid of representative projects.
 */
export default function PortfolioHighlights() {
  const { t } = useTranslation()

  const projects = [
    {
      id: 1,
      title: 'Réhabilitation de bâtiments administratifs',
      location: 'Libreville',
      year: '2023',
    },
    {
      id: 2,
      title: 'Études pour un réseau d’adduction d’eau',
      location: 'Port-Gentil',
      year: '2024',
    },
    {
      id: 3,
      title: "Suivi de chantier d'infrastructures routières",
      location: 'Intérieur du pays',
      year: '2022',
    },
  ]

  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-blue-900">
              {t('sections.portfolioTitle')}
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-600">
              {t('sections.portfolioIntro')}
            </p>
          </div>
          <Link
            to="/portfolio"
            className="text-sm font-semibold text-blue-900 underline-offset-4 hover:underline"
          >
            {t('common.viewAll')}
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <div className="h-40 overflow-hidden bg-slate-200">
                <img
                  src="https://pub-cdn.sider.ai/u/U0L5HAK1Y90/web-coder/6950810df028f342ba2e2e5f/resource/887780a2-8b9e-4a36-a3ee-76dc11193e41.jpg"
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="space-y-1 p-4">
                <h3 className="text-sm font-semibold text-blue-900">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-600">
                  {project.location} • {project.year}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}