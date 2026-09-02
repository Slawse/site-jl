import { useState } from 'react'
import { DOMAINS } from '../data/domains'
import DomainModal from './DomainModal'
import DomainImage from './DomainImage'
import { useLanguage } from '../i18n/LanguageContext'

function Domains() {
  const [index, setIndex] = useState(0)
  const [modalOpen, setModalOpen] = useState(false)
  const { t, lang } = useLanguage()
  const d = t.domains
  const DOMAIN_LIST = DOMAINS[lang]
  const total = DOMAIN_LIST.length
  const domain = DOMAIN_LIST[index]
  const isDark = index % 2 === 0
  const prevDomain = DOMAIN_LIST[(index - 1 + total) % total]
  const nextDomain = DOMAIN_LIST[(index + 1) % total]

  const goTo = (i) => setIndex((i + total) % total)

  return (
    <section className="domains">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">{d.eyebrow}</span>
          <h2>{d.title}</h2>
        </div>
      </div>

      <div className="domain-carousel">
        <button
          type="button"
          className="carousel-arrow carousel-arrow-prev"
          onClick={() => goTo(index - 1)}
          aria-label={d.prevAria}
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
            aria-label={d.seeLabel(prevDomain.title)}
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
              <span className="highlight-link">{d.readMore}</span>
            </button>
          </article>

          <button
            type="button"
            className="carousel-peek carousel-peek-next"
            onClick={() => goTo(index + 1)}
            aria-label={d.seeLabel(nextDomain.title)}
          >
            <DomainImage domain={nextDomain} className="carousel-peek-image" showLabel={false} />
            <span className="carousel-peek-title">{nextDomain.title}</span>
          </button>
        </div>

        <button
          type="button"
          className="carousel-arrow carousel-arrow-next"
          onClick={() => goTo(index + 1)}
          aria-label={d.nextAria}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" />
          </svg>
        </button>
      </div>

      <div className="container">
        <div className="carousel-dots">
          {DOMAIN_LIST.map((dm, i) => (
            <button
              key={dm.number}
              type="button"
              className={i === index ? 'active' : ''}
              onClick={() => goTo(i)}
              aria-label={d.goToLabel(i + 1)}
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
