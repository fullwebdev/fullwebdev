/** @type {import('../../views/projects-list').ProjectListWording} */
const wording = {
  title: "Blog",
  abstract: "Annonces et articles de blog.",
  items: [
    {
      href: "/blog/fullstack-or-not-fullstack",
      spotlight: false,
      wip: false,
      type: "blog",
      date: "2021-09-28",
      desc: {
        title: "Être ou ne pas être full stack...",
        subtitle: `Quel sens donner au terme "full stack" ? (script pour les Briques du Web S02E02)`,
      },
      img: {
        src: "/images/web-illustrations/fullstack-of-pancakes.jpg",
        alt: "A full stack of pancakes",
        height: 250,
      },
    },
    {
      href: "/blog/rentree-2021",
      spotlight: false,
      wip: false,
      type: "blog",
      date: "2021-09-14",
      desc: {
        title: "C'est la rentrée !",
        subtitle: `Réflexion personnelle sur le biais de négativité (script pour les Briques du Web S02E01)`,
      },
      img: {
        src: "/images/web-illustrations/nma-jsc21-thedamfr_cover-250x.jpg",
        alt:
          "Photo de Noël Macé prise au JUG SummerCamp 2021 après une conférence.",
        height: 250,
      },
    },
    {
      href: "/blog/naissance-whatwg",
      spotlight: false,
      wip: false,
      type: "blog",
      date: "2021-06-22",
      desc: {
        title: "WHATWG & W3C : la réunion de la discorde",
        subtitle: `Quelques compléments après ma chronique pour Les Briques du Web S01E07`,
      },
      img: {
        src: "/images/web-illustrations/two-foxes.jpg",
        alt: "deux renards se battant dans la neige",
        height: 250,
      },
    },
    {
      href: "/blog/limites-foss",
      spotlight: false,
      wip: true,
      type: "draft",
      date: "2021-05-11",
      desc: {
        title: "Joies et limites de l'Open Source",
        subtitle: `Quelques compléments après ma chronique pour Les Briques du Web S01E05`,
      },
      img: {
        src: "/images/web-illustrations/richard-balog-open-unsplash.jpg",
        alt: "Come in we're open",
        height: 250,
      },
    },
    {
      href: "/blog/revolution-khtml",
      spotlight: false,
      type: "blog",
      date: "2021-04-27",
      desc: {
        title: "Quand Linux et le logiciel libre ont révolutionné le Web",
        subtitle: `Quelques compléments après ma chronique pour Les Briques du Web S01E04`,
      },
      img: {
        src: "/illustrations/images/third-party/konqueror.svg",
        alt: "logo du navigateur Konqueror",
        height: 250,
      },
    },
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
