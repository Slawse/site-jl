import { useLanguage } from '../i18n/LanguageContext'

function MentionsLegales() {
  const { t } = useLanguage()
  const m = t.mentions

  return (
    <section className="legal-page">
      <div className="container legal-content">
        <span className="eyebrow">{m.eyebrow}</span>
        <h1>{m.title}</h1>

        <h2>{m.h1}</h2>
        <p>{m.p1}</p>
        <ul className="legal-list">
          {m.listItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
          <li>
            {m.contactLabel} <a href="mailto:j.labernardiere@gmail.com">j.labernardiere@gmail.com</a>
          </li>
        </ul>

        <h2>{m.h2}</h2>
        <p>{m.p2}</p>

        <h2>{m.h3}</h2>
        <p>{m.p3}</p>

        <h2>{m.h4}</h2>
        <p>{m.p4a}</p>
        <p>{m.p4b}</p>

        <h2>{m.h5}</h2>
        <p>{m.p5}</p>
      </div>
    </section>
  )
}

export default MentionsLegales
