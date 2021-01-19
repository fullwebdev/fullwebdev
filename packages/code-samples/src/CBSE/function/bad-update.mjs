import { Home } from "./components/Home.mjs";

//#region render-fn
function render(html, selector) {
  document.querySelector(selector).innerHTML = html;
}
//#endregion render-fn

//#region render
const homeParams = {
  helloTo: "the World",
  appName: "Demo",
  style: "text-align: center",
};

render(Home(homeParams), "#root");
//#endregion render

// Something else appens...

setTimeout(() => {
  //#region update
  homeParams.helloTo = "somebody else";

  render(Home(homeParams), "#root");
  //#endregion update
}, 1000);
