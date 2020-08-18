const { minifyHTMLLiterals } = require("minify-html-literals");
const path = require("path");

module.exports = function (snowpackConfig, pluginOptions) {
  return {
    name: "minify-html-literals",
    async transform({ fileExt, filePath, contents, isDev }) {
      if (fileExt === ".js" && !isDev && contents.includes("html`")) {
        return minifyHTMLLiterals(contents, {
          ...pluginOptions,
          fileName: path.basename(filePath),
        }).code;
      }
    },
  };
};
