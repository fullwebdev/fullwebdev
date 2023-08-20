// eslint-disable-next-line import/no-extraneous-dependencies
import Mustache from "mustache";
import homepage from "../homepage/index.mjs";
import { readTemplate, readSource } from "../utils.mjs";

const meta = {
  description: "Relearn Web Development",
  twitterCard: "https://fullweb.dev/images/social/social_en.png",
};

const copyrightTemplate = (props) => /* HTML */ `
  <p>
    Copyright &copy; 2018-${new Date().getFullYear()} Noël Macé, fullweb.dev
  </p>
  <div class="cc-license-icons">
    <span class="cc-icon"
      ><img
        alt="cc logo"
        src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" /></span
    ><span class="cc-icon"
      ><img
        alt="cc attribution logo"
        src="https://mirrors.creativecommons.org/presskit/icons/by.svg" /></span
    ><span class="cc-icon"
      ><img
        alt="cc non commercial logo"
        src="https://mirrors.creativecommons.org/presskit/icons/nc-eu.svg" /></span
    ><span class="cc-icon"
      ><img
        alt="cc share alike logo"
        src="https://mirrors.creativecommons.org/presskit/icons/sa.svg"
    /></span>
  </div>
  <p>
    ${props.license
      .map((elmt) => {
        if (elmt.href) {
          return /* HTML */ `
            <a href="${elmt.href}" target="_blank" rel="noopener noreferrer"
              >${elmt.text}</a
            >
          `;
        }
        return elmt;
      })
      .join("")}
  </p>
`;

const scriptWordings = {
  en: {
    navLinks: ["Resources", "Tools"],
    languageSwitch:
      'Ce site et des contenus supplémentaires sont également disponibles en <a href="" data-lang="fr" aria-label="passer en français">français</a>.',
    languageSwitcherLabel: `Passer le site de l'anglais au français`,
    copyright: copyrightTemplate({
      license: [
        "Except where otherwise noted, content of this site is licensed under a ",
        {
          href: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
          text: "Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)",
        },
        "license.",
      ],
    }),
  },
  fr: {
    navLinks: ["Ressources", "Outils", "À propos"],
    languageSwitch:
      'This website is also available in <a href="" data-lang="en" aria-label="switch to english">English</a>.',
    languageSwitcherLabel: "Switch from french to English",
    copyright: copyrightTemplate({
      license: [
        "Sauf mention contraire, le contenu de ce site est distribué sous licence ",
        {
          href: "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fr",
          text: "Creative Commons Attribution - Pas d’Utilisation Commerciale - Partage dans les Mêmes Conditions 4.0 International (CC BY-NC-SA 4.0)",
        },
        ".",
      ],
    }),
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
      language: {
        code: "en",
        otherCode: "fr",
        isFrench: "false",
        switch: scriptWordings.en.languageSwitch,
        switcherLabel: scriptWordings.en.languageSwitcherLabel,
        copyright: scriptWordings.en.copyright,
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
      language: {
        code: "fr",
        otherCode: "en",
        isFrench: "true",
        switch: scriptWordings.fr.languageSwitch,
        switcherLabel: scriptWordings.fr.languageSwitcherLabel,
        copyright: scriptWordings.fr.copyright,
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
