import { DOMAINS } from '../data/domains'

function Domains() {
  return (
    <section className="domains">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Mes domaines d'intervention</span>
          <h2>Une expertise couvrant l'ensemble des opérations de laboratoire</h2>
        </div>

        <div className="domains-list">
          {DOMAINS.map((domain, i) => (
            <article
              className={`domain-block ${i % 2 === 1 ? 'domain-block-reverse is-light' : 'is-dark'}`}
              key={domain.number}
            >
              <div className="domain-image">
                <div className="domain-image-placeholder">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <circle cx="8.5" cy="10.5" r="1.5" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 15l-5-5-9 9" />
                  </svg>
                  <span>Image à venir</span>
                </div>
              </div>

              <div className="domain-content">
                <span className="domain-number">{domain.number}</span>
                <h3>{domain.title}</h3>

                {domain.intro.map((p) => (
                  <p key={p}>{p}</p>
                ))}

                {domain.bullets && (
                  <>
                    {domain.bulletsIntro && <p className="domain-bullets-intro">{domain.bulletsIntro}</p>}
                    <ul className="domain-bullets">
                      {domain.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </>
                )}

                {domain.body?.map((p) => (
                  <p key={p}>{p}</p>
                ))}

                <div className="domain-highlight">
                  <svg
                    className="domain-highlight-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4L12 2z" />
                  </svg>
                  <div>
                    <span className="domain-highlight-label">Ce qui fait la différence</span>
                    <p>{domain.highlight}</p>
                  </div>
                </div>

                {domain.outro?.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Domains
