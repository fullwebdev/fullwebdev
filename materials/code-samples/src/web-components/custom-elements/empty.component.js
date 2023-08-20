/* eslint-disable prefer-rest-params, no-redeclare */
// @ts-nocheck duplicates for demo
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

MyComponent.prototype = Object.create(
  HTMLElement.prototype
);

MyComponent.prototype.constructor = MyComponent;
//#endregion function
