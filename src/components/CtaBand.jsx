import { Link } from 'react-router-dom'

function CtaBand() {
  return (
    <section className="cta-band">
      <div className="container cta-band-inner">
        <div>
          <h2>Un projet de laboratoire à optimiser ?</h2>
          <p>Discutons de votre contexte et de vos enjeux opérationnels.</p>
        </div>
        <Link to="/contact" className="btn btn-primary">
          Prendre contact
        </Link>
      </div>
    </section>
  )
}

export default CtaBand
