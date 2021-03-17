/** @type {import('../../projects-list').ProjectListWording} */
export default {
  title: "Actualités",
  abstract: "Annonces et articles de blog.",
  items: [
    {
      desc: {
        title: "Travail en cours...",
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
    {
      href: "/blog/qui-a-invente-hypertexte",
      spotlight: false,
      type: "blog",
      date: "2021-03-16",
      desc: {
        title: "L'invention des ordis et de l'hypertexte",
        subtitle: `Quelques compléments après ma chronique pour Les Briques du Web S01E01`,
      },
      img: {
        src: "/illustrations/images/third-party/SRI-Bill-English-1968.png",
        alt: "The Mother of all Demos",
        height: 250,
      },
    },
  ],
};
