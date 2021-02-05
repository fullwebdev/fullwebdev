export default {
  defaultCompiler: "pandoc",
  output: "app/templates/",
  projects: {
    pages: {
      src: "**/*.md",
      root: "docs",
    },
  },
};
