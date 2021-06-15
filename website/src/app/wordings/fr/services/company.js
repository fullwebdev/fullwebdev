/** @type {import('../../../views/projects-list').ProjectListWording} */
const wording = {
  title: "Services aux entreprises",
  cta: [
    { text: "Nous contacter", href: "TODO", primary: true },
    { text: "Réserver un rdv", href: "TODO", primary: true },
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
      cta: [{ href: "test", text: "compétences", primary: true }],
    },
    {
      desc: {
        title: "Formation et conférences",
        subtitle: "Un accompagnement adapté aux besoins de vos équipes.",
      },
      backgroundImg:
        "/images/web-illustrations/felicia-buitenwerf-Qs_Zkak27Jk-unsplash.jpg",
      cta: [
        { href: "test", text: "catalogue", primary: true },
        { href: "test", text: "prestations sur mesure", primary: false },
      ],
    },
    {
      desc: {
        title: "Developer Relations",
        subtitle:
          "Améliorez l'expérience de développement de vos produits et les liens avec votre communauté.",
      },
      backgroundImg:
        "/images/web-illustrations/photo-1550305080-4e029753abcf.webp",
      cta: [{ href: "test", text: "nos services", primary: true }],
    },
    {
      desc: {
        title: "Ingénierie pédagogique",
        subtitle:
          "Suivi de montée en compétence, gestion des connaissances, et mise en oeuvre et encadrement de formations initiales et professionnelles",
      },
      backgroundImg: "/images/web-illustrations/kma-SiOJXlWeWc0-unsplash.jpg",
      cta: [{ href: "test", text: "nos services", primary: true }],
    },
  ],
};

export default wording;
