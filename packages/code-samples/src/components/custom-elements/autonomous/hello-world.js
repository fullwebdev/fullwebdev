import {
  HelloWorldComponent,
  HelloWorldFnComponent,
} from "../hello-world.component.js";

//#region define
customElements.define("hello-world", HelloWorldComponent);
//#endregion define

customElements.define(
  "hello-world-fn",
  HelloWorldFnComponent
);
