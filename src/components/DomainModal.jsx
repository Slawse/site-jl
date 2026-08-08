import { useEffect } from 'react'
import DomainImage from './DomainImage'

function DomainModal({ domain, onClose, onPrev, onNext }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [onClose, onPrev, onNext])

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box domain-modal-box" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal-close" onClick={onClose} aria-label="Fermer">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <div className="domain-modal-grid is-light">
          <div className="domain-modal-image">
            <DomainImage domain={domain} />
            <span className="domain-number">{domain.number}</span>
          </div>

          <div className="domain-modal-content">
            <h3>{domain.title}</h3>

            {domain.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}

            {domain.bullets && (
              <>
                {domain.bulletsIntro && <p className="domain-bullets-intro">{domain.bulletsIntro}</p>}
                <ul className="domain-bullets">
                  {domain.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </>
            )}

            {domain.body?.map((p) => (
              <p key={p}>{p}</p>
            ))}

            <div className="domain-highlight domain-highlight-inline">
              <svg
                className="domain-highlight-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4L12 2z" />
              </svg>
              <span className="domain-highlight-label">Ce qui fait la différence</span>
              <p>{domain.highlight}</p>
            </div>

            {domain.outro?.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>

        <div className="domain-modal-nav">
          <button type="button" className="carousel-arrow" onClick={onPrev} aria-label="Domaine précédent">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 6l-6 6 6 6" />
            </svg>
          </button>
          <button type="button" className="carousel-arrow" onClick={onNext} aria-label="Domaine suivant">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default DomainModal
