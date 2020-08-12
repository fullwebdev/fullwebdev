import codesandbox from "../../../js/components/codesandbox.js";
import pageFooter from "../../../js/components/page-footer.js";
import { html } from "lit-html";

export default () => html`
  <h1>Code & Démos</h1>

  <p>
    Un ensemble d'exemples de code minimalistes, sans build ni gestionnaire de
    dépendance.
  </p>

  <p>
    Ces exemples sont maintenus via le monorepo FullWebDev, dans le dossier
    <a
      href="https://github.com/fullwebdev/fullwebdev/tree/master/packages/code-samples/"
      >packages/code-samples/</a
    >. Certaines portions (délimitée via des
    <a href="https://code.visualstudio.com/docs/editor/codebasics#_folding"
      >commentaires de régions VS Code</a
    >) en sont utilisées dans le cadre d'autres écrits et documentations via le
    filtre pandoc
    <a href="https://github.com/noelmace/pandoc-import-code"
      >pandoc-import-code</a
    >
    (cf. <a href="/materials/">Fragments pédagogiques</a>).
  </p>

  ${codesandbox({
    branch: "master",
    path: "packages/code-samples/src/",
    title: "Exemples de code",
  })}
  ${pageFooter({ path: "docs/pages/fr/code-samples/index.js", lang: "fr" })}
`;
