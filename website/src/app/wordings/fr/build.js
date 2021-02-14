/** @type {import('../../projects-list').ProjectListWording} */
export default {
  title: "Outils",
  abstract:
    "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.",
  items: [
    {
      type: "Bibliothèques Web & Outils de build",
      spotlight: true,
      date: "beta",
      desc: {
        title: "Daucus",
        subtitle: "Lorem ipsum dolor sit amet",
      },
      img: {
        src: "/images/web-illustrations/umbel.png",
        alt: "alt",
        height: 250,
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
      date: "v1.0.0",
      desc: {
        title: "modern-helpers",
        subtitle: "Lorem ipsum dolor sit amet",
      },
      img: {
        src: "/images/web-illustrations/puzzle.jpg",
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
        subtitle: "Lorem ipsum dolor sit amet",
      },
      img: {
        src: "/images/web-illustrations/monocli-logo.png",
        alt: "alt",
        height: 120,
      },
    },
  ],
};
