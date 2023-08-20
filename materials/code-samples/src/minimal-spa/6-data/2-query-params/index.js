import { navigate } from "./router.js";
import { getPath } from "../../5-routes/router.js";

navigate(getPath(), true);

// @ts-ignore no need to add a custom Window type for this simple demo
window.navigate = navigate;
