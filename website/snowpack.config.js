/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: "/", static: true },
    src: { url: "/dist" },
  },
  plugins: [
    "@snowpack/plugin-babel",
    "@snowpack/plugin-dotenv",
    [
      "@snowpack/plugin-build-script",
      { cmd: "postcss", input: [".css"], output: [".css"] },
    ],
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    { match: "routes", src: "(?!/templates/).*", dest: "/index.html" },
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    htmlFragments: true,
  },
};
