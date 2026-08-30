function MentionsLegales() {
  return (
    <section className="legal-page">
      <div className="container legal-content">
        <span className="eyebrow">Informations légales</span>
        <h1>Mentions légales</h1>

        <h2>Éditeur du site</h2>
        <p>
          Le présent site est édité par <strong>JLL CONSEIL &amp; INNOVATION</strong>,
          SAS (société par actions simplifiée) au capital social non communiqué,
          immatriculée au Registre du Commerce et des Sociétés sous le numéro
          SIREN 989 496 807 (SIRET 989 496 807 00011), dont le siège social est
          situé au 36 rue Raymond Ridel, 92250 La Garenne-Colombes, France.
        </p>
        <ul className="legal-list">
          <li>N° de TVA intracommunautaire : FR15 989 496 807</li>
          <li>Activité : conseil pour les affaires et autres conseils de gestion (code NAF 70.22Z)</li>
          <li>
            Directeur de la publication : Jean-Louis Labernardière, Président
          </li>
          <li>
            Contact : <a href="mailto:j.labernardiere@gmail.com">j.labernardiere@gmail.com</a>
          </li>
        </ul>

        <h2>Hébergement</h2>
        <p>
          Le site est hébergé par <strong>Vercel Inc.</strong>, 340 S Lemon Ave
          #4133, Walnut, CA 91789, États-Unis —{' '}
          <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
            vercel.com
          </a>
          .
        </p>

        <h2>Propriété intellectuelle</h2>
        <p>
          L'ensemble des contenus présents sur ce site (textes, photographies,
          logo, structure) est protégé au titre du droit d'auteur et reste la
          propriété de JLL Conseil &amp; Innovation, sauf mention contraire.
          Toute reproduction ou représentation, totale ou partielle, sans
          autorisation préalable est interdite.
        </p>

        <h2>Données personnelles et formulaire de contact</h2>
        <p>
          Les informations transmises via le formulaire de contact (nom,
          adresse email, message) sont utilisées exclusivement pour répondre à
          votre demande. Elles sont traitées par notre prestataire technique{' '}
          <a href="https://formspree.io" target="_blank" rel="noopener noreferrer">
            Formspree
          </a>{' '}
          (Formspree, Inc., États-Unis), qui achemine le message par email à
          JLL Conseil &amp; Innovation, et ne sont ni revendues ni utilisées à
          des fins commerciales.
        </p>
        <p>
          Conformément au Règlement Général sur la Protection des Données
          (RGPD) et à la loi Informatique et Libertés, vous disposez d'un
          droit d'accès, de rectification et de suppression de vos données.
          Pour l'exercer, contactez-nous à{' '}
          <a href="mailto:j.labernardiere@gmail.com">j.labernardiere@gmail.com</a>.
        </p>

        <h2>Cookies</h2>
        <p>
          Ce site ne dépose pas de cookie de suivi ou publicitaire. Il peut
          utiliser des cookies techniques strictement nécessaires à son bon
          fonctionnement.
        </p>
      </div>
    </section>
  )
}

export default MentionsLegales
