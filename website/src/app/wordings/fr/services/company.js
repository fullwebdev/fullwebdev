/** @type {import('../../../views/projects-list').ProjectListWording} */
const wording = {
  title: "Services aux entreprises",
  cta: [
    {
      text: "Nous contacter",
      href: "mailto:contact@fullweb.dev",
      primary: true,
    },
    {
      text: "Organiser un rendez-vous",
      onclick: () => {
        if (window.Calendly) {
          window.Calendly.initPopupWidget({
            url: "https://calendly.com/noelmace/business-meeting-fr",
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
          "Conseil et R&D en développement, architecture et gestion de projets Web.",
      },
      backgroundImg:
        "/images/web-illustrations/fotis-fotopoulos-DuHKoV44prg-unsplash.jpg",
      cta: [
        {
          href: "/cv/nma",
          text: "parcours & compétences",
        },
      ],
    },
    {
      desc: {
        title: "Formation et conférences",
        subtitle: "Un accompagnement adapté aux besoins de vos équipes.",
      },
      backgroundImg:
        "/images/web-illustrations/felicia-buitenwerf-Qs_Zkak27Jk-unsplash.jpg",
    },
    {
      desc: {
        title: "Developer Relations",
        subtitle:
          "Améliorez l'expérience de développement de vos produits et les liens avec votre communauté.",
      },
      backgroundImg:
        "/images/web-illustrations/jaime-lopes-0RDBOAdnbWM-unsplash.jpg",
    },
    {
      desc: {
        title: "Ingénierie pédagogique",
        subtitle:
          "Suivi de montée en compétence, gestion des connaissances, et mise en oeuvre et encadrement de formations initiales et professionnelles",
      },
      backgroundImg: "/images/web-illustrations/kma-SiOJXlWeWc0-unsplash.jpg",
    },
  ],
};

export default wording;
