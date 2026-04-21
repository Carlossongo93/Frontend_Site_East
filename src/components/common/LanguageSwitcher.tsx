/**
 * @file LanguageSwitcher component allowing users to toggle site language between French and English.
 */

import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

/**
 * Props for the LanguageSwitcher component.
 */
interface LanguageSwitcherProps {
  /** When true, renders a compact pill version (e.g. for mobile header). */
  compact?: boolean
}

/**
 * LanguageSwitcher toggles the active i18n language between FR and EN.
 */
const LanguageSwitcher: FC<LanguageSwitcherProps> = ({ compact }) => {
  const { i18n } = useTranslation()

  // Normalise current language to "fr" or "en"
  const current: 'fr' | 'en' = i18n.language.startsWith('en') ? 'en' : 'fr'

  /**
   * Changes the active language if different from the current one.
   */
  const changeLang = (lng: 'fr' | 'en') => {
    if (lng !== current) {
      void i18n.changeLanguage(lng)
    }
  }

  const baseClass =
    'inline-flex items-center justify-center rounded-full border px-2 py-1 text-[11px] font-semibold uppercase tracking-wide transition-colors'
  const activeClass = 'border-blue-900 bg-blue-900 text-white'
  const inactiveClass =
    'border-slate-300 bg-white text-slate-700 hover:border-blue-900 hover:text-blue-900'

  if (compact) {
    return (
      <button
        type="button"
        className={`${baseClass} ${activeClass}`}
        aria-label={`Language: ${current.toUpperCase()}`}
        onClick={() => changeLang(current === 'fr' ? 'en' : 'fr')}
      >
        {current.toUpperCase()}
      </button>
    )
  }

  return (
    <div className="inline-flex items-center gap-1">
      <button
        type="button"
        className={`${baseClass} ${
          current === 'fr' ? activeClass : inactiveClass
        }`}
        onClick={() => changeLang('fr')}
      >
        FR
      </button>
      <button
        type="button"
        className={`${baseClass} ${
          current === 'en' ? activeClass : inactiveClass
        }`}
        onClick={() => changeLang('en')}
      >
        EN
      </button>
    </div>
  )
}

export default LanguageSwitcher