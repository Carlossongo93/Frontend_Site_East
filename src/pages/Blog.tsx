import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export default function BlogPage() {
  const { t } = useTranslation()
  const facebookPageUrl = "https://www.facebook.com/eastgabon"

  useEffect(() => {
    // S'assurer que le script Elfsight est actif lors de la navigation
    const script = document.createElement('script')
    script.src = 'https://static.elfsight.com/platform/platform.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      try {
        document.body.removeChild(script)
      } catch {
        // Ignorer si déjà détaché
      }
    }
  }, [])

  return (
    <div className="w-full bg-slate-50 min-h-[75vh] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-blue-900 mb-4 md:text-4xl">
            {t('blog.pageTitle', 'Actualités & projets en cours')}
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {t('blog.blogIntro', "Restez informé des chantiers, appels d'offres et interventions sur le terrain d'EAST-GABON en suivant nos dernières publications.")}
          </p>
        </div>

        {/* Le flux d'actualités identique à la page d'accueil */}
        <div className="w-full">
          <div
            className="elfsight-app-8d85d7af-c4ab-47cb-b035-5042ae2c422f"
            data-elfsight-app-lazy
          ></div>
        </div>

        {/* Bouton pour rejoindre la page officielle Facebook */}
        <div className="mt-12 text-center">
          <a
            href={facebookPageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-3.5 text-sm font-bold text-white transition hover:bg-blue-700 shadow-md"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Rejoignez-nous sur Facebook
          </a>
        </div>
      </div>
    </div>
  )
}