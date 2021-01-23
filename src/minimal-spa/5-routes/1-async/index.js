import { navigate } from "./router.js";
import { getPath } from "../router.js";

navigate(getPath());

// @ts-ignore
window.navigate = navigate;
