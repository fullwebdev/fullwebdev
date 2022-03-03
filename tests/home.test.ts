import { test, expect } from "@playwright/test";

test.describe("homepage", () => {
  test("en title", async ({ browser }) => {
    const context = await browser.newContext({ locale: "en-US" });
    const page = await context.newPage();
    await page.goto("/");
    const title = page.locator("#homepage .homepage_title");
    await expect(title).toHaveText("A new perspective of Web Development");
  });

  test("fr title", async ({ browser }) => {
    const context = await browser.newContext({ locale: "fr-FR" });
    const page = await context.newPage();
    await page.goto("/");
    const title = page.locator("#homepage .homepage_title");
    await expect(title).toHaveText(
      "Une nouvelle approche du développement Web"
    );
  });
});
