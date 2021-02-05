export default {
  defaultCompiler: "pandoc",
  output: "app/_daucus_",
  projects: {
    pages: {
      src: "**/*.md",
      root: "pages",
    },
  },
};
