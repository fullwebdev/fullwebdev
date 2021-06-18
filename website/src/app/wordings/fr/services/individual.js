/** @type {import('../../../views/projects-list').ProjectListWording} */
const wording = {
  title: "Services pour les particuliers",
  // cta: [{ text: "Nous contacter", href: "TODO", primary: true }, { text: "Réserver un rdv", href: "TODO", primary: true }],
  items: [
    {
      desc: {
        title: "Tutorat",
        subtitle:
          "Un accompagnement individuel à votre rythme, selon vos besoins.",
      },
      backgroundImg:
        "/images/web-illustrations/new-data-services-UO-QYR28hS0-unsplash.jpg",
      cta: [
        {
          onclick: () => {
            if (window.Calendly) {
              window.Calendly.initPopupWidget({
                url: "https://calendly.com/noelmace/tutorat-premier-entretient",
              });
            }
            return false;
          },
          text: "organiser un entretient gratuit",
          primary: true,
        },
      ],
    },
    {
      desc: {
        title: "Newsletters",
        subtitle:
          "Tenez vous informés de l'actualité du Web sans effort grâce à nos newsletters.",
      },
      backgroundImg:
        "/images/web-illustrations/markus-winkler-aId-xYRTlEc-unsplash.jpg",
      cta: [
        { href: "/newsletter", text: "s'inscrire gratuitement", primary: true },
      ],
    },
    {
      desc: {
        title: "Ateliers",
        subtitle:
          "Venez assister à nos sessions de formation pratique live, en ligne ou prêt de chez vous.",
      },
      backgroundImg:
        "/images/web-illustrations/lagos-techie-BVr3XaBiWLU-unsplash.jpg",
      cta: [
        { href: "test", text: "prochaines sessions", primary: true },
        { href: "test", text: "en savoir plus", primary: false },
      ],
    },
    {
      date: "prochainement",
      desc: {
        title: "Booklets",
        subtitle: "Des livres courts pour maitriser un sujet précis.",
      },
      backgroundImg:
        "/images/web-illustrations/rich-tervet-1jUPdfWZgps-unsplash.jpg",
      cta: [{ href: "test", text: "rester informé", primary: false }],
      wip: true,
    },
  ],
};

export default wording;
