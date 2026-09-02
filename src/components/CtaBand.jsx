import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'

function CtaBand() {
  const { t } = useLanguage()

  return (
    <section className="cta-band">
      <div className="container cta-band-inner">
        <div>
          <h2>{t.ctaBand.title}</h2>
          <p>{t.ctaBand.text}</p>
        </div>
        <Link to="/contact" className="btn btn-primary">
          {t.ctaBand.cta}
        </Link>
      </div>
    </section>
  )
}

export default CtaBand
