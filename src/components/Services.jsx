import { useLanguage } from '../i18n/LanguageContext'

const ICONS = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l6-6 4 4 8-8M21 7v6h-6" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14.7 6.3a3 3 0 10-4.2 4.2L3 18l3 3 7.5-7.5a3 3 0 004.2-4.2l-2.6 2.6-2.1-2.1 2.6-2.6z"
    />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 6a8 3 0 0016 0 8 3 0 00-16 0zM4 6v6a8 3 0 0016 0V6M4 12v6a8 3 0 0016 0v-6"
    />
  </svg>,
]

function Services() {
  const { t } = useLanguage()
  const s = t.services

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">{s.eyebrow}</span>
          <h2>{s.title}</h2>
          <p>{s.text}</p>
        </div>

        <div className="services-grid">
          {s.items.map((service, i) => (
            <div className="service-card" key={service.title}>
              <div className="service-icon">{ICONS[i]}</div>
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
