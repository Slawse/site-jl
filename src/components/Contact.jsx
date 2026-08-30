import { useState } from 'react'

const CONTACT_EMAIL = 'j.labernardiere@gmail.com'
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xnpqaqel'

function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    setStatus('sending')

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      })

      if (response.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
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
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="hidden" name="_subject" value="Nouvelle demande de contact — site JLL" />
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
            <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
              {status === 'sending' ? 'Envoi en cours…' : 'Envoyer le message'}
            </button>

            {status === 'success' && (
              <p className="form-status form-status-success">
                Merci, votre message a bien été envoyé. Je reviens vers vous rapidement.
              </p>
            )}
            {status === 'error' && (
              <p className="form-status form-status-error">
                Une erreur est survenue lors de l'envoi. Vous pouvez aussi écrire directement à {CONTACT_EMAIL}.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
