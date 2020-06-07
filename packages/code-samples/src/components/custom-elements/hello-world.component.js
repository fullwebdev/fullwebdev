//#region class
class HelloWorldComponent extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = "<p>Hello World</p>";
  }
}
//#endregion class

//#region function
function HelloWorldFnComponent() {
  return Reflect.construct(
    HTMLElement,
    arguments,
    Object.getPrototypeOf(this).constructor
  );
}

HelloWorldFnComponent.prototype = Object.create(
  HTMLElement.prototype
);

HelloWorldFnComponent.prototype.constructor = HelloWorldFnComponent;
//#endregion function

//#region fn-connected
HelloWorldFnComponent.prototype.connectedCallback = function () {
  this.innerHTML = "<p>Hello World</p>";
};
//#endregion fn-connected

export { HelloWorldFnComponent, HelloWorldComponent };
