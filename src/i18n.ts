/**
 * @file i18n configuration for the bilingual EAST-GABON showcase website.
 */

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

/**
 * Detects the initial language from localStorage or browser settings.
 * Defaults to French.
 */
function detectInitialLanguage(): 'fr' | 'en' {
  if (typeof window === 'undefined') {
    return 'fr'
  }

  const stored = window.localStorage.getItem('east-gabon-lang')
  if (stored === 'fr' || stored === 'en') {
    return stored
  }

  const browser = window.navigator.language.toLowerCase()
  return browser.startsWith('fr') ? 'fr' : 'en'
}

const resources = {
  fr: {
    translation: {
      brand: {
        name: 'EAST-GABON',
        baseline: 'Études • Assistance • Services • Travaux',
      },
      nav: {
        home: 'Accueil',
        services: 'Services',
        portfolio: 'Réalisations',
        blog: 'Actualités',
        qhse: 'QHSE',
        about: 'À propos',
        contact: 'Contact',
        quote: 'Demander un devis',
      },
      common: {
        learnMore: 'En savoir plus',
        viewAll: 'Voir tout',
        loading: 'Chargement...',
        submitted: 'Votre demande a bien été envoyée.',
        submit: 'Envoyer',
      },
      hero: {
        title: 'Ingénierie et services pour vos projets au Gabon',
        subtitle:
          "EAST-GABON accompagne les maîtres d’ouvrage publics et privés de l'étude à la réalisation.",
        ctaServices: 'Voir nos services',
        ctaPortfolio: 'Découvrir nos réalisations',
        ctaQuote: 'Demander un devis',
      },
      sections: {
        servicesTitle: 'Nos domaines d’expertise',
        servicesIntro:
          "Une offre complète, de l'étude technique à l'assistance sur chantier.",
        portfolioTitle: 'Réalisations récentes',
        portfolioIntro:
          'Une sélection de projets menés avec nos partenaires publics et privés.',
        blogTitle: 'Actualités & projets en cours',
        blogIntro:
          "Restez informé des chantiers, appels d'offres et actualités d'EAST-GABON.",
        qhseTitle: 'Engagement QHSE',
        qhseIntro:
          'Sécurité, qualité et respect de l’environnement au cœur de chaque mission.',
        quoteTitle: 'Vous avez un projet ?',
        quoteIntro:
          'Expliquez-nous votre besoin et recevez une proposition personnalisée.',
      },
      home: {
        readyToStart: 'Prêt à démarrer votre projet ?',
        contactUsDesc: 'Contactez nos équipes pour discuter de vos besoins et obtenir une estimation personnalisée.',
        contactBtn: 'Nous contacter',
        viewPortfolio: 'Voir tous les projets',
        hero: {
          overlayBadge: 'EAST-GABON',
          overlayText: 'Études techniques, assistance à maîtrise d’ouvrage et suivi de travaux sur tout le territoire gabonais.'
        },
        expertise: {
          etudes: 'Études & Ingénierie',
          assistance: 'Assistance sur Chantier'
        },
        featured: {
          title: 'Nos Réalisations Phares',
          description: 'Découvrez nos projets les plus importants et les plus complexes réalisés à travers le Gabon.',
          learnMore: 'En savoir plus',
          projects: {
            p1: { title: 'Construction station service PETRO GABON', location: 'Libreville - Gabon', category: 'Infrastructure' },
            p2: { title: 'Installation système traitement eau', location: 'Lambaréné - Gabon', category: 'Hydraulique' },
            p3: { title: 'Réseau incendie dépôt hydrocarbure', location: 'Port-Gentil - Gabon', category: 'Sécurité' },
            p4: { title: 'Cuve traitement boues hydrocarburées', location: 'Port-Gentil - Gabon', category: 'Environnement' }
          }
        },
        stats: {
          title: 'Notre Impact',
          description: "Des chiffres qui parlent de notre engagement envers l'excellence et la satisfaction client.",
          items: {
            projects: { label: 'Projets réalisés', desc: 'Au Gabon et en région' },
            years: { label: "Ans d'expérience", desc: "Dans le secteur de l'ingénierie" },
            clients: { label: 'Clients satisfaits', desc: 'Secteur public et privé' },
            satisfaction: { label: 'Taux de satisfaction', desc: 'De nos clients' }
          }
        },
        services: {
          keyService: 'Service clé',
          items: {
            s1: { title: 'Études techniques', desc: "Diagnostics, études de faisabilité et dossiers techniques pour vos projets d'infrastructures." },
            s2: { title: "Assistance à maîtrise d'ouvrage", desc: "Accompagnement complet des maîtres d’ouvrage publics et privés, de la rédaction des cahiers des charges au suivi d’exécution." },
            s3: { title: 'Suivi et contrôle de travaux', desc: 'Contrôle qualité, planning et sécurité sur chantier avec reporting régulier.' }
          }
        },
        blog: {
          excerptPlaceholder: "Extrait d'article à venir. Le contenu sera piloté depuis le back-office.",
          posts: {
            post1: "Lancement d’un nouveau projet d’infrastructures urbaines",
            post2: "EAST-GABON renforce son dispositif QHSE sur les chantiers",
            post3: "Retour sur une mission d’assistance à maîtrise d’ouvrage"
          }
        }
      },
      services: {
        pageTitle: "Nos Domaines d'Expertise",
        subtitle: "Des solutions techniques intégrées pour répondre aux défis industriels et structurels du Gabon.",
        labels: {
          benefitsFor: "Bénéfices pour :",
          features: "Fonctionnalités",
          advantages: "Avantages",
          requestQuote: "Demander un devis pour ce service"
        },
        cta: {
          title: "Un projet spécifique en tête ?",
          description: "Nos équipes sont prêtes à étudier vos besoins techniques et à vous proposer des solutions sur mesure.",
          button: "Contactez notre bureau d'études"
        },
        items: {
          etudes: {
            title: "Études et Gestion des Projets",
            description: "East-Gabon pilote vos projets de construction et d’ingénierie de bout en bout, de l’étude de faisabilité à la livraison. Nous sécurisons les délais, les budgets et la conformité, avec une exigence élevée adaptée aux environnements industriels au Gabon et à l’international.",
            features: [
              "Études techniques et économiques (APS/APD/EXE)",
              "Planification, ordonnancement et suivi d’avancement",
              "Management HSE (sécurité, qualité, environnement)",
              "Gestion des achats, sous-traitants et interfaces",
              "Contrôle des coûts, reporting et tableaux de bord",
              "Réception, levée de réserves et dossiers (DOE)"
            ],
            advantages: [
              "Réduction des risques techniques et contractuels",
              "Meilleure maîtrise du planning et des coûts",
              "Traçabilité des décisions et transparence",
              "Coordination fluide multi-intervenants"
            ],
            targets: "Industries, Institutions & Entreprises, Particuliers"
          },
          maintenance: {
            title: "Assistance Technique & Maintenance Industrielle",
            description: "East-Gabon propose une assistance technique industrielle centrée sur la disponibilité des équipements et la sécurité des équipes. Nos interventions s’adaptent à vos contraintes de production et à la réalité du terrain.",
            features: [
              "Maintenance multi-technique selon périmètre",
              "Interventions planifiées et urgentes",
              "Méthodes, check-lists et conformité documentaire",
              "Supervision terrain et coordination",
              "Tests de fonctionnement et remise en service",
              "Coaching des équipes et formation"
            ],
            advantages: [
              "Méthode et rigueur d’intervention",
              "Réduction des risques HSE et des incidents",
              "Réactivité sur site et clarté des rapports",
              "Renforcement de la fiabilité des installations"
            ],
            targets: "Industries, Entreprises, Institutions"
          },
          achat: {
            title: "Services et Centrale d’Achat",
            description: "Nous optimisons votre chaîne d’approvisionnement pour garantir la continuité de vos opérations. East-Gabon combine expertise terrain et réseau fournisseurs pour livrer vite, juste et conforme.",
            features: [
              "Étude du besoin, spécifications et équivalences",
              "Approvisionnement local et import",
              "Planification des livraisons et stockage",
              "Gestion des retours, SAV et non-conformités",
              "Pack “chantier” : lots complets prêts à l’emploi",
              "Reporting achats et suivi performance"
            ],
            advantages: [
              "Diminution des erreurs de commande",
              "Meilleure prévisibilité des délais",
              "Réduction des coûts cachés",
              "Sécurisation des achats pour sites industriels"
            ],
            targets: "Industries, Secteur Public/Privé, Particuliers"
          },
          metal: {
            title: "Travaux Construction Métallique",
            description: "Nous concevons et installons des ouvrages métalliques sur mesure, conçus pour durer. East-Gabon accompagne les industriels avec des solutions fiables, conformes et adaptées au terrain gabonais.",
            features: [
              "Conception détaillée, métrés et plans atelier",
              "Fabrication d’ensembles métalliques",
              "Montage, boulonnage, ajustage et finitions",
              "Renforcement de structures existantes",
              "Contrôles dimensionnels et qualité",
              "Coordination chantier et respect des délais"
            ],
            advantages: [
              "Solutions sur mesure compatibles exploitation",
              "Réduction des délais de chantier",
              "Qualité d’assemblage contrôlée",
              "Meilleure sécurité d’accès et d’intervention"
            ],
            targets: "Industries, Clients internationaux, Public/Privé"
          },
          btp: {
            title: "Soudure & BTP",
            description: "East-Gabon réalise des travaux de soudure et de BTP pour des projets neufs ou des réhabilitations. Nous mettons l’accent sur la sécurité, la qualité et la tenue dans le temps en contexte industriel.",
            features: [
              "Soudure sur structures et supports",
              "Réparations et renforcements ciblés",
              "Travaux BTP : remise en état, aménagements",
              "Organisation chantier, Qualité, Sécurité",
              "Coordination avec autres lots techniques",
              "Livraison avec contrôles et documentation"
            ],
            advantages: [
              "Durabilité des ouvrages et réparations",
              "Qualité suivie et traçable",
              "Réactivité et adaptabilité terrain",
              "Exécution dans le respect des standards HSE"
            ],
            targets: "Industries, Entreprises, Particuliers"
          }
        }
      },
      portfolio: {
        pageTitle: "Nos Réalisations",
        intro: "Découvrez nos projets majeurs à travers le Gabon. De l'ingénierie hydraulique aux infrastructures pétrolières.",
        accessibility: {
          prevImage: "Image précédente",
          nextImage: "Image suivante"
        },
        projects: {
          p1: { title: "Réseau incendie dépôt Hydrocarbure", client: "OLA ENERGY GABON", location: "Port-Gentil" },
          p2: { title: "Construction d'une station service communautaire", client: "Communauté", location: "MEKAMBO" },
          p3: { title: "Installation Unité de traitement d'eau, Raccordement & Bâche", client: "Client Privé", location: "Lambaréné" },
          p4: { title: "Installation Unité de traitement d'eau", client: "CIM GABON", location: "Ntoum" },
          p5: { title: "Cuve de traitement des boues hydrocarburées", client: "Schlumberger", location: "Port-Gentil" },
          p6: { title: "Construction bac de rétention et installation cuves carburant", client: "GZES Port à bois", location: "Owendo" },
          p7: { title: "Construction plateforme bétonnée pour Bâche à eau 600 m3", client: "Industriel", location: "Gabon" },
          p8: { title: "Fabrication Atelier", client: "Interne", location: "Atelier" },
          p9: { title: "Fabrication et Montage d'un Auvent de Piste", client: "OLA ENERGY GABON", location: "NTOUM" },
          p10: { title: "Aménagement intérieur", client: "Divers", location: "Libreville" },
          p11: { title: "Modification et aménagement des wagons", client: "Ferroviaire", location: "Owendo / Transgabonais" },
          p12: { title: "Réparation et mise en conformité des totems", client: "Stations Services", location: "Réseau National" },
          p13: { title: "Construction d'une station service communautaire", client: "Communauté", location: "MINVOUL" }
        }
      },
      qhse: {
        pageTitle: "Expertise, Normes & Qualité",
        header: {
          introPart1: "EAST-GABON est une PME Gabonaise active dans l'industrie, le BTP et la maintenance industrielle. Grâce à nos partenariats avec des fabricants locaux et internationaux, nous allions ",
          introHighlight: "performance, efficacité et rigueur"
        },
        values: {
          badge: "Nos Piliers",
          title: "Nos Valeurs Fondamentales",
          safetyTitle: "Sécurité et Respect des normes",
          safetyDesc: "La protection de nos équipes et de l'environnement est notre priorité absolue dans chaque opération.",
          precisionTitle: "Précision et Disponibilité",
          precisionDesc: "Une promptitude d'intervention et une rigueur technique garantissant la continuité de vos activités.",
          partnersTitle: "Satisfaction Partenaires",
          partnersDesc: "Nous construisons des relations durables basées sur la confiance et la qualité de service."
        },
        certifications: {
          title: "Certifications & Normes Internationales",
          subtitle: "EAST-GABON est détenteur de qualifications strictes prouvant notre sérieux et notre conformité aux standards mondiaux.",
          qualificationsTitle: "Nos Qualifications (QMOS/PQR)",
          items: {
            iso3834: "ISO 3834-2 : 2021",
            iso3834Desc: "Certification internationale attestant du respect des exigences de qualité complètes en soudage.",
            iso9001: "ISO 9001 : 2025",
            iso9001Desc: "Système de Management de la Qualité (SMQ) - Exigences organisationnelles, performance et satisfaction client.",
            iso14001: "ISO 14001 : 2015",
            iso14001Desc: "Système de Management Environnemental (SME) - Maîtrise des impacts écologiques et développement durable.",
            iso45001: "ISO 45001 : 2018",
            iso45001Desc: "Système de Management de la Santé et de la Sécurité au Travail (SST) - Prévention des risques et protection du personnel.",
            aws: "AWS",
            awsDesc: "<strong>D1.1 Version 2020</strong> <br/> Structural Welding Code - Steel (Structure Métallique)",
            asme: "ASME",
            asmeDesc: "<strong>IX ED.2021</strong> <br/> Tuyauterie Acier Carbone",
            smq: "SMQ",
            smqDesc: "Système de Management de la Qualité",
            doc: "DOC",
            docDesc: "Cahiers de soudage complets pour Structure & Tuyauterie"
          },
          internationalTitle: "Vocation Internationale",
          internationalDesc: "Bien que PME Gabonaise, nos standards nous permettent d'intervenir sur des projets complexes nécessitant une traçabilité et une conformité totale aux normes internationales."
        },
        clientele: {
          title: "Notre Clientèle & Engagement",
          whoWeSupport: "Qui accompagnons-nous ?",
          supportDesc: "Nous collaborons activement avec les <strong>organismes internationaux</strong>, les <strong>États</strong>, les <strong>grandes entreprises industrielles</strong> ainsi que les particuliers exigeants.",
          ourObjective: "Notre Objectif",
          objectiveDesc: "\"Apporter la crédibilité, l’assurance et l’expertise technique au travers du respect strict des normes internationales en vigueur.\""
        }
      },
      about: {
        pageTitle: "À propos d’EAST-GABON",
        content: "EAST-GABON est une entreprise d’ingénierie et de services basée à Libreville. Ce texte sera complété avec votre présentation institutionnelle, votre histoire et vos valeurs."
      },
      blog: {
        pageTitle: "Actualités",
        comingSoon: "Les articles seront gérés depuis le CMS et publiés ici dès la mise en production.",
        demoArticleTitle: "Titre d'article de démonstration",
        demoArticleDesc: "Cet espace accueillera les résumés d'articles publiés depuis le CMS (Strapi) avec accès à la page de détail."
      },
      contact: {
        pageTitle: "Nous contacter",
        intro: "Utilisez ce formulaire pour toute question ou demande d'information.",
        name: "Nom complet",
        email: "Adresse e-mail",
        phone: "Téléphone",
        subject: "Sujet",
        message: "Message",
        success: "Votre message a été envoyé (simulation)."
      },
      quote: {
        pageTitle: "Demande de devis",
        intro: "Précisez votre projet pour que nous puissions vous répondre efficacement.",
        clientName: "Nom / Organisation",
        clientEmail: "Adresse e-mail",
        clientPhone: "Téléphone",
        projectType: "Type de projet",
        location: "Localisation du projet",
        budget: "Budget estimatif",
        details: "Description du projet",
        success: "Votre demande de devis a été envoyée (simulation)."
      }
    },
  },
  en: {
    translation: {
      brand: {
        name: 'EAST-GABON',
        baseline: 'Studies • Assistance • Services • Works',
      },
      nav: {
        home: 'Home',
        services: 'Services',
        portfolio: 'Projects',
        blog: 'News',
        qhse: 'QHSE',
        about: 'About',
        contact: 'Contact',
        quote: 'Request a quote',
      },
      common: {
        learnMore: 'Learn more',
        viewAll: 'View all',
        loading: 'Loading...',
        submitted: 'Your request has been sent.',
        submit: 'Send',
      },
      hero: {
        title: 'Engineering and services for your projects in Gabon',
        subtitle:
          'EAST-GABON supports public and private owners from studies to delivery.',
        ctaServices: 'View our services',
        ctaPortfolio: 'Discover our projects',
        ctaQuote: 'Request a quote',
      },
      sections: {
        servicesTitle: 'Our areas of expertise',
        servicesIntro:
          'A complete offer, from technical studies to on-site assistance.',
        portfolioTitle: 'Featured projects',
        portfolioIntro:
          'A selection of projects delivered with our public and private partners.',
        blogTitle: 'News & ongoing projects',
        blogIntro:
          'Stay up to date with EAST-GABON’s projects, tenders and news.',
        qhseTitle: 'QHSE commitment',
        qhseIntro:
          'Safety, quality and environmental protection at the heart of every mission.',
        quoteTitle: 'Do you have a project?',
        quoteIntro:
          'Tell us more about your needs and receive a tailored proposal.',
      },
      home: {
        readyToStart: "Ready to start your project?",
        contactUsDesc: "Contact our teams to discuss your needs and get a personalized estimate.",
        contactBtn: "Contact us",
        viewPortfolio: "View all projects",
        hero: {
          overlayBadge: "EAST-GABON",
          overlayText: "Technical studies, owner assistance, and site supervision throughout Gabon."
        },
        expertise: {
          etudes: 'Studies & Engineering',
          assistance: 'On-site Assistance'
        },
        featured: {
          title: "Our Featured Projects",
          description: "Discover our most important and complex projects carried out across Gabon.",
          learnMore: "Learn more",
          projects: {
            p1: { title: "Construction of PETRO GABON gas station", location: "Libreville - Gabon", category: "Infrastructure" },
            p2: { title: "Installation of water treatment system", location: "Lambaréné - Gabon", category: "Hydraulics" },
            p3: { title: "Fire network for hydrocarbon depot", location: "Port-Gentil - Gabon", category: "Safety" },
            p4: { title: "Hydrocarbon sludge treatment tank", location: "Port-Gentil - Gabon", category: "Environment" }
          }
        },
        stats: {
          title: "Our Impact",
          description: "Numbers that speak to our commitment to excellence and customer satisfaction.",
          items: {
            projects: { label: "Completed projects", desc: "In Gabon and the region" },
            years: { label: "Years of experience", desc: "In the engineering sector" },
            clients: { label: "Satisfied clients", desc: "Public and private sector" },
            satisfaction: { label: "Satisfaction rate", desc: "From our clients" }
          }
        },
        services: {
          keyService: "Key service",
          items: {
            s1: { title: "Technical studies", desc: "Diagnostics, feasibility studies, and technical files for your infrastructure projects." },
            s2: { title: "Owner assistance", desc: "End-to-end support for public and private owners, from tender documents to execution monitoring." },
            s3: { title: "Site supervision", desc: "Quality, planning, and safety control on site with regular reporting." }
          }
        },
        blog: {
          excerptPlaceholder: "Article excerpt coming soon. Content will be managed from the back-office.",
          posts: {
            post1: "Launch of a new urban infrastructure project",
            post2: "EAST-GABON reinforces QHSE on construction sites",
            post3: "Focus on an owner assistance mission"
          }
        }
      },
      services: {
        pageTitle: "Our Areas of Expertise",
        subtitle: "Integrated technical solutions to meet industrial and structural challenges in Gabon.",
        labels: {
          benefitsFor: "Benefits for:",
          features: "Features",
          advantages: "Advantages",
          requestQuote: "Request a quote for this service"
        },
        cta: {
          title: "Have a specific project in mind?",
          description: "Our teams are ready to study your technical needs and offer tailored solutions.",
          button: "Contact our design office"
        },
        items: {
          etudes: {
            title: "Studies and Project Management",
            description: "East-Gabon manages your construction and engineering projects from start to finish, from feasibility studies to delivery. We secure deadlines, budgets, and compliance, with high standards adapted to industrial environments in Gabon and internationally.",
            features: [
              "Technical and economic studies (APS/APD/EXE)",
              "Planning, scheduling, and progress tracking",
              "HSE Management (health, safety, environment)",
              "Procurement, subcontractor, and interface management",
              "Cost control, reporting, and dashboards",
              "Acceptance, snagging, and as-built documentation (DOE)"
            ],
            advantages: [
              "Reduction of technical and contractual risks",
              "Better control of schedule and costs",
              "Traceability of decisions and transparency",
              "Smooth multi-stakeholder coordination"
            ],
            targets: "Industries, Institutions & Businesses, Individuals"
          },
          maintenance: {
            title: "Technical Assistance & Industrial Maintenance",
            description: "East-Gabon offers industrial technical assistance focused on equipment availability and team safety. Our interventions adapt to your production constraints and field realities.",
            features: [
              "Multi-technical maintenance according to scope",
              "Planned and urgent interventions",
              "Methods, checklists, and documentary compliance",
              "Field supervision and coordination",
              "Functional testing and recommissioning",
              "Team coaching and training"
            ],
            advantages: [
              "Methodical and rigorous intervention",
              "Reduction of HSE risks and incidents",
              "On-site responsiveness and clear reporting",
              "Enhanced reliability of installations"
            ],
            targets: "Industries, Businesses, Institutions"
          },
          achat: {
            title: "Procurement Services & Purchasing Center",
            description: "We optimize your supply chain to guarantee the continuity of your operations. East-Gabon combines field expertise and a supplier network to deliver quickly, accurately, and compliantly.",
            features: [
              "Needs assessment, specifications, and equivalents",
              "Local and import procurement",
              "Delivery scheduling and warehousing",
              "Returns management, after-sales service, and non-conformities",
              "\"Site\" pack: complete ready-to-use batches",
              "Purchasing reporting and performance tracking"
            ],
            advantages: [
              "Reduction in order errors",
              "Better predictability of lead times",
              "Reduction of hidden costs",
              "Secured procurement for industrial sites"
            ],
            targets: "Industries, Public/Private Sector, Individuals"
          },
          metal: {
            title: "Metal Construction Works",
            description: "We design and install custom metal structures built to last. East-Gabon supports industrial players with reliable, compliant solutions adapted to the Gabonese terrain.",
            features: [
              "Detailed design, quantity surveying, and workshop drawings",
              "Fabrication of metal assemblies",
              "Assembly, bolting, fitting, and finishing",
              "Reinforcement of existing structures",
              "Dimensional and quality checks",
              "Site coordination and adherence to deadlines"
            ],
            advantages: [
              "Custom solutions compatible with operations",
              "Reduction of construction delays",
              "Controlled assembly quality",
              "Improved access and intervention safety"
            ],
            targets: "Industries, International clients, Public/Private"
          },
          btp: {
            title: "Welding & Civil Engineering (BTP)",
            description: "East-Gabon carries out welding and civil engineering works for new projects or rehabilitations. We emphasize safety, quality, and durability in industrial contexts.",
            features: [
              "Welding on structures and supports",
              "Targeted repairs and reinforcements",
              "Civil engineering works: restoration, landscaping",
              "Site organization, Quality, Safety",
              "Coordination with other technical packages",
              "Delivery with inspections and documentation"
            ],
            advantages: [
              "Durability of structures and repairs",
              "Monitored and traceable quality",
              "Responsiveness and field adaptability",
              "Execution in compliance with HSE standards"
            ],
            targets: "Industries, Businesses, Individuals"
          }
        }
      },
      portfolio: {
        pageTitle: "Our Projects",
        intro: "Discover our major projects across Gabon. From hydraulic engineering to petroleum infrastructure.",
        accessibility: {
          prevImage: "Previous image",
          nextImage: "Next image"
        },
        projects: {
          p1: { title: "Fire network for hydrocarbon depot", client: "OLA ENERGY GABON", location: "Port-Gentil" },
          p2: { title: "Construction of a community gas station", client: "Community", location: "MEKAMBO" },
          p3: { title: "Installation of water treatment unit, Connection & Tank", client: "Private Client", location: "Lambaréné" },
          p4: { title: "Installation of water treatment unit", client: "CIM GABON", location: "Ntoum" },
          p5: { title: "Hydrocarbon sludge treatment tank", client: "Schlumberger", location: "Port-Gentil" },
          p6: { title: "Construction of retention basin and installation of fuel tanks", client: "GZES Timber Port", location: "Owendo" },
          p7: { title: "Construction of concrete platform for 600 m3 water tank", client: "Industrial", location: "Gabon" },
          p8: { title: "Workshop Fabrication", client: "Internal", location: "Workshop" },
          p9: { title: "Fabrication and Assembly of a Forecourt Canopy", client: "OLA ENERGY GABON", location: "NTOUM" },
          p10: { title: "Interior fitting", client: "Various", location: "Libreville" },
          p11: { title: "Modification and fitting of railway cars", client: "Railway", location: "Owendo / Transgabonais" },
          p12: { title: "Repair and compliance of totems", client: "Gas Stations", location: "National Network" },
          p13: { title: "Construction of a community gas station", client: "Community", location: "MINVOUL" }
        }
      },
      qhse: {
        pageTitle: "Expertise, Standards & Quality",
        header: {
          introPart1: "EAST-GABON is a Gabonese SME active in industry, construction, and industrial maintenance. Thanks to our partnerships with local and international manufacturers, we combine ",
          introHighlight: "performance, efficiency, and rigor"
        },
        values: {
          badge: "Our Pillars",
          title: "Our Core Values",
          safetyTitle: "Safety and Compliance",
          safetyDesc: "Protecting our teams and the environment is our absolute priority in every operation.",
          precisionTitle: "Precision and Availability",
          precisionDesc: "Prompt intervention and technical rigor ensuring the continuity of your operations.",
          partnersTitle: "Partner Satisfaction",
          partnersDesc: "We build lasting relationships based on trust and quality of service."
        },
        certifications: {
          title: "International Certifications & Standards",
          subtitle: "EAST-GABON holds strict qualifications proving our reliability and compliance with global standards.",
          qualificationsTitle: "Our Qualifications (WPS/PQR)",
          items: {
            iso3834: "ISO 3834-2:2021",
            iso3834Desc: "International certification attesting to compliance with comprehensive quality requirements in welding.",
            iso9001: "ISO 9001:2025",
            iso9001Desc: "Quality Management System (QMS) - Organizational requirements, performance, and customer satisfaction.",
            iso14001: "ISO 14001:2015",
            iso14001Desc: "Environmental Management System (EMS) - Environmental impact management and sustainable development.",
            iso45001: "ISO 45001:2018",
            iso45001Desc: "Occupational Health & Safety Management System (OH&S) - Risk prevention and worker protection.",
            aws: "AWS",
            awsDesc: "<strong>D1.1 Version 2020</strong> <br/> Structural Welding Code - Steel",
            asme: "ASME",
            asmeDesc: "<strong>IX ED.2021</strong> <br/> Carbon Steel Piping",
            smq: "QMS",
            smqDesc: "Quality Management System",
            doc: "DOC",
            docDesc: "Comprehensive welding books for Structure & Piping"
          },
          internationalTitle: "International Vocation",
          internationalDesc: "Although a Gabonese SME, our standards enable us to work on complex projects requiring total traceability and strict compliance with international standards."
        },
        clientele: {
          title: "Our Clientele & Commitment",
          whoWeSupport: "Who do we support?",
          supportDesc: "We actively collaborate with <strong>international organizations</strong>, <strong>governments</strong>, <strong>large industrial companies</strong>, as well as demanding private individuals.",
          ourObjective: "Our Objective",
          objectiveDesc: "\"To provide credibility, assurance, and technical expertise through strict compliance with current international standards.\""
        }
      },
      about: {
        pageTitle: "About EAST-GABON",
        content: "EAST-GABON is an engineering and services company based in Libreville. This text will be completed with your institutional presentation, history and values."
      },
      blog: {
        pageTitle: "News",
        comingSoon: "Articles will be managed from the CMS and displayed here once live.",
        demoArticleTitle: "Demo article title",
        demoArticleDesc: "This space will host summaries of articles published from the CMS (Strapi) with access to the detail page."
      },
      contact: {
        pageTitle: "Contact us",
        intro: "Use this form for any question or information request.",
        name: "Full name",
        email: "Email address",
        phone: "Phone",
        subject: "Subject",
        message: "Message",
        success: "Your message has been sent (simulation)."
      },
      quote: {
        pageTitle: "Request a quote",
        intro: "Describe your project so we can answer efficiently.",
        clientName: "Name / Organisation",
        clientEmail: "Email address",
        clientPhone: "Phone",
        projectType: "Project type",
        location: "Project location",
        budget: "Estimated budget",
        details: "Project description",
        success: "Your quote request has been sent (simulation)."
      }
    },
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: detectInitialLanguage(),
  fallbackLng: 'fr',
  interpolation: {
    // React protège déjà contre les injections XSS
    escapeValue: false,
  },
})

/**
 * Persists language changes to localStorage when running in the browser.
 */
i18n.on('languageChanged', (lng) => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem('east-gabon-lang', lng)
  }
})

export default i18n