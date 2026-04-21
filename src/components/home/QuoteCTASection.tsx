/**
 * @file QuoteCTASection component encouraging visitors to request a quote.
 */

import { Link } from 'react-router'
import { useTranslation } from 'react-i18next'

/**
 * QuoteCTASection displays a call-to-action area leading to the quote form.
 */
export default function QuoteCTASection() {
  const { t } = useTranslation()

  return (
    <section className="bg-lime-600">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-4 py-10 text-white md:flex-row md:items-center md:justify-between md:py-12">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">
            {t('sections.quoteTitle')}
          </h2>
          <p className="mt-2 max-w-xl text-sm text-lime-50">
            {t('sections.quoteIntro')}
          </p>
        </div>
        <Link
          to="/quote"
          className="rounded-full bg-white px-6 py-2 text-xs font-semibold uppercase tracking-wide text-lime-700 shadow-sm transition hover:bg-lime-50"
        >
          {t('nav.quote')}
        </Link>
      </div>
    </section>
  )
}