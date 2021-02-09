// eslint-disable-next-line import/no-extraneous-dependencies
import Mustache from "mustache";
import homepage from "../homepage/index.mjs";
import { readTemplate } from '../utils.mjs';

const meta = {
  description: {
    short: "Relearn Web Development",
    long: "Acquire Web Development expertise by taking a comprehensive view.",
  },
  twitterCard: "https://fullweb.dev/images/social/social_en.png",
};

export default {
  template: readTemplate(import.meta),
  files: {
    "public/localized-files/en_ALL/index.html": {
      meta,
      nav: ["Learn", "Build", "Keep Up"],
      home: Mustache.render(homepage.template, homepage.langs.en),
    },
    "public/localized-files/fr_ALL/index.html": {
      meta: {
        description: {
          short: "Redécouvrir le développement Web",
          long:
            "Développez votre expertise du développement Web en adoptant une nouvelle vision d'ensemble",
        },
        twitterCard: "https://fullweb.dev/images/social/social_fr.png",
      },
      nav: ["Apprendre", "Créer", "S'informer"],
      home: Mustache.render(homepage.template, homepage.langs.fr),
    },
    "public/index.html": {
      meta,
      root: true,
    },
  },
};