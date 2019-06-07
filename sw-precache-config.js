module.exports = {
  staticFileGlobs: [
    '/index.html',
    '/manifest.json',
    '/node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js',
    'common/app/components/AboutComponent.js',
    '/img/*'
  ],
  navigateFallback: '/index.html',
  navigateFallbackWhitelist: [/^(?!.*\.js$|\/api\/).*/]
};
