/**
 * @file About page describing the company profile.
 */

import { useTranslation } from 'react-i18next'

/**
 * AboutPage displays institutional content about EAST-GABON.
 */
export default function AboutPage() {
  const { t } = useTranslation()

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 md:py-14">
      <h1 className="text-3xl font-bold text-blue-900">
        {t('about.pageTitle')}
      </h1>
      <p className="mt-4 text-sm text-slate-700">{t('about.content')}</p>
    </div>
  )
}