import { Link } from 'react-router-dom'
import photo from '../assets/jl-photo.jpg'

const TAGS = ['Qualité', 'HSE', 'Équipements', 'Data & réglementaire']

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Conseil en opérations &amp; performance</span>
            <h1>Jean-Louis Labernardière</h1>
            <p className="role">Consultant indépendant · Laboratoires biotech</p>

            <ul className="hero-tags">
              {TAGS.map((tag) => (
                <li key={tag} className="hero-tag">
                  {tag}
                </li>
              ))}
            </ul>

            <p className="lede">
              Relier le caractère exploratoire de la recherche à l'exigence d'un projet
              de développement — pour aider les équipes R&amp;D à valoriser leurs innovations
              et à optimiser le fonctionnement de leurs laboratoires.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">
                Discuter de votre projet
              </Link>
              <Link to="/services" className="btn btn-outline">
                Découvrir l'expertise
              </Link>
            </div>
          </div>

          <div className="hero-photo">
            <div className="photo-frame">
              <img src={photo} alt="Portrait de Jean-Louis Labernardière" />
            </div>
          </div>
        </div>

        <div className="stats-bar">
          <div className="stats-inner">
            <div className="stat-item">
              <div className="stat-value">25 ans</div>
              <div className="stat-label">Au service de la R&amp;D de sociétés innovantes</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">Biotech</div>
              <div className="stat-label">Sciences de la vie &amp; développement préclinique</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">De A à Z</div>
              <div className="stat-label">De la conception au suivi opérationnel</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
