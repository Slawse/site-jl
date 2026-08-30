import domainChantierImg from '../assets/domain-chantier.jpg'
import domainQualiteImg from '../assets/domain-qualite.jpg'
import domainDataiaImg from '../assets/domain-dataia.jpg'
import domainRisqueImg from '../assets/domain-risque.jpg'
import domainLabOperationsImg from '../assets/domain-lab-operations.jpg'
import domainResilienceImg from '../assets/domain-resilience.jpg'

export const DOMAINS = [
  {
    number: '01',
    title: 'Assurance qualité et démarches réglementaires',
    image: domainQualiteImg,
    intro: [
      "J'accompagne les entreprises dans la définition, la mise en place et l'amélioration de systèmes qualité proportionnés à leurs activités, à leurs risques et à leur niveau de maturité.",
      "J'apporte également mon expertise pour piloter les autorisations nécessaires au développement des projets scientifiques notamment en matière de CODECOH, d'OGM et de confinement biologique.",
    ],
    bulletsIntro: 'Mon accompagnement peut notamment porter sur :',
    bullets: [
      "la réalisation d'un diagnostic qualité et/ou réglementaire",
      "la construction d'une road map priorisée",
      "l'implémentation d'une démarche qualité incluant la maîtrise documentaire",
      'la rédaction et le déploiement des procédures',
      'la préparation et la réalisation d\'audits (conformité ISO 9001 et GxP)',
      'la mise en conformité des activités de recherche au laboratoire',
      'la préparation et le suivi des démarches réglementaires, notamment OGM, confinement biologique ou CODECOH',
    ],
    body: [
      "Les sujets qualité et réglementaires sont souvent complexes, chronophages et difficiles à maîtriser pour des équipes scientifiques peu familières de ces exigences. Pourtant, leur impact sur la continuité des activités reste encore trop souvent sous-estimé.",
      "Mon intervention permet de clarifier les obligations, de définir une stratégie adaptée et de sécuriser les opérations tout en préservant le rythme d'exécution des équipes.",
    ],
    highlight:
      "Mon expertise sur l'accompagnement réglementaire des activités de recherche est un atout qui permet aux sociétés de dérisquer leurs activités et d'anticiper les possibilités d'expérimentations au sein de chaque organisation.",
  },
  {
    number: '02',
    title: 'Management, intégrité des données scientifiques et gouvernance IA',
    image: domainDataiaImg,
    intro: [
      "Les données constituent un élément essentiel du patrimoine scientifique et de la valeur de l'entreprise et reste souvent un « parent pauvre » des organisations.",
      "J'accompagne les équipes dans la structuration du cycle de vie des données, depuis leur génération sur les instruments de laboratoire/plateformes jusqu'à leur stockage, leur utilisation et leur archivage.",
    ],
    bulletsIntro: 'Les missions peuvent comprendre :',
    bullets: [
      'la cartographie des flux de données et l\'identification de la nature des données (raw data)',
      'la définition des règles de nommage, de classement et de traçabilité',
      'l\'infrastructure « data » incluant l\'organisation du stockage, des sauvegardes et de l\'archivage',
      "l'application des principes d'intégrité des données, notamment ALCOA",
      "l'accompagnement dans le choix ou le déploiement d'un ELN ou d'un LIMS",
      "l'audit de la gouvernance des systèmes d'IA pour garantir des usages maîtrisés, des données protégées et des résultats traçables",
    ],
    body: [
      "La phase préclinique est une étape déterminante pour constituer un package de données robuste, traçable et crédible en vue des échéances clés de l'entreprise, notamment les levées de fonds, partenariats ou audits.",
    ],
    highlight:
      "L'intégrité des données, sur laquelle je me suis particulièrement investi ces dernières années, demeure pourtant un angle mort fréquent des organisations faute de compétences dédiées. J'accompagne les équipes dans la mise à niveau de leurs pratiques afin de sécuriser la qualité, la traçabilité et la valeur de leur patrimoine scientifique.",
  },
  {
    number: '03',
    title: 'Santé, sécurité et prévention des risques opérationnels au laboratoire',
    image: domainRisqueImg,
    intro: [
      "J'accompagne les entreprises dans la structuration de leur démarche de santé et de sécurité au travail et dans la maîtrise de leurs obligations réglementaires.",
    ],
    bulletsIntro: "L'intervention peut porter sur :",
    bullets: [
      'l\'élaboration et la mise à jour du DUERP',
      'l\'analyse et la hiérarchisation des risques professionnels',
      'la conformité aux exigences du Code du travail',
      'la prévention des risques biologiques et chimiques',
      'la gestion des produits et agents dangereux',
      'la définition des mesures de prévention et de protection',
      "l'organisation des formations, consignes et situations d'urgence",
      "la sensibilisation et l'implication du management",
      "l'intégration des exigences HSE dans les projets et les opérations de laboratoire",
    ],
    body: [
      "La maîtrise des enjeux de santé et de sécurité est essentielle pour protéger les équipes, garantir la conformité réglementaire et préserver la continuité des activités. Dans les petites structures, ces sujets complexes peuvent rapidement devenir des « vulnérabilités latentes » importantes lorsqu'ils ne disposent pas de ressources dédiées pour les piloter.",
    ],
    highlight:
      "Disposant d'une expérience forte de près de 15 ans en tant que responsable de laboratoire dans plusieurs structures, je maîtrise pleinement ces enjeux et assure une veille régulière afin de conseiller au plus près mes clients.",
  },
  {
    number: '04',
    title: 'Lab operations et performance des activités scientifiques',
    image: domainLabOperationsImg,
    intro: [
      "J'apporte mon support aux entreprises dans l'organisation et l'optimisation de leurs opérations au laboratoire afin de sécuriser les activités, soutenir le rythme d'exécution des projets scientifiques et optimiser l'utilisation des ressources en interne.",
    ],
    bullets: [
      'planification des activités et pilotage des essais au laboratoire',
      'gestion du cycle de vie des équipements : définition du besoin, cahier des charges, financement, qualification, maintenance, revente…',
      'gestion des stocks critiques',
      'gestion des contrats de maintenance',
      "suivi et négociation des contrats d'approvisionnement (consommables et réactifs)",
      'organisation des plateformes techniques',
      'suivi des coûts et mise en place d\'indicateurs de suivi & de performance',
    ],
    highlight:
      "Mes fonctions successives de Lab Manager dans plusieurs biotechs m'ont permis de piloter au quotidien l'ensemble des leviers de la performance d'un laboratoire : équipements, planification, capacités, stocks, fournisseurs, budgets et continuité d'activité. Cette expérience de terrain me donne une maîtrise globale des Lab Operations, à la fois stratégique, technique et directement opérationnelle.",
  },
  {
    number: '05',
    title: 'Conception et évolution des environnements de laboratoire',
    image: domainChantierImg,
    intro: [
      "J'interviens en assistance à la maîtrise d'ouvrage lors de la création, de l'extension, du déménagement, de la réorganisation ou de la fermeture d'un laboratoire.",
    ],
    bulletsIntro: "L'accompagnement peut inclure :",
    bullets: [
      'l\'identification et formalisation des besoins',
      'la programmation des surfaces et des zones fonctionnelles',
      "l'analyse des flux de personnes, d'échantillons, des réactifs clés et des déchets",
      'la définition des niveaux de confinement et des contraintes de sécurité',
      'la revue des plans et des choix techniques',
      "la coordination avec les architectes, bureaux d'études, maîtres d'œuvre et prestataires",
      'la préparation de la mise en service et du démarrage des activités',
      "l'accompagnement des évolutions, transferts ou extensions",
      'la préparation et le pilotage du décommissionnement',
      'domaine de compétence : laboratoires L1, L2, L3 et salles blanches',
    ],
    highlight:
      "J'ai piloté plusieurs projets de conception, d'aménagement et de mise en service de laboratoires pour des sociétés de biotechnologie, notamment à Paris, dans des environnements soumis à de fortes contraintes techniques et réglementaires. Au cours de mes postes de responsable de laboratoire, j'ai pu mesurer à quel point l'organisation des installations et la maîtrise de leur fonctionnement et de leurs flux sont essentielles.",
    outro: [
      "Ces projets ont été menés dans des délais contraints, avec des exigences scientifiques et techniques élevées, en coordination avec les utilisateurs, architectes, bureaux d'études, prestataires et bailleurs. Mon expérience antérieure d'ingénieur de laboratoire me permet également d'apporter une véritable vision utilisateur, fondée sur la compréhension concrète des usages, des flux et des contraintes du quotidien.",
    ],
  },
  {
    number: '06',
    title: "Continuité d'activité et résilience opérationnelle",
    image: domainResilienceImg,
    intro: [
      "Il s'agit d'un angle souvent négligé par les jeunes organisations jusqu'au premier incident sérieux : panne d'un équipement critique, perte de données, indisponibilité d'un fournisseur, incidents sur les installations techniques (coupure électrique…), départ d'une personne clé.",
    ],
    bulletsIntro: "L'offre pourrait regrouper :",
    bullets: [
      'analyse de criticité des activités et des équipements',
      'solutions de secours pour les équipements critiques',
      "rédaction de SOP de poursuite d'activité (souvent demandé par les autorités ou par les investisseurs)",
      'gestion des incidents',
      "plans d'urgence / de remédiation et pilotage de l'organisation de crise",
      'management des risques sur les plans scientifique, clinique et réglementaire',
    ],
    body: [
      "La résilience opérationnelle relie très bien mes domaines d'expertise avec la data, le HSE, les activités de recherche réglementées et la qualité.",
    ],
    highlight:
      "Au cours de ma carrière, j'ai piloté des plans de remédiation et d'urgence à la suite de revers précliniques ou cliniques, ainsi qu'après des incidents majeurs affectant les installations techniques des laboratoires. Ces situations ont renforcé ma capacité à décider rapidement et avec lucidité, en mobilisant ma connaissance des organisations et des infrastructures pour préserver la continuité des opérations. La gestion de la crise Covid en est un exemple marquant : des décisions structurantes ont dû être prises dans des délais très courts afin d'adapter l'organisation, sécuriser les équipes et maintenir un niveau d'exécution élevé.",
  },
]
