import { Link } from 'react-router-dom'

const CONTACT_EMAIL = 'j.labernardiere@gmail.com'
const LINKEDIN_URL = 'https://www.linkedin.com/in/jean-louis-labernardi%C3%A8re-780a0980/'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="footer-brand-name">JLL Conseil &amp; Innovation</span>
          <p className="footer-tagline">
            Faire performer les laboratoires qui portent l'innovation.
          </p>
        </div>

        <div className="footer-nav">
          <span className="footer-col-title">Navigation</span>
          <Link to="/">Accueil</Link>
          <Link to="/expertise">Expertise</Link>
          <Link to="/solution">Ma solution</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-contact">
          <span className="footer-col-title">Contact</span>
          <a href={`mailto:${CONTACT_EMAIL}`} className="footer-contact-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l9 7 9-7M3 6h18v12H3V6z" />
            </svg>
            {CONTACT_EMAIL}
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-contact-link"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S.02 4.88.02 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.24h4V23h-4V8.24zM8.5 8.24h3.83v2.02h.05c.53-1 1.85-2.06 3.8-2.06 4.07 0 4.82 2.68 4.82 6.16V23h-4v-6.72c0-1.6-.03-3.66-2.23-3.66-2.23 0-2.57 1.75-2.57 3.55V23h-4V8.24z" />
            </svg>
            LinkedIn
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {year} Jean-Louis Labernardière — JLL Conseil &amp; Innovation</p>
        <Link to="/mentions-legales" className="footer-legal-link">
          Mentions légales
        </Link>
      </div>
    </footer>
  )
}

export default Footer
