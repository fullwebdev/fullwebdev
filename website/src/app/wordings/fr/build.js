/** @type {import('../../projects-list').ProjectListWording} */
export default {
  title: "Outils",
  abstract:
    "Bibliothèques et outils de développement pour vous aider à créer de meilleurs projets.",
  items: [
    {
      type: "Bibliothèques Web & Outils de build",
      spotlight: true,
      date: "beta",
      desc: {
        title: "Daucus",
        subtitle: `Micro-bibliothèques et outils de build pour la création de sites Web semi-statiques simples et performants. Actuellement en version Beta, Daucus fut créé pour ce site web ainsi que le livre "développement et architecture des applications web modernes". Il permettra ainsi, dans sa version finale, de générer de nombreux formats complémentaires (pdf, epub, odt, etc.) à partir d'une même source unique d'information.`,
      },
      img: {
        src: "/images/web-illustrations/umbel_200.png",
        alt: "alt",
        height: 200,
      },
      cta: [
        {
          href:
            "https://github.com/fullwebdev/fullwebdev/tree/new-website/packages/daucus",
          primary: true,
          text: "sources",
        },
        // {
        //   href:
        //     "/daucus/",
        //   text: "documentation",
        // },
      ],
    },
    {
      href:
        "https://github.com/fullwebdev/fullwebdev/tree/new-website/packages/helpers",
      type: "Helpers",
      date: "v0",
      desc: {
        title: "modern-helpers",
        subtitle:
          "Des helpers simples pour faciliter la création d'applications Web modernes.",
      },
      img: {
        src: "/images/web-illustrations/modern-helpers.svg",
        alt: "alt",
      },
    },
    {
      href: "https://github.com/noelmace/monocli",
      date: "refonte en cours...",
      type: "CLI",
      wip: true,
      desc: {
        title: "MonoCLI",
        subtitle: "Une Meta-CLI pour vos monorepos.",
      },
      img: {
        src: "/images/web-illustrations/monocli-logo.png",
        alt: "alt",
        height: 100,
      },
    },
  ],
};
