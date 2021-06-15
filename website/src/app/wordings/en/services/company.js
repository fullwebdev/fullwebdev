/** @type {import('../../../views/projects-list').ProjectListWording} */
const wording = {
  title: "Corporate services",
  cta: [
    { text: "Contact us", href: "mailto:contact@noelmace.com", primary: true },
    { text: "Réserver un rdv", href: "TODO", primary: true },
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
      cta: [{ href: "test", text: "competencies", primary: true }],
    },
    {
      desc: {
        title: "Trainings & Lectures",
        subtitle: "Trainings tailored to the needs of your teams.",
      },
      backgroundImg:
        "/images/web-illustrations/felicia-buitenwerf-Qs_Zkak27Jk-unsplash.jpg",
      cta: [
        { href: "test", text: "course catalog", primary: true },
        { href: "test", text: "custom solutions", primary: false },
      ],
    },
    {
      desc: {
        title: "Developer Relations",
        subtitle:
          "Improve your products developer experience and your relations with the community. ",
      },
      backgroundImg:
        "/images/web-illustrations/photo-1550305080-4e029753abcf.webp",
      cta: [{ href: "test", text: "our services", primary: true }],
    },
    {
      desc: {
        title: "Instructional Engineering",
        subtitle: "Rationalisating your knowledge management and trainings.",
      },
      backgroundImg: "/images/web-illustrations/kma-SiOJXlWeWc0-unsplash.jpg",
      cta: [{ href: "test", text: "our services", primary: true }],
    },
  ],
};

export default wording;
