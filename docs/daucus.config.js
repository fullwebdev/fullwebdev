export default {
  defaultCompiler: "pandoc",
  output: "dist/views",
  projects: {
    pages: {
      src: "**/*.md",
      root: "pages",
    },
  },
};
