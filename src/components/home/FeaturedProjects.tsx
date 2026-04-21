/**
 * @file FeaturedProjects component showcasing impressive projects with full-width images.
 */

import { Link } from 'react-router'
import { useTranslation } from 'react-i18next'
import { ArrowRight } from 'lucide-react'

// --- 1. IMPORTEZ LES IMAGES ICI ---
// Ajustez le chemin '../images' selon où se trouve ce fichier par rapport au dossier images
import img1 from '../../images/00/01.png'
import img2 from '../../images/00/02.png'
import img3 from '../../images/00/03.jpg'
import img4 from '../../images/00/04.png'

/**
 * Project data structure
 */
interface Project {
  id: number
  title: string
  location: string
  image: string
  category: string
}

/**
 * FeaturedProjects displays a visually impactful gallery of key projects.
 */
export default function FeaturedProjects() {
  const { t } = useTranslation()

  // Les textes proviennent maintenant de i18n.ts
  const projects: Project[] = [
    {
      id: 1,
      title: t('home.featured.projects.p1.title'),
      location: t('home.featured.projects.p1.location'),
      category: t('home.featured.projects.p1.category'),
      image: img1,
    },
    {
      id: 2,
      title: t('home.featured.projects.p2.title'),
      location: t('home.featured.projects.p2.location'),
      category: t('home.featured.projects.p2.category'),
      image: img2,
    },
    {
      id: 3,
      title: t('home.featured.projects.p3.title'),
      location: t('home.featured.projects.p3.location'),
      category: t('home.featured.projects.p3.category'),
      image: img3,
    },
    {
      id: 4,
      title: t('home.featured.projects.p4.title'),
      location: t('home.featured.projects.p4.location'),
      category: t('home.featured.projects.p4.category'),
      image: img4,
    },
  ]

  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-blue-900 md:text-4xl">
            {t('home.featured.title')}
          </h2>
          <p className="mt-3 max-w-2xl text-base text-slate-600">
            {t('home.featured.description')}
          </p>
        </div>

        {/* Large featured project */}
        <div className="mb-8 overflow-hidden rounded-2xl shadow-lg">
          <Link to="/portfolio" className="group relative block overflow-hidden">
            <div className="relative h-72 md:h-96 lg:h-[28rem] w-full overflow-hidden bg-slate-200">
              <img
                src={projects[0].image}
                alt={projects[0].title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white md:p-8">
                <div className="inline-block rounded-full bg-lime-600 px-3 py-1 text-xs font-semibold uppercase tracking-wide mb-3">
                  {projects[0].category}
                </div>
                <h3 className="text-2xl font-bold md:text-3xl">{projects[0].title}</h3>
                <p className="mt-2 text-sm text-blue-100">{projects[0].location}</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Project grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {projects.slice(1).map((project) => (
            <Link
              key={project.id}
              to="/portfolio"
              className="group overflow-hidden rounded-xl shadow-md transition-shadow hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden bg-slate-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="bg-white p-4">
                <div className="inline-block rounded-full bg-blue-50 px-2 py-1 text-[11px] font-semibold text-blue-700 uppercase tracking-wide mb-2">
                  {project.category}
                </div>
                <h3 className="text-sm font-semibold text-blue-900">{project.title}</h3>
                <p className="mt-2 text-xs text-slate-600">{project.location}</p>
                <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-blue-900 opacity-0 group-hover:opacity-100 transition-opacity">
                  {t('home.featured.learnMore')} <ArrowRight className="h-3 w-3" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 rounded-full bg-blue-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
          >
            {t('home.viewPortfolio')}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}