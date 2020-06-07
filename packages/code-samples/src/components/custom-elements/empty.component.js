//#region class
class MyComponent extends HTMLElement {}
//#endregion class

//#region function
function MyComponent() {
  return Reflect.construct(
    HTMLElement,
    arguments,
    Object.getPrototypeOf(this).constructor
  );
}
//#endregion function

//#region function-inheritance
MyComponent.prototype = Object.create(
  HTMLElement.prototype
);

MyComponent.prototype.constructor = MyComponent;
//#endregion function-inheritance
