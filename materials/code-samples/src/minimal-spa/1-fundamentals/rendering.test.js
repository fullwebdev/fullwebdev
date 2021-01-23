import { fixture, expect } from "@open-wc/testing";

import { renderPost } from "./rendering.js";
import { post } from "../__mocks__/Post.mock.js";

describe("minimal-spa - 1-fundamentals : rendering", () => {
  let el;

  beforeEach(async () => {
    el = await fixture(`
      <div id="post">
        default
      </div>
    `);
  });

  describe("renderPost()", () => {
    it("update content", () => {
      renderPost(post);
      expect(el)
        .dom.to.have.descendant("h1")
        .that.has.text(post.title);
      expect(el)
        .dom.to.have.descendant("p")
        .that.has.text(post.body);
    });
  });
});
