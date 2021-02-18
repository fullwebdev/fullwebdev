import { readTemplate } from "../utils.mjs";

export default {
  template: readTemplate(import.meta),
  langs: {
    en: {
      header: "Content not found",
      img: {
        title: "blank canvas",
      },
      description: {
        message: "This content doesn't exist .. yet?",
        cta: ["Contribute", "Back to the home page"],
      },
    },
    fr: {
      header: "Contenu introuvable",
      img: {
        title: "page blanche",
      },
      description: {
        message:
          "Le contenu que vous avez demandé n'existe pas ... pour l'instant ?",
        cta: ["Contribuer", "Revenir à l'accueil"],
      },
    },
  },
};
