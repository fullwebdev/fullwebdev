import { expect } from "@esm-bundle/chai";
import { AppRouter } from "../../src/app/router.js";

describe("AppRouter", () => {
  // locale set to neither fr or en in test browser
  it("use english by default", async () => {
    const router = new AppRouter({}, "fragments/");
    expect(router._forcedLanguage).to.be.null;
    expect(router.preferredLanguage).equal("en");
  });

  describe("renderOrRedirect()", () => {
    it("add language to path if missing", async () => {
      const testedPath = "/test/path";
      const router = new AppRouter({}, "fragments/");
      const [newPath] = await router.renderOrRedirect(testedPath);
      expect(newPath).equal(`/${router.preferredLanguage}${testedPath}`);
    });

    it("change preferred language based on path", async () => {
      const testedPath = "/fr/path";
      const router = new AppRouter({}, "fragments/");
      await router.renderOrRedirect(testedPath);
      expect(router.preferredLanguage).equal("fr");
    });

    it("returns /404 if no route was found", async () => {
      const testedPath = "/fr/path";
      const router = new AppRouter({}, "fragments/");
      const [path] = await router.renderOrRedirect(testedPath);
      expect(path).equal("/404");
    });
  });
});
