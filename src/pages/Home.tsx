/**
 * @file Page d'accueil du site - UX inspirée d'Andersen Windows
 */

import { Link } from 'react-router'
import { useTranslation } from 'react-i18next'
import { ArrowRight, ChevronRight, HardHat, Ruler, ShieldCheck } from 'lucide-react'

export default function Home(): JSX.Element {
  const { t } = useTranslation()

  return (
    <main className="w-full">
      {/* 1. HERO IMMERSIF */}
      <section className="relative w-full h-[80vh] min-h-[600px] flex items-center bg-slate-900">
        <div className="absolute inset-0 z-0">
          {/* REMPLACEZ VOTRE_IMAGE_HERO.jpg PAR VOTRE VRAI NOM DE FICHIER */}
          <img 
            src="/images/00/01.png" 
            alt="EAST-GABON Chantier" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent"></div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-6xl px-4">
          <div className="max-w-2xl text-white">
            
            {/* NOUVEAU : Badge de Certification ISO 3834 mis en évidence */}
            <div className="mb-6 inline-block rounded-xl bg-white p-2 shadow-2xl transition-transform hover:scale-105">
              <img
                src="/images/00/Certifié ISO 3834 EN.png"
                alt="Certifié ISO 3834-2:2021"
                className="h-16 md:h-20 w-auto object-contain"
              />
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl mb-6">
              {t('hero.title', 'Ingénierie et services pour vos projets au Gabon')}
            </h1>
            <p className="text-lg md:text-xl text-blue-50 mb-8 font-light leading-relaxed">
              {t('hero.subtitle', "EAST-GABON accompagne les maîtres d’ouvrage publics et privés de l'étude à la réalisation.")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/quote" className="inline-flex justify-center items-center gap-2 rounded-full bg-lime-600 px-8 py-4 text-sm font-bold text-white transition-transform hover:scale-105 hover:bg-lime-500 shadow-lg">
                {t('hero.ctaQuote', 'Demander un devis')}
              </Link>
              <Link to="/portfolio" className="inline-flex justify-center items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-sm font-bold text-white transition-colors hover:bg-white hover:text-blue-900">
                {t('hero.ctaPortfolio', 'Découvrir nos réalisations')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. NAVIGATION PAR L'IMAGE : DOMAINES D'EXPERTISE */}
      <section className="w-full bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">{t('sections.servicesTitle')}</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">{t('sections.servicesIntro')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/services" className="group block relative h-96 overflow-hidden rounded-xl bg-slate-200">
              <img src="/images/00/08.jpg" alt="Études techniques" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full p-8 text-white">
                <Ruler className="h-8 w-8 mb-4 text-lime-400" />
                <h3 className="text-xl font-bold mb-2">{t('home.expertise.etudes')}</h3>
                <div className="flex items-center gap-2 text-sm font-medium text-lime-400 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  {t('common.learnMore')} <ChevronRight className="h-4 w-4" />
                </div>
              </div>
            </Link>

            <Link to="/services" className="group block relative h-96 overflow-hidden rounded-xl bg-slate-200">
              <img src="/images/00/02.png" alt="Assistance" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full p-8 text-white">
                <HardHat className="h-8 w-8 mb-4 text-lime-400" />
                <h3 className="text-xl font-bold mb-2">Assistance sur Chantier</h3>
                <div className="flex items-center gap-2 text-sm font-medium text-lime-400 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  {t('common.learnMore')} <ChevronRight className="h-4 w-4" />
                </div>
              </div>
            </Link>

            <Link to="/qhse" className="group block relative h-96 overflow-hidden rounded-xl bg-slate-200">
              <img src="/images/00/03.jpg" alt="QHSE" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full p-8 text-white">
                <ShieldCheck className="h-8 w-8 mb-4 text-lime-400" />
                <h3 className="text-xl font-bold mb-2">{t('sections.qhseTitle')}</h3>
                <div className="flex items-center gap-2 text-sm font-medium text-lime-400 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  {t('common.learnMore')} <ChevronRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. GALERIE D'INSPIRATION (Projets Vedettes) */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">{t('sections.portfolioTitle')}</h2>
              <p className="text-slate-600">{t('sections.portfolioIntro')}</p>
            </div>
            <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm font-bold text-blue-900 hover:text-lime-600 transition-colors uppercase tracking-wide">
              {t('common.viewAll')} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[250px]">
            <Link to="/portfolio" className="group relative block md:col-span-8 row-span-2 overflow-hidden rounded-xl">
              <img src="/images/00/07.png" alt="Projet 1" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/40 transition-colors duration-500"></div>
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-6 py-4 rounded-lg transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-xs font-bold text-lime-600 uppercase mb-1">Bâtiment Public</p>
                <p className="text-lg font-bold text-blue-900">A de Libreville</p>
              </div>
            </Link>
            
            <Link to="/portfolio" className="group relative block md:col-span-4 row-span-1 overflow-hidden rounded-xl">
              <img src="/images/00/04.png" alt="Projet 2" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/40 transition-colors duration-500"></div>
            </Link>

            <Link to="/portfolio" className="group relative block md:col-span-4 row-span-1 overflow-hidden rounded-xl">
              <img src="/images/00/05.png" alt="Projet 3" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/40 transition-colors duration-500"></div>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. BANNIÈRE IMPACT / DEVIS */}
      <section className="w-full bg-gradient-to-r from-blue-900 to-blue-800 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            {t('sections.quoteTitle', 'Vous avez un projet ?')}
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            {t('sections.quoteIntro', 'Expliquez-nous votre besoin et recevez une proposition personnalisée.')}
          </p>
          <Link to="/quote" className="inline-flex items-center gap-2 rounded-full bg-lime-600 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-lime-500 shadow-xl">
            {t('hero.ctaQuote', 'Demander un devis')} <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* 5. Section de fermeture avec contact */}
      <section className="w-full bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="relative overflow-hidden rounded-3xl bg-slate-50 border border-slate-100 p-8 md:p-14 text-center">
             <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-900 via-lime-600 to-blue-900"></div>
            <h2 className="text-2xl font-bold text-blue-900 md:text-3xl">
              {t('home.readyToStart', 'Prêt à démarrer votre projet ?')}
            </h2>
            <p className="mt-4 mx-auto max-w-2xl text-slate-600 md:text-lg">
              {t('home.contactUsDesc', "Contactez nos équipes pour discuter de vos besoins et obtenir une estimation personnalisée.")}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-blue-900 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-800">
                {t('home.contactBtn', 'Nous contacter')}
              </Link>
              <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-full border-2 border-slate-200 bg-white px-8 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
                {t('home.viewPortfolio', 'Voir tous les projets')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}