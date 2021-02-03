import { expect } from "@open-wc/testing";

import { el } from "..";

describe("el", () => {
  it("return a simple HTML element", () => {
    const rslt = el("div", {});

    expect(rslt instanceof HTMLDivElement).to.be.true;
  });

  it("set className", () => {
    const className = "foo bar";
    const rslt = el("div", { className });

    expect(rslt.className).to.equal(className);
  });

  it("define a custom built in element", () => {
    const className = "foo bar";

    class TestButton extends HTMLButtonElement {
      constructor() {
        super(); // always call super() first in the constructor.
        this.addEventListener("click", (e) => this.classList.add("clicked"));
      }
    }

    customElements.define("fancy-button", TestButton, { extends: "button" });

    const rslt = /** @type {TestButton} */ (el("button", {
      is: "fancy-button",
    }));
    expect(rslt instanceof TestButton).to.be.true;

    const wrapper = document.createElement("div");
    wrapper.append(rslt);

    rslt.click();
    expect(rslt.classList.contains("clicked")).to.be.true;
  });

  it("set attributes", () => {
    const rslt = /** @type {HTMLInputElement} */ (el("input", {
      attributes: [["disabled", "true"]],
    }));
    expect(rslt.disabled).to.be.true;
  });

  it("define childrens", () => {
    const text = "Hello World!";
    const rslt = el("div", {}, [el("p", { className: "text" }, [text])]);
    expect(rslt.getElementsByClassName("text")[0].textContent).to.equal(text);
  });
});
