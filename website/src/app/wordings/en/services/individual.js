/** @type {import('../../../views/projects-list').ProjectListWording} */
const wording = {
  title: "Services for individuals",
  items: [
    {
      desc: {
        title: "Newsletters",
        subtitle: "Keep up to date with the latest fullweb.dev news.",
      },
      backgroundImg:
        "/images/web-illustrations/markus-winkler-aId-xYRTlEc-unsplash.jpg",
      cta: [{ href: "/newsletter", text: "subscribe", primary: true }],
    },
    {
      date: "soon",
      desc: {
        title: "Worshops",
        subtitle: "Learn with our online workshop sessions.",
      },
      backgroundImg:
        "/images/web-illustrations/lagos-techie-BVr3XaBiWLU-unsplash.jpg",
      cta: [{ href: "/newsletter", text: "stay tuned", primary: false }],
      wip: true,
    },
  ],
};

export default wording;
