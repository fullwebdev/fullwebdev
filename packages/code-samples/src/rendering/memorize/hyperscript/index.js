import { el } from "https://www.unpkg.com/@fullweb/helpers";

//#region component
class Counter {
  //#region constructor
  constructor() {
    this._count = 0;
  }
  //#endregion constructor

  //#region actions
  _increment() {
    this._count++;
    this._updateCounter();
  }

  _decrement() {
    this._count--;
    this._updateCounter();
  }
  //#region actions

  //#region update
  _updateCounter() {
    this._counterEl.textContent = this._count;
  }
  //#endregion update

  render(container) {
    //#region render
    const root = el("div", {}, [
      (this._counterEl = el("p", {}, [this._count])),
      el("div", { className: "actions" }, [
        el(
          "button",
          {
            className: "increment",
          },
          ["++"]
        ),
        el(
          "button",
          {
            className: "decrement",
          },
          ["--"]
        ),
      ]),
    ]);

    container.appendChild(root);
    //#endregion render

    root.addEventListener("click", (e) => {
      const el = e.target;
      if (el.closest(".increment")) {
        this._increment();
      } else if (el.closest(".decrement")) {
        this._decrement();
      }
    });
  }
}
//#endregion component

//#region create
const containers = document.querySelectorAll(".counter");

for (let container of containers) {
  const counter = new Counter();
  counter.render(container);
}
//#endregion create
