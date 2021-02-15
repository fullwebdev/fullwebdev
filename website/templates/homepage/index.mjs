import { readTemplate } from "../utils.mjs";

export default {
  template: readTemplate(import.meta),
  langs: {
    en: {
      illustration: {
        alt: "A new perspective",
      },
      pageTitle: "A new perspective of Web Development",
      cta: "Get Started",
      details: {
        items: [
          {
            title: "Neutrality",
            content:
              "No dogmatism nor fandom here. Just an objective, holistic view of Web Development, to help you make the best choice for each project.",
          },
          {
            title: "Hindsight",
            content:
              "The Web is already more than 30 years old now. Maybe it's time to slow down a little. On Fullweb.dev, all things are put into perspective to improve our understanding of their real impact and meanings.",
          },
          {
            title: "Accessibility",
            content:
              "Fullweb.dev leaves no one behind. We do our best to make our website and contents accessible, by following both a11y and plain language principles.",
          },
          {
            title: "Openness",
            content:
              "We share as much information as possible. This includes learning materials, of course, but also our tools, decision-making process, and source code.",
          },
        ],
      },
    },
    fr: {
      illustration: {
        alt: "une nouvelle approche",
      },
      pageTitle: "Redécouvrir le développement Web",
      cta: "Démarrer",
      details: {
        items: [
          {
            title: "Neutralité",
            content:
              "Chaque solution de développement Web est abordée pour ce qu'elle est, sans dogmatisme, afin de vous permettre de faire le meilleur choix en fonction du contexte.",
          },
          {
            title: "Recul",
            content:
              "Le Web a aujourd'hui plus de 30 ans. Plutôt que d'encourager une course effrenée à la nouveauté, fullweb.dev incrit chaque sujet dans son contexte, afin de vous permettre d'acquérir une meilleure vision d'ensemble.",
          },
          {
            title: "Accessibilité",
            content:
              "Fullweb.dev se doit d'être utilisable par le plus grand nombre. Nous faisons donc tout notre possible pour respecter les meilleures pratiques d'accessibilité , et pour partager nos idées de manière simple et intelligible.",
          },
          {
            title: "Ouverture",
            content:
              "L'ensemble de ce site, les contenus associés, les outils créés et utilisés, ainsi que les processus de réflexion et décision sont systématiquement réalisés de la manière la plus ouverte possible. Ce qui inclue le partage des sources sous licenses libres et/ou ethiques via Github.",
          },
        ],
      },
    },
  },
};
