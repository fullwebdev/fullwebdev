/** @type {import('../../views/projects-list').ProjectListWording} */
const wording = {
  title: "Resources",
  abstract: ``,
  intro: "Introduction",
  cta: [{ text: "Introduction", href: "/docs/", primary: true }],
  items: [
    {
      type: "Documentation",
      href: "/docs/rendering/benchmark",
      date: "march 2021",
      desc: {
        title: "Rendering benchmarks",
        subtitle: "Comparing different rendering approaches and solutions",
      },
      img: {
        src: "/images/web-illustrations/speed-test.svg",
        alt: "speed test",
        height: 175,
      },
    },
    {
      type: "Lecture",
      href: "/docs/conferences/wof",
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
  ],
};

export default wording;
