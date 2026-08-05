const SERVICES = [
  {
    title: 'Opérations & performance',
    text: "Optimisation du fonctionnement des laboratoires, de la conception à l'exploitation quotidienne.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l6-6 4 4 8-8M21 7v6h-6" />
      </svg>
    ),
  },
  {
    title: 'Qualité',
    text: "Démarche qualité structurante pour valoriser les innovations et sécuriser les résultats scientifiques.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'HSE',
    text: "Mise en place d'un cadre de travail sûr et conforme pour les équipes de recherche et de développement.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
      </svg>
    ),
  },
  {
    title: 'Équipements',
    text: "Déploiement des méthodes, outils et techniques adaptés au bon fonctionnement des laboratoires.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.7 6.3a3 3 0 10-4.2 4.2L3 18l3 3 7.5-7.5a3 3 0 004.2-4.2l-2.6 2.6-2.1-2.1 2.6-2.6z" />
      </svg>
    ),
  },
  {
    title: 'Data & réglementaire',
    text: "Capitalisation des données scientifiques et pilotage de la conformité réglementaire des activités.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a8 3 0 0016 0 8 3 0 00-16 0zM4 6v6a8 3 0 0016 0V6M4 12v6a8 3 0 0016 0v-6" />
      </svg>
    ),
  },
]

function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Domaines d'intervention</span>
          <h2>Un accompagnement complet pour vos laboratoires</h2>
          <p>
            Chaque mission s'adapte au contexte et aux enjeux spécifiques de
            votre organisation, avec un socle d'expertises complémentaires.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((service) => (
            <div className="service-card" key={service.title}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
