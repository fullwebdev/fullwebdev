//#region render-fn
function render(html, selector) {
  document.querySelector(selector).innerHTML = html;
}
//#endregion render-fn

//#region hello-world
function HelloWorld() {
  return `<div>Hello World!</div>`;
}
//#endregion hello-world

//#region render-hello-world
render(HelloWorld(), "#hello-world");
//#endregion render-hello-world

//#region params
function HelloParams(props) {
  return `<div style="${props.style}">
    Hello ${props.toWhat}!
  </div>`;
}
//#endregion params

//#region render-params
render(
  HelloParams({ toWhat: "Params", style: "color: red" }),
  "#hello-params"
);
//#endregion render-params
