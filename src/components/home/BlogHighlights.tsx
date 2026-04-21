/**
 * @file BlogHighlights component showing a preview of latest news.
 */

import { Link } from 'react-router'
import { useTranslation } from 'react-i18next'

/**
 * BlogHighlights displays three placeholder blog cards to prepare for CMS data.
 */
export default function BlogHighlights() {
  const { t, i18n } = useTranslation()

  // Les titres proviennent directement de i18n.ts
  const posts = [
    {
      id: 1,
      title: t('home.blog.posts.post1'),
      date: '2024-11-15',
    },
    {
      id: 2,
      title: t('home.blog.posts.post2'),
      date: '2024-09-02',
    },
    {
      id: 3,
      title: t('home.blog.posts.post3'),
      date: '2024-06-21',
    },
  ]

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-blue-900">
              {t('sections.blogTitle')}
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-600">
              {t('sections.blogIntro')}
            </p>
          </div>
          <Link
            to="/blog"
            className="text-sm font-semibold text-blue-900 underline-offset-4 hover:underline"
          >
            {t('common.viewAll')}
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50/80 p-5 shadow-sm"
            >
              <div className="text-[11px] font-medium uppercase tracking-wide text-slate-500">
                {/* Formatage automatique de la date selon la langue active */}
                {new Date(post.date).toLocaleDateString(i18n.language === 'fr' ? 'fr-FR' : 'en-GB')}
              </div>
              <h3 className="mt-2 text-sm font-semibold text-blue-900">
                {post.title}
              </h3>
              <p className="mt-2 text-xs text-slate-600">
                {t('home.blog.excerptPlaceholder')}
              </p>
              <Link
                to="/blog"
                className="mt-3 text-xs font-semibold text-blue-900 underline-offset-4 hover:underline"
              >
                {t('common.learnMore')}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}