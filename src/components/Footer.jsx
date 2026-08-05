import { Link } from 'react-router-dom'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>© {year} Jean-Louis Labernardière — JLL Conseil &amp; Innovation</p>
        <div className="footer-links">
          <Link to="/">Accueil</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
