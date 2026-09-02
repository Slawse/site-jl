import { useEffect } from 'react'
import { HIGHLIGHTS } from '../data/highlights'
import { useLanguage } from '../i18n/LanguageContext'

function HighlightModal({ activeSlug, onClose }) {
  const { t, lang } = useLanguage()
  const active = HIGHLIGHTS[lang].find((h) => h.slug === activeSlug)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [onClose])

  if (!active) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal-close" onClick={onClose} aria-label={t.domains.close}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <div className="modal-content">
          <h3>{active.title}</h3>
          <div className="modal-body">
            {active.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HighlightModal
