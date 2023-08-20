import { heavyHTML } from "./heavy-html.js";

function render() {
  //#region render
  const container = document.createElement("div");
  document.querySelector("main").appendChild(container);
  container.innerHTML = heavyHTML();
  container.innerHTML = "<p>Hello World</p>";
  //#endregion render
}

window.render = render;
