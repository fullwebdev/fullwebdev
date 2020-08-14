/**
 * @param {import('../utils/tree-node').DirTree} dirTree
 * @param {(path?: string) => Promise<{ [key: string ] : any} | null>} [asyncViewData]
 */
async function dirToRoutes(dirTree, asyncViewData) {
  /**
   * @param {string[]} pathStack
   */
  const recurse = async (pathStack) => {
    let menu = { children: {} };

    const root = pathStack.reduce((prev, cur) => prev[cur], dirTree);

    if (typeof root === "string" || root["name"]) {
      return;
    }

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
        let entry = { name };

        const subNode = await recurse(pathStack.concat(name));
        if (subNode) {
          const submenu = subNode.children;
          if (submenu && Object.entries(submenu).length > 0) {
            entry.children = submenu;
          }
        }

        const potentielPath = "/" + [...pathStack, name].join("/");
        let key = name;

        if (node["index.js"]) {
          entry.path = potentielPath.concat("/");
          entry.file = `/views${entry.path}index.js`;
        } else if (name.substr(-3) === ".js") {
          entry.file = `/views${potentielPath}`;
          entry.path = potentielPath.slice(0, -3);
          key = entry.path.split("/").pop();
        }

        if (asyncViewData && entry.path) {
          const data = await asyncViewData(entry.path);
          if (data === null) {
            entry = null;
          } else {
            Object.assign(entry, data);
          }
        }

        if (entry !== null) {
          menu.children[key] = entry;
        }
      }
    }
    return menu;
  };
  const rslt = recurse([]);
  return rslt && (await rslt).children;
}

module.exports = { dirToRoutes };
