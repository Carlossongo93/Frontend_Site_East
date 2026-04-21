/**
 * @file QHSEHighlight component summarising the QHSE commitment on the home page.
 */

import { Link } from 'react-router'
import { useTranslation } from 'react-i18next'

/**
 * QHSEHighlight shows a compact card linking to the full QHSE page.
 */
export default function QHSEHighlight() {
  const { t } = useTranslation()

  return (
    <section className="bg-slate-900 text-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 md:flex-row md:items-center md:justify-between md:py-14">
        <div className="max-w-xl">
          <h2 className="text-2xl font-bold text-lime-400">
            {t('sections.qhseTitle')}
          </h2>
          <p className="mt-2 text-sm text-slate-200">
            {t('sections.qhseIntro')}
          </p>
        </div>
        <div className="space-y-2 text-xs text-slate-200">
          <p>
            • Procédures QHSE adaptées aux chantiers gabonais (EPI, consignation,
            contrôle d’accès).
          </p>
          <p>
            • Suivi des indicateurs clés : accidents, quasi-accidents, non
            conformités et plans d’actions.
          </p>
          <p>
            • Intégration des contraintes environnementales : gestion des
            déchets, nuisances et protections des milieux naturels.
          </p>
          <Link
            to="/qhse"
            className="mt-3 inline-flex text-xs font-semibold text-lime-300 underline-offset-4 hover:underline"
          >
            {t('common.learnMore')}
          </Link>
        </div>
      </div>
    </section>
  )
}