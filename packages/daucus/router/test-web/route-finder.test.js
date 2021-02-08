import { expect } from "@open-wc/testing";
import { routeFinder } from "../src/route-finder.js";
import routesFixture from "./fixtures/routes.js";

describe("create router", () => {
  describe("route finder", () => {
    let finder;
    beforeEach(() => {
      finder = routeFinder(routesFixture);
    });
    it("gives the associated route", () => {
      const [project, route] = finder("/docs/chapter1/section2/file2");
      const expectedRoute =
        routesFixture.docs.children.chapter1.children.section2.children.file2;

      expect(route).to.deep.equal(expectedRoute);
      expect(project).equals("docs");
    });

    it("ignore children", () => {
      const [project, route] = finder("/docs/chapter1/section2/");
      const expectedRoute =
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
