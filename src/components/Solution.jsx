import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'

function Solution() {
  const { t } = useLanguage()
  const s = t.solution

  return (
    <section className="solution">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">{s.eyebrow}</span>
          <h2>{s.title}</h2>
        </div>

        <div className="solution-grid">
          {s.blocks.map((block, i) => (
            <div className="solution-card" key={block.title}>
              <h3>{block.title}</h3>
              <p className="solution-intro">{block.intro}</p>
              <ul className={`solution-list${i === 1 ? ' solution-list-dense' : ''}`}>
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="solution-cta-banner">
        <div className="container solution-cta-banner-inner">
          <div>
            <h3>{s.ctaTitle}</h3>
            <p>{s.ctaText}</p>
          </div>
          <Link to="/contact" className="btn btn-primary">
            {s.ctaButton}
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Solution
