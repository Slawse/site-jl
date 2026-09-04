import domainChantierImg from '../assets/domain-chantier.jpg'
import domainQualiteImg from '../assets/domain-qualite.jpg'
import domainDataiaImg from '../assets/domain-dataia.jpg'
import domainRisqueImg from '../assets/domain-risque.jpg'
import domainLabOperationsImg from '../assets/domain-lab-operations.jpg'
import domainResilienceImg from '../assets/domain-resilience.jpg'

export const DOMAINS = {
  fr: [
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
        "la préparation et la réalisation d'audits (conformité ISO 9001 et GxP)",
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
        "la cartographie des flux de données et l'identification de la nature des données (raw data)",
        'la définition des règles de nommage, de classement et de traçabilité',
        "l'infrastructure « data » incluant l'organisation du stockage, des sauvegardes et de l'archivage",
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
        "l'élaboration et la mise à jour du DUERP",
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
        "suivi des coûts et mise en place d'indicateurs de suivi & de performance",
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
        "l'identification et formalisation des besoins",
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
  ],
  en: [
    {
      number: '01',
      title: 'Quality assurance and regulatory processes',
      image: domainQualiteImg,
      intro: [
        'I support companies in defining, implementing and improving quality systems proportionate to their activities, their risks and their level of maturity.',
        'I also bring my expertise to steering the approvals required for scientific projects, in particular in relation to the French regulatory application for human biological sample collections (CODECOH), GMOs and biological containment.',
      ],
      bulletsIntro: 'My support can notably cover:',
      bullets: [
        'carrying out a quality and/or regulatory diagnostic',
        'building a prioritized road map',
        'implementing a quality approach including document control',
        'drafting and rolling out procedures',
        'preparing and conducting audits (ISO 9001 and GxP compliance)',
        'bringing laboratory research activities into compliance',
        'preparing and following up on regulatory processes, notably GMOs, biological containment or the French regulatory application for human biological sample collections (CODECOH)',
      ],
      body: [
        'Quality and regulatory topics are often complex, time-consuming and difficult to master for scientific teams unfamiliar with these requirements. Yet their impact on business continuity is still too often underestimated.',
        'My involvement clarifies obligations, defines a suitable strategy, and secures operations while preserving the team\'s execution pace.',
      ],
      highlight:
        'My expertise in regulatory support for research activities is an asset that allows companies to de-risk their activities and anticipate experimentation possibilities within each organization.',
    },
    {
      number: '02',
      title: 'Management, scientific data integrity and AI governance',
      image: domainDataiaImg,
      intro: [
        'Data is an essential part of a company\'s scientific assets and value, yet it often remains a "poor relation" within organizations.',
        'I support teams in structuring the data lifecycle, from generation on laboratory instruments/platforms through to storage, use and archiving.',
      ],
      bulletsIntro: 'Assignments can include:',
      bullets: [
        'mapping data flows and identifying the nature of the data (raw data)',
        'defining naming, filing and traceability rules',
        '"data" infrastructure, including the organization of storage, backups and archiving',
        'applying data integrity principles, notably ALCOA',
        'supporting the selection or deployment of an ELN or a LIMS',
        'auditing AI system governance to ensure controlled usage, protected data and traceable results',
      ],
      body: [
        'The preclinical phase is a decisive stage for building a robust, traceable and credible data package ahead of the company\'s key milestones, notably fundraising, partnerships or audits.',
      ],
      highlight:
        'Data integrity, an area I have particularly invested in over recent years, nonetheless remains a frequent blind spot for organizations that lack dedicated expertise. I support teams in upgrading their practices to secure the quality, traceability and value of their scientific assets.',
    },
    {
      number: '03',
      title: 'Health, safety and operational risk prevention in the laboratory',
      image: domainRisqueImg,
      intro: [
        'I support companies in structuring their occupational health and safety approach and in mastering their regulatory obligations.',
      ],
      bulletsIntro: 'This engagement can cover:',
      bullets: [
        'drafting and updating the occupational risk assessment document (DUERP)',
        'analyzing and prioritizing occupational risks',
        'compliance with French Labor Code requirements',
        'prevention of biological and chemical risks',
        'management of hazardous products and agents',
        'defining prevention and protective measures',
        'organizing training, instructions and emergency procedures',
        'raising management awareness and involvement',
        'integrating HSE requirements into laboratory projects and operations',
      ],
      body: [
        'Mastering health and safety issues is essential to protect teams, ensure regulatory compliance, and preserve business continuity. In small organizations, these complex topics can quickly become significant "latent vulnerabilities" when there are no dedicated resources to manage them.',
      ],
      highlight:
        'With nearly 15 years of strong experience as a laboratory manager across several organizations, I have a full command of these issues and maintain regular monitoring to advise my clients as closely as possible.',
    },
    {
      number: '04',
      title: 'Lab operations and performance of scientific activities',
      image: domainLabOperationsImg,
      intro: [
        'I support companies in organizing and optimizing their laboratory operations in order to secure activities, sustain the execution pace of scientific projects, and optimize the use of internal resources.',
      ],
      bullets: [
        'planning activities and steering laboratory trials',
        'managing the equipment lifecycle: needs definition, specifications, funding, qualification, maintenance, resale…',
        'managing critical stock',
        'managing maintenance contracts',
        'monitoring and negotiating supply contracts (consumables and reagents)',
        'organizing technical platforms',
        'cost tracking and setting up monitoring & performance indicators',
      ],
      highlight:
        'My successive roles as Lab Manager at several biotech companies have given me day-to-day command of every lever of laboratory performance: equipment, planning, capacity, stock, suppliers, budgets and business continuity. This field experience gives me an overall command of Lab Operations that is at once strategic, technical and directly operational.',
    },
    {
      number: '05',
      title: 'Design and evolution of laboratory environments',
      image: domainChantierImg,
      intro: [
        'I act as owner\'s project assistant for the creation, extension, relocation, reorganization or closure of a laboratory.',
      ],
      bulletsIntro: 'This support can include:',
      bullets: [
        'identifying and formalizing requirements',
        'programming floor areas and functional zones',
        'analyzing the flow of people, samples, key reagents and waste',
        'defining containment levels and safety constraints',
        'reviewing plans and technical choices',
        'coordinating with architects, engineering firms, project managers and contractors',
        'preparing commissioning and activity start-up',
        'supporting evolutions, transfers or extensions',
        'preparing and steering decommissioning',
        'area of expertise: L1, L2, L3 laboratories and cleanrooms',
      ],
      highlight:
        'I have led several laboratory design, fit-out and commissioning projects for biotechnology companies, notably in Paris, in environments subject to strong technical and regulatory constraints. Over the course of my roles as laboratory manager, I have seen first-hand how essential it is to organize facilities properly and to master how they run and how flows move through them.',
      outro: [
        'These projects were carried out under tight deadlines, with high scientific and technical requirements, in coordination with users, architects, engineering firms, contractors and landlords. My earlier experience as a laboratory engineer also allows me to bring a genuine user perspective, grounded in a concrete understanding of day-to-day usage, flows and constraints.',
      ],
    },
    {
      number: '06',
      title: 'Business continuity and operational resilience',
      image: domainResilienceImg,
      intro: [
        'This is an angle often overlooked by young organizations until the first serious incident: failure of critical equipment, data loss, supplier unavailability, incidents affecting technical facilities (power outage…), or the departure of a key person.',
      ],
      bulletsIntro: 'This offering could bring together:',
      bullets: [
        'criticality analysis of activities and equipment',
        'backup solutions for critical equipment',
        'drafting business continuity SOPs (often requested by authorities or investors)',
        'incident management',
        'emergency/remediation plans and steering the crisis organization',
        'risk management across scientific, clinical and regulatory dimensions',
      ],
      body: [
        'Operational resilience connects very well with my areas of expertise in data, HSE, regulated research activities and quality.',
      ],
      highlight:
        'Over the course of my career, I have led remediation and emergency plans following preclinical or clinical setbacks, as well as after major incidents affecting laboratory technical facilities. These situations have strengthened my ability to decide quickly and clearly, drawing on my knowledge of organizations and infrastructure to preserve operational continuity. Managing the Covid crisis is a striking example: structuring decisions had to be made within very short timeframes to adapt the organization, keep teams safe, and maintain a high level of execution.',
    },
  ],
}
