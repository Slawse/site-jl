import { Link } from 'react-router-dom'

const BLOCKS = [
  {
    title: 'Un besoin ponctuel ou un accompagnement dans la durée',
    intro: 'Mon intervention peut prendre plusieurs formes :',
    items: [
      "mission ponctuelle pour un besoin de diagnostic ou pour le suivi d'un projet défini",
      "préparation d'un audit ou d'une échéance réglementaire (AQ, data, lab operations)",
      'support opérationnel régulier',
      'fonction qualité, lab manager ou HSE externalisée ou à temps partagé',
    ],
  },
  {
    title: 'Exemples récents de situations accompagnées',
    intro: "En cours de l'année 2026, j'ai eu l'occasion de réaliser les missions suivantes :",
    items: [
      "audit d'un système qualité",
      "mise en place d'une démarche AQ (référentiels ISO et GxP)",
      'structuration documentaire avant une phase de croissance',
      'déménagement et décommissionnement de labos biotech',
      'mise en conformité d\'activités utilisant des OGM & Codecoh',
      'cartographie et amélioration de la traçabilité des données scientifiques',
      'accompagnement qualité en temps partagé',
      'conception et aménagement de labos biotech',
      "audit HSE et définition d'un plan d'action correctif",
    ],
    dense: true,
  },
]

function Solution() {
  return (
    <section className="solution">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Ma proposition d'accompagnement</span>
          <h2>Une solution adaptée à chaque étape de votre laboratoire</h2>
        </div>

        <div className="solution-grid">
          {BLOCKS.map((block) => (
            <div className="solution-card" key={block.title}>
              <h3>{block.title}</h3>
              <p className="solution-intro">{block.intro}</p>
              <ul className={`solution-list${block.dense ? ' solution-list-dense' : ''}`}>
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
            <h3>Parlons de vos enjeux</h3>
            <p>
              Structurer votre organisation qualité, sécuriser vos données,
              préparer une démarche réglementaire, renforcer votre politique
              HSE, maîtriser vos opérations au labo ou accompagner
              l'évolution de votre laboratoire ? Échangeons sur votre
              situation et sur les solutions adaptées à votre organisation.
            </p>
          </div>
          <Link to="/contact" className="btn btn-primary">
            Prendre contact
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Solution
