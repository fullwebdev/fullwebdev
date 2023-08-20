/* eslint-disable import/no-extraneous-dependencies, max-classes-per-file */
import { MarkdownTheme } from "typedoc-plugin-markdown/dist/theme";
import * as Handlebars from "handlebars";

export class DaucusMarkdownTheme extends MarkdownTheme {
  constructor(renderer: import("typedoc").Renderer) {
    super(renderer);

    Handlebars.registerHelper("relativeURL", (url: string) => {
      if (!url) return url;
      const urlWithoutExt = url
        .replace(/(.*)\.md/, "$1")
        .replace(/^README/, "");
      if (!this.publicPath) {
        return this.getRelativeUrl(urlWithoutExt);
      }
      if (urlWithoutExt.startsWith("#")) {
        return this.publicPath.replace(/\/$/, "") + urlWithoutExt;
      }
      return this.publicPath + urlWithoutExt;
    });
  }
}
