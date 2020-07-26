"use strict";

//#region helloworld
//#region function
function HelloWorld() {
  return React.createElement("div", null, `Hello World!`);
}
//#endregion function

//#region render-function
ReactDOM.render(
  React.createElement(HelloWorld),
  document.getElementById("hello-world")
);
//#endregion render-function
//#endregion helloworld

//#region class
class ClassHelloWorld extends React.Component {
  render() {
    return React.createElement(
      "div",
      null,
      `Hello ${this.props.toWhat}!`
    );
  }
}
//#endregion class

//#region render-class
ReactDOM.render(
  React.createElement(
    ClassHelloWorld,
    { toWhat: "Component" },
    null
  ),
  document.getElementById("hello-prop")
);
//#endregion render-class
