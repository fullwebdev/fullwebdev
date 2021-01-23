import { navigate } from "./router.js";
import { getPath } from "../router.js";

//#region navigate
navigate(getPath(), true);
//#endregion navigate

// @ts-ignore
window.navigate = navigate;
