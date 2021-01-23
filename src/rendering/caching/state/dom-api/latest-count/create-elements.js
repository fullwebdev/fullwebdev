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

  //#region set
  _set(value) {
    const newValue = Number.parseInt(value);
    if (!isNaN(newValue)) {
      this._count = newValue;
      this._updateCounter();
    }
  }
  //#endregion set
  //#region actions

  //#region update
  _updateCounter() {
    if (this._latestCount === this._count) {
      return;
    }
    this._counter.textContent = this._count;
    this._latestCount = this._count;
  }
  //#endregion update

  //#region render
  render(container) {
    this.container = container;

    this._counter = document.createElement("p");

    const actions = document.createElement("div");
    const incrementBtn = document.createElement("button");
    incrementBtn.textContent = "++";
    incrementBtn.addEventListener("click", () => {
      this._increment();
    });
    const decrementBtn = document.createElement("button");
    decrementBtn.textContent = "--";
    decrementBtn.addEventListener("click", () => {
      this._decrement();
    });

    //#region input
    const valueInput = document.createElement("input");
    valueInput.type = "number";
    valueInput.addEventListener("change", (event) => {
      this._set(event.target.value);
    });

    actions.append(incrementBtn, decrementBtn, valueInput);
    //#endregion input

    this.container.append(this._counter, actions);

    this._updateCounter();
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
