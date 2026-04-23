/**
 * @file Blog/News page embedding the official Facebook Page Plugin.
 */

import { useTranslation } from 'react-i18next'

export default function BlogPage() {
  const { t } = useTranslation()

  // 🚨 TRÈS IMPORTANT : REMPLACEZ CETTE URL PAR CELLE DE VOTRE PAGE FACEBOOK
  const facebookPageUrl = "https://www.facebook.com/eastgabon" 
  
  // On "encode" l'URL pour que Facebook la comprenne bien dans l'iframe
  const encodedUrl = encodeURIComponent(facebookPageUrl)

  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-blue-900 mb-4">
          {t('blog.pageTitle', 'Actualités')}
        </h1>
        <p className="text-slate-600 max-w-2xl mx-auto">
          {t('blog.blogIntro', "Restez informé des chantiers, appels d'offres et actualités d'EAST-GABON en suivant nos dernières publications.")}
        </p>
      </div>

      <div className="flex justify-center w-full">
        <div className="bg-white p-4 rounded-2xl shadow-lg border border-slate-100 w-full max-w-[500px] flex justify-center">
          
          {/* L'intégration Facebook (iframe) */}
          <iframe
            src={`https://www.facebook.com/plugins/page.php?href=${encodedUrl}&tabs=timeline&width=500&height=800&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true`}
            width="1080"
            height="800"
            style={{ border: 'none', overflow: 'hidden', maxWidth: '100%' }}
            scrolling="yes"
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            title="Flux Facebook East-Gabon"
            className="rounded-lg"
          ></iframe>

        </div>
      </div>
      
      {/* Petit bouton optionnel pour inciter à s'abonner */}
      <div className="mt-8 text-center">
        <a 
          href={facebookPageUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-blue-700 shadow-md"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
          Rejoignez-nous sur Facebook
        </a>
      </div>
    </div>
  )
}