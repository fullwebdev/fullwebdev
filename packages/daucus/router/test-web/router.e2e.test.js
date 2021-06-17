import {
  expect,
  fixture,
  oneEvent,
  fixtureCleanup,
  elementUpdated,
} from "@open-wc/testing";
import { html } from "lit";
import { stub, fake } from "sinon";
import routesFixture from "./fixtures/routes.js";

import "../daucus-router.js";

// write your tests inline
describe("[e2e] DaucusRouterWC", () => {
  const mockTemplates = {
    index: "<p>index</p>",
    chapter1: "<p>chapter 1 </p>",
  };

  beforeEach(() => {
    stub(window.history, "replaceState");
    stub(window.history, "pushState");
    stub(window, "addEventListener");
    // stub(document.body, "addEventListener");
  });

  beforeEach(() => {
    const fetchStub = stub(window, "fetch");

    fetchStub
      .withArgs(`/templates/docs/${routesFixture.docs.templateUrl}`)
      .returns(
        Promise.resolve(
          new Response(mockTemplates.index, {
            status: 200,
            headers: { "Content-type": "text/html" },
          })
        )
      );

    fetchStub
      .withArgs(
        `/templates/docs/${routesFixture.docs.children.chapter1.templateUrl}`
      )
      .returns(
        Promise.resolve(
          new Response(mockTemplates.chapter1, {
            status: 200,
            headers: { "Content-type": "text/html" },
          })
        )
      );

    fetchStub.returns(
      Promise.resolve(
        new Response("", {
          status: 404,
          headers: { "Content-type": "text/plain" },
        })
      )
    );
  });

  afterEach(() => {
    window.history.replaceState.restore();
    window.history.pushState.restore();
    window.addEventListener.restore();
    window.fetch.restore();
  });

  it("load home route", async () => {
    const fakeRouteMatchListener = fake();
    const router = await fixture(html`
      <daucus-router
        .routes=${routesFixture}
        default-path="/docs/"
        @route-match=${fakeRouteMatchListener}
      >
      </daucus-router>
    `);
    await elementUpdated(router);
    // TODO: check event detail
    expect(fakeRouteMatchListener).to.have.been.calledOnce;
  });

  it("load on click", async () => {
    const fakeRouteMatchListener = fake();
    const router = await fixture(html`
      <daucus-router
        .routes=${routesFixture}
        default-path="/docs/"
        @route-match=${fakeRouteMatchListener}
      >
        <a href="/docs/chapter1/">chapitre 1</a>
      </daucus-router>
    `);
    await elementUpdated(router);
    setTimeout(() => router.querySelector("a").click());
    await oneEvent(router, "navigation-end");
    // TODO: check event detail
    expect(fakeRouteMatchListener).to.have.been.calledTwice;
  });

  afterEach(() => {
    fixtureCleanup();
  });
});
