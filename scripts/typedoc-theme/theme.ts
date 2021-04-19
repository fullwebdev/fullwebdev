/* eslint-disable import/no-extraneous-dependencies, max-classes-per-file */
import MarkdownTheme from "typedoc-plugin-markdown/dist/theme";
import { BindOption } from "typedoc";
import {
  Component,
  ContextAwareRendererComponent,
} from "typedoc/dist/lib/output/components";

@Component({ name: "my-theme-utils" })
class UtilsComponent extends ContextAwareRendererComponent {
  @BindOption("publicPath")
  publicPath!: string;

  initialize() {
    super.initialize();

    MarkdownTheme.HANDLEBARS.registerHelper("relativeURL", (url) => {
      const relativeUrl = this.getRelativeUrl(url.replace(/(.*).md/, "$1"));
      return this.publicPath ? this.publicPath + relativeUrl : relativeUrl;
    });
  }
}

export default class GatsbyMarkdownTheme extends MarkdownTheme {
  /**
   * @param {import('typedoc').Renderer} renderer
   * @param {string} basePath
   */
  constructor(renderer, basePath) {
    super(renderer, basePath);

    renderer.addComponent("my-theme-utils", new UtilsComponent(renderer));
  }
}
