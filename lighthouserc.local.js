const merge = require("deepmerge");
const baseConfig = require("./lighthouserc.base.js");

module.exports = merge(baseConfig, {
  ci: {
    collect: {
      staticDistDir: "./dist",
      settings: { skipAudits: ["uses-http2"] },
    },
    assert: {
      assertions: {
        "uses-http2": "off",
      },
    },
  },
});
