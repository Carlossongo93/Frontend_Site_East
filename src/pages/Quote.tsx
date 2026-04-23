/**
 * @file Quote page with a project quote request form integrated with Web3Forms.
 */

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

// Structure des données de devis
interface QuoteRequestPayload {
  clientName: string
  clientEmail: string
  clientPhone?: string
  projectType?: string
  location?: string
  budget?: string
  details: string
}

export default function QuotePage() {
  const { t } = useTranslation()
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<QuoteRequestPayload>()
  
  const [submitted, setSubmitted] = useState(false)

  /**
   * Envoi des données vers Web3Forms au format JSON
   */
  const onSubmit = async (data: QuoteRequestPayload) => {
    setSubmitted(false)
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          // 🚨 REMPLACEZ LA CLÉ CI-DESSOUS PAR LA MÊME CLÉ QUE POUR LE CONTACT
          access_key: "f1c683b4-eba6-4046-b0c6-08cd5d1395e0",
          subject: `Nouvelle demande de devis : ${data.projectType || 'Projet BTP'}`,
          from_name: "EAST-GABON Devis",
          // On passe les données du formulaire
          ...data
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true)
        reset() // Vide le formulaire
      } else {
        console.error("Erreur Web3Forms:", result)
        alert("Une erreur est survenue lors de l'envoi. Veuillez réessayer.")
      }
    } catch (error) {
      console.error("Erreur réseau:", error)
      alert("Problème de connexion au serveur.")
    }
  }

  return (
    <div className="mx-auto max-w-xl px-4 py-10 md:py-14">
      <h1 className="text-3xl font-bold text-blue-900">
        {t('quote.pageTitle')}
      </h1>
      <p className="mt-3 text-sm text-slate-700">{t('quote.intro')}</p>

      <form
        className="mt-8 space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label htmlFor="clientName" className="block text-xs font-semibold uppercase tracking-wide text-slate-700">
            {t('quote.clientName')}
          </label>
          <input
            id="clientName"
            {...register('clientName', { required: true })}
            className="mt-1 w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-900 focus:ring-2 focus:ring-blue-200"
          />
        </div>
        
        <div>
          <label htmlFor="clientEmail" className="block text-xs font-semibold uppercase tracking-wide text-slate-700">
            {t('quote.clientEmail')}
          </label>
          <input
            id="clientEmail"
            type="email"
            {...register('clientEmail', { required: true })}
            className="mt-1 w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-900 focus:ring-2 focus:ring-blue-200"
          />
        </div>
        
        <div>
          <label htmlFor="clientPhone" className="block text-xs font-semibold uppercase tracking-wide text-slate-700">
            {t('quote.clientPhone')}
          </label>
          <input
            id="clientPhone"
            {...register('clientPhone')}
            className="mt-1 w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-900 focus:ring-2 focus:ring-blue-200"
          />
        </div>
        
        <div>
          <label htmlFor="projectType" className="block text-xs font-semibold uppercase tracking-wide text-slate-700">
            {t('quote.projectType')}
          </label>
          <input
            id="projectType"
            {...register('projectType')}
            className="mt-1 w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-900 focus:ring-2 focus:ring-blue-200"
          />
        </div>
        
        <div>
          <label htmlFor="location" className="block text-xs font-semibold uppercase tracking-wide text-slate-700">
            {t('quote.location')}
          </label>
          <input
            id="location"
            {...register('location')}
            className="mt-1 w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-900 focus:ring-2 focus:ring-blue-200"
          />
        </div>
        
        <div>
          <label htmlFor="budget" className="block text-xs font-semibold uppercase tracking-wide text-slate-700">
            {t('quote.budget')}
          </label>
          <input
            id="budget"
            {...register('budget')}
            className="mt-1 w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-900 focus:ring-2 focus:ring-blue-200"
          />
        </div>
        
        <div>
          <label htmlFor="details" className="block text-xs font-semibold uppercase tracking-wide text-slate-700">
            {t('quote.details')}
          </label>
          <textarea
            id="details"
            rows={6}
            {...register('details', { required: true })}
            className="mt-1 w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-900 focus:ring-2 focus:ring-blue-200"
          />
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-full justify-center rounded-full bg-blue-900 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-sm transition hover:bg-blue-800 disabled:opacity-60"
        >
          {isSubmitting ? t('common.loading') : t('common.submit')}
        </button>
        
        {submitted && (
          <p className="text-sm font-medium text-green-700 mt-2 text-center">{t('quote.success')}</p>
        )}
      </form>
    </div>
  )
}