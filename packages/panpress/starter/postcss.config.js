module.exports = {
  plugins: [
    require("cssnano")({
      preset: "default",
    }),
    require("postcss-import")({ path: ["node_modules"] }),
  ],
};
