import { baseUrl, navigate } from "@modern-helpers/lazy-router";
import { langBase } from "../states/lang.js";

function getGenericPath() {
  return (
    window.location.pathname.replace(baseUrl, "").replace(langBase, "/") || "/"
  );
}

export async function reload() {
  return navigate(getGenericPath());
}
