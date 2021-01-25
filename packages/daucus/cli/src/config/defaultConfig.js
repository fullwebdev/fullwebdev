export const CONFIG_FILE_NAME = "daucus.config";

/**
 * @type {import('../../types/DaucusConfig').ProjectConfig}
 */
export const defaultProject = {
  src: "**/*.md",
  root: "pages",
};

/**
 * @type {import('../../types/DaucusConfig').DaucusConfig}
 */
export const defaultConfig = {
  output: "_daucus_",
  defaultCompiler: "pandoc",
  projects: {
    default: defaultProject,
  },
};
