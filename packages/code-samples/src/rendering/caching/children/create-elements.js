{
  //#region memoization
  const counterChildrenCache = new WeakMap();

  function counterChildren() {
    if (counterChildrenCache.has(this)) {
      const children = counterChildrenCache.get(this);
      return children.map((node) => node.cloneNode(true));
    }

    const children = [];

    const counter = document.createElement("p");
    counter.classList.add("counter");
    children.push(counter);

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
    children.push(actions);

    counterChildrenCache.set(this, children);

    return children;
  }
  //#endregion memoization

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
    render(container) {
      this.container = container;
      const children = counterChildren();
      this.container.append(...children);
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
