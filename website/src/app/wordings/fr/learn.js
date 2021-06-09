/** @type {import('../../views/projects-list').ProjectListWording} */
const wording = {
  title: "Ressources",
  abstract:
    "Acquérir une vision d'ensemble pragmatique du développement web, à votre propre rythme.",
  intro: "Introduction",
  items: [
    {
      type: "Livre",
      date: "mars 2021",
      spotlight: true,
      desc: {
        title: "Applications Web Modernes",
        subtitle: `Après plus d'un an de recherche et écriture, le tout premier livre francophone abordant la question du "développement Web Moderne" sera enfin disponible dés le mois de mars aux éditions ENI. Redécouvrez en sept chapitres les fondamentaux de développement Web comme vous ne les aviez jamais abordés auparavant.`,
      },
      img: {
        src: "/images/web-illustrations/eni-dpawm-cover_320.jpg ",
        height: 320,
        alt:
          "développement et architecture des applications web modernes, éditions ENI",
      },
      cta: [
        {
          href:
            "https://www.editions-eni.fr/livre/developpement-et-architecture-des-applications-web-modernes-retrouver-les-fondamentaux-9782409029523",
          primary: true,
          text: "éditions ENI",
        },
        {
          href:
            "https://www.leslibraires.fr/livre/18531129-developpement-et-architecture-des-applications--noel-mace-editions-eni",
          primary: false,
          text: "leslibraires.fr",
        },
        {
          href:
            "https://www.librel.be/livre/9782409029523-developpement-et-architecture-des-applications-web-modernes-retrouver-les-fondamentaux-noel-mace/",
          primary: false,
          text: "librel.be",
        },
      ],
    },
    {
      type: "Documentation",
      href: "/docs/rendering/benchmark",
      date: "mars 2021",
      desc: {
        title: "Optimiser le rendering",
        subtitle:
          "Étudier les différentes méthodes de rendering, et comparer leurs performances.",
      },
      img: {
        src: "/images/web-illustrations/speed-test.svg",
        alt: "speed test",
        height: 175,
      },
    },
    {
      type: "Atelier",
      href:
        "https://fullweb.dev/codelabs/doc/modern-data-driven_fr/index.html?index=/learn",
      date: "février 2020",
      desc: {
        title: "PWA & capacités modernes",
        subtitle:
          "Construire une application web offrant une expérience optimale, en 12 étapes.",
      },
      img: {
        src: "/images/web-illustrations/dev-focus.svg",
        alt: "coder par étapes",
        height: 120,
      },
    },
    {
      type: "Conférences",
      href: "/docs/conferences/wof",
      date: "2019",
      desc: {
        title: "The Web is on FIRE",
        subtitle:
          "Toutes les dernières nouveautés de la Web Platform, leurs apports niveau UX, et des cas concrets.",
      },
      img: {
        src: "/images/web-illustrations/campfire.svg",
        alt: "feu de camp",
      },
    },
    {
      type: "Conférence",
      href: "/docs/conferences/vanilla-web",
      date: "2019",
      desc: {
        title: "Vanilla is coming (back)",
        subtitle:
          "Enfin un guide pratique pour utiliser la plateforme Web dans la vraie vie.",
      },
      img: {
        src: "/images/web-illustrations/ice-cream.svg",
        alt: "conférencier",
      },
    },
    {
      type: "Conférence",
      href: "/docs/conferences/prpl",
      date: "2019",
      desc: {
        title: "PRPL pattern",
        subtitle:
          "Associer Push, Render, Pre-cache & Lazy-load pour offrir des performances optimales",
      },
      img: {
        src: "/images/web-illustrations/fast-loading.svg",
        alt: "conférencier",
      },
    },
    {
      type: "Livret",
      date: "prochainement",
      wip: true,
      desc: {
        title: "Notes pour AWM",
        subtitle:
          "Compléments et notes pour le livre Développement & Architecture des Applications Web Modernes",
      },
      img: {
        src: "/images/web-illustrations/reading.svg",
        alt: "coder par étapes",
      },
    },
    {
      type: "Ressource",
      date: "prochainement",
      wip: true,
      desc: {
        title: "L'Inventaire",
        subtitle:
          "Liste et description des différentes bibliothèques, frameworks et outils de développement Web",
      },
      img: {
        src: "/images/web-illustrations/select-option.svg",
        alt: "faire un choix",
      },
    },
    {
      type: "Ressource",
      wip: true,
      date: "prochainement",
      desc: {
        title: "Codes d'exemple",
        subtitle:
          "Explorez des exemples de code simples illustrant de nombreux sujet abordés sur ce site.",
      },
      img: {
        src: "/images/web-illustrations/hacker-mindset.svg",
        alt: "code",
      },
    },
  ],
};

export default wording;
