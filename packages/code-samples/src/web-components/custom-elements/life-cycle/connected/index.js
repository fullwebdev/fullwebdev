import "./hello-world.component.js";

console.log("fichier chargé");

//#region createConnectedElement
const container = document.getElementById("container");

const helloWorldEl = document.createElement("hello-world");
container.appendChild(helloWorldEl);

container.innerHTML = "";
container.appendChild(helloWorldEl);
//#endregion createConnectedElement
