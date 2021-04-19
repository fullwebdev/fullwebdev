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

    // override https://github.com/tgreyuk/typedoc-plugin-markdown/blob/0b9588b/packages/typedoc-plugin-markdown/src/components/options.ts#L49-L55
    MarkdownTheme.HANDLEBARS.registerHelper("relativeURL", (url: string) => {
      if (!url) return url;
      const urlWithoutExt = url.replace(/(.*).md/, "$1");
      if (!this.publicPath) return this.getRelativeUrl(urlWithoutExt);
      return this.publicPath + urlWithoutExt;
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
