/**
 * @file Root application component configuring routing for the EAST-GABON site.
 */

import { HashRouter, Route, Routes } from 'react-router'
import './i18n'
import MainLayout from './layout/MainLayout'
import HomePage from './pages/Home'
import ServicesPage from './pages/Services'
import PortfolioPage from './pages/Portfolio'
import BlogPage from './pages/Blog'
import AboutPage from './pages/About'
import QHSEPage from './pages/QHSE'
import ContactPage from './pages/Contact'
import QuotePage from './pages/Quote'

/**
 * App wires up React Router with all main pages wrapped in the MainLayout.
 */
export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="qhse" element={<QHSEPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="quote" element={<QuotePage />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}