/**
 * @file Page d'accueil du site EAST-GABON
 */

import { Link } from 'react-router'
import { useTranslation } from 'react-i18next'
import {
  ArrowRight,
  ShieldCheck,
  Clock,
  Handshake,
  FileCheck,
  Globe,
  Users
} from 'lucide-react'

// Images pour le contenu QHSE
import imgOverview from '../images/qhse/5.png'
import imgValues from '../images/qhse/2.png'
import imgCerts from '../images/qhse/3.png'
import imgTarget from '../images/qhse/4.png'

export default function Home() {
  const { t } = useTranslation()

  return (
    <main className="w-full">
      {/* 1. HERO IMMERSIF AVEC LES 6 CERTIFICATIONS */}
      <section className="relative w-full min-h-[640px] py-16 md:py-24 flex items-center bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/00/01.png" 
            alt="EAST-GABON Chantier" 
            className="w-full h-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/80 to-transparent"></div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-6xl px-4">
          <div className="max-w-3xl lg:max-w-4xl text-white">
            
            {/* 6 CERTIFICATIONS & NORMES MAJEURES AU-DESSUS DE LA PHRASE */}
            <div className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-lime-400 mb-3 flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" />
                Certifications & Normes Internationales d&apos;Excellence
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
                
                {/* 1. ISO 3834-2 */}
                <a
                  href="/images/00/3834.svg"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Certifié ISO 3834-2:2021 - Exigences de qualité en soudage"
                  className="group flex flex-col items-center justify-center p-2.5 rounded-xl bg-white/95 backdrop-blur shadow-lg hover:bg-white hover:scale-105 transition-all duration-200 border border-white/20 text-center"
                >
                  <img
                    src="/images/00/Certifié ISO 3834 EN.png"
                    alt="ISO 3834-2:2021"
                    className="h-9 sm:h-11 w-auto object-contain mb-1.5"
                  />
                  <span className="text-[11px] font-extrabold text-blue-950 leading-tight">ISO 3834-2</span>
                  <span className="text-[9px] font-semibold text-lime-700 uppercase">Soudage</span>
                </a>

                {/* 2. ISO 9001 */}
                <a
                  href="/images/00/9001.svg"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Certifié ISO 9001:2025 - Système de Management de la Qualité"
                  className="group flex flex-col items-center justify-center p-2.5 rounded-xl bg-white/95 backdrop-blur shadow-lg hover:bg-white hover:scale-105 transition-all duration-200 border border-white/20 text-center"
                >
                  <img
                    src="/images/00/9001.svg"
                    alt="ISO 9001:2025"
                    className="h-9 sm:h-11 w-auto object-contain mb-1.5 rounded"
                  />
                  <span className="text-[11px] font-extrabold text-blue-950 leading-tight">ISO 9001</span>
                  <span className="text-[9px] font-semibold text-lime-700 uppercase">Qualité</span>
                </a>

                {/* 3. ISO 14001 */}
                <a
                  href="/images/00/14001.svg"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Certifié ISO 14001:2015 - Système de Management Environnemental"
                  className="group flex flex-col items-center justify-center p-2.5 rounded-xl bg-white/95 backdrop-blur shadow-lg hover:bg-white hover:scale-105 transition-all duration-200 border border-white/20 text-center"
                >
                  <img
                    src="/images/00/14001.svg"
                    alt="ISO 14001:2015"
                    className="h-9 sm:h-11 w-auto object-contain mb-1.5 rounded"
                  />
                  <span className="text-[11px] font-extrabold text-blue-950 leading-tight">ISO 14001</span>
                  <span className="text-[9px] font-semibold text-lime-700 uppercase">Environnement</span>
                </a>

                {/* 4. ISO 45001 */}
                <a
                  href="/images/00/45001.svg"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Certifié ISO 45001:2018 - Santé et Sécurité au Travail"
                  className="group flex flex-col items-center justify-center p-2.5 rounded-xl bg-white/95 backdrop-blur shadow-lg hover:bg-white hover:scale-105 transition-all duration-200 border border-white/20 text-center"
                >
                  <img
                    src="/images/00/45001.svg"
                    alt="ISO 45001:2018"
                    className="h-9 sm:h-11 w-auto object-contain mb-1.5 rounded"
                  />
                  <span className="text-[11px] font-extrabold text-blue-950 leading-tight">ISO 45001</span>
                  <span className="text-[9px] font-semibold text-lime-700 uppercase">Santé & Sécurité</span>
                </a>

                {/* 5. AWS D1.1 */}
                <div
                  title="Norme AWS D1.1 Version 2020 - Structural Welding Code Steel"
                  className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-white/95 backdrop-blur shadow-lg hover:bg-white hover:scale-105 transition-all duration-200 border border-white/20 text-center"
                >
                  <div className="h-9 sm:h-11 flex items-center justify-center mb-1.5">
                    <span className="rounded-lg bg-blue-900 text-white font-black text-xs px-2.5 py-1 tracking-wider shadow-inner">
                      AWS
                    </span>
                  </div>
                  <span className="text-[11px] font-extrabold text-blue-950 leading-tight">D1.1 : 2020</span>
                  <span className="text-[9px] font-semibold text-lime-700 uppercase">Structure Métal</span>
                </div>

                {/* 6. ASME Section IX */}
                <div
                  title="Norme ASME Section IX ED.2021 - Tuyauterie Acier Carbone"
                  className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-white/95 backdrop-blur shadow-lg hover:bg-white hover:scale-105 transition-all duration-200 border border-white/20 text-center"
                >
                  <div className="h-9 sm:h-11 flex items-center justify-center mb-1.5">
                    <span className="rounded-lg bg-blue-900 text-white font-black text-xs px-2.5 py-1 tracking-wider shadow-inner">
                      ASME
                    </span>
                  </div>
                  <span className="text-[11px] font-extrabold text-blue-950 leading-tight">Section IX</span>
                  <span className="text-[9px] font-semibold text-lime-700 uppercase">Tuyauterie Acier</span>
                </div>

              </div>
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

      {/* --- CONTENU DE LA PAGE QHSE EN REMPLACEMENT DES SECTIONS EXPERTISE & RÉALISATIONS --- */}

      {/* QHSE 1 : EN-TÊTE & APERÇU */}
      <section className="relative bg-blue-900 py-16 md:py-20 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full bg-slate-900" /> 
        </div>
        <div className="relative mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 border-l-4 border-lime-500 pl-4">
              {t('qhse.pageTitle', 'Expertise, Normes & Qualité')}
            </h2>
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

      {/* QHSE 2 : NOS VALEURS */}
      <section className="py-16 md:py-24 mx-auto max-w-6xl px-4">
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
                {t('qhse.values.badge', 'Nos Piliers')}
              </div>
            </div>
          </div>

          {/* Contenu Valeurs */}
          <div className="w-full md:w-1/2 space-y-8">
            <h2 className="text-3xl font-bold text-blue-900">{t('qhse.values.title', 'Nos Valeurs Fondamentales')}</h2>
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

      {/* QHSE 3 : CERTIFICATIONS & NORMES INTERNATIONALES (AVEC VISUELS ET LIENS) */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900">{t('qhse.certifications.title', 'Certifications & Normes Internationales')}</h2>
            <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
              {t('qhse.certifications.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Carte des Certifications avec visuels associés */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-md border-t-4 border-blue-900">
              <div className="flex items-center gap-3 mb-6">
                <FileCheck className="h-8 w-8 text-lime-600" />
                <h3 className="text-xl font-bold text-slate-800">{t('qhse.certifications.qualificationsTitle', 'Nos Qualifications (QMOS/PQR)')}</h3>
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

            {/* Illustration Technique & Vocation Internationale */}
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

      {/* QHSE 4 : CIBLE & OBJECTIFS */}
      <section className="py-16 md:py-24 mx-auto max-w-6xl px-4">
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

      {/* SECTION : ACTUALITÉS FACEBOOK / ELFSIGHT */}
      <section className="w-full bg-slate-50 py-16 md:py-24 border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              {t('sections.blogTitle', 'Actualités & projets en cours')}
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              {t('sections.blogIntro', "Suivez nos dernières interventions sur le terrain.")}
            </p>
          </div>

          {/* WIDGET ELFSIGHT */}
          <div className="elfsight-app-8d85d7af-c4ab-47cb-b035-5042ae2c422f" data-elfsight-app-lazy></div>

          <div className="mt-10 text-center">
            <Link to="/blog" className="text-blue-900 font-bold hover:text-lime-600 transition-colors">
              {t('common.viewAll', 'Voir toutes les actualités')} →
            </Link>
          </div>
        </div>
      </section>

      {/* BANNIÈRE IMPACT / DEVIS */}
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

      {/* Section de fermeture avec contact */}
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