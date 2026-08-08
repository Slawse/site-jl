import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

const NAV_LINKS = [
  { to: '/', label: 'Accueil', end: true },
  { to: '/expertise', label: 'Expertise' },
  { to: '/solution', label: 'Ma solution' },
]

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container">
        <Link to="/" className="brand">
          <span className="brand-mark">JL</span>
          <span className="brand-text">
            <span className="brand-name">Jean-Louis Labernardière</span>
            <span className="brand-tagline">JLL Conseil &amp; Innovation</span>
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
          <Link to="/contact" className="btn btn-primary">
            Prendre contact
          </Link>
          <button
            type="button"
            className="nav-toggle"
            aria-label="Ouvrir le menu"
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
        <Link to="/contact" className="btn btn-primary" onClick={() => setOpen(false)}>
          Prendre contact
        </Link>
      </div>
    </header>
  )
}

export default Header
