import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'

function Header() {
  const [open, setOpen] = useState(false)
  const { t, lang, toggleLang } = useLanguage()

  const NAV_LINKS = [
    { to: '/', label: t.header.navHome, end: true },
    { to: '/expertise', label: t.header.navExpertise },
    { to: '/solution', label: t.header.navSolution },
  ]

  return (
    <header className="site-header">
      <div className="container">
        <Link to="/" className="brand">
          <span className="brand-mark">JL</span>
          <span className="brand-text">
            <span className="brand-name">{t.header.brandName}</span>
            <span className="brand-tagline">{t.header.brandTagline}</span>
          </span>
        </Link>

        <nav className="nav-links">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <button
            type="button"
            className="lang-toggle"
            onClick={toggleLang}
            aria-label={lang === 'fr' ? 'Switch to English' : 'Passer en français'}
          >
            {t.header.langSwitch}
          </button>
          <Link to="/contact" className="btn btn-primary">
            {t.header.contactCta}
          </Link>
          <button
            type="button"
            className="nav-toggle"
            aria-label={t.header.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div className={`mobile-menu${open ? ' open' : ''}`}>
        {NAV_LINKS.map((link) => (
          <NavLink key={link.to} to={link.to} end={link.end} onClick={() => setOpen(false)}>
            {link.label}
          </NavLink>
        ))}
        <button
          type="button"
          className="lang-toggle lang-toggle-mobile"
          onClick={toggleLang}
        >
          {t.header.langSwitch}
        </button>
        <Link to="/contact" className="btn btn-primary" onClick={() => setOpen(false)}>
          {t.header.contactCta}
        </Link>
      </div>
    </header>
  )
}

export default Header
