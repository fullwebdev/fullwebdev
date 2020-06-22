const path = require("path");

const { sidebar: materialSidebarFr } = require("vuepress-bar")(
  `${__dirname}/../fr/material/`,
  {
    addReadMeToFirstGroup: false,
    stripNumbers: true,
  }
);

const { sidebar: materialSidebarEn } = require("vuepress-bar")(
  `${__dirname}/../material/`,
  {
    addReadMeToFirstGroup: false,
    stripNumbers: true,
  }
);

module.exports = {
  locales: {
    "/": {
      lang: "en-US",
      title: "FullWeb.dev",
      description: "A transverse vision of modern web development",
    },
    "/fr/": {
      lang: "fr-FR",
      title: "FullWeb.dev",
      description: "Une approche transversale du développement Web",
    },
  },
  additionalPages: [
    // {
    //   path: '/libraries/:name',
    //   filePath: path.resolve(__dirname, 'components/LibraryDetails.vue')
    // }
  ],
  themeConfig: {
    logo: "/favicon/icon-384x384.png",
    displayAllHeaders: false,
    sidebarDepth: 2,
    repo: "fullwebdev/fullwebdev",
    docsDir: "docs",
    editLinks: true,
    locales: {
      "/": {
        // text for the language dropdown
        selectText: "Languages",
        // label for this locale in the language dropdown
        label: "English",
        // Aria Label for locale in the dropdown
        ariaLabel: "Languages",
        // text for the edit-on-github link
        editLinkText: "Edit this page on GitHub",
        // config for Service Worker
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh",
          },
        },
        // algolia docsearch options for current locale
        algolia: {},
        nav: [
          { text: "Home", link: "/" },
          { text: "About", link: "/about/" },
        ],
        sidebar: {
          "/material/": [["/about/", "Introduction"], ...materialSidebarEn],
          "/": [
            "/",
            ["/about/", "Introduction"],
            "/conferences/",
            "/codelabs/",
            "/flashcards/",
            "/material/",
          ],
        },
        lastUpdated: "Last Updated",
      },
      "/fr/": {
        // text for the language dropdown
        selectText: "Langues",
        // label for this locale in the language dropdown
        label: "Français",
        // Aria Label for locale in the dropdown
        ariaLabel: "Langues",
        // text for the edit-on-github link
        editLinkText: "Éditez cette page sur GitHub",
        // config for Service Worker
        serviceWorker: {
          updatePopup: {
            message: "Une mise à jour est disponible.",
            buttonText: "Recharger",
          },
        },
        // algolia docsearch options for current locale
        algolia: {},
        nav: [
          { text: "Accueil", link: "/fr/" },
          { text: "À propos", link: "/fr/about/" },
        ],
        sidebar: {
          "/fr/material/": [
            ["/fr/about/", "Introduction"],
            ...materialSidebarFr,
          ],
          "/": [
            ["/fr/", "Accueil"],
            ["/fr/about/", "Introduction"],
            "/fr/conferences/",
            "/fr/codelabs/",
            "/fr/flashcards/",
            "/fr/material/",
          ],
        },
        lastUpdated: "Dernière mise à jour",
      },
    },
  },
  dest: "dist",
  plugins: [
    "@vuepress/google-analytics",
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: false,
        generateSWConfig: {
          swDest: "dist/service-worker.js",
          skipWaiting: true,
          clientsClaim: true,
          globDirectory: "dist",
          globPatterns: ["**/*.{html,js,css,png,gif}"],
        },
      },
    ],
  ],
  ga: "G-681S65029Y",
  head: [
    ["link", { rel: "manifest", href: "/manifest.json" }],
    [
      "link",
      { rel: "icon", type: "image/png", href: "/favicon/favicon-96x96.png" },
    ],
    [
      "meta",
      {
        property: "og:image",
        content:
          "https://raw.githubusercontent.com/fullwebdev/fullwebdev/master/docs/.vuepress/public/favicon/icon-384x384.png",
      },
    ],
    ["meta", { property: "og:site_name", content: "FullWeb.dev" }],
    [
      "meta",
      {
        property: "og:description",
        content: "Modern Web Architecture & Development",
      },
    ],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    [
      "meta",
      { name: "twitter:image", content: "https://fullweb.dev/social.png" },
    ],
    [
      "meta",
      {
        name: "twitter:image:alt",
        content: "A transverse vision of modern web development",
      },
    ],
    ["meta", { name: "twitter:title", content: "FullWeb.dev" }],
  ],
};
