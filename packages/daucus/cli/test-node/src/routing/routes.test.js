import chai from "chai";
import { createRouteFor } from "../../../src/routing/routes.js";
import { PathMustBeRelativeException } from "../../../src/fs/vpath.js";

const { expect } = chai;

/**
 * @typedef {import('../../../types/Route.js').Route} Route
 */

describe("routes", () => {
  describe("createRouteFrom()", () => {
    it("consider index as root", () => {
      const rslt = createRouteFor("", "foo/bar/index.html");
      expect(rslt[0]).to.be.null;
      expect(rslt[1].id).equals("");
    });
    it("consider README as root", () => {
      const rslt = createRouteFor("", "foo/bar/README.html");
      expect(rslt[0]).to.be.null;
      expect(rslt[1].id).equals("");
    });
    it("set title from html", () => {
      const rslt = createRouteFor("<h1>TITLE</h1>", "");
      expect(rslt[1].title).equals("TITLE");
    });
    it("set key and id from file name", () => {
      const rslt = createRouteFor("", "foo/bar/baz.html");
      expect(rslt[0]).equals("baz");
      expect(rslt[1].id).equals("baz");
    });
    it("set path w/o numbering", () => {
      const rslt = createRouteFor(
        "",
        "chapter-one/lvl1-infos/01-first-part/1ab0-post.html"
      );
      expect(rslt[1].path).equals("chapter-one/lvl1-infos/first-part/post");
    });
    it("set id & templateUrl with numbering", () => {
      const filePath = "chapter-one/lvl1-infos/01-first-part/1ab0-post.html";
      const rslt = createRouteFor("", filePath);
      expect(rslt[1].id).equals("1ab0-post");
      expect(rslt[1].templateUrl).equals(filePath);
    });
    it("clean windows path", () => {
      const rslt = createRouteFor("", "foo\\01-bar\\baz.html");
      expect(rslt[1].templateUrl).equals("foo/01-bar/baz.html");
      expect(rslt[1].id).equals("baz");
      expect(rslt[1].path).equals("foo/bar/baz");
    });
    it("fail if path is absolute", () => {
      const filePath = "/foo/01-bar/baz.html";
      expect(() => {
        createRouteFor("", filePath);
      }).to.throw(PathMustBeRelativeException, filePath);
    });
  });
});
