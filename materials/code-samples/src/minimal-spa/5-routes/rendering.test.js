import { fixture, expect } from "@open-wc/testing";

import {
  render,
  Post,
  Home,
  ErrorScreen,
} from "./rendering.js";
import { post } from "../__mocks__/Post.mock.js";

describe("minimal-spa - 5-routes : rendering", () => {
  let el;

  beforeEach(async () => {
    el = await fixture(`
      <div id="content">
        default
      </div>
    `);
  });

  describe("render()", () => {
    it("update #content innerHtml", () => {
      render("<h1>lorem ipsum</h1>");
      expect(el)
        .dom.to.have.descendant("#content h1")
        .that.has.text("lorem ipsum");
    });
  });

  describe("Post()", () => {
    describe("return an HTML string", () => {
      let rsltEl;

      before(async () => {
        const html = Post(post);
        rsltEl = await fixture(`<div>${html}</div>`);
      });

      it("with a #post element", async () => {
        expect(rsltEl).dom.to.have.descendant("#post");
      });

      it("with a default content", () => {
        expect(rsltEl)
          .dom.to.have.descendant("#post h1")
          .that.has.text(post.title);
        expect(rsltEl)
          .dom.to.have.descendant("#post p")
          .that.has.text(post.body);
      });
    });
  });

  describe("Home()", () => {
    describe("return an HTML string", () => {
      let rsltEl;

      before(async () => {
        const html = Home();
        rsltEl = await fixture(`<div>${html}</div>`);
      });

      it('with a "Demo" title', async () => {
        expect(rsltEl)
          .dom.to.have.descendant("h1")
          .that.has.text("Demo");
      });

      it("with some content", () => {
        expect(rsltEl).dom.to.have.descendant("article");
      });
    });
  });

  describe("ErrorScreen()", () => {
    describe("return an HTML string", () => {
      const errorMsg = "lorem ipsum";
      let rsltEl;

      before(async () => {
        const html = ErrorScreen(errorMsg);
        rsltEl = await fixture(`<div>${html}</div>`);
      });

      it('with a "Erreur" title', async () => {
        expect(rsltEl)
          .dom.to.have.descendant("h1")
          .that.has.text("Erreur");
      });

      it("with the error message", () => {
        expect(rsltEl).dom.to.contain.html(errorMsg);
      });
    });
  });
});
