import { Link } from 'react-router-dom'
import photo from '../assets/jl-photo.jpg'
import { useLanguage } from '../i18n/LanguageContext'

function Hero() {
  const { t } = useLanguage()
  const h = t.hero

  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">{h.eyebrow}</span>
            <p className="hero-name">{h.name}</p>
            <h1>{h.title}</h1>

            <ul className="hero-tags">
              {h.tags.map((tag) => (
                <li key={tag} className="hero-tag">
                  {tag}
                </li>
              ))}
            </ul>

            <div className="lede-group">
              <p className="lede">{h.lede1}</p>
              <p className="lede">{h.lede2}</p>
              <p className="lede">{h.lede3}</p>
            </div>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">
                {h.ctaPrimary}
              </Link>
              <Link to="/expertise" className="btn btn-outline">
                {h.ctaSecondary}
              </Link>
            </div>
          </div>

          <div className="hero-photo">
            <div className="photo-frame">
              <img src={photo} alt={h.photoAlt} />
            </div>
          </div>
        </div>

        <div className="stats-bar">
          <div className="stats-inner">
            <div className="stat-item">
              <div className="stat-value">{h.stat1Value}</div>
              <div className="stat-label">{h.stat1Label}</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">{h.stat2Value}</div>
              <div className="stat-label">{h.stat2Label}</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">{h.stat3Value}</div>
              <div className="stat-label">{h.stat3Label}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
