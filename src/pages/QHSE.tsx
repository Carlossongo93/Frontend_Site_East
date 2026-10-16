/**
 * @file QHSE page presenting the quality, health, safety and environment policy.
 */

import { useTranslation } from 'react-i18next'
import { ShieldCheck, Clock, Handshake, FileCheck, Globe, Users } from 'lucide-react'

// --- IMPORTS DES IMAGES ---
// Remplacez par vos images réelles illustrant chaque section
import imgOverview from '../images/qhse/5.png'       // Une photo d'équipe ou de bureau
import imgValues from '../images/qhse/2.png'           // Une photo de sécurité ou chantier propre
import imgCerts from '../images/qhse/3.png'     // Une photo de soudure technique ou plan
import imgTarget from '../images/qhse/4.png'          // Une photo de réalisation industrielle

export default function QHSEPage() {
  const { t } = useTranslation()

  return (
    <div className="bg-white">
      
      {/* --- SECTION 1: EN-TÊTE & APERÇU --- */}
      <section className="relative bg-blue-900 py-16 md:py-20 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
            {/* Image de fond optionnelle pour le header, ici simulée par une div */}
            <div className="h-full w-full bg-slate-900" /> 
        </div>
        <div className="relative mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-6 border-l-4 border-lime-500 pl-4">
              {t('qhse.pageTitle')}
            </h1>
            <p className="text-lg leading-relaxed text-blue-100">
              {t('qhse.header.introPart1')}
              <span className="font-semibold text-white"> {t('qhse.header.introHighlight')}</span>.
            </p>
          </div>
          <div className="md:w-1/2">
            <img 
              src={imgOverview} 
              alt="Aperçu East Gabon" 
              className="rounded-lg shadow-2xl border-4 border-white/10 object-cover h-64 w-full"
            />
          </div>
        </div>
      </section>

      {/* --- SECTION 2: NOS VALEURS --- */}
      <section className="py-16 mx-auto max-w-6xl px-4">
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            
            {/* Image d'illustration Valeurs */}
            <div className="w-full md:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                    <img 
                        src={imgValues} 
                        alt="Nos valeurs en action" 
                        className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-0 left-0 bg-lime-600 px-6 py-2 text-white font-bold text-sm uppercase tracking-wide">
                        {t('qhse.values.badge')}
                    </div>
                </div>
            </div>

            {/* Contenu Valeurs */}
            <div className="w-full md:w-1/2 space-y-8">
                <h2 className="text-3xl font-bold text-blue-900">{t('qhse.values.title')}</h2>
                <div className="space-y-6">
                    
                    <div className="flex gap-4">
                        <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-900">
                            <ShieldCheck className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-800">{t('qhse.values.safetyTitle')}</h3>
                            <p className="text-slate-600">{t('qhse.values.safetyDesc')}</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-900">
                            <Clock className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-800">{t('qhse.values.precisionTitle')}</h3>
                            <p className="text-slate-600">{t('qhse.values.precisionDesc')}</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-900">
                            <Handshake className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-800">{t('qhse.values.partnersTitle')}</h3>
                            <p className="text-slate-600">{t('qhse.values.partnersDesc')}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
      </section>

      {/* --- SECTION 3: CERTIFICATIONS & TECHNIQUE --- */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-blue-900">{t('qhse.certifications.title')}</h2>
                <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
                    {t('qhse.certifications.subtitle')}
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-start">
                {/* Carte des Certifications */}
                <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-blue-900">
                    <div className="flex items-center gap-3 mb-6">
                        <FileCheck className="h-8 w-8 text-lime-600" />
                        <h3 className="text-xl font-bold text-slate-800">{t('qhse.certifications.qualificationsTitle')}</h3>
                    </div>
                    <ul className="space-y-4">
                        
                        {/* Certification ISO 3834 */}
                        <li className="flex items-center gap-4 p-3 bg-slate-50 rounded-lg border border-slate-100 hover:bg-slate-100/80 transition-colors">
                            <a 
                                href="/images/00/3834.svg" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                title="Voir le certificat ISO 3834-2"
                                className="shrink-0 bg-white p-1 rounded shadow-sm border border-slate-200 block hover:opacity-80 transition-opacity"
                            >
                                <img 
                                    src="/images/00/Certifié ISO 3834 EN.png" 
                                    alt="Certification ISO 3834-2:2021" 
                                    className="h-14 w-auto object-contain"
                                />
                            </a>
                            <div className="flex flex-col flex-1">
                                <div className="flex items-center justify-between gap-2">
                                  <span className="font-bold text-blue-900">{t('qhse.certifications.items.iso3834')}</span>
                                  <a href="/images/00/3834.svg" target="_blank" rel="noopener noreferrer" className="text-xs text-lime-600 hover:text-lime-700 font-semibold underline shrink-0">Voir certificat ↗</a>
                                </div>
                                <span className="text-slate-700 text-sm">
                                    {t('qhse.certifications.items.iso3834Desc')}
                                </span>
                            </div>
                        </li>

                        {/* Certification ISO 9001 */}
                        <li className="flex items-center gap-4 p-3 bg-slate-50 rounded-lg border border-slate-100 hover:bg-slate-100/80 transition-colors">
                            <a 
                                href="/images/00/9001.svg" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                title="Voir le certificat ISO 9001"
                                className="shrink-0 bg-white p-1 rounded shadow-sm border border-slate-200 block hover:opacity-80 transition-opacity"
                            >
                                <img 
                                    src="/images/00/9001.svg" 
                                    alt="Certification ISO 9001" 
                                    className="h-14 w-auto object-contain"
                                />
                            </a>
                            <div className="flex flex-col flex-1">
                                <div className="flex items-center justify-between gap-2">
                                  <span className="font-bold text-blue-900">{t('qhse.certifications.items.iso9001')}</span>
                                  <a href="/images/00/9001.svg" target="_blank" rel="noopener noreferrer" className="text-xs text-lime-600 hover:text-lime-700 font-semibold underline shrink-0">Voir certificat ↗</a>
                                </div>
                                <span className="text-slate-700 text-sm">
                                    {t('qhse.certifications.items.iso9001Desc')}
                                </span>
                            </div>
                        </li>

                        {/* Certification ISO 14001 */}
                        <li className="flex items-center gap-4 p-3 bg-slate-50 rounded-lg border border-slate-100 hover:bg-slate-100/80 transition-colors">
                            <a 
                                href="/images/00/14001.svg" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                title="Voir le certificat ISO 14001"
                                className="shrink-0 bg-white p-1 rounded shadow-sm border border-slate-200 block hover:opacity-80 transition-opacity"
                            >
                                <img 
                                    src="/images/00/14001.svg" 
                                    alt="Certification ISO 14001" 
                                    className="h-14 w-auto object-contain"
                                />
                            </a>
                            <div className="flex flex-col flex-1">
                                <div className="flex items-center justify-between gap-2">
                                  <span className="font-bold text-blue-900">{t('qhse.certifications.items.iso14001')}</span>
                                  <a href="/images/00/14001.svg" target="_blank" rel="noopener noreferrer" className="text-xs text-lime-600 hover:text-lime-700 font-semibold underline shrink-0">Voir certificat ↗</a>
                                </div>
                                <span className="text-slate-700 text-sm">
                                    {t('qhse.certifications.items.iso14001Desc')}
                                </span>
                            </div>
                        </li>

                        {/* Certification ISO 45001 */}
                        <li className="flex items-center gap-4 p-3 bg-slate-50 rounded-lg border border-slate-100 hover:bg-slate-100/80 transition-colors">
                            <a 
                                href="/images/00/45001.svg" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                title="Voir le certificat ISO 45001"
                                className="shrink-0 bg-white p-1 rounded shadow-sm border border-slate-200 block hover:opacity-80 transition-opacity"
                            >
                                <img 
                                    src="/images/00/45001.svg" 
                                    alt="Certification ISO 45001" 
                                    className="h-14 w-auto object-contain"
                                />
                            </a>
                            <div className="flex flex-col flex-1">
                                <div className="flex items-center justify-between gap-2">
                                  <span className="font-bold text-blue-900">{t('qhse.certifications.items.iso45001')}</span>
                                  <a href="/images/00/45001.svg" target="_blank" rel="noopener noreferrer" className="text-xs text-lime-600 hover:text-lime-700 font-semibold underline shrink-0">Voir certificat ↗</a>
                                </div>
                                <span className="text-slate-700 text-sm">
                                    {t('qhse.certifications.items.iso45001Desc')}
                                </span>
                            </div>
                        </li>

                        <li className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                            <span className="font-bold text-blue-900 min-w-[60px]">{t('qhse.certifications.items.aws')}</span>
                            <span 
                              className="text-slate-700 text-sm"
                              dangerouslySetInnerHTML={{ __html: t('qhse.certifications.items.awsDesc') }}
                            />
                        </li>
                        <li className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                            <span className="font-bold text-blue-900 min-w-[60px]">{t('qhse.certifications.items.asme')}</span>
                            <span 
                              className="text-slate-700 text-sm"
                              dangerouslySetInnerHTML={{ __html: t('qhse.certifications.items.asmeDesc') }}
                            />
                        </li>
                        <li className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                            <span className="font-bold text-blue-900 min-w-[60px]">{t('qhse.certifications.items.smq')}</span>
                            <span className="text-slate-700 text-sm">{t('qhse.certifications.items.smqDesc')}</span>
                        </li>
                        <li className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                            <span className="font-bold text-blue-900 min-w-[60px]">{t('qhse.certifications.items.doc')}</span>
                            <span className="text-slate-700 text-sm">{t('qhse.certifications.items.docDesc')}</span>
                        </li>
                    </ul>
                </div>

                {/* Illustration Technique */}
                <div className="h-full flex flex-col gap-4">
                    <img 
                        src={imgCerts} 
                        alt="Soudure de précision" 
                        className="rounded-2xl shadow-lg object-cover h-64 w-full"
                    />
                    <div className="bg-blue-900 text-white p-6 rounded-2xl shadow-lg">
                        <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                            <Globe className="h-5 w-5 text-lime-400" />
                            {t('qhse.certifications.internationalTitle')}
                        </h4>
                        <p className="text-sm opacity-90">
                            {t('qhse.certifications.internationalDesc')}
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* --- SECTION 4: CIBLE & OBJECTIFS --- */}
      <section className="py-16 mx-auto max-w-6xl px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
            
            {/* Image Cible */}
            <div className="w-full md:w-1/2">
                <img 
                    src={imgTarget} 
                    alt="Partenaires industriels" 
                    className="rounded-tr-[4rem] rounded-bl-[4rem] shadow-xl object-cover h-72 w-full border-2 border-slate-100"
                />
            </div>

            {/* Texte Cible */}
            <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-bold text-blue-900 mb-6">{t('qhse.clientele.title')}</h2>
                
                <div className="mb-6">
                    <h3 className="text-lg font-semibold text-slate-800 mb-2 flex items-center gap-2">
                        <Users className="h-5 w-5 text-lime-600" />
                        {t('qhse.clientele.whoWeSupport')}
                    </h3>
                    <p 
                      className="text-slate-600"
                      dangerouslySetInnerHTML={{ __html: t('qhse.clientele.supportDesc') }}
                    />
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-900 p-5 rounded-r-lg">
                    <h3 className="font-bold text-blue-900 mb-2">{t('qhse.clientele.ourObjective')}</h3>
                    <p className="text-slate-700 text-sm italic">
                        {t('qhse.clientele.objectiveDesc')}
                    </p>
                </div>
            </div>
        </div>
      </section>

    </div>
  )
}