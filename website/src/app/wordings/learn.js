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

export { en, fr };
