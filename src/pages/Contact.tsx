/**
 * @file Contact page with a basic contact form integrated with Web3Forms.
 */

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

// On définit la structure des données directement ici
interface ContactFormPayload {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}

export default function ContactPage() {
  const { t } = useTranslation()
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<ContactFormPayload>()
  
  const [submitted, setSubmitted] = useState(false)

  /**
   * Envoi des données vers Web3Forms au format JSON
   */
  const onSubmit = async (data: ContactFormPayload) => {
    setSubmitted(false)
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          // 🚨 REMPLACEZ LA CLÉ CI-DESSOUS PAR CELLE REÇUE PAR EMAIL
          access_key: "f1c683b4-eba6-4046-b0c6-08cd5d1395e0",
          ...data,
          subject: `Contact Web: ${data.subject || 'Nouveau message'}`,
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
        {t('contact.pageTitle')}
      </h1>
      <p className="mt-3 text-sm text-slate-700">{t('contact.intro')}</p>

      <form
        className="mt-8 space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wide text-slate-700">
            {t('contact.name')}
          </label>
          <input
            id="name"
            {...register('name', { required: true })}
            className="mt-1 w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-900 focus:ring-2 focus:ring-blue-200"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wide text-slate-700">
            {t('contact.email')}
          </label>
          <input
            id="email"
            type="email"
            {...register('email', { required: true })}
            className="mt-1 w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-900 focus:ring-2 focus:ring-blue-200"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wide text-slate-700">
            {t('contact.phone')}
          </label>
          <input
            id="phone"
            {...register('phone')}
            className="mt-1 w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-900 focus:ring-2 focus:ring-blue-200"
          />
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wide text-slate-700">
            {t('contact.subject')}
          </label>
          <input
            id="subject"
            {...register('subject', { required: true })}
            className="mt-1 w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-900 focus:ring-2 focus:ring-blue-200"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wide text-slate-700">
            {t('contact.message')}
          </label>
          <textarea
            id="message"
            rows={5}
            {...register('message', { required: true })}
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
          <p className="text-sm font-medium text-green-700 mt-2 text-center">{t('contact.success')}</p>
        )}
      </form>
    </div>
  )
}