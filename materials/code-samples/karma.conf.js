/* eslint-disable import/no-extraneous-dependencies */
//#region import
const { createDefaultConfig } = require("@open-wc/testing-karma");
const merge = require("deepmerge");
//#endregion import

//#region override
const createConfigOverride = (config) => ({
  files: [
    {
      pattern: config.grep ? config.grep : "./src/**/*.test.js",
      type: "module",
    },
  ],

  esm: {
    nodeResolve: true,
  },
});
//#endregion override

//#region export
module.exports = (config) => {
  config.set(merge(createDefaultConfig(config), createConfigOverride(config)));
  return config;
};
//#endregion export
