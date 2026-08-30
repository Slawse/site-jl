import bandeau1 from '../assets/gallery-bandeau1.jpg'
import bandeau2 from '../assets/gallery-bandeau2.jpg'
import bandeau3 from '../assets/gallery-bandeau3.jpg'

const PHOTOS = [
  { src: bandeau1, caption: "Installation d'équipements de protection collective (PSM II et isolateur) dans une salle blanche" },
  { src: bandeau2, caption: 'Laboratoire — aménagement et mise en service des paillasses' },
  { src: bandeau3, caption: 'Chantier — infrastructures techniques en cours de déploiement' },
]

function Gallery() {
  return (
    <section className="gallery" id="realisations">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Réalisations</span>
          <h2>Sur le terrain, dans les laboratoires</h2>
          <p>Quelques environnements de laboratoires accompagnés au fil des missions.</p>
        </div>

        <div className="gallery-grid">
          {PHOTOS.map((photo) => (
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
