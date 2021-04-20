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
      usePathAsTitle: true,
      exclude: [
        "**/node_modules/**",
        "**/fixtures/**",
        "**/snowpack-template/docs/**"
      ]
    }
  },
};

export default config;
