export default {
  defaultCompiler: "pandoc",
  output: "src/templates/",
  projects: {
    pages: {
      src: "**/*.md",
      root: "docs",
    },
  },
};
