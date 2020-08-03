import codesandbox from "../../../components/codesandbox.js";
import pageFooter from "../../../components/page-footer.js";
import { html } from "lit-html";

export default () => html`
<main class="page fullwidth">
  <h1>Code Samples</h1>

  <p>
    Minimalists code samples & demos, without any need for a build system nor a package manager.
  </p>

  <p>
    This code samples are maintained in the FullWebDev monorepo, in the <a href="https://github.com/fullwebdev/fullwebdev/tree/master/packages/code-samples/">packages/code-samples/</a> folder. Some parts (i.e.  <a href="https://code.visualstudio.com/docs/editor/codebasics#_folding">VS Code folding regions</a>) of these files are embeded in some other writings and documentations using <a href="https://github.com/noelmace/pandoc-import-code">pandoc-import-code</a> (cf. <a href="/materials/">Instructional Materials</a>).
  </p>

  ${codesandbox({
    branch: "master",
    path: "packages/code-samples/src/",
    title: "Code Samples",
  })}

  ${pageFooter({ path: "docs/pages/en/code-samples/index.js", lang: "en" })};
</header>
`;
