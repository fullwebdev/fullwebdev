/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: "/", static: true },
    src: { url: "/dist" },
  },
  plugins: [
    [
      "@snowpack/plugin-build-script",
      { cmd: "postcss", input: [".css"], output: [".css"] },
    ],
  ],
  routes: [{ match: "routes", src: "(?!/templates/).*", dest: "/index.html" }],
  devOptions: {
    open: "none",
  },
  buildOptions: {
    out: "dist",
    htmlFragments: true,
  },
};
