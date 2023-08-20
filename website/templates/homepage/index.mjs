import { readTemplate, readSource } from "../utils.mjs";

const css = readSource(import.meta, "homepage.css");

export default {
  template: readTemplate(import.meta),
  langs: {
    en: {
      css,
      illustration: {
        alt: "moving forward",
      },
      pageTitle: "fullweb.dev archives",
      cta: "resources",
      details: {
        items: [
          {
            title: "Deprecation Warning",
            content: [
              `Most projects related to this website ended between 2022 and 2023. As a result, this website is no longer actively maintained, and may contain outdated content.`,
              `You can contact me via the form on my <a href="https://noelmace.com">personnal website</a> if you have any question or remark.`,
            ],
          },
        ],
      },
    },
    fr: {
      css,
      illustration: {
        alt: "une nouvelle approche",
      },
      pageTitle: "Archives fullweb.dev",
      cta: "resources",
      details: {
        items: [
          {
            title: "Avertissement",
            content: [
              `La majorité des projets liés à ce site web ont pris fin entre 2022 et 2023. De ce fait, ce site n'est plus activement maintenu, et est succeptible de présenter des contenus obsolètes.`,
              `Pour toute question ou remarque, vous pouvez me contacter via le formulaire sur mon <a href="https://noelmace.com">site personnel</a>.`,
            ],
          },
        ],
      },
    },
  },
};
