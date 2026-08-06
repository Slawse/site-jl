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

            <p className="hero-hook">
              Faire performer les laboratoires qui portent l'innovation
            </p>

            <div className="lede-group">
              <p className="lede">
                J'accompagne les biotechs, medtechs et entreprises scientifiques,
                notamment au stade préclinique, dans la structuration et la
                sécurisation de leurs opérations.
              </p>
              <p className="lede">
                Qualité, réglementaire, HSE, data, équipements et organisation :
                je mobilise plus de 25 ans d'expérience pour construire des
                environnements robustes, conformes et efficaces.
              </p>
              <p className="lede">
                Mon approche est résolument opérationnelle, proche du terrain et
                sans complexité inutile.
              </p>
              <p className="lede">
                L'objectif : accélérer l'exécution et permettre aux équipes de se
                concentrer sur l'essentiel : la science et l'innovation.
              </p>
            </div>
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
