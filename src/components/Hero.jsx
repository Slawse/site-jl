import { Link } from 'react-router-dom'
import photo from '../assets/jl-photo.jpg'

const TAGS = ['Structurer', 'Sécuriser', "Accélérer l'innovation scientifique"]

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Conseil en opérations &amp; performance</span>
            <p className="hero-name">Jean-Louis Labernardière</p>
            <h1>Faire performer les laboratoires qui portent l'innovation</h1>

            <ul className="hero-tags">
              {TAGS.map((tag) => (
                <li key={tag} className="hero-tag">
                  {tag}
                </li>
              ))}
            </ul>

            <div className="lede-group">
              <p className="lede">
                J'accompagne les biotechs, medtechs et entreprises techbio,
                notamment au stade préclinique, dans la structuration, la
                sécurisation et l'accélération de leurs opérations.
              </p>
              <p className="lede">
                Qualité, réglementaire, HSE, data, Lab Operations et
                environnements de laboratoire : je mobilise plus de 25 ans
                d'expérience pour construire des organisations robustes,
                conformes et efficientes. Mon approche est résolument
                opérationnelle, proche du terrain et adaptée au niveau de
                maturité de chaque entreprise.
              </p>
              <p className="lede">
                Un objectif : sécuriser l'exécution et permettre aux équipes
                de se concentrer sur la science, l'innovation et les
                prochaines étapes de développement.
              </p>
            </div>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">
                Discuter de votre projet
              </Link>
              <Link to="/expertise" className="btn btn-outline">
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
              <div className="stat-value">25 ans d'expérience</div>
              <div className="stat-label">Au service de la R&amp;D de sociétés innovantes</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">Expertise Biotech</div>
              <div className="stat-label">Qualité, HSE, data &amp; environnements de laboratoire</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">De la stratégie à l'exécution</div>
              <div className="stat-label">Des solutions concrètes, déployées avec les équipes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
