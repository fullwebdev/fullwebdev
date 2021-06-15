/** @type {import('../../../views/services').ServicesWording} */
const wording = {
  title: "Services",
  choices: [
    {
      href: "/services/individual",
      text: "pour les particuliers",
      image: {
        url: "/images/icons/individual.svg",
        alt: "personne seule"
      }
    },
    {
      href: "/services/company",
      text: "pour les entreprises",
      image: {
        url: "/images/icons/company.svg",
        alt: "immeuble d'entreprise"
      }
    }
  ]
};

export default wording;
