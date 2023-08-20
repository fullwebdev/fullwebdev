/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: "/", static: true },
    src: { url: "/dist" },
  },
  workspaceRoot: "..",
  plugins: [],
  routes: [
    {
      match: "routes",
      src: "(?!/dist/fragments/).*",
      dest: "/index.html",
      // dest: "/localized-files/fr_ALL/index.html",
      // dest: "/localized-files/en_ALL/index.html",
    },
  ],
  packageOptions: {
    knownEntrypoints: [
      "lit-html",
      "lit-html/is-server.js",
      "lit-html/directives/if-defined.js",
      "lit-html/directives/class-map.js",
      "lit-html/directives/style-map.js",
      "lit-html/directives/unsafe-html.js",
      "lit-html/directives/live.js",
    ],
  },
  devOptions: {
    open: "none",
  },
  buildOptions: {
    out: "dist",
    htmlFragments: true,
  },
};
