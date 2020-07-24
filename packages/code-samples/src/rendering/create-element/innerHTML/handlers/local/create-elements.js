{
  //#region component
  class Counter {
    constructor(container) {
      this._count = 0;
      this.container = container;
    }

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

      //#region handler
      this.container
        .querySelector(".increment")
        .addEventListener("click", () => {
          this._increment();
        });
      this.container
        .querySelector(".decrement")
        .addEventListener("click", () => {
          this._decrement();
        });
      //#endregion handler
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
