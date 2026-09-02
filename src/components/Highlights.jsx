import { useState } from 'react'
import { HIGHLIGHTS } from '../data/highlights'
import HighlightModal from './HighlightModal'
import { useLanguage } from '../i18n/LanguageContext'

const ICONS = {
  target: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="0.8" fill="currentColor" />
    </svg>
  ),
  network: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="18" cy="6" r="2.5" />
      <circle cx="12" cy="18" r="2.5" />
      <path strokeLinecap="round" d="M8 7.2L15.5 16M16 7.2L8.5 16" />
    </svg>
  ),
  wrench: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.7 6.3a3 3 0 10-4.2 4.2L3 18l3 3 7.5-7.5a3 3 0 004.2-4.2l-2.6 2.6-2.1-2.1 2.6-2.6z" />
    </svg>
  ),
  people: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="9" cy="8" r="3" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M16 8.5a2.5 2.5 0 110-5M16 20c0-2.5-1-4.6-2.6-5.8" />
    </svg>
  ),
  flag: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 21V4m0 1h13l-3 4 3 4H5" />
    </svg>
  ),
}

function Highlights() {
  const [activeSlug, setActiveSlug] = useState(null)
  const { t, lang } = useLanguage()
  const items = HIGHLIGHTS[lang]

  return (
    <section className="highlights">
      <div className="container">
        <div className="highlights-grid">
          {items.map((item) => (
            <button
              type="button"
              className="highlight-card"
              key={item.slug}
              onClick={() => setActiveSlug(item.slug)}
            >
              <div className="service-icon">{ICONS[item.icon]}</div>
              <h3>{item.title}</h3>
              <p>{item.excerpt}</p>
              <span className="highlight-link">{t.highlights.readMore}</span>
            </button>
          ))}
        </div>
      </div>

      {activeSlug && (
        <HighlightModal
          activeSlug={activeSlug}
          onClose={() => setActiveSlug(null)}
        />
      )}
    </section>
  )
}

export default Highlights
