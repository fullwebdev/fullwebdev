export default {
  defaultCompiler: "pandoc",
  output: "src/templates/",
  projects: {
    docs: {
      src: "**/*.md",
      root: "docs",
    },
  },
};
