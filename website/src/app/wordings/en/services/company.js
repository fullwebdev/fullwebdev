/** @type {import('../../../views/projects-list').ProjectListWording} */
const wording = {
  title: "Corporate services",
  cta: [
    { text: "Contact us", href: "mailto:contact@fullweb.dev", primary: true },
    {
      text: "Schedule a meeting",
      onclick: () => {
        if (window.Calendly) {
          window.Calendly.initPopupWidget({
            url: "https://calendly.com/noelmace/business-meeting",
          });
        }
        return false;
      },
      primary: true,
    },
  ],
  items: [
    {
      desc: {
        title: "Consulting",
        subtitle:
          "Advices and R&D for Web development, architecture and project management.",
      },
      backgroundImg:
        "/images/web-illustrations/fotis-fotopoulos-DuHKoV44prg-unsplash.jpg",
      cta: [
        {
          href: "/cv/nma",
          text: "experience & expertise",
        },
      ],
    },
    {
      desc: {
        title: "Trainings & Lectures",
        subtitle: "Trainings tailored to the needs of your teams.",
      },
      backgroundImg:
        "/images/web-illustrations/felicia-buitenwerf-Qs_Zkak27Jk-unsplash.jpg",
    },
    {
      desc: {
        title: "Developer Relations",
        subtitle:
          "Improve your products developer experience and your relations with the community. ",
      },
      backgroundImg:
        "/images/web-illustrations/jaime-lopes-0RDBOAdnbWM-unsplash.jpg",
    },
    {
      desc: {
        title: "Instructional Engineering",
        subtitle: "Rationalisating your knowledge management and trainings.",
      },
      backgroundImg: "/images/web-illustrations/kma-SiOJXlWeWc0-unsplash.jpg",
    },
  ],
};

export default wording;
