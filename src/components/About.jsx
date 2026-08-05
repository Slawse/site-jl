const VALUES = [
  {
    title: 'Réactivité',
    text: "Une capacité à s'adapter vite aux imprévus du terrain opérationnel.",
  },
  {
    title: 'Anticipation',
    text: 'Identifier les risques en amont pour sécuriser la trajectoire des projets.',
  },
  {
    title: 'Rigueur',
    text: 'Une exigence méthodologique au service de la qualité et de la conformité.',
  },
  {
    title: 'Leadership fédérateur',
    text: "Fédérer les compétences et libérer les énergies autour d'un objectif commun.",
  },
]

function About() {
  return (
    <section className="about" id="a-propos">
      <div className="container">
        <div className="about-grid">
          <div>
            <span className="eyebrow">À propos</span>
            <p className="about-quote">
              « Relier le caractère exploratoire de la Recherche à l'exigence
              d'un projet de Développement. »
            </p>
            <p className="about-text">
              Depuis 25 ans, j'accompagne les efforts de R&amp;D de sociétés
              innovantes en construisant une démarche où la qualité est centrale,
              pour aider les acteurs de la recherche à valoriser leurs innovations
              et optimiser le fonctionnement de leurs laboratoires — de la
              conception au suivi opérationnel. Convaincu que le management des
              risques et la capitalisation des connaissances scientifiques sont
              essentiels à une R&amp;D efficace, je déploie les méthodes, outils
              et techniques adaptés pour rendre chaque organisation réellement
              performante.
            </p>
          </div>

          <ul className="values-list">
            {VALUES.map((value, i) => (
              <li key={value.title}>
                <span className="value-num">0{i + 1}</span>
                <div className="value-body">
                  <h4>{value.title}</h4>
                  <p>{value.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About
