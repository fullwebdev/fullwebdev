/** @type {import('../../views/projects-list').ProjectListWording} */
const wording = {
  title: "Tools",
  abstract:
    "Libraries and build tools built to help you create better projets.",
  items: [
    {
      type: "Online & NPM",
      href: "/tools/ce-name",
      desc: {
        title: "custom-element-name",
        subtitle:
          "Check if a given string can really be used as a custom element name.",
      },
      img: {
        src: "/images/web-illustrations/ce-name.png",
        alt: "<ce-?>",
        height: 75,
      },
    },
    {
      href:
        "https://github.com/fullwebdev/fullwebdev/tree/master/packages/daucus",
      type: "Runtime Libraries & Build Tools",
      date: "beta",
      desc: {
        title: "Daucus",
        subtitle:
          "Micro-libraries & build tools for (semi-)static site generation. Daucus is currently in beta version, and will soon evolve with this website.",
      },
      img: {
        src: "/images/web-illustrations/umbel_200.png",
        alt: "alt",
        height: 200,
      },
    },
    {
      href:
        "https://github.com/fullwebdev/fullwebdev/tree/master/packages/helpers",
      type: "Helpers",
      date: "v0",
      desc: {
        title: "modern-helpers",
        subtitle: "Simple helpers for modern web development.",
      },
      img: {
        src: "/images/web-illustrations/modern-helpers.svg",
        alt: "alt",
      },
    },
    {
      href: "https://github.com/noelmace/monocli",
      date: "revision in progress...",
      type: "CLI",
      wip: true,
      desc: {
        title: "MonoCLI",
        subtitle: "A meta-CLI for your monoreprositories and web projets.",
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
