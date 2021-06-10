// eslint-disable-next-line import/no-extraneous-dependencies
import Mustache from "mustache";
import homepage from "../homepage/index.mjs";
import { readTemplate, readSource } from "../utils.mjs";

const meta = {
  description: "Relearn Web Development",
  twitterCard: "https://fullweb.dev/images/social/social_en.png",
};

const scriptWordings = {
  en: {
    navLinks: ["Resources", "Tools", "Blog"],
    languageSwitch:
      'Ce site et des contenus supplémentaires sont également disponibles en <a href="" data-lang="fr" aria-label="passer en français">français</a>.',
    editButton: "edit",
    languageSwitcherLabel: `Passer le site de l'anglais au français`,
  },
  fr: {
    navLinks: ["Ressources", "Outils", "Blog"],
    languageSwitch:
      'This website is also available in <a href="" data-lang="en" aria-label="switch to english">English</a>.',
    editButton: "éditer",
    languageSwitcherLabel: "Switch from french to English",
  },
};

const script = {
  wordings: JSON.stringify(scriptWordings),
};

const css = {
  shell: readSource(import.meta, "shell.css"),
};

const globalClass = "on-homepage";

export default {
  template: readTemplate(import.meta),
  files: {
    "public/localized-files/en_ALL/index.html": {
      css,
      meta,
      nav: scriptWordings.en.navLinks,
      home: Mustache.render(homepage.template, homepage.langs.en),
      script,
      editButton: scriptWordings.en.editButton,
      language: {
        otherCode: "fr",
        isFrench: "false",
        switch: scriptWordings.en.languageSwitch,
        switcherLabel: scriptWordings.en.languageSwitcherLabel,
      },
      globalClass,
    },
    "public/localized-files/fr_ALL/index.html": {
      css,
      meta: {
        description: "Redécouvrir le développement Web",
        twitterCard: "https://fullweb.dev/images/social/social_fr.png",
      },
      nav: scriptWordings.fr.navLinks,
      home: Mustache.render(homepage.template, homepage.langs.fr),
      script,
      editButton: scriptWordings.fr.editButton,
      language: {
        otherCode: "en",
        isFrench: "true",
        switch: scriptWordings.fr.languageSwitch,
        switcherLabel: scriptWordings.fr.languageSwitcherLabel,
      },
      globalClass,
    },
    "public/index.html": {
      css,
      meta,
      root: true,
      script,
      language: {},
    },
  },
};
