import { HelloWorldComponent } from "../../hello-world.component.js";

console.log("fichier chargé");

//#region createElement
//#region define
// index.js
customElements.define("hello-world", HelloWorldComponent);
//#endregion define
