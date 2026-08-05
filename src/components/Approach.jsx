const STEPS = [
  {
    title: 'Diagnostic',
    text: "Comprendre le contexte, les contraintes opérationnelles et les enjeux propres à votre laboratoire.",
  },
  {
    title: "Plan d'action",
    text: "Définir une feuille de route claire, priorisée et réaliste au regard de vos ressources.",
  },
  {
    title: 'Déploiement',
    text: "Mettre en œuvre les méthodes et outils adaptés, aux côtés des équipes sur le terrain.",
  },
  {
    title: 'Suivi & amélioration',
    text: "Piloter la performance dans la durée et ajuster la démarche au fil des résultats.",
  },
]

function Approach() {
  return (
    <section className="approach" id="approche">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Méthode</span>
          <h2>Une approche progressive et pragmatique</h2>
          <p>
            Quatre étapes pour transformer un enjeu opérationnel en résultats
            durables, sans bouleverser le fonctionnement de vos équipes.
          </p>
        </div>

        <div className="approach-steps">
          {STEPS.map((step, i) => (
            <div className="approach-step" key={step.title}>
              <span className="step-num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Approach
