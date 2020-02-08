module.exports = {
  title: 'The Web is on FIRE',
  description: 'Learn the best new capabilities of the modern web without burning out!',
  themeConfig: {
    logo: '/favicon/icon-384x384.png',
    displayAllHeaders: false,
    sidebarDepth: 2,
    sidebar: [
      '/',
      '/introduction/',
      '/conferences/',
      '/codelabs/'
    ],
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
    ],
    repo: 'noelmace/web-on-fire',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: 'Edit Page',
    lastUpdated: 'Last Updated',
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
