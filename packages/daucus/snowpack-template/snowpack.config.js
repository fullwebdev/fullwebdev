/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  workspaceRoot: '../../../',
  mount: {
    public: { url: '/', static: true },
    'src/templates': { url: '/templates/' },
    src: { url: '/dist' },
  },
  plugins: ['@snowpack/plugin-babel', '@snowpack/plugin-dotenv'],
  routes: [
    /* Enable an SPA Fallback in development: */
    { match: 'routes', src: '(?!/templates/).*', dest: '/index.html' },
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    knownEntrypoints: ['@modern-helpers/router'],
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    htmlFragments: true,
  },
};
