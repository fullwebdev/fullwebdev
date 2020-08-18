import { render } from "lit-html";
import appShellTemplate from "./components/app-shell.js";

render(appShellTemplate({ lang: "en" }), document.getElementById("app-shell"));
