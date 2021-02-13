export default {
  defaultCompiler: "pandoc",
  output: "src/fragments/",
  i18n: true,
  projects: {
    docs: {
      src: "**/*.md",
      root: "docs",
    },
  },
};
