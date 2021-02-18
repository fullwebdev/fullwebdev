/** @type {import('prismjs') | null} */
let Prism = null;

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
async function responsiveTables(root) {
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
export async function stylePage(root) {
  await codeStyle(root);
  await responsiveTables(root);
}
