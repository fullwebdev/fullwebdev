"use strict";

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

//#region class
class StatefulHelloWorld extends React.Component {
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
    StatefulHelloWorld,
    { toWhat: "Component" },
    null
  ),
  document.getElementById("hello-prop")
);
//#endregion render-class
