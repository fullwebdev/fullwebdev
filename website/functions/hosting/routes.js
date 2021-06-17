exports.routes = {
  "/blog/qui-a-invente-hypertexte": {
    "og:type": "article",
    "og:title": "Qui a inventé les ordis et l'hypertexte ?",
    "og:description": "Compléments pour Les Briques du Web S01E01",
    "og:image":
      "https://fullweb.dev/illustrations/images/third-party/SRI-Bill-English-1968.png",
    "twitter:image:alt":
      "Bill English, membre de l'équipe de Douglas Engelbart à l'ARC, en pleine préparation de la mère de toutes les démos",
  },
  "/blog/as-we-may-think": {
    "og:type": "article",
    "og:title": "Vannevar Bush et la naissance des NTIC",
    "og:description": "Compléments pour Les Briques du Web S01E02",
    "og:image":
      "https://fullweb.dev/illustrations/images/history/Cambridge_differential_analyser.jpg",
    "twitter:image:alt": "Analyseur Différentiel de Cambridge, 1938",
  },
  "/blog/histoire-rfc": {
    "og:type": "article",
    "og:title": "L’Histoire des Request For Comments",
    "og:description": "Compléments pour Les Briques du Web S01E03",
    "og:image":
      "https://fullweb.dev/illustrations/images/third-party/ietf-rfc1-heading.png",
    "twitter:image:alt": "En-tête de la toute première RFC de l'IETF",
  },
  "/blog/revolution-khtml": {
    "og:type": "article",
    "og:title": "Quand Linux et le logiciel libre ont révolutionné le Web",
    "og:description": "Compléments pour Les Briques du Web S01E04",
    "og:image":
      "https://fullweb.dev/illustrations/images/third-party/konqueror.png",
    "twitter:image:alt": "logo du navigateur Konqueror",
  },
  "/blog/limites-foss": {
    "og:type": "article",
    "og:title": "Joies et limites de l'Open Source",
    "og:description": "Compléments pour Les Briques du Web S01E05",
    "og:image":
      "https://fullweb.dev/images/web-illustrations/richard-balog-open-unsplash.jpg",
    "twitter:image:alt": "Come in we're open",
  },
};

exports.dirs = [
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
];
