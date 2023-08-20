import { playwrightLauncher } from "@web/test-runner-playwright";

/** @type {import("@web/test-runner").TestRunnerConfig} */
export default {
  files: "packages/*/*/test-web/**/*.test.{js,ts,html}",

  /** Compile JS for older browsers. Requires @web/dev-server-esbuild plugin */
  // esbuildTarget: 'auto',

  /** Confgure bare import resolve plugin */
  nodeResolve: true,

  /** Browsers to run tests on */
  browsers: [
    playwrightLauncher({ product: "chromium" }),
    playwrightLauncher({ product: "firefox" }),
    // playwrightLauncher({ product: 'webkit' }),
  ],
};
