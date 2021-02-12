const { resolve } = require("path");

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: "/", static: true },
    src: { url: "/dist" },
  },
  plugins: [
    [
      "@snowpack/plugin-sass",
      {
        includePaths: [resolve(__dirname, "node_modules")],
      },
    ],
  ],
  routes: [
    {
      match: "routes",
      src: "(?!/dist/fragments/).*",
      dest: "/index.html",
      // dest: "/localized-files/fr_ALL/index.html",
      // dest: "/localized-files/en_ALL/index.html",
    },
  ],
  devOptions: {
    open: "none",
  },
  buildOptions: {
    out: "dist",
    htmlFragments: true,
  },
};
