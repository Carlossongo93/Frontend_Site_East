/**
 * @file Portfolio page listing EAST-GABON reference projects.
 */

import React, { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react'

// --- DONNÉES DES PROJETS ---
// Nous ne gardons ici que les IDs et les images. Les textes (titre, client, lieu)
// sont automatiquement récupérés via i18n grâce à l'ID.
const PROJECTS = [
  {
    id: 1,
    images: [
      '/images/projet-1/01.png', '/images/projet-1/02.png', '/images/projet-1/03.png',
      '/images/projet-1/04.png', '/images/projet-1/05.png', '/images/projet-1/06.png',
      '/images/projet-1/07.png', '/images/projet-1/08.png', '/images/projet-1/09.png',
      '/images/projet-1/10.png',
    ],
  },
  {
    id: 2,
    images: [
      '/images/projet-2/01.png', '/images/projet-2/02.png', '/images/projet-2/03.png',
      '/images/projet-2/04.png', '/images/projet-2/05.png', '/images/projet-2/06.png',
      '/images/projet-2/07.png', '/images/projet-2/08.png', '/images/projet-2/09.png',
      '/images/projet-2/10.png',
    ],
  },
  {
    id: 3,
    images: [
      '/images/projet-3/01.png', '/images/projet-3/02.png', '/images/projet-3/03.png',
      '/images/projet-3/04.png', '/images/projet-3/05.png', '/images/projet-3/06.png',
      '/images/projet-3/07.png', '/images/projet-3/08.png', '/images/projet-3/09.png',
      '/images/projet-3/10.png',
    ],
  },
  {
    id: 4,
    images: [
      '/images/projet-4/01.png', '/images/projet-4/02.png', '/images/projet-4/03.png',
      '/images/projet-4/04.png', '/images/projet-4/05.png', '/images/projet-4/06.png',
    ],
  },
  {
    id: 5,
    images: [
      '/images/projet-5/01.png', '/images/projet-5/02.png', '/images/projet-5/03.png',
      '/images/projet-5/05.png', '/images/projet-5/06.png', '/images/projet-5/07.png',
      '/images/projet-5/08.png',
    ],
  },
  {
    id: 6,
    images: [
      '/images/projet-6/01.png', '/images/projet-6/02.png', '/images/projet-6/03.png',
      '/images/projet-6/04.png', '/images/projet-6/05.png', '/images/projet-6/06.png',
      '/images/projet-6/07.png',
    ],
  },
  {
    id: 7,
    images: [
      '/images/projet-7/01.png', '/images/projet-7/02.png', '/images/projet-7/03.png',
      '/images/projet-7/04.png', '/images/projet-7/05.png', '/images/projet-7/06.png',
      '/images/projet-7/07.png', '/images/projet-7/08.png', '/images/projet-7/09.png',
    ],
  },
  {
    id: 8,
    images: [
      '/images/projet-8/01.png', '/images/projet-8/02.png', '/images/projet-8/03.png',
      '/images/projet-8/04.png', '/images/projet-8/05.png', '/images/projet-8/06.png',
      '/images/projet-8/07.png', '/images/projet-8/08.png', '/images/projet-8/09.png',
      '/images/projet-8/10.png', '/images/projet-8/11.png',
    ],
  },
  {
    id: 9,
    images: [
      '/images/projet-9/01.png', '/images/projet-9/02.png', '/images/projet-9/03.png',
      '/images/projet-9/04.png', '/images/projet-9/05.png', '/images/projet-9/06.png',
      '/images/projet-9/07.png', '/images/projet-9/08.png', '/images/projet-9/09.png',
      '/images/projet-9/10.png',
    ],
  },
  {
    id: 10,
    images: [
      '/images/projet-10/01.png', '/images/projet-10/02.png', '/images/projet-10/03.png',
      '/images/projet-10/04.png', '/images/projet-10/05.png', '/images/projet-10/06.png',
      '/images/projet-10/07.png', '/images/projet-10/08.png'
    ],
  },
  {
    id: 11,
    images: [
      '/images/projet-11/01.png', '/images/projet-11/02.png', '/images/projet-11/03.png',
    ],
  },
  {
    id: 12,
    images: [
      '/images/projet-12/01.png', '/images/projet-12/02.png', '/images/projet-12/03.png',
    ],
  },
  {
    id: 13,
    images: [
      '/images/projet-13/01.png', '/images/projet-13/02.png', '/images/projet-13/03.png',
      '/images/projet-13/04.png', '/images/projet-13/05.png', '/images/projet-13/06.png',
      '/images/projet-13/07.png', '/images/projet-13/08.png', '/images/projet-13/09.png',
    ],
  },
]

/**
 * Composant individuel pour une carte de projet avec slider
 * Gère l'auto-scroll au survol (hover).
 */
const ProjectCard = ({ project }: { project: typeof PROJECTS[0] }) => {
  const { t } = useTranslation()
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [isHovering, setIsHovering] = useState(false)

  // Récupération des textes traduits
  const title = t(`portfolio.projects.p${project.id}.title`)
  const location = t(`portfolio.projects.p${project.id}.location`)
  const client = t(`portfolio.projects.p${project.id}.client`)

  // Gestion du défilement manuel
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  // Gestion de l'Auto-Scroll au survol
  useEffect(() => {
    // Si on ne survole pas OU si l'API n'est pas prête OU s'il n'y a qu'une image, on ne fait rien
    if (!isHovering || !emblaApi || project.images.length <= 1) return

    // On lance un intervalle qui change de slide toutes les 2 secondes
    const intervalId = setInterval(() => {
      emblaApi.scrollNext()
    }, 2000)

    // Nettoyage : quand on arrête de survoler, on tue l'intervalle
    return () => clearInterval(intervalId)
  }, [isHovering, emblaApi, project.images.length])

  return (
    <article
      className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-md transition-all hover:shadow-xl"
      // Détecteurs de survol pour activer/désactiver l'auto-scroll
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      // Support tactile simple (optionnel, simule le hover au toucher)
      onTouchStart={() => setIsHovering(true)}
    >
      {/* Zone Image / Slider (Format 16:9 - aspect-video) */}
      <div className="relative aspect-video w-full bg-slate-100">
        <div className="h-full w-full overflow-hidden" ref={emblaRef}>
          <div className="flex h-full touch-pan-y">
            {project.images.map((src, idx) => (
              <div
                key={idx}
                className="relative flex h-full min-w-0 flex-[0_0_100%]"
              >
                <img
                  src={src}
                  alt={`${title} - vue ${idx + 1}`}
                  className="h-full w-full object-cover bg-red-100"
                  loading="lazy"
                  onError={(e) => {
                    // Ceci affichera dans la console du navigateur l'erreur exacte
                    console.error(`Impossible de charger l'image : ${src}`);
                    e.currentTarget.style.display = 'none'; // Cache l'image si elle plante
                    }}
                />
                {/* Overlay dégradé pour lire le texte en bas */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-70" />
              </div>
            ))}
          </div>
        </div>

        {/* Boutons de navigation (visibles si plus d'une image) */}
        {project.images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation() // Empêche de cliquer sur la carte si on clique sur la flèche
                scrollPrev()
              }}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-opacity hover:bg-white/40 md:opacity-0 md:group-hover:opacity-100"
              aria-label={t('portfolio.accessibility.prevImage')}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                scrollNext()
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-opacity hover:bg-white/40 md:opacity-0 md:group-hover:opacity-100"
              aria-label={t('portfolio.accessibility.nextImage')}
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </>
        )}

        {/* Contenu textuel superposé en bas de la carte */}
        <div className="pointer-events-none absolute bottom-0 left-0 w-full p-4 text-white md:p-6">
          <div className="mb-1 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-blue-200">
            <MapPin className="h-3 w-3" />
            {location}
          </div>
          <h3 className="text-lg font-bold leading-tight shadow-black drop-shadow-md md:text-xl">
            {title}
          </h3>
          <p className="mt-1 text-sm text-gray-300">{client}</p>
        </div>
      </div>
    </article>
  )
}

/**
 * Page principale Portfolio
 */
export default function PortfolioPage() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-10 md:py-16">
        {/* En-tête de la page */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-blue-950 md:text-5xl">
            {t('portfolio.pageTitle')}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            {t('portfolio.intro')}
          </p>
        </div>

        {/* Grille des projets (Max 3 colonnes pour le format 16/9) */}
        <div className="grid gap-10 lg:gap-14 sm:grid-cols-1 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}