import { navigate } from "./router.js";
import { getPath } from "../router.js";

navigate(getPath(), true);

// @ts-ignore
window.navigate = navigate;
