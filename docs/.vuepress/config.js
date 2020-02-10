module.exports = {
  locales: {
    '/': {
      lang: 'en-US',
      title: 'The Web is on FIRE',
      description: 'Learn the best new capabilities of the modern web without burning out!'
    },
    '/fr/': {
      lang: 'fr-FR',
      title: 'Web on FIRE',
      description: 'Découvrez les dernières nouveautés de la Plateforme Web avec Noël Macé.'
    }
  },
  themeConfig: {
    logo: '/favicon/icon-384x384.png',
    displayAllHeaders: false,
    sidebarDepth: 2,
    repo: 'noelmace/web-on-fire',
    docsDir: 'docs',
    editLinks: true,
    locales: {
      '/': {
        // text for the language dropdown
        selectText: 'Languages',
        // label for this locale in the language dropdown
        label: 'English',
        // Aria Label for locale in the dropdown
        ariaLabel: 'Languages',
        // text for the edit-on-github link
        editLinkText: 'Edit this page on GitHub',
        // config for Service Worker
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        // algolia docsearch options for current locale
        algolia: {},
        nav: [
          { text: 'Home', link: '/' },
          { text: 'About', link: '/about/' },
        ],
        sidebar: [
          '/',
          '/introduction/',
          '/conferences/',
          '/codelabs/'
        ],
        lastUpdated: 'Last Updated'
      },
      '/fr/': {
        // text for the language dropdown
        selectText: 'Langues',
        // label for this locale in the language dropdown
        label: 'Français',
        // Aria Label for locale in the dropdown
        ariaLabel: 'Langues',
        // text for the edit-on-github link
        editLinkText: 'Éditez cette page sur GitHub',
        // config for Service Worker
        serviceWorker: {
          updatePopup: {
            message: "Une mise à jour est disponible.",
            buttonText: "Recharger"
          }
        },
        // algolia docsearch options for current locale
        algolia: {},
        nav: [
          { text: 'Accueil', link: '/fr/' },
          { text: 'À propos', link: '/fr/about/' },
        ],
        sidebar: [
          ['/fr/', 'Accueil'],
          '/fr/introduction/',
          '/fr/conferences/',
          '/fr/codelabs/'
        ],
        lastUpdated: 'Dernière mise à jour'
      }
    }
  },
  dest: 'dist',
  plugins: [
    '@vuepress/google-analytics',
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: false,
        generateSWConfig: {
          swDest: 'dist/service-worker.js',
          skipWaiting: true,
          clientsClaim: true,
          globDirectory: 'dist',
          globPatterns: ['**/*.{html,js,css,png,gif}'],
        },
      },
    ],
  ],
  ga: 'G-681S65029Y',
  head: [
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon/favicon-96x96.png' }],
    [
      'meta',
      {
        property: 'og:image',
        content:
          'https://raw.githubusercontent.com/noelmace/web-on-fire/master/docs/.vuepress/public/favicon/icon-384x384.png',
      },
    ],
    ['meta', { property: 'og:site_name', content: 'WoF.Show' }],
    [
      'meta',
      {
        property: 'og:description',
        content:
          'Learn the best new capabilities of the modern web without burning out!',
      },
    ],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    ['meta', { name: 'twitter:title', content: 'The WoF Show' }],
  ],
};
