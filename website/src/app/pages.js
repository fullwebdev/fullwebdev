/** @type {import('prismjs') | null} */
let Prism = null;

/**
 * @type {Record<string, string>}
 *
 * @see {@link https://github.com/PrismJS/prism/blob/c4f6b2c/plugins/autoloader/prism-autoloader.js|prism-autoloader}
 * @da
 */
const PRISM_LANG_ALIASES = {
  html: "markup",
  xml: "markup",
  svg: "markup",
  mathml: "markup",
  ssml: "markup",
  atom: "markup",
  rss: "markup",
  js: "javascript",
  g4: "antlr4",
  adoc: "asciidoc",
  shell: "bash",
  shortcode: "bbcode",
  rbnf: "bnf",
  oscript: "bsl",
  cs: "csharp",
  dotnet: "csharp",
  cfc: "cfscript",
  coffee: "coffeescript",
  conc: "concurnas",
  jinja2: "django",
  "dns-zone": "dns-zone-file",
  dockerfile: "docker",
  gv: "dot",
  eta: "ejs",
  xlsx: "excel-formula",
  xls: "excel-formula",
  gamemakerlanguage: "gml",
  hbs: "handlebars",
  hs: "haskell",
  idr: "idris",
  gitignore: "ignore",
  hgignore: "ignore",
  npmignore: "ignore",
  webmanifest: "json",
  kt: "kotlin",
  kts: "kotlin",
  kum: "kumir",
  tex: "latex",
  context: "latex",
  ly: "lilypond",
  emacs: "lisp",
  elisp: "lisp",
  "emacs-lisp": "lisp",
  md: "markdown",
  moon: "moonscript",
  n4jsd: "n4js",
  nani: "naniscript",
  objc: "objectivec",
  qasm: "openqasm",
  objectpascal: "pascal",
  px: "pcaxis",
  pcode: "peoplecode",
  pq: "powerquery",
  mscript: "powerquery",
  pbfasm: "purebasic",
  purs: "purescript",
  py: "python",
  qs: "qsharp",
  rkt: "racket",
  rpy: "renpy",
  robot: "robotframework",
  rb: "ruby",
  "sh-session": "shell-session",
  shellsession: "shell-session",
  smlnj: "sml",
  sol: "solidity",
  sln: "solution-file",
  rq: "sparql",
  t4: "t4-cs",
  trig: "turtle",
  ts: "typescript",
  tsconfig: "typoscript",
  uscript: "unrealscript",
  uc: "unrealscript",
  url: "uri",
  vb: "visual-basic",
  vba: "visual-basic",
  mathematica: "wolfram",
  nb: "wolfram",
  wl: "wolfram",
  xeoracube: "xeora",
  yml: "yaml",
};

const loadedPrismLanguages = ["markup", "css", "clike", "javascript"];

/**
 * @param {Element} root
 */
async function codeStyle(root) {
  const codes = root.querySelectorAll(`pre code[class*="language-"]`);
  if (codes.length > 0) {
    if (!Prism) {
      Prism = await import("prismjs");
    }
    for (let i = 0; i < codes.length; i += 1) {
      let language;
      const codeEl = codes[i];
      for (let j = 0; j < codeEl.classList.length; j += 1) {
        const clazz = codeEl.classList[j];
        if (clazz.startsWith("language-")) {
          const languageCode = clazz.replace("language-", "");
          language = PRISM_LANG_ALIASES[languageCode] || languageCode;
          break;
        }
      }
      if (language && !loadedPrismLanguages.includes(language)) {
        try {
          // eslint-disable-next-line no-await-in-loop
          await import(`/prism-components/prism-${language}.min.js`);
          loadedPrismLanguages.push(language);
        } catch (err) {
          // console.warn(`can't import language ${language} for Prism`);
          // console.log(err);
        }
      }
      Prism.highlightElement(codes[i]);
    }
  }
}

function uid() {
  const s4 = () =>
    Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  return `${s4()}-${s4()}-${s4()}`;
}

/**
 * @param {Element} root
 */
function responsiveTables(root) {
  const tables = root.querySelectorAll("table");
  if (tables.length < 1) return;
  const style = document.createElement("style");
  // base style is in daucus-pages.css
  style.setAttribute("media", "(max-width: 719px)");
  root.prepend(style);
  const { sheet } = style;
  if (!sheet) return;
  for (let i = 0; i < tables.length; i += 1) {
    const table = tables[i];
    const tableId = `pagetable-${uid()}`;
    table.classList.add(tableId);
    const tableHeaderCells = tables[i].querySelectorAll("th");
    for (let j = 0; j < tableHeaderCells.length; j += 1) {
      const title = tableHeaderCells[j].textContent;
      if (title) {
        // TODO: execute at build time with {content: attr(data-label)};
        sheet.insertRule(
          `.${tableId} td:nth-of-type(${
            j + 1
          }):not(:empty):before { content: "${title}"; }`
        );
      }
    }
  }
}

/**
 * @param {Element} root
 */
function addReadingTime(root) {
  const texts = root.querySelectorAll(".wc-text-content");
  for (const text of texts) {
    const words = text.innerHTML
      .replace(/<[^>]*>/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .split(" ");
    const wordsPerMinute = text.classList.contains("speak-time") ? 160 : 250;
    const readingTime = Math.round(words.length / wordsPerMinute);
    const readingTimeEl = document.createElement("p");
    readingTimeEl.classList.add("reading-time");
    readingTimeEl.textContent = `${readingTime} minutes`;
    text.prepend(readingTimeEl);
  }
}

/**
 * @param {Element} root
 */
export async function stylePage(root) {
  await codeStyle(root);
  responsiveTables(root);
  addReadingTime(root);
}
