/** @type {import('../../../views/services').ServicesWording} */
const wording = {
  title: "Services",
  choices: [
    {
      href: "/services/individual",
      text: "for individuals",
      image: {
        url: "/images/icons/individual.svg",
        alt: "single person"
      }
    },
    {
      href: "/services/company",
      text: "for companies",
      image: {
        url: "/images/icons/company.svg",
        alt: "company building"
      }
    }
  ]
};

export default wording;
