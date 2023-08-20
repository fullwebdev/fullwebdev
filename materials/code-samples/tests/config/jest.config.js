// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  coverageDirectory: "coverage/jest",
  rootDir: "../..",
  roots: ["<rootDir>/src"],
  //#region polyfills
  setupFiles: [
    "<rootDir>/node_modules/babel-polyfill/dist/polyfill.js",
    "<rootDir>/node_modules/document-register-element/build/document-register-element.node.js",
  ],
  //#endregion polyfills
  //#region jsdom
  testEnvironment: "jest-environment-jsdom-sixteen",
  //#endregion jsdom
  testMatch: ["**/?(*.)+(jest).[tj]s?(x)"],
  //#region babel
  transform: {
    "^.+\\.(mjs|jsx|js)$": [
      "babel-jest",
      { configFile: "./tests/config/babel-jest.config.js" },
    ],
  },
  //#endregion babel
};
