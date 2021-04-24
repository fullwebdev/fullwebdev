/** @type {import('@daucus/cli').DaucusJSConfig}*/
const config = {
  defaultCompiler: "pandoc",
  output: "src/fragments/",
  i18n: true,
  projects: {
    docs: {
      src: "**/*.md",
      root: "docs",
    },
    blog: {
      src: "**/*.md",
      root: "blog",
    },
    daucus: {
      src: "**/*.md",
      root: "../packages/daucus",
      exclude: [
        "**/node_modules/**",
        "**/fixtures/**",
        "**/snowpack-template/**",
      ],
    },
    helpers: {
      src: "**/*.md",
      root: "../packages/helpers",
    },
    "custom-element-name": {
      src: "**/*.md",
      root: "../packages/custom-element-name",
    },
  },
};

export default config;
