/** @type {import('../../views/projects-list').ProjectListWording} */
const wording = {
  title: "Actualités",
  abstract: "Annonces et articles de blog.",
  items: [
    {
      desc: {
        title: "En construction",
        subtitle: "De nouveaux articles seront bientôt partagés ici.",
      },
      img: {
        src: "/images/web-illustrations/noted.svg",
        alt: "noted for later",
      },
      cta: [
        {
          href: "https://dev.to/noelmace",
          primary: true,
          text: "Articles sur Dev.to",
        },
      ],
    },
  ],
};

export default wording;
