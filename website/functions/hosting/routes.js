// eslint-disable-next-line import/no-unresolved
import { blogEntries } from "../app/wordings/fr/news.js";

export const routes = blogEntries.reduce((rec, entry) => {
  // eslint-disable-next-line no-param-reassign
  rec[entry.href] = {
    "og:type": "article",
    "og:title": entry.desc.title,
    "og:description": entry.desc.subtitle,
    "og:image": `https://fullweb.dev${entry.img.src}`,
    "twitter:image:alt": entry.img.alt,
  };
  return rec;
}, {});

export const dirs = [
  [
    "/daucus",
    {
      "og:title": "Daucus",
      "og:description":
        "Simple static stuff generator and libraries for the modern web",
      "og:image": "https://fullweb.dev/images/social/daucus.png",
      "twitter:image:alt": "Daucus: the static stuff generator",
    },
  ],
  [
    "/helpers",
    {
      "og:title": "Modern Helpers",
      "og:description":
        "Minimalistic helper functions for Modern Web Apps development.",
      "og:image": "https://fullweb.dev/images/social/helpers.png",
    },
  ],
  [
    "/tools/ce-name",
    {
      default: {
        "og:image": "https://fullweb.dev/images/web-illustrations/ce-name.png",
        "twitter:image:alt": "<ce-?>",
        "og:title": "custom-element-name",
      },
      fr: {
        "og:description": "Nommer un élément personnalisé",
      },
      en: {
        "og:description": "Naming a Custom Element",
      },
    },
  ],
  [
    "/news",
    {
      default: {
        "og:title": "Full Web Dev Blog",
      },
      fr: {
        "og:description":
          "Annonces et articles de blog pour les Full Web Developers",
      },
      en: {
        "og:description":
          "Announcements, updates and blog posts for the Full Web Developers",
      },
    },
  ],
  [
    "/cv/nma",
    {
      default: {
        "og:title": "Noël Macé • CV",
        "og:image": "https://fullweb.dev/images/resume-banner-fr.jpg",
        "twitter:image:alt": "Noël Macé - Développeur / Architecte Web Senior",
      },
      fr: {
        "og:description": "Curriculum Vitae de Noël Macé",
      },
      en: {
        "og:description": "Noël Macé's resume",
        "og:image": "https://fullweb.dev/images/resume-banner-en.jpg",
        "twitter:image:alt": "Noël Macé - Senior Web Developer/Architect",
      },
    },
  ],
];
