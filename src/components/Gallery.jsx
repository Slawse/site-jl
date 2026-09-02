import bandeau1 from '../assets/gallery-bandeau1.jpg'
import bandeau2 from '../assets/gallery-bandeau2.jpg'
import bandeau3 from '../assets/gallery-bandeau3.jpg'
import { useLanguage } from '../i18n/LanguageContext'

const IMAGES = [bandeau1, bandeau2, bandeau3]

function Gallery() {
  const { t } = useLanguage()
  const g = t.gallery
  const photos = IMAGES.map((src, i) => ({ src, caption: g.captions[i] }))

  return (
    <section className="gallery" id="realisations">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">{g.eyebrow}</span>
          <h2>{g.title}</h2>
          <p>{g.subtitle}</p>
        </div>

        <div className="gallery-grid">
          {photos.map((photo) => (
            <div className="gallery-item" key={photo.src}>
              <div className="gallery-placeholder gallery-photo">
                <img src={photo.src} alt={photo.caption} />
              </div>
              <p className="gallery-caption">{photo.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
