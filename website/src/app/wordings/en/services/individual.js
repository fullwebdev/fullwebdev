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
                url: "https://calendly.com/noelmace/coaching-interview",
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
    {
      desc: {
        title: "Newsletters",
        subtitle: "Subscribe to our newsletter.",
      },
      backgroundImg:
        "/images/web-illustrations/markus-winkler-aId-xYRTlEc-unsplash.jpg",
      cta: [{ href: "/newsletter", text: "stay tuned", primary: true }],
    },
  ],
};

export default wording;
