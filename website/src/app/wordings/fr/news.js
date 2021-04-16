/** @type {import('../../views/projects-list').ProjectListWording} */
const wording = {
  title: "Actualités",
  abstract: "Annonces et articles de blog.",
  items: [
    {
      href: "/blog/histoire-rfc",
      spotlight: false,
      type: "blog",
      date: "2021-04-13",
      desc: {
        title: "L'Histoire des Request For Comments",
        subtitle: `Quelques compléments après ma chronique pour Les Briques du Web S01E03`,
      },
      img: {
        src: "/illustrations/images/third-party/ietf-rfc1-heading.png",
        alt: "RFC1 Heading",
        height: 250,
      },
    },
    {
      href: "/blog/as-we-may-think",
      spotlight: false,
      type: "blog",
      date: "2021-04-11",
      desc: {
        title: "Vannevar Bush et la naissance des NTIC",
        subtitle: `Quelques compléments après ma chronique pour Les Briques du Web S01E02`,
      },
      img: {
        src: "/illustrations/images/third-party/The_Memex.png",
        alt: "The Memex",
        height: 250,
      },
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

export default wording;
