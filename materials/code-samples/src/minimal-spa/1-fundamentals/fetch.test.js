import { expect } from "@open-wc/testing";
import sinon from "sinon";
import "sinon-chai";

import { getPostData } from "./fetch.js";
import { mockResponse200 } from "../../../tests/utils/http.js";
import { post as postMock } from "../__mocks__/Post.mock.js";

describe("minimal-spa - 1-fundamentals : fetch", () => {
  let fetchStub;

  beforeEach(() => {
    fetchStub = sinon.stub(window, "fetch");
    fetchStub.callsFake(mockResponse200(postMock));
  });

  describe("getPostData()", () => {
    let rslt;

    beforeEach(async () => {
      rslt = await getPostData(1);
    });

    it("call /post/:id", async () => {
      expect(fetchStub).to.have.been.calledWithMatch(
        sinon.match(/\/posts\/1$/)
      );
    });

    it("return a Post", async () => {
      expect(rslt).to.deep.equal(postMock);
    });
  });

  afterEach(() => {
    fetchStub.restore();
  });
});
