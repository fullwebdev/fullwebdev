export const CONFIG_FILE_NAME = "daucus.config";

/**
 * @type {import('../../types/DaucusConfig').ProjectConfig}
 */
export const defaultProject = {
  src: "**/*.md",
  root: "docs",
};

/**
 * @type {import('../../types/DaucusConfig').DaucusConfig}
 */
export const defaultConfig = {
  output: "_daucus_",
  defaultCompiler: "",
  projects: {
    docs: defaultProject,
  },
  htmlMinifierOptions: {
    collapseBooleanAttributes: true,
    collapseWhitespace: true,
    decodeEntities: true,
    includeAutoGeneratedTags: false,
    minifyCSS: true,
    minifyJS: true,
    minifyURLs: true,
    preventAttributesEscaping: true,
    processConditionalComments: true,
    removeAttributeQuotes: true,
    removeComments: true,
    removeEmptyAttributes: true,
    removeOptionalTags: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    sortAttributes: true,
    sortClassName: true,
    trimCustomFragments: true,
  },
};
