const CONTACT_EMAIL = 'contact@jll-conseil-innovation.fr'

function Contact() {
  function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const email = form.email.value
    const message = form.message.value
    const subject = encodeURIComponent(`Prise de contact — ${name}`)
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`)
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <span className="eyebrow">Contact</span>
            <h2>Parlons de votre projet</h2>
            <p className="lede">
              Une question, un besoin d'audit ou un projet de réorganisation
              de laboratoire ? Décrivez votre contexte, je reviens vers vous
              rapidement pour en discuter.
            </p>

            <div className="contact-details">
              <div className="contact-detail">
                <span className="contact-detail-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l9 7 9-7M3 6h18v12H3V6z" />
                  </svg>
                </span>
                {CONTACT_EMAIL}
              </div>
              <div className="contact-detail">
                <span className="contact-detail-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-6.1 7-11a7 7 0 10-14 0c0 4.9 7 11 7 11z" />
                    <circle cx="12" cy="10" r="2.4" />
                  </svg>
                </span>
                Paris, Île-de-France
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="name">Nom</label>
                <input id="name" name="name" type="text" required placeholder="Votre nom" />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required placeholder="vous@entreprise.com" />
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="message">Votre message</label>
              <textarea id="message" name="message" rows={5} required placeholder="Décrivez votre projet ou votre besoin..." />
            </div>
            <button type="submit" className="btn btn-primary">
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
