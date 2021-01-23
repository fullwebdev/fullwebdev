import { HelloWorldComponent } from "../hello-world.component.js";
import "./connected/hello-world.component.js";
import "./good-hello-world.component.js";

console.log("fichier chargé");

//#region createElement
//#region define
// index.js
customElements.define("hello-world", HelloWorldComponent);
//#endregion define

const container = document.getElementById("after-define");

try {
  const helloWorldEl = document.createElement(
    "hello-world"
  );
  console.log("élément créé après sa définition");
  if (!helloWorldEl.querySelector("p")) {
    helloWorldEl.innerHTML = `<p class="error">nothing here</p>`;
  }
  container.appendChild(helloWorldEl);
} catch (e) {
  console.error(`cela ne devrait jamais arriver`);
}
//#endregion createElement

//#region createConnectedElement
const connectedContainer = document.getElementById(
  "connected-after-define"
);

const connectedHelloWorldEl = document.createElement(
  "connected-hello-world"
);
connectedContainer.appendChild(connectedHelloWorldEl);

connectedContainer.innerHTML = "";
connectedContainer.appendChild(connectedHelloWorldEl);
//#endregion createConnectedElement

//#region createConnectedElement
const goodContainer = document.getElementById(
  "good-after-define"
);

const goodHelloWorldEl = document.createElement(
  "good-hello-world"
);
goodContainer.appendChild(goodHelloWorldEl);

goodContainer.innerHTML = "";
goodContainer.appendChild(goodHelloWorldEl);
//#endregion createConnectedElement
