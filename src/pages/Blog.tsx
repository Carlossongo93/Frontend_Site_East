/**
 * @file Blog page listing news and articles.
 */

import { useTranslation } from 'react-i18next'

/**
 * BlogPage contains a simple list structure ready for CMS integration.
 */
export default function BlogPage() {
  const { t } = useTranslation()

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 md:py-14">
      <h1 className="text-3xl font-bold text-blue-900">
        {t('blog.pageTitle')}
      </h1>
      <p className="mt-3 text-sm text-slate-700">{t('blog.comingSoon')}</p>
      <div className="mt-8 space-y-6">
        {Array.from({ length: 4 }).map((_, index) => (
          <article
            key={index}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="text-[11px] font-medium uppercase tracking-wide text-slate-500">
              2024-0{index + 1}-15
            </div>
            <h2 className="mt-1 text-sm font-semibold text-blue-900">
              Titre d&apos;article de démonstration #{index + 1}
            </h2>
            <p className="mt-2 text-xs text-slate-700">
              Cet espace accueillera les résumés d&apos;articles publiés depuis
              le CMS (Strapi) avec accès à la page de détail.
            </p>
          </article>
        ))}
      </div>
    </div>
  )
}