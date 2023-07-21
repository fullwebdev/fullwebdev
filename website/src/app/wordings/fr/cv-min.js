import baseWording from "./cv-nma.js";

/** @type {import('../../views/cv-nma').CVNMAWording} */
const wording = {
  ...baseWording,
  title: "Développeur et Architecte Web Fullstack",
  subtitle: "Ingénieur Pédagogique",
  presentation: {
    title: "Présentation",
    abstract: [
      ...baseWording.presentation.abstract,
      `Tout naturellement, je cherche aujourd'hui à encore davantage élargir mes compétences et horizons, dans un contexte qui saura me nourrir et me surprendre.`,
    ],
    langs: {
      title: "Langues",
      content: [
        "Anglais : avancé (C1/C2)",
        "Français : natif & littéraire",
        "Espagnol: notions (A2)",
      ],
    },
  },
  intro: {
    items: [
      {
        title: "Architecture & Développement Web",
        icon: {
          src: "/images/icons/tools.svg",
          caption: "expertise",
        },
        content: [
          /* HTML */ `Focus sur les
            <strong>standards et principes transverses</strong> (Web Components,
            Web APIs, PWAs, PRPL, a11y, performances, etc.)`,
          /* HTML */ `Maitrise de nombreux frameworks et bibliothèques (<strong
              >Lit, Open WC, Angular, React, Vue, Redux, Gatsby, 11ty,
              etc.</strong
            >)`,
          /* HTML */ `Maitrise avancée de
            <strong>Angular, Angular CLI & Nrwl/Nx</strong> (contributeur)`,
          /* HTML */ `Création d'ouvrages et conférences de référence`,
          /* HTML */ `Aptitudes <strong>fullstack</strong> et
            <strong>DevOps</strong> (REST, ORM, CI/CD, SGBD, Docker, PaaS,
            Node.js, Python, Java, etc.)`,
        ],
      },
      {
        title: "Pédagogie",
        icon: {
          src: "/images/icons/rails.svg",
          caption: "ligne directrice",
        },
        content: [
          /* HTML */ `<strong>Mentoring</strong> et
            <strong>transmission de compétences</strong> sont les piliers et
            fils conducteurs de l'ensemble de ma&nbsp;carrière`,
          /* HTML */ `Large expérience, en tant que formateur autonome et dans
          la direction et l'accompagnement d'importantes équipes pédagogique ou
          de R&D`,
        ],
      },
      {
        title: "Partage & Découverte",
        icon: {
          src: "/images/icons/motivation.svg",
          caption: "motivations",
        },
        content: [
          /* HTML */ `Forte appétence pour l'<strong>Open Source</strong> et les
            oeuvres&nbsp;libres`,
          /* HTML */ `Nombreux
            <strong>workshops, articles, livres et conférences</strong> créés
            et&nbsp;présentés`,
        ],
      },
    ],
  },
  experience: {
    title: "Expérience",
    dateIntervals: {
      noEnd: "Depuis",
      start: "De",
      end: "à",
    },
    items: [
      [
        {
          company: { name: "Freelance", details: "" },
          startDate: "3 ans",
          jobTitle: "Consultant Indépendant",
          details: [
            "Developpement Web et Consulting",
            "Formations en ligne et en présentiel",
            "Technical Writing",
          ],
          icon: "/images/web-illustrations/companies-logos/Programming_icon_flat_circle.svg",
        },
        {
          company: { name: "DevRel", details: "" },
          duration: "4 ans",
          jobTitle: "Developer Relations",
          details: [
            "Direction de la communication",
            "Conférences, podcasts et organisation d'évènements",
            "Open Source community management",
            "encadrement et contribution au développement",
            "accompagnement client",
            "technical writing (livres et documentations)",
          ],
          icon: "/images/web-illustrations/companies-logos/devrel.png",
        },
        {
          company: { name: "Direction Technique", details: "" },
          jobTitle: "Manager / Architect / Lead Dev",
          duration: "4 ans",
          icon: "/images/web-illustrations/companies-logos/chef.png",
          details: [
            "Direction de pôles et équipes techniques",
            "Expertise en architecture et développement Web Frontend (Web Components, Angular, React, Preact, Vue, NgRx/Redux...)",
            "Encadrement et montée en compétence d'équipes de développement",
            "Audit et consulting",
            "Scrum Mastering",
            "Développement Fullstack (Java, Python, Spring, Struts, Hibernate...)",
            "Réponses à appel d'offre, négociation, dossiers de financement...",
          ],
          shortLine: false,
        },
        {
          company: { name: "Pédagogie", details: "" },
          jobTitle: "Directeur / Ingénieur pédagogique en informatique",
          duration: "6 ans",
          icon: "/images/web-illustrations/companies-logos/teaching.png",
          details: [
            "formations en ligne et présentiel",
            "définition, rédaction et encadrement d'unités pédagogiques et de leur personnel d'enseignement",
          ],
          shortLine: true,
        },
      ],
    ],
  },
  education: {
    title: "Formation",
    items: [
      {
        diploma: "Master",
        title: "Ingénierie Informatique",
      },
      {
        diploma: "DEUG (bac+2)",
        title: "Mathématiques Appliqués",
      },
    ],
  },
  accomplishments: {
    title: "Réalisations",
    groups: [
      {
        title: "28 Conférences & Workshops",
        items: [
          {
            headline: "Architecture d'applications Web",
          },
          {
            headline: "Web Performance",
          },
          {
            headline: "Soft Skills",
          },
          {
            headline: "Stratégies d'entreprise",
          },
          {
            headline: "Frameworks et bibliothèques de développement Web",
          },
          {
            headline: "Histoire des technologies",
          },
        ],
      },
      {
        title: "13 Podcasts",
        items: [
          {
            headline: "Soft Skills",
          },
          {
            headline: "Lead Development",
          },
          {
            headline: "Bien-être au travail",
          },
        ],
      },
      {
        title: "20+ Publications",
        items: [
          {
            headline: "Livre de référence",
          },
          {
            headline: "Blogs",
          },
          {
            headline: `Livres blancs`,
          },
          {
            headline: `Manuels de formation`,
          },
          {
            headline: `Documentations techniques`,
          },
        ],
      },
      {
        title: "15+ projets Open Source",
        items: [
          {
            headline: "CLIs",
          },
          {
            headline: "Static Site Generators",
          },
          {
            headline: "Framework et bibliothèques de développment web",
          },
          {
            headline: "Démonstrations techniques et Proofs of Concepts",
          },
        ],
      },
    ],
  },
};

export default wording;
