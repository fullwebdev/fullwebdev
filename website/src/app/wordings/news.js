/** @type {import('../projects-list').ProjectListWording} */
const en = {
  title: "News",
  abstract:
    "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.",
  /** @type {Array<import('../projects-list').Project>} */
  items: Array(8).fill({
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
};

/** @type {import('../projects-list').ProjectListWording} */
const fr = {
  title: "Actualités",
  abstract:
    "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.",
  /** @type {Array<import('../projects-list').Project>} */
  items: Array(8).fill({
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
};

export { en, fr };
