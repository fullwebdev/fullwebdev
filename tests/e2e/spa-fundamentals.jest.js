/**
 * @typedef {import('../../src/minimal-spa/Post').Post} Post
 */

function getPostTitle() {
  return page.$eval("#post h1", node => node.innerHTML);
}

describe("Fundamentals : SPA", () => {
  beforeAll(async () => {
    await page.goto(
      `${ORIGIN}/minimal-spa/1-fundamentals`,
      { waitUntil: "domcontentloaded" }
    );
  });

  it("has the right title", async () => {
    await expect(page).toMatchElement("header h1", {
      text: "SPA Minimaliste"
    });
  });

  it("shows a new post on nav click", async () => {
    const initialPostTitle = getPostTitle();
    await page.click("nav > button:nth-child(1)");
    let apiData;
    await page.waitForResponse(response => {
      const isUrlValid = /\/posts\/\d+$/.test(
        response.url()
      );
      if (isUrlValid) {
        apiData = response.json();
      }
      return isUrlValid;
    });
    /**
     * @type {Post} Post
     */
    const apiPost = await apiData;
    await page.waitForFunction(
      `document.querySelector("#post h1").innerHTML != "${initialPostTitle}"`
    );
    expect(await getPostTitle()).toBe(apiPost.title);
  });
});
