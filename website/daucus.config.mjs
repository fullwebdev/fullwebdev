export default {
  defaultCompiler: "pandoc",
  output: "src/fragments/",
  projects: {
    docs: {
      src: "**/*.md",
      root: "docs",
    },
  },
};
