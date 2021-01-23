import { getPath } from "../../5-routes/router.js";
import { navigate } from "../../6-data/3-history-state/router.js";

navigate(getPath(), null, true);

// @ts-ignore
//#region callback
window.linkCallback = (path, event) => {
  event.preventDefault();
  navigate(path);
};
//#endregion callback
