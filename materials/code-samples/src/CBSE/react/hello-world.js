"use strict";

//#region helloworld
//#region function
function HelloWorld(toWhat) {
  const text = `Hello ${toWhat}`;
  return React.createElement("div", null, text);
}
//#endregion function

//#region render-function
ReactDOM.render(
  HelloWorld("World"),
  document.getElementById("hello-world")
);
//#endregion render-function
//#endregion helloworld
