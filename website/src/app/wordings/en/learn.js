/** @type {import('../../projects-list').ProjectListWording} */
export default {
  title: "Learn",
  abstract: `Gain an holistic and pragmatique view of Web Development at your own pace.`,
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
        alt: "campfire",
      },
    },
    {
      type: "Ressource",
      // TODO
      // href: "/inventory",
      date: "2021",
      wip: true,
      desc: {
        title: "The Inventory",
        subtitle:
          "Listing of the most important web development libraries and tools",
      },
      img: {
        src: "/images/web-illustrations/select-option.svg",
        alt: "making a choice",
      },
    },
    {
      type: "Resource",
      // TODO
      // href: "/codelabs/modern-data-driven",
      wip: true,
      date: "2021",
      desc: {
        title: "Code Samples",
        subtitle:
          "An extensive collection of simple examples covering most of the fundamentals of Web Developement.",
      },
      img: {
        src: "/images/web-illustrations/hacker-mindset.svg",
        alt: "code",
      },
    },
    {
      type: "And more...",
      date: "2021",
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