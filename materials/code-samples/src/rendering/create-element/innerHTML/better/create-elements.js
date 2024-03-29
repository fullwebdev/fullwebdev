{
  //#region component
  class Counter {
    //#region constructor
    constructor() {
      this._count = 0;
    }
    //#endregion constructor

    //#region actions
    _increment() {
      this._count += 1;
      this._updateCounter();
    }

    _decrement() {
      this._count -= 1;
      this._updateCounter();
    }
    //#endregion actions

    //#region update
    _updateCounter() {
      this.container.firstElementChild.textContent =
        this._count;
    }
    //#endregion update

    //#region render
    render(container) {
      this.container = container;

      this.container.innerHTML = `
        <p>${this._count}<p>
        <div>
          <button class="increment">++</button>
          <button class="decrement">--</button>
        </div>
      `;

      this.container.addEventListener("click", (e) => {
        const el = e.target;
        if (el.closest(".increment")) {
          this._increment();
        } else if (el.closest(".decrement")) {
          this._decrement();
        }
      });
    }
    //#endregion render
  }
  //#endregion component

  //#region create
  const containers = document.querySelectorAll(".counter");

  for (const container of containers) {
    const counter = new Counter();
    counter.render(container);
  }
  //#endregion create
}
