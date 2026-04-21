/**
 * @file Services page describing EAST-GABON service offerings.
 */

import { useTranslation } from 'react-i18next'
import { CheckCircle2, ArrowRight, Briefcase, Wrench, ShoppingCart, HardHat, Hammer } from 'lucide-react'
import { Link } from 'react-router' // ou 'react-router-dom'

// --- IMPORTS DES IMAGES ---
// Remplacez ces chemins par vos vraies images
// Exemple: src/images/services/gestion-projet.jpg
import imgProject from '../images/services/01.jpg'
import imgMaintenance from '../images/services/02.jpg'
import imgAchat from '../images/services/03.jpg'
import imgMetal from '../images/services/04.jpg'
import imgSoudure from '../images/services/05.jpg'

// Interface pour la structure de données
interface ServiceData {
  id: string
  title: string
  icon: React.ElementType
  image: string
  description: string
  features: string[]
  advantages: string[]
  targets: string
}

export default function ServicesPage() {
  const { t } = useTranslation()

  // --- DONNÉES DES SERVICES CONNECTÉES À I18N ---
  const services: ServiceData[] = [
    {
      id: 'etudes',
      title: t('services.items.etudes.title'),
      icon: Briefcase,
      image: imgProject,
      description: t('services.items.etudes.description'),
      features: (t('services.items.etudes.features', { returnObjects: true }) as string[]) || [],
      advantages: (t('services.items.etudes.advantages', { returnObjects: true }) as string[]) || [],
      targets: t('services.items.etudes.targets')
    },
    {
      id: 'maintenance',
      title: t('services.items.maintenance.title'),
      icon: Wrench,
      image: imgMaintenance,
      description: t('services.items.maintenance.description'),
      features: (t('services.items.maintenance.features', { returnObjects: true }) as string[]) || [],
      advantages: (t('services.items.maintenance.advantages', { returnObjects: true }) as string[]) || [],
      targets: t('services.items.maintenance.targets')
    },
    {
      id: 'achat',
      title: t('services.items.achat.title'),
      icon: ShoppingCart,
      image: imgAchat,
      description: t('services.items.achat.description'),
      features: (t('services.items.achat.features', { returnObjects: true }) as string[]) || [],
      advantages: (t('services.items.achat.advantages', { returnObjects: true }) as string[]) || [],
      targets: t('services.items.achat.targets')
    },
    {
      id: 'metal',
      title: t('services.items.metal.title'),
      icon: HardHat,
      image: imgMetal,
      description: t('services.items.metal.description'),
      features: (t('services.items.metal.features', { returnObjects: true }) as string[]) || [],
      advantages: (t('services.items.metal.advantages', { returnObjects: true }) as string[]) || [],
      targets: t('services.items.metal.targets')
    },
    {
      id: 'btp',
      title: t('services.items.btp.title'),
      icon: Hammer,
      image: imgSoudure,
      description: t('services.items.btp.description'),
      features: (t('services.items.btp.features', { returnObjects: true }) as string[]) || [],
      advantages: (t('services.items.btp.advantages', { returnObjects: true }) as string[]) || [],
      targets: t('services.items.btp.targets')
    }
  ]

  return (
    <div className="bg-slate-50">
      {/* En-tête de la page */}
      <div className="bg-blue-900 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h1 className="text-3xl font-bold text-white md:text-5xl">
            {t('services.pageTitle')}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
            {t('services.subtitle')}
          </p>
        </div>
      </div>

      {/* Liste des Services */}
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="space-y-24">
          {services.map((service, index) => {
            // Permet d'alterner gauche/droite (Zig-Zag)
            const isEven = index % 2 === 0
            
            return (
              <div 
                key={service.id} 
                id={service.id}
                className={`flex flex-col gap-8 md:items-start lg:gap-16 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                
                {/* BLOC IMAGE */}
                <div className="w-full lg:w-1/2">
                  <div className="sticky top-24 overflow-hidden rounded-2xl shadow-xl">
                    <div className="aspect-[4/3] bg-slate-200">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" 
                      />
                    </div>
                    {/* Badge cible visible sur l'image */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                      <p className="text-xs font-semibold uppercase tracking-wider opacity-80 mb-1">
                        {t('services.labels.benefitsFor')}
                      </p>
                      <p className="font-medium">{service.targets}</p>
                    </div>
                  </div>
                </div>

                {/* BLOC TEXTE */}
                <div className="w-full lg:w-1/2 lg:py-4">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-900">
                      <service.icon className="h-6 w-6" />
                    </span>
                    <h2 className="text-2xl font-bold text-blue-900 md:text-3xl">
                      {service.title}
                    </h2>
                  </div>

                  <p className="mb-8 text-lg leading-relaxed text-slate-700">
                    {service.description}
                  </p>

                  <div className="grid gap-8 md:grid-cols-2">
                    {/* Colonne Fonctionnalités */}
                    <div>
                      <h3 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-blue-900">
                        <div className="h-1 w-6 bg-blue-600 rounded-full"></div>
                        {t('services.labels.features')}
                      </h3>
                      <ul className="space-y-3">
                        {service.features.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Colonne Avantages */}
                    <div>
                      <h3 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-lime-700">
                        <div className="h-1 w-6 bg-lime-500 rounded-full"></div>
                        {t('services.labels.advantages')}
                      </h3>
                      <ul className="space-y-3">
                        {service.advantages.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-lime-600" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 border-t border-slate-200 pt-6">
                    <Link 
                      to="/contact" 
                      className="inline-flex items-center gap-2 text-sm font-bold text-blue-900 hover:text-blue-700 transition-colors"
                    >
                      {t('services.labels.requestQuote')}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

              </div>
            )
          })}
        </div>
      </div>

      {/* CTA Global en bas de page */}
      <div className="bg-slate-900 py-12 text-center text-white">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-4">{t('services.cta.title')}</h2>
          <p className="text-slate-300 mb-8">
            {t('services.cta.description')}
          </p>
          <Link
            to="/contact"
            className="inline-block rounded-full bg-lime-600 px-8 py-3 text-sm font-bold text-white transition hover:bg-lime-500"
          >
            {t('services.cta.button')}
          </Link>
        </div>
      </div>
    </div>
  )
}