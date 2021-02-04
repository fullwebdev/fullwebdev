import { navigate } from "./router.js";
import { getPath } from "../router.js";

//#region navigate
navigate(getPath(), true);
//#endregion navigate

// @ts-ignore no need to add a custom Window type for this simple demo
window.navigate = navigate;
