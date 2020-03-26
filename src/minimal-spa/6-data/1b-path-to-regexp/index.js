import { navigate } from "./router.js";
import { getPath } from "../../5-routes/router.js";

navigate(getPath(), true);

// @ts-ignore
window.navigate = navigate;
