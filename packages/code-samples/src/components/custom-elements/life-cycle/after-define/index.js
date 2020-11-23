import { HelloWorldComponent } from "../../hello-world.component.js";

console.log("fichier chargé");

//#region createElement
// index.js
customElements.define("hello-world", HelloWorldComponent);

const container = document.getElementById("container");

try {
  const helloWorldEl = document.createElement(
    "hello-world"
  );
  console.log("élément créé après sa définition");
  if (!helloWorldEl.querySelector("p")) {
    helloWorldEl.innerHTML = `
      <p class="error">
        cet élément ne devrait pas exister
      </p>
    `;
  }
  container.appendChild(helloWorldEl);
} catch (e) {
  console.error(`cela ne devrait jamais arriver`);
}
//#endregion createElement
