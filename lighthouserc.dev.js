const baseConfig = require("./lighthouserc.base");
const merge = require("deepmerge");

module.exports = merge(
  baseConfig,
  {
    ci: {
      collect: {
        url: baseConfig.ci.collect.url.map((url) =>
          url.replace("http://localhost", "https://fullweb-dev-dev.web.app")
        ),
      },
    },
  },
  {
    arrayMerge: (destinationArray, sourceArray, options) => sourceArray,
  }
);
