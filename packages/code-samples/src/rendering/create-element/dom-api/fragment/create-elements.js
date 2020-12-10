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
      this.container.firstElementChild.textContent = this._count;
    }
    //#endregion update

    //#region render
    //#region createDocumentFragment
    render(container) {
      const fragment = document.createDocumentFragment();
      //#endregion createDocumentFragment
      this.container = container;

      //#region counter
      const counter = document.createElement("p");
      counter.classList.add("counter");
      fragment.appendChild(counter);
      //#endregion counter

      //#region createActions
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

      actions.append(incrementBtn, decrementBtn);
      fragment.appendChild(actions);
      //#endregion createActions

      //#region attach
      console.log(fragment.childElementCount); // 2
      this.container.appendChild(fragment);
      console.log(fragment.childElementCount); // 0
      //#endregion attach

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
}
