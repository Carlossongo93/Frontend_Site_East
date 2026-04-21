/**
 * @file Contact page with a basic contact form.
 */

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { submitContactMessage, type ContactFormPayload } from '../shared/api/forms'

/**
 * ContactPage renders a form for general enquiries.
 */
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
   * Handles form submission by calling the simulated API helper.
   */
  const onSubmit = async (data: ContactFormPayload) => {
    setSubmitted(false)
    await submitContactMessage(data)
    setSubmitted(true)
    reset()
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
          <label
            htmlFor="name"
            className="block text-xs font-semibold uppercase tracking-wide text-slate-700"
          >
            {t('contact.name')}
          </label>
          <input
            id="name"
            {...register('name', { required: true })}
            className="mt-1 w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-900 focus:ring-2 focus:ring-blue-200"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-xs font-semibold uppercase tracking-wide text-slate-700"
          >
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
          <label
            htmlFor="phone"
            className="block text-xs font-semibold uppercase tracking-wide text-slate-700"
          >
            {t('contact.phone')}
          </label>
          <input
            id="phone"
            {...register('phone')}
            className="mt-1 w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-900 focus:ring-2 focus:ring-blue-200"
          />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block text-xs font-semibold uppercase tracking-wide text-slate-700"
          >
            {t('contact.subject')}
          </label>
          <input
            id="subject"
            {...register('subject', { required: true })}
            className="mt-1 w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-900 focus:ring-2 focus:ring-blue-200"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-xs font-semibold uppercase tracking-wide text-slate-700"
          >
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
          <p className="text-xs text-green-700">{t('contact.success')}</p>
        )}
      </form>
    </div>
  )
}

function submitContact(data: ContactFormPayload) {
  throw new Error('Function not implemented.')
}
