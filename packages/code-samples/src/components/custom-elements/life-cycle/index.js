import { HelloWorldComponent } from "../hello-world.component.js";
import "./connected-hello-world.component.js";
import "./good-hello-world.component.js";

console.log("differed script loaded");

customElements.define("hello-world", HelloWorldComponent);

const container = document.getElementById("after-define");

//#region createElement
try {
  const helloWorldEl = document.createElement(
    "hello-world"
  );
  console.log("element created after its definition");
  if (!helloWorldEl.querySelector("p")) {
    helloWorldEl.innerHTML = `<p class="error">nothing here</p>`;
  }
  container.appendChild(helloWorldEl);
} catch (e) {
  console.error(`this will never happen`);
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
