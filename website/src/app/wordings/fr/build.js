/** @type {import('../../views/projects-list').ProjectListWording} */
const wording = {
  title: "Outils",
  abstract:
    "Bibliothèques et outils de développement pour vous aider à créer de meilleurs projets.",
  items: [
    {
      type: "En ligne et sur npm",
      href: "/tools/ce-name",
      desc: {
        title: "custom-element-name",
        subtitle:
          "Vérifier si une chaîne de caractère peut vraiment être utilisée pour nommer un élément personnalisé.",
      },
      img: {
        src: "/images/web-illustrations/ce-name.png",
        alt: "<ce-?>",
        height: 75,
      },
    },
    {
      type: "Bibliothèques Web & Outils de build",
      href: "/daucus",
      date: "beta",
      desc: {
        title: "Daucus",
        subtitle: `Micro-bibliothèques et outils de build pour la création de sites Web semi-statiques simples et performants.`,
      },
      img: {
        src: "/images/web-illustrations/umbel_200.png",
        alt: "alt",
        height: 150,
      },
    },
    {
      href: "/helpers",
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
      href: "https://github.com/nlm-pro/monocli",
      date: "v0",
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

export default wording;
