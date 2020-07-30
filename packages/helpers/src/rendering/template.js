/**
 * @typedef {import("./template-options").TemplateInstance} TemplateInstance
 * @typedef {import("./template-options").TemplateElChild} TemplateElChild
 * @typedef {import("./template-options").TemplateElOptions} TemplateElOptions
 * @typedef {import("./template-part").TemplatePart} TemplatePart
 * @typedef {import("./template-part").PartMeta} PartMeta
 */

/**
 * pre-parsed template allowing to create elements with dynamic content
 * associated to state data
 */
export class Template {
  /**
   * @param {string} tagName
   * @param {TemplateElOptions} options
   * @param {TemplateElChild[]} children
   */
  //#region constructor
  constructor(tagName, options, children) {
    /**
     * describe each dynamic part of the template
     *
     * @type {{[key: string]: PartMeta[]}}
     */
    this._partsMeta = {};
    this.root = this._createElement(tagName, options, []);
    this._parseChildren(this.root, children);
  }
  //#endregion constructor

  /**
   * Create a new HTMLElement from the pre-created one,
   * with a state attribute allowing to update its dynamic content.
   *
   * This element still need to be added to the DOM afterward.
   *
   * @param {{ [key: string]: any; }} props
   * @returns {TemplateInstance}
   */
  //#region render
  //#region renderInit
  render(props) {
    const root = /** @type {TemplateInstance} */ (this.root.cloneNode(true));

    // literal objects are more effective than maps in this case
    // i.e. when storring small amount of arrays
    root._partsCache = {};
    root._stateCache = {};
    root.state = {};
    //#endregion renderInit

    //#region loopMeta
    const metaKeys = Object.keys(this._partsMeta);
    for (let i = 0; i < metaKeys.length; i++) {
      const key = metaKeys[i];
      const partsMeta = this._partsMeta[key];
      const prop = props[key];
      if (prop === undefined) {
        throw new Error(`missing prop ${key}`);
      }

      for (let i = 0; i < partsMeta.length; i++) {
        const partMeta = partsMeta[i];
        const { renderer, node } = this._partCacheInfo(root, partMeta);

        if (!root._partsCache[key]) {
          root._partsCache[key] = [];
        }
        root._partsCache[key].push({
          node,
          renderer: partMeta.formatter
            ? (node, data) => renderer(node, partMeta.formatter(data))
            : renderer,
        });
      }
      //#endregion loopMeta

      //#region proxy
      Object.defineProperty(root.state, key, {
        get: function () {
          return this._stateCache[key];
        }.bind(root),
        set: function (data) {
          const cache = this._partsCache[key];
          for (let i = 0; i < cache.length; i++) {
            cache[i].renderer(cache[i].node, data);
          }
          this._stateCache[key] = data;
        }.bind(root),
      });

      root.state[key] = prop;
      //#endregion proxy
    }

    return root;
  }
  //#endregion render

  /**
   * create children elements and store dynamic parts data
   *
   * @param {TemplateInstance} parent
   * @param {TemplateElChild[]} descriptors
   * @param {number[]} childPath
   */
  //#region parse
  _parseChildren(parent, descriptors, childPath = []) {
    for (let i = 0; i < descriptors.length; i++) {
      const descOrPart = descriptors[i];
      let node;

      if (typeof descOrPart === "string") {
        node = document.createTextNode(descOrPart);
      } else if (Array.isArray(descOrPart)) {
        const [type, options, children] = descOrPart;
        node = this._createElement(type, options, [...childPath, i]);
        if (children) {
          this._parseChildren(node, descOrPart[2], [...childPath, i]);
        }
      } else {
        node = document.createElement("span");
        if (!this._partsMeta[descOrPart.key]) {
          this._partsMeta[descOrPart.key] = [];
        }
        this._partsMeta[descOrPart.key].push({
          type: "text",
          path: [...childPath, i],
          formatter: descOrPart.formatter,
        });
      }
      parent.append(node);
    }
  }
  //#endregion parse

  /**
   * get the associated Node and rendering function from dynamic part metadatas
   *
   * @param { TemplateInstance } root
   * @param { PartMeta } partMeta
   *
   * @returns {{ renderer: (node: Node, data: any) => void, node: Node }}
   */
  _partCacheInfo(root, partMeta) {
    /**
     * @type {Element}
     */
    let partEl = root;
    for (let j = 0; j < partMeta.path.length; j++) {
      partEl = partEl.children[partMeta.path[j]];
    }

    let renderer, node;
    if (partMeta.type === "attribute") {
      node = partEl;
      renderer = (node, data) => {
        let formattedData = data;
        if (formattedData === true) {
          formattedData = "";
        }
        if (
          formattedData === false ||
          formattedData === null ||
          formattedData === undefined
        ) {
          node.removeAttribute(partMeta.name);
        } else {
          node.setAttribute(partMeta.name, formattedData);
        }
      };
    } else if (partMeta.type === "class") {
      node = partEl;
      renderer = (node, data) => {
        data
          ? node.classList.add(partMeta.name)
          : node.classList.remove(partMeta.name);
      };
    } else {
      node = document.createTextNode("");
      partEl.replaceWith(node);
      renderer = (node, data) => {
        node.textContent = data;
      };
    }

    return { renderer, node };
  }

  /**
   * @param {string} tagName
   * @param {TemplateElOptions} options
   * @param {number[]} path
   * @returns {TemplateInstance}
   */
  //#region createElement
  _createElement(tagName, { is, classList, attributes = [] }, path) {
    const node = !is
      ? document.createElement(tagName)
      : document.createElement(tagName, { is });

    // forEach is faster than for..of & for loops on very small arrays
    // i.e. when length < 10
    attributes.forEach(([name, value]) => {
      if (value === false || value === null || value === undefined) {
        node.removeAttribute(name);
      } else if (value === true) {
        node.setAttribute(name, "");
      } else if (typeof value === "string") {
        node.setAttribute(name, value);
      } else {
        if (!this._partsMeta[value.key]) {
          this._partsMeta[value.key] = [];
        }
        this._partsMeta[value.key].push({
          type: "attribute",
          path,
          name,
          formatter: value.formatter,
        });
      }
    });

    if (typeof classList === "string") {
      node.className = classList;
    } else if (Array.isArray(classList)) {
      classList.forEach((klass) => {
        if (Array.isArray(klass)) {
          const [name, { key, formatter }] = klass;
          if (!this._partsMeta[key]) {
            this._partsMeta[key] = [];
          }
          this._partsMeta[key].push({ type: "class", path, name, formatter });
        } else {
          node.classList.add(klass);
        }
      });
    }
    return node;
  }
  //#endregion createElement
}

/**
 * mark a dynamic part of a Template and associate it to a state for future rendering
 * can be used as an attribute, a class or a text child node
 *
 * @param {string} key state key
 * @param {(data: any) => string | boolean} [formatter] function to apply to the state data before rendering
 *
 * @return {TemplatePart}
 */
//#region part
export function part(key, formatter) {
  return { key, formatter };
}
//#endregion part
