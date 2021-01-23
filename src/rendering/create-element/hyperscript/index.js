import { el } from "https://www.unpkg.com/@modern-helpers/el";

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
    this.root.firstElementChild.textContent = this._count;
  }
  //#endregion update

  //#region render
  render(container) {
    const root = el("div", {}, [
      el("p", { className: "counter " }, [this._count]),
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

    root.addEventListener("click", (e) => {
      const el = e.target;
      if (el.closest(".increment")) {
        this._increment();
      } else if (el.closest(".decrement")) {
        this._decrement();
      }
    });

    this.root = root;
  }
  //#endregion render
}
//#endregion component

//#region create
const containers = document.querySelectorAll(".counter");

for (let container of containers) {
  const counter = new Counter();
  counter.render(container);
}
//#endregion create
