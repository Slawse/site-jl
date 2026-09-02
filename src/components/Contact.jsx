import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'

const CONTACT_EMAIL = 'j.labernardiere@gmail.com'
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xnpqaqel'

function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const { t } = useLanguage()
  const c = t.contact

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
            <span className="eyebrow">{c.eyebrow}</span>
            <h2>{c.title}</h2>
            <p className="lede">{c.lede}</p>

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
                <label htmlFor="name">{c.nameLabel}</label>
                <input id="name" name="name" type="text" required placeholder={c.namePlaceholder} />
              </div>
              <div className="form-field">
                <label htmlFor="email">{c.emailLabel}</label>
                <input id="email" name="email" type="email" required placeholder={c.emailPlaceholder} />
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="message">{c.messageLabel}</label>
              <textarea id="message" name="message" rows={5} required placeholder={c.messagePlaceholder} />
            </div>
            <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
              {status === 'sending' ? c.sending : c.submit}
            </button>

            {status === 'success' && (
              <p className="form-status form-status-success">{c.success}</p>
            )}
            {status === 'error' && (
              <p className="form-status form-status-error">
                {c.error} {CONTACT_EMAIL}.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
