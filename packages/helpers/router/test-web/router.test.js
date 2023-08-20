import { expect } from "@open-wc/testing";
import { spy, stub, fake } from "sinon";
import { AbstractRouter } from "../index.js";

describe("router", () => {
  const fakeBase = "/mock/base";
  /** @type {Function} */
  let fakeCb;
  /** @type {AbstractRouter} */
  let abstractRouter;
  /** @type {AbstractRouter} */
  let fakeRouter;
  /** @type {AbstractRouter} */
  let fakeRouterWithRedirection;
  /**
   * @type {[path: string, options?: import('../index.js').NavigationOptions]}
   */
  const fakeRedirection = ["/another-path", {}];

  beforeEach(() => {
    const getTagStub = stub(document, "getElementsByTagName");
    const fakeBaseEl = document.createElement("base");
    fakeBaseEl.setAttribute("href", fakeBase);

    // @ts-ignore HTMLCollectionOf
    getTagStub.withArgs("base").returns([fakeBaseEl]);

    Object.defineProperty(document, "baseURI", {
      value: `https://fullweb.dev${fakeBase}/`,
    });

    // @ts-ignore missing argument
    // eslint-disable-next-line no-promise-executor-return
    fakeCb = fake.returns(new Promise((resolve) => resolve()));
    abstractRouter = new AbstractRouter();

    fakeRouter = new (class extends AbstractRouter {
      /**
       * @param {string} path
       * @param {import("../index.doc.js").NavigationOptions} options
       * @param {URLSearchParams} params
       * @param {string} hash
       */
      renderOrRedirect(path, options, params, hash) {
        fakeCb(path, options, params, hash);
        return null;
      }
    })();

    fakeRouterWithRedirection = new (class extends AbstractRouter {
      /**
       * @param {string} path
       * @param {import("../index.doc.js").NavigationOptions} options
       * @param {URLSearchParams} params
       * @param {string} hash
       */
      renderOrRedirect(path, options, params, hash) {
        fakeCb(path, options, params, hash);
        return fakeRedirection;
      }
    })();
  });

  afterEach(() => {
    // @ts-ignore Stub
    document.getElementsByTagName.restore();
  });

  beforeEach(() => {
    stub(window.history, "replaceState");
    stub(window.history, "pushState");
    stub(window, "addEventListener");
    stub(document.body, "addEventListener");
  });

  afterEach(() => {
    // @ts-ignore Stub
    window.history.replaceState.restore();
    // @ts-ignore Stub
    window.history.pushState.restore();
    // @ts-ignore Stub
    window.addEventListener.restore();
    // @ts-ignore Stub
    document.body.addEventListener.restore();
  });

  it("store base href", () => {
    expect(abstractRouter.base).equals(fakeBase);
  });

  describe("navigate()", () => {
    it("process get parameters", async () => {
      await fakeRouter.navigate("/foo/bar?p=test&empty");
      expect(fakeCb).to.have.been.calledWithExactly(
        "/foo/bar",
        {},
        new URLSearchParams({ p: "test", empty: "" }),
        ""
      );
    });

    it("process hash", async () => {
      await fakeRouter.navigate("/foo/bar?p=test&empty#myhash");
      expect(fakeCb).to.have.been.calledWithExactly(
        "/foo/bar",
        {},
        new URLSearchParams({ p: "test", empty: "" }),
        "myhash"
      );
    });

    it("call child class findRoute method", async () => {
      await fakeRouter.navigate("/foo/bar", {
        state: "test",
        redirection: true,
      });
      expect(fakeCb).to.have.been.calledWith("/foo/bar", {
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
      expect(window.history.replaceState).to.have.been.calledWith(
        "test",
        ""
        // FIXME: params (wtr-session-id)
        // `${fakeBase}/foo/bar`
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

    it("perform navigation without changing history state by default", async () => {
      spy(abstractRouter, "navigate");
      await abstractRouter.run();
      expect(abstractRouter.navigate).to.have.been.called;
      expect(window.history.replaceState).to.not.have.been.called;
      expect(window.history.pushState).to.not.have.been.called;
    });

    it("allow to avoid performing a navigation if needed", async () => {
      spy(abstractRouter, "navigate");
      await abstractRouter.run(document.body, false);
      expect(abstractRouter.navigate).to.not.have.been.called;
      expect(window.history.replaceState).to.not.have.been.called;
      expect(window.history.pushState).to.not.have.been.called;
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
