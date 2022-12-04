import { Application } from "typedoc";
// eslint-disable-next-line import/extensions, import/no-unresolved
import { DaucusMarkdownTheme } from "./theme";

export function load(app: Application) {
  app.renderer.defineTheme("daucus", DaucusMarkdownTheme);
}
