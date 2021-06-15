/** @type {import('../../../views/projects-list').ProjectListWording} */
const wording = {
  title: "Services for individuals",
  items: [
    {
      desc: {
        title: "Coaching",
        subtitle:
          "Get personalized support according to your needs, at your own pace.",
      },
      backgroundImg:
        "/images/web-illustrations/new-data-services-UO-QYR28hS0-unsplash.jpg",
      cta: [
        {
          onclick: () => {
            if (window.Calendly) {
              window.Calendly.initPopupWidget({
                url: "https://calendly.com/noelmace",
              });
            }
            return false;
          },
          text: "schedule a free meeting",
          primary: true,
        },
      ],
    },

    {
      desc: {
        title: "Worshops",
        subtitle: "Learn with our online workshop sessions.",
      },
      backgroundImg:
        "/images/web-illustrations/lagos-techie-BVr3XaBiWLU-unsplash.jpg",
      cta: [
        { href: "test", text: "next sessions", primary: true },
        { href: "test", text: "learn more", primary: false },
      ],
    },
    {
      date: "soon",
      desc: {
        title: "Newsletters",
        subtitle:
          "Tenez vous informés de l'actualité du Web sans effort grâce à nos newsletters.",
      },
      backgroundImg:
        "/images/web-illustrations/markus-winkler-aId-xYRTlEc-unsplash.jpg",
      cta: [{ href: "test", text: "stay tuned", primary: false }],
      wip: true,
    },
    {
      date: "soon",
      desc: {
        title: "Booklets",
        subtitle: "Master a specific topic reading short books.",
      },
      backgroundImg:
        "/images/web-illustrations/rich-tervet-1jUPdfWZgps-unsplash.jpg",
      cta: [{ href: "test", text: "stay tuned", primary: false }],
      wip: true,
    },
  ],
};

export default wording;
