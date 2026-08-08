import { useState } from 'react'
import { DOMAINS } from '../data/domains'
import DomainModal from './DomainModal'
import DomainImage from './DomainImage'

function Domains() {
  const [index, setIndex] = useState(0)
  const [modalOpen, setModalOpen] = useState(false)
  const total = DOMAINS.length
  const domain = DOMAINS[index]
  const isDark = index % 2 === 0
  const prevDomain = DOMAINS[(index - 1 + total) % total]
  const nextDomain = DOMAINS[(index + 1) % total]

  const goTo = (i) => setIndex((i + total) % total)

  return (
    <section className="domains">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Mes domaines d'intervention</span>
          <h2>Une expertise couvrant l'ensemble des opérations de laboratoire</h2>
        </div>
      </div>

      <div className="domain-carousel">
        <button
          type="button"
          className="carousel-arrow carousel-arrow-prev"
          onClick={() => goTo(index - 1)}
          aria-label="Domaine précédent"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 6l-6 6 6 6" />
          </svg>
        </button>

        <div className="carousel-stage">
          <button
            type="button"
            className="carousel-peek carousel-peek-prev"
            onClick={() => goTo(index - 1)}
            aria-label={`Voir : ${prevDomain.title}`}
          >
            <DomainImage domain={prevDomain} className="carousel-peek-image" showLabel={false} />
            <span className="carousel-peek-title">{prevDomain.title}</span>
          </button>

          <article
            className={`domain-preview-card${isDark ? ' is-dark' : ' is-light'}`}
            key={domain.number}
          >
            <button type="button" className="domain-preview-inner" onClick={() => setModalOpen(true)}>
              <DomainImage domain={domain} />

              <span className="domain-number">{domain.number}</span>
              <h3>{domain.title}</h3>
              <p className="domain-preview-excerpt">{domain.intro[0]}</p>
              <span className="highlight-link">En savoir plus →</span>
            </button>
          </article>

          <button
            type="button"
            className="carousel-peek carousel-peek-next"
            onClick={() => goTo(index + 1)}
            aria-label={`Voir : ${nextDomain.title}`}
          >
            <DomainImage domain={nextDomain} className="carousel-peek-image" showLabel={false} />
            <span className="carousel-peek-title">{nextDomain.title}</span>
          </button>
        </div>

        <button
          type="button"
          className="carousel-arrow carousel-arrow-next"
          onClick={() => goTo(index + 1)}
          aria-label="Domaine suivant"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" />
          </svg>
        </button>
      </div>

      <div className="container">
        <div className="carousel-dots">
          {DOMAINS.map((d, i) => (
            <button
              key={d.number}
              type="button"
              className={i === index ? 'active' : ''}
              onClick={() => goTo(i)}
              aria-label={`Aller au domaine ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {modalOpen && (
        <DomainModal
          domain={domain}
          onClose={() => setModalOpen(false)}
          onPrev={() => goTo(index - 1)}
          onNext={() => goTo(index + 1)}
        />
      )}
    </section>
  )
}

export default Domains
