{
  //#region component
  class Counter {
    //#region constructor
    constructor(container) {
      this._count = 0;
      this.container = container;

      this.container.addEventListener("click", (e) => {
        const el = e.target;
        if (el.closest(".increment")) {
          this._increment();
        } else if (el.closest(".decrement")) {
          this._decrement();
        }
      });
    }
    //#endregion constructor

    _increment() {
      this._count++;
      this.render();
    }

    _decrement() {
      this._count--;
      this.render();
    }

    render() {
      this.container.innerHTML = `
        <p>${this._count}<p>
        <div>
          <button class="increment">++</button>
          <button class="decrement">--</button>
        </div>
      `;
    }
  }
  //#endregion component

  //#region create
  const containers = document.querySelectorAll(".counter");

  for (let container of containers) {
    const counter = new Counter(container);
    counter.render();
  }
  //#endregion create
}
