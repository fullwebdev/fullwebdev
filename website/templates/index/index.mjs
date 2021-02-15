// eslint-disable-next-line import/no-extraneous-dependencies
import Mustache from "mustache";
import homepage from "../homepage/index.mjs";
import { readTemplate, readSource } from "../utils.mjs";

const meta = {
  description: {
    short: "Relearn Web Development",
    long: "Acquire Web Development expertise by taking a comprehensive view.",
  },
  twitterCard: "https://fullweb.dev/images/social/social_en.png",
};

const nav = {
  en: ["Learn", "Build", "Keep Up"],
  fr: ["Apprendre", "Créer", "S'informer"],
};

const languageSwitcher = {
  fr:
    'This website is also available in <a href="" data-lang="en" aria-label="switch to english">English</a>.',
  en:
    'Ce site et des contenus supplémentaires sont également disponibles en <a href="" data-lang="fr" aria-label="passer en français">français</a>.',
};

const script = {
  nav: JSON.stringify(nav),
  languageSwitch: JSON.stringify(languageSwitcher),
};

const css = {
  shell: readSource(import.meta, "shell.css"),
};

export default {
  template: readTemplate(import.meta),
  files: {
    "public/localized-files/en_ALL/index.html": {
      css,
      meta,
      nav: nav.en,
      home: Mustache.render(homepage.template, homepage.langs.en),
      script,
      language: {
        switch: languageSwitcher.en,
      },
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
      nav: nav.fr,
      home: Mustache.render(homepage.template, homepage.langs.fr),
      script,
      language: {
        switch: languageSwitcher.fr,
      },
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
