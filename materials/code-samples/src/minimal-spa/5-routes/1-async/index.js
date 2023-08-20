import { navigate } from "./router.js";
import { getPath } from "../router.js";

navigate(getPath());

// @ts-ignore no need to add a custom Window type for this simple demo
window.navigate = navigate;
