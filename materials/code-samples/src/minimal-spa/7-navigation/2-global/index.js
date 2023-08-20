import { navigate } from "../../5-routes/3-redirect/router.js";
import { getPath } from "../../5-routes/router.js";
import "./navigation.js";

navigate(getPath());

// @ts-ignore no need to add a custom Window type for this simple demo
window.navigate = navigate;
