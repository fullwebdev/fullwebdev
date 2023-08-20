module.exports = {
  preset: "jest-puppeteer",
  rootDir: "../..",
  testMatch: ["**/tests/e2e/**/?(*.)jest.[tj]s?(x)"],
  globals: {
    ORIGIN: "http://localhost:8000",
  },
};
