import { expect } from "@open-wc/testing";
import { spy, stub, fake } from "sinon";
import { AbstractRouter } from "../index.js";

describe("router", () => {
  const fakeBase = "/mock/base";
  let fakeCb;
  /** @type {AbstractRouter} */
  let abstractRouter;
  /** @type {AbstractRouter} */
  let fakeRouter;
  /** @type {AbstractRouter} */
  let fakeRouterWithRedirection;
  const fakeRedirection = ["another-path", {}];

  beforeEach(() => {
    const getTagStub = stub(document, "getElementsByTagName");
    getTagStub.withArgs("base").returns([document.createElement("base")]);

    Object.defineProperty(document, "baseURI", {
      value: `https://fullweb.dev${fakeBase}/`,
    });

    fakeCb = fake.returns(new Promise((resolve) => resolve()));
    abstractRouter = new AbstractRouter();

    fakeRouter = new (class extends AbstractRouter {
      renderOrRedirect(path, options) {
        fakeCb(path, options);
        return null;
      }
    })();

    fakeRouterWithRedirection = new (class extends AbstractRouter {
      renderOrRedirect(path, options) {
        fakeCb(path, options);
        return fakeRedirection;
      }
    })();
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
    expect(abstractRouter.base).equals(fakeBase);
  });

  describe("navigate()", () => {
    it("call child class findRoute method", async () => {
      await fakeRouter.navigate("/foo/bar", {
        state: "test",
        redirection: true,
      });
      expect(fakeCb).to.have.been.calledWithExactly("/foo/bar", {
        state: "test",
        redirection: true,
      });
    });

    it("call pushState by default", async () => {
      await abstractRouter.navigate("/foo/bar", { state: "test" });
      expect(window.history.pushState).to.have.been.calledWith(
        "test",
        "",
        `${fakeBase}/foo/bar`
      );
    });

    it("call replaceState for redirections", async () => {
      await abstractRouter.navigate("/foo/bar", {
        state: "test",
        redirection: true,
      });
      expect(window.history.replaceState).to.have.been.calledWithExactly(
        "test",
        "",
        `${fakeBase}/foo/bar`
      );
    });

    it("do not change history state when skipping location change", async () => {
      await abstractRouter.navigate("/foo/bar", {
        state: "test",
        skipLocationChange: true,
      });
      expect(window.history.replaceState).to.not.have.been.called;
      expect(window.history.pushState).to.not.have.been.called;
    });

    it("dispatch a navigation-start event", async () => {
      const fakeListener = fake();
      fakeRouter.addEventListener("navigation-start", fakeListener);
      await fakeRouter.navigate("/foo/bar", {
        state: "test",
      });
      expect(fakeListener).to.have.been.calledWith(
        new CustomEvent({
          detail: {
            path: "/foo/bar",
            options: {
              state: "test",
            },
          },
        })
      );
    });

    it("dispatch a navigation-end event", async () => {
      const fakeListener = fake();
      fakeRouter.addEventListener("navigation-end", fakeListener);
      await fakeRouter.navigate("/foo/bar", {
        state: "test",
      });
      expect(fakeListener).to.have.been.calledWith(
        new CustomEvent({
          detail: {
            path: "/foo/bar",
            options: {
              state: "test",
            },
          },
        })
      );
    });

    it("can perform a redirection", async () => {
      const fakeRedirectionListener = fake();
      const fakeNavigationStartListener = fake();
      const fakeNavigationEndListener = fake();
      fakeRouterWithRedirection.addEventListener(
        "route-redirection",
        fakeRedirectionListener
      );
      fakeRouterWithRedirection.addEventListener(
        "navigation-start",
        fakeNavigationStartListener
      );
      fakeRouterWithRedirection.addEventListener(
        "navigation-start",
        fakeNavigationEndListener
      );
      await fakeRouterWithRedirection.navigate("/foo/bar", {
        state: "test",
      });
      expect(
        fakeRedirectionListener,
        "redirection event"
      ).to.have.been.calledOnceWithExactly(
        new CustomEvent({
          detail: {
            oldValue: {
              path: "/foo/bar",
              options: {
                state: "test",
              },
            },
            newValue: {
              path: fakeRedirection[0],
              options: fakeRedirection[1],
            },
          },
        })
      );
      expect(
        fakeNavigationEndListener,
        "navigation-end event"
      ).to.have.been.calledOnceWithExactly(
        new CustomEvent({
          detail: {
            path: fakeRedirection[0],
            options: fakeRedirection[1],
          },
        })
      );
      expect(
        fakeNavigationStartListener,
        "navigation-start event"
      ).to.have.been.calledOnceWithExactly(
        new CustomEvent({
          detail: {
            path: "/foo/bar",
            options: {
              state: "test",
            },
          },
        })
      );
    });
  });

  describe("run()", () => {
    it("set popstate listener", async () => {
      await abstractRouter.run();
      expect(window.addEventListener).to.have.been.calledWith("popstate");
    });

    it("listen clicks on document.body by default", async () => {
      await abstractRouter.run();
      expect(document.body.addEventListener).to.have.been.calledWith("click");
    });

    it("run first navigation", async () => {
      spy(abstractRouter, "navigate");
      await abstractRouter.run();
      expect(abstractRouter.navigate).to.have.been.called;
    });

    it("do not change history state by default", async () => {
      await abstractRouter.run();
      expect(window.history.replaceState).to.not.have.been.called;
      expect(window.history.pushState).to.not.have.been.called;
    });

    it("can change history state if needed", async () => {
      await abstractRouter.run(document.body, false);
      expect(window.history.replaceState).to.not.have.been.called;
      expect(window.history.pushState).to.have.been.called;
    });

    it("allow to restrict click listener to an element", async () => {
      const root = document.createElement("div");
      stub(root, "addEventListener");
      await abstractRouter.run(root);
      expect(root.addEventListener).to.have.been.calledWith("click");
      expect(document.body.addEventListener).to.not.have.been.called;
    });
  });
});
