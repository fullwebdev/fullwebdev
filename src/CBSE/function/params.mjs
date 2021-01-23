import { SayHello } from "./components/SayHello.mjs";
import { Home } from "./components/Home.mjs";

//#region render-fn
function render(html, container) {
  container.innerHTML = html;
  return container;
}
//#endregion render-fn

const homeParams = {
  helloTo: "the World",
  appName: "Demo",
  style: "text-align: center",
};

//#region render
const root = render(
  Home(homeParams),
  document.getElementById("root")
);
//#endregion render

// Something else appens...

setTimeout(() => {
  //#region update
  render(
    SayHello({ toWhat: "somebody else" }),
    root.querySelector(".hello")
  );
  //#endregion update
}, 1000);
