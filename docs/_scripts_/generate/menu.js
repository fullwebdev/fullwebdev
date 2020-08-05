/**
 * @param {string[]} crumbs
 * @param {import('../utils/tree-node').DirTree} dirTree
 * @param {(path?: string) => Promise<{ [key: string ] : any}>} [asyncViewData]
 */
async function getMenu(dirTree, crumbs, withSubMenu = true, asyncViewData) {
  /**
   * @param {string[]} pathStack
   * @param {boolean} repeat
   */
  const recurse = async (pathStack, repeat) => {
    let menu = { entries: [] };

    const root = pathStack.reduce((prev, cur) => prev[cur], dirTree);

    if (root["index.js"]) {
      menu.path = "/" + pathStack.join("/") + "/";
    }

    for (let [name, node] of Object.entries(root)) {
      if (name === "index.js") {
        if (asyncViewData && menu.path) {
          const data = await asyncViewData(menu.path);
          Object.assign(menu, data);
        }
      } else {
        const entry = { name };
        if (repeat) {
          const subNode = await recurse(pathStack.concat(name), false);
          const submenu = subNode.entries;
          if (submenu && submenu.length > 0) {
            entry.menu = submenu;
          }
        }
        const potentielPath = menu.path.concat(name);

        if (node["index.js"]) {
          entry.path = potentielPath.concat("/");
        } else if (name.substr(-3) === ".js") {
          entry.path = potentielPath.slice(0, -3);
        }

        if (asyncViewData && entry.path) {
          const data = await asyncViewData(entry.path);
          Object.assign(entry, data);
        }
        menu.entries.push(entry);
      }
    };

    return menu;
  };
  return recurse(crumbs, withSubMenu);
}

module.exports = { getMenu };
