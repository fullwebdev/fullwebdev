import { expect } from "@open-wc/testing";
import { spy, stub, fake } from "sinon";
import { Router } from "../router/";

describe("router", () => {
  const fakeBase = "/mock/base";
  let fakeCb, router;

  beforeEach(() => {
    const getTagStub = stub(document, "getElementsByTagName");
    getTagStub.withArgs("base").returns([document.createElement("base")]);

    Object.defineProperty(document, "baseURI", {
      value: `https://fullweb.dev${fakeBase}/`,
    });

    fakeCb = fake.returns(new Promise((resolve) => resolve()));
    router = new Router(fakeCb);
  });

  afterEach(() => {
    document.getElementsByTagName.restore();
  });

  beforeEach(() => {
    stub(window.history, "replaceState");
    stub(window.history, "pushState");
    stub(window, "addEventListener");
    stub(document.body, "addEventListener");
  });

  afterEach(() => {
    window.history.replaceState.restore();
    window.history.pushState.restore();
    window.addEventListener.restore();
    document.body.addEventListener.restore();
  });

  it("store base href", () => {
    expect(router.base).equals(fakeBase);
  });

  describe("navigate()", () => {
    it("call callback", async () => {
      await router.navigate("/foo/bar");
      expect(fakeCb).to.have.been.calledWith("/foo/bar");
    });

    it("call pushState by default", async () => {
      await router.navigate("/foo/bar", { state: "test" });
      expect(window.history.pushState).to.have.been.calledWith(
        "test",
        "",
        `${fakeBase}/foo/bar`
      );
    });

    it("call replaceState for redirections", async () => {
      await router.navigate("/foo/bar", { state: "test", redirection: true });
      expect(window.history.replaceState).to.have.been.calledWithExactly(
        "test",
        "",
        `${fakeBase}/foo/bar`
      );
    });

    it("do not change history state when skipping location change", async () => {
      await router.navigate("/foo/bar", {
        state: "test",
        skipLocationChange: true,
      });
      expect(window.history.replaceState).to.not.have.been.called;
      expect(window.history.pushState).to.not.have.been.called;
    });
  });

  describe("run()", () => {
    it("set popstate listener", async () => {
      await router.run();
      expect(window.addEventListener).to.have.been.calledWith("popstate");
    });

    it("listen clicks on document.body", async () => {
      await router.run();
      expect(document.body.addEventListener).to.have.been.calledWith("click");
    });

    it("run first navigation", async () => {
      spy(router, "navigate");
      await router.run();
      expect(router.navigate).to.have.been.called;
    });
  });
});
