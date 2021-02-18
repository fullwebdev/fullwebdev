import { readTemplate, readSource } from "../utils.mjs";

const css = readSource(import.meta, "homepage.css");

export default {
  template: readTemplate(import.meta),
  langs: {
    en: {
      css,
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
              "You wont find any dogmatism or fandom here. Just an objective, holistic view of Web Development.",
          },
          {
            title: "Hindsight",
            content:
              "On Fullweb.dev, all things are put into perspective to improve our understanding of their real impact and meanings.",
          },
          {
            title: "Accessibility",
            content:
              "We do our best to make our website and contents accessible, by following both a11y and plain language principles.",
          },
          {
            title: "Openness",
            content:
              "We share as much information as possible. This includes learning materials, of course, but also our tools, decision-making process, and source code on Github",
          },
        ],
      },
    },
    fr: {
      css,
      illustration: {
        alt: "une nouvelle approche",
      },
      pageTitle: "Une nouvelle approche du développement Web",
      cta: "Démarrer",
      details: {
        items: [
          {
            title: "Neutralité",
            content:
              "Ici, chaque solution de développement Web est abordée pour ce qu'elle est, sans dogmatisme.",
          },
          {
            title: "Recul",
            content:
              "Fullweb.dev incrit chaque sujet dans son contexte, pour vous permettre d'acquérir une meilleure vision d'ensemble.",
          },
          {
            title: "Accessibilité",
            content:
              "Nous faisons tout notre possible pour respecter les meilleures pratiques d'accessibilité , et pour partager nos idées de manière simple et intelligible.",
          },
          {
            title: "Ouverture",
            content:
              "Toute information est partagée le plus largement et souvent possible. La majorité des sources et contenus sont disponibles sous license libre et/ou ethique via Github.",
          },
        ],
      },
    },
  },
};
