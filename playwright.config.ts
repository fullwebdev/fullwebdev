import { PlaywrightTestConfig, devices } from "@playwright/test";

const config: PlaywrightTestConfig = {
  testDir: "tests",
  // eslint-disable-next-line no-useless-escape
  // testMatch: ".*(test|spec)\.(js|ts|mjs)",

  // Forbid test.only on CI
  forbidOnly: !!process.env.CI,

  webServer: {
    command: "npm run serve",
    port: 5000,
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
  projects: [
    {
      name: "Chrome Stable",
      use: {
        browserName: "chromium",
        // Test against Chrome Stable channel.
        channel: "chrome",
      },
    },
    {
      name: "Desktop Safari",
      use: {
        browserName: "webkit",
        viewport: { width: 1200, height: 750 },
      },
    },
    // Test against mobile viewports.
    {
      name: "Mobile Chrome",
      use: devices["Pixel 5"],
    },
    {
      name: "Mobile Safari",
      use: devices["iPhone 12"],
    },
    {
      name: "Desktop Firefox",
      use: {
        browserName: "firefox",
        viewport: { width: 800, height: 600 },
      },
    },
  ],
};

export default config;
