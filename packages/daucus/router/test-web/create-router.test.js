import { expect } from "@open-wc/testing";
import { createDaucusRouter, routeFinder } from "../src/create-router.js";
import routesFixture from "./fixtures/routes.js";

describe("create router", () => {
  describe("route finder", () => {
    let finder;
    beforeEach(() => {
      finder = routeFinder(routesFixture);
    });
    it("gives the associated route", () => {
      let [project, route] = finder("/docs/chapter1/section2/file2");
      let expectedRoute =
        routesFixture.docs.children.chapter1.children.section2.children.file2;

      expect(route).to.deep.equal(expectedRoute);
      expect(project).equals("docs");
    });

    it("ignore children", () => {
      let [project, route] = finder("/docs/chapter1/section2/");
      let expectedRoute =
        routesFixture.docs.children.chapter1.children.section2;

      expect(route).to.deep.equal(expectedRoute);
      expect(project).equals("docs");
    });

    it("can give the root index", () => {
      const [project, route] = finder("/docs/");
      const expectedRoute = routesFixture.docs;
      expect(route).to.deep.equal(expectedRoute);
      expect(project).equals("docs");
    });
  });
});
