import { readTemplate } from "../utils.mjs";

export default {
  template: readTemplate(import.meta),
  langs: {
    en : {
      illustration: {
        alt: "une nouvelle approche",
      },
      title: "Relearn Web Development",
      cta: ["Get Started", "Tools", "News"],
      details: {
        header: "Here, you'll find:",
      },
    },
    fr : {
      illustration: {
        alt: "une nouvelle approche",
      },
      title: "Redécouvrir le développement Web",
      cta: ["Démarrer", "Outils", "Actualités"],
      details: {
        header: "Retrouvez sur ce site",
      },
    }
  }
}
