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
    navLinks: ["Learn", "Build", "Keep Up"],
    languageSwitch:
      'Ce site et des contenus supplémentaires sont également disponibles en <a href="" data-lang="fr" aria-label="passer en français">français</a>.',
    editButton: "edit",
  },
  fr: {
    navLinks: ["Apprendre", "Créer", "S'informer"],
    languageSwitch:
      'This website is also available in <a href="" data-lang="en" aria-label="switch to english">English</a>.',
    editButton: "éditer",
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
        switch: scriptWordings.en.languageSwitch,
      },
      globalClass,
    },
    "public/localized-files/fr_ALL/index.html": {
      css,
      meta: {
        description: {
          short: "Redécouvrir le développement Web",
          long:
            "Développez votre expertise du développement Web en adoptant une nouvelle vision d'ensemble",
        },
        twitterCard: "https://fullweb.dev/images/social/social_fr.png",
      },
      nav: scriptWordings.fr.navLinks,
      home: Mustache.render(homepage.template, homepage.langs.fr),
      script,
      editButton: scriptWordings.fr.editButton,
      language: {
        switch: scriptWordings.fr.languageSwitch,
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
