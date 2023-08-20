const merge = require("deepmerge");
const baseConfig = require("./lighthouserc.base.js");

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
    arrayMerge: (destinationArray, sourceArray) => sourceArray,
  }
);
