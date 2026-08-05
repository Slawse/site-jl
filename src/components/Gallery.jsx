const PLACEHOLDER_COUNT = 4

function Gallery() {
  return (
    <section className="gallery" id="realisations">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Réalisations</span>
          <h2>Sur le terrain, dans les laboratoires</h2>
          <p>
            Quelques environnements de laboratoires accompagnés au fil des missions.
            Photos à venir.
          </p>
        </div>

        <div className="gallery-grid">
          {Array.from({ length: PLACEHOLDER_COUNT }).map((_, i) => (
            <div className="gallery-item" key={i}>
              <div className="gallery-placeholder">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <circle cx="8.5" cy="10.5" r="1.5" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 15l-5-5-9 9" />
                </svg>
                <span>Photo à venir</span>
              </div>
              <p className="gallery-caption">Laboratoire — légende à venir</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
