/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: "/", static: true },
    src: { url: "/dist" },
    apps: { url: "/apps", static: true },
  },
  plugins: [],
  routes: [
    {
      match: "routes",
      src: "(?!/dist/fragments/)(?!/apps/).*",
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
