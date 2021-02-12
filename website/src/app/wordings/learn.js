/** @type {import('../projects-list').ProjectListWording} */
const en = {
  title: "Lean",
  abstract:
    "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
  items: [
    {
      href: "test",
      type: "book",
      spotlight: true,
      desc: {
        title: "Lorem ipsum",
        subtitle: "Lorem ipsum dolor sit amet",
      },
      img: {
        src: "/images/web-illustrations/eni-dpawm-cover_320.jpg ",
        height: 320,
        alt:
          "développement et architecture des applications web modernes, éditions ENI",
      },
    },
    ...Array(8).fill({
      href: "test",
      type: "book",
      desc: {
        title: "Lorem ipsum",
        subtitle: "Lorem ipsum dolor sit amet",
      },
      img: {
        src: "/images/web-illustrations/undraw_reading_0re1.svg",
        alt: "alt",
      },
    }),
  ],
};

/** @type {import('../projects-list').ProjectListWording} */
const fr = {
  title: "Apprendre",
  abstract:
    "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
  items: [
    {
      type: "Livre",
      date: "mars 2021",
      spotlight: true,
      desc: {
        title: "Applications Web Modernes",
        subtitle:
          "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
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
          text: "précommander",
        },
      ],
    },
    {
      type: "Ressource",
      // TODO
      // href: "/inventory",
      date: "",
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
      // TODO
      // href: "/codelabs/modern-data-driven",
      date: "",
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
    {
      type: "Atelier",
      // FIXME: iframe for "/codelabs/doc/modern-data-driven_fr/index.html?index=/codelabs/",
      href: "/codelabs/modern-data-driven",
      date: "février 2020",
      desc: {
        title: "PWA & capacités modernes",
        subtitle:
          "Construire une application web proposant une expérience optimale, en 12 étapes.",
      },
      img: {
        src: "/images/web-illustrations/dev-focus.svg",
        alt: "coder par étapes",
        height: 120,
      },
    },
    {
      type: "Conférences",
      // TODO: page
      href: "https://youtu.be/_byWU9V4fXw",
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
      // TODO: page
      href: "https://youtu.be/-d_Ka7OE4Xk",
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
      // TODO: page
      // href: "",
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
      // href: "/dpawm-notes/",
      desc: {
        title: "Notes pour AWM",
        subtitle:
          "Compléments et notes pour le livre Développement & Architecture des Applications Web Modernes",
      },
      img: {
        src: "/images/web-illustrations/undraw_reading_0re1.svg",
        alt: "coder par étapes",
      },
    },
  ],
};

export { en, fr };
