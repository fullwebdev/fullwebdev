/* eslint-disable new-cap, no-undef, import/extensions */
// @ts-nocheck JEST
import { updateUrl } from "./url";
import { locationStub } from "../__mocks__/jest-location";

describe("minimal spa - 2-location: url", () => {
  const { location } = window;

  beforeAll(() => {
    delete window.location;
  });

  afterAll(() => {
    window.location = location;
  });

  describe("updateUrl()", () => {
    test("use location.assign", () => {
      window.location = new locationStub("https://foo.bar");
      updateUrl("/test");
      expect(window.location.assign.mock.calls.length).toBe(
        1
      );
    });

    test("ignore baseUrl", () => {
      window.location = new locationStub(
        "https://www.foo.com/base"
      );
      updateUrl("/test");
      expect(window.location.assign.mock.calls[0][0]).toBe(
        "https://www.foo.com/test"
      );
    });
  });
});
