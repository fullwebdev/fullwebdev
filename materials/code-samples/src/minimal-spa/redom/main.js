import { mount } from "https://unpkg.com/redom@3.27.1/dist/redom.es.min.js";
import { App } from "./components/app.js";

//#region mount
const app = new App();

mount(document.body, app);
//#endregion mount
