import { Link } from 'react-router-dom'

const ITEMS = [
  {
    to: '/expertise',
    title: 'Expertise',
    text: "25 ans au service de la R&D de sociétés biotech innovantes.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    to: '/services',
    title: 'Services',
    text: "Opérations, qualité, HSE, équipements, data & réglementaire.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l6-6 4 4 8-8M21 7v6h-6" />
      </svg>
    ),
  },
  {
    to: '/approche',
    title: 'Approche',
    text: "Une méthode en 4 étapes, du diagnostic au suivi dans la durée.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h10M4 18h6" />
      </svg>
    ),
  },
]

function Highlights() {
  return (
    <section className="highlights">
      <div className="container">
        <div className="highlights-grid">
          {ITEMS.map((item) => (
            <Link to={item.to} className="highlight-card" key={item.to}>
              <div className="service-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <span className="highlight-link">En savoir plus →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Highlights
