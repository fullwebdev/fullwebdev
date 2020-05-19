import { navigate } from "../../5-routes/3-redirect/router.js";
import { getPath } from "../../5-routes/router.js";
import "./navigation.js";

navigate(getPath());

// @ts-ignore
window.navigate = navigate;
