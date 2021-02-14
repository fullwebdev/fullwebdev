import { expect } from "@open-wc/testing";
import { routeFinder, i18nRouteFinder } from "../src/route-finder.js";
import routesFixture from "./fixtures/routes.js";
import i18nRoutesFixture from "./fixtures/routes-i18n.js";

describe("create router", () => {
  describe("route finder", () => {
    /** @type {import('../src/find-route').FindRouteFn} */
    let finder;
    beforeEach(() => {
      finder = routeFinder(routesFixture);
    });
    it("gives the associated route", () => {
      const { projectName, route } = finder("/docs/chapter1/section2/file2");
      const expectedRoute =
        routesFixture.docs.children.chapter1.children.section2.children.file2;

      expect(route).to.deep.equal(expectedRoute);
      expect(projectName).equals("docs");
    });

    it("gives children", () => {
      const { projectName, route } = finder("/docs/chapter1/section2/");
      const expectedRoute =
        routesFixture.docs.children.chapter1.children.section2;

      expect(route).to.deep.equal(expectedRoute);
      expect(projectName).equals("docs");
    });

    it("can give the root index", () => {
      const { projectName, route } = finder("/docs/");
      const expectedRoute = routesFixture.docs;
      expect(route).to.deep.equal(expectedRoute);
      expect(projectName).equals("docs");
    });
  });

  describe("i18n route finder", () => {
    /** @type {import('../src/find-route').FindI18NRouteFn} */
    let finder;
    beforeEach(() => {
      finder = i18nRouteFinder(i18nRoutesFixture);
    });
    it("gives the associated route", () => {
      const { projectName, route, lang } = finder(
        "/docs/second-part/first-file",
        "en"
      );
      const expectedRoute =
        i18nRoutesFixture.docs.en.children["second-part"].children[
          "first-file"
        ];

      expect(route).to.deep.equal(expectedRoute);
      expect(projectName).equals("docs");
      expect(lang).equals("en");
    });

    it("gives a route with a fallback lang", () => {
      const { projectName, route, lang } = finder(
        "/another-project/infos/lorem",
        "en"
      );
      const expectedRoute =
        i18nRoutesFixture["another-project"].__.children.infos.children.lorem;

      expect(route).to.deep.equal(expectedRoute);
      expect(projectName).equals("another-project");
      expect(lang).equals("__");
    });

    it("gives children", () => {
      const { projectName, route, lang } = finder("/docs/second-part/", "fr");
      const expectedRoute = i18nRoutesFixture.docs.fr.children["second-part"];

      expect(route).to.deep.equal(expectedRoute);
      expect(projectName).equals("docs");
      expect(lang).equals("fr");
    });

    it("can give the root index", () => {
      const { projectName, route, lang } = finder("/docs/", "en");
      const expectedRoute = i18nRoutesFixture.docs.en;
      expect(route).to.deep.equal(expectedRoute);
      expect(projectName).equals("docs");
      expect(lang).equals("en");
    });
  });
});
