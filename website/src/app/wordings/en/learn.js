/** @type {import('../../projects-list').ProjectListWording} */
export default {
  title: "Learn",
  abstract:
    "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
  items: [
    {
      type: "Lecture",
      // TODO: page
      href: "https://www.youtube.com/watch?v=lfubOlz3JLI",
      date: "2019",
      desc: {
        title: "The Web is on FIRE",
        subtitle:
          "Learn the best new capabilities of the modern web in one shot without burning out.",
      },
      img: {
        src: "/images/web-illustrations/campfire.svg",
        alt: "feu de camp",
      },
    },
    {
      type: "Soon...",
      date: "",
      spotlight: true,
      desc: {
        title: "more will follow",
        subtitle:
          "For now, I mainly create content in French. New English codelabs and booklets are expected to follow in the second half of 2021.",
      },
      img: {
        src: "/images/web-illustrations/content-team.svg",
        height: 240,
        alt: "work in progress",
      },
      cta: [
        {
          href: "https://twitter.com/noel_mace",
          primary: true,
          text: "stay tuned",
        },
      ],
    },
  ],
};
