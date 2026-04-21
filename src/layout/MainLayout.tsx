/**
 * @file MainLayout component defining the shared shell (header, footer) for all pages.
 */

import type { ReactNode } from 'react'
import { Outlet, Link, useLocation } from 'react-router'
import { useTranslation } from 'react-i18next'
import { Facebook, Linkedin, Instagram, MapPin, Phone, Mail } from 'lucide-react'
import LanguageSwitcher from '../components/common/LanguageSwitcher'

/**
 * Props for the MainLayout component.
 */
interface MainLayoutProps {
  /**
   * Optional children used when the layout is consumed directly.
   */
  children?: ReactNode
}

/**
 * MainLayout renders the global site chrome with header, navigation and footer.
 * Nested routes are displayed inside the content area via <Outlet />.
 */
export default function MainLayout({ children }: MainLayoutProps) {
  const { t } = useTranslation()
  const location = useLocation()

  const currentPath = location.pathname || '/'

  /**
   * Returns whether a navigation link is considered active.
   */
  const isActive = (path: string): boolean => {
    if (path === '/') {
      return currentPath === '/' || currentPath === ''
    }
    return currentPath.startsWith(path)
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur sticky top-0 z-50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="https://pub-cdn.sider.ai/u/U0L5HAK1Y90/web-coder/6950810df028f342ba2e2e5f/resource/cd72d763-d436-4fc2-bda3-46cdee9ab638.jpg"
              alt={t('brand.name')}
              className="h-10 w-auto object-contain"
            />
            <div className="leading-tight">
              <div className="text-base font-extrabold tracking-wide text-blue-900 md:text-lg">
                {t('brand.name')}
              </div>
              <div className="text-xs font-medium text-lime-700 md:text-sm">
                {t('brand.baseline')}
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            <NavLink to="/" active={isActive('/')}>
              {t('nav.home')}
            </NavLink>
            <NavLink to="/services" active={isActive('/services')}>
              {t('nav.services')}
            </NavLink>
            <NavLink to="/portfolio" active={isActive('/portfolio')}>
              {t('nav.portfolio')}
            </NavLink>
            <NavLink to="/blog" active={isActive('/blog')}>
              {t('nav.blog')}
            </NavLink>
            <NavLink to="/qhse" active={isActive('/qhse')}>
              {t('nav.qhse')}
            </NavLink>
            <NavLink to="/contact" active={isActive('/contact')}>
              {t('nav.contact')}
            </NavLink>
            <LanguageSwitcher />
            <Link
              to="/quote"
              className="rounded-full bg-blue-900 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-sm transition hover:bg-blue-800"
            >
              {t('nav.quote')}
            </Link>
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitcher compact />
            <Link
              to="/quote"
              className="rounded-full bg-blue-900 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-white shadow-sm transition hover:bg-blue-800"
            >
              {t('nav.quote')}
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {children ?? <Outlet />}
      </main>

      {/* --- FOOTER ENRICHI --- */}
      <footer className="border-t border-slate-200 bg-white pt-12 pb-6">
        <div className="mx-auto max-w-6xl px-4">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            {/* Colonne 1 : Marque & Description */}
            <div className="flex flex-col gap-4">
              <Link to="/" className="flex items-center gap-3">
                <img
                  src="https://pub-cdn.sider.ai/u/U0L5HAK1Y90/web-coder/6950810df028f342ba2e2e5f/resource/cd72d763-d436-4fc2-bda3-46cdee9ab638.jpg"
                  alt={t('brand.name')}
                  className="h-10 w-auto object-contain"
                />
                <div className="leading-tight">
                  <div className="text-base font-extrabold tracking-wide text-blue-900">
                    {t('brand.name')}
                  </div>
                </div>
              </Link>
              <p className="text-sm text-slate-600 leading-relaxed">
                {t('hero.subtitle', "EAST-GABON accompagne les maîtres d'ouvrage publics et privés de l'étude à la réalisation.")}
              </p>
            </div>

            {/* Colonne 2 : Liens Rapides */}
            <div>
              <h3 className="font-bold text-blue-900 mb-4 uppercase tracking-wide text-xs">
                {t('footer.quickLinks', 'Liens Rapides')}
              </h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><Link to="/" className="hover:text-blue-900 transition-colors">{t('nav.home')}</Link></li>
                <li><Link to="/services" className="hover:text-blue-900 transition-colors">{t('nav.services')}</Link></li>
                <li><Link to="/portfolio" className="hover:text-blue-900 transition-colors">{t('nav.portfolio')}</Link></li>
                <li><Link to="/qhse" className="hover:text-blue-900 transition-colors">{t('nav.qhse')}</Link></li>
                <li><Link to="/about" className="hover:text-blue-900 transition-colors">{t('nav.about')}</Link></li>
                <li><Link to="/contact" className="hover:text-blue-900 transition-colors">{t('nav.contact')}</Link></li>
              </ul>
            </div>

            {/* Colonne 3 : Contact */}
            <div>
              <h3 className="font-bold text-blue-900 mb-4 uppercase tracking-wide text-xs">
                {t('footer.contactTitle', 'Nous Contacter')}
              </h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 shrink-0 text-lime-600 mt-0.5" />
                  <span>Alibadeng, vers 3 Manguiers<br />5919 Libreville, Gabon</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="h-4 w-4 shrink-0 text-lime-600 mt-0.5" />
                  <span>+241 11 44 29 23<br />+241 66 79 16 86</span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="h-4 w-4 shrink-0 text-lime-600 mt-0.5" />
                  <span>contact@eastgabon.com</span>
                </li>
              </ul>
            </div>

            {/* Colonne 4 : Réseaux Sociaux */}
            <div>
              <h3 className="font-bold text-blue-900 mb-4 uppercase tracking-wide text-xs">
                {t('footer.socials', 'Suivez-nous')}
              </h3>
              <div className="flex items-center gap-3">
                <a href="https://www.facebook.com/eastgabon" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-blue-900 hover:text-white" aria-label="Facebook">
                  <Facebook className="h-4 w-4" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-blue-900 hover:text-white" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-blue-900 hover:text-white" aria-label="Instagram">
                  <Instagram className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Bandeau inférieur avec droits et concepteur */}
          <div className="border-t border-slate-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div className="text-center md:text-left">
              &copy; {new Date().getFullYear()} EAST-GABON. {t('footer.rights', 'Tous droits réservés.')}
            </div>
            <div className="text-center md:text-right">
              {t('footer.designedBy', 'Conçu par')} <a href="https://international-ia.tech" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-900 transition-colors hover:text-lime-600">International-IA</a>
            </div>
          </div>

        </div>
      </footer>
    </div>
  )
}

/**
 * Props for the NavLink helper component.
 */
interface NavLinkProps {
  /**
   * Target path for the navigation link.
   */
  to: string
  /**
   * Child content (label).
   */
  children: ReactNode
  /**
   * Whether the link is currently active.
   */
  active?: boolean
}

/**
 * NavLink is a simple wrapper around Link to render styled navigation items.
 */
function NavLink({ to, children, active }: NavLinkProps) {
  return (
    <Link
      to={to}
      className={`border-b-2 pb-1 text-xs uppercase tracking-wide transition-colors ${
        active
          ? 'border-blue-900 text-blue-900'
          : 'border-transparent text-slate-700 hover:text-blue-900'
      }`}
    >
      {children}
    </Link>
  )
}