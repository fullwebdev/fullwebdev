/* eslint-disable func-names */
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
    for (let i = 0; i < metaKeys.length; i += 1) {
      const key = metaKeys[i];
      const partsMeta = this._partsMeta[key];
      const prop = props[key];
      if (prop === undefined) {
        throw new Error(`missing prop ${key}`);
      }

      for (let j = 0; j < partsMeta.length; j += 1) {
        const partMeta = partsMeta[j];
        const { renderer, node } = this._partCacheInfo(root, partMeta);

        if (!root._partsCache[key]) {
          root._partsCache[key] = [];
        }
        root._partsCache[key].push({
          node,
          renderer: partMeta.formatter
            ? // @ts-ignore partMeta.formatter can't be undefined here
              (el, data) => renderer(el, partMeta.formatter(data))
            : renderer,
        });
      }
      //#endregion loopMeta

      //#region proxy
      Object.defineProperty(root.state, key, {
        get: function () {
          // @ts-ignore this is a TemplateInstance
          return this._stateCache[key];
        }.bind(root),
        // @ts-ignore implicit any
        set: function (data) {
          // @ts-ignore this is a TemplateInstance
          const cache = this._partsCache[key];
          for (let j = 0; j < cache.length; j += 1) {
            cache[j].renderer(cache[j].node, data);
          }
          // @ts-ignore this is a TemplateInstance
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
    for (let i = 0; i < descriptors.length; i += 1) {
      const descOrPart = descriptors[i];
      let node;

      if (typeof descOrPart === "string") {
        node = document.createTextNode(descOrPart);
      } else if (Array.isArray(descOrPart)) {
        const [type, options, children] = descOrPart;
        node = this._createElement(type, options, [...childPath, i]);
        if (children) {
          // @ts-ignore descOrPart.length > 3
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
   * @returns {{ renderer: (node: HTMLElement, data: any) => void, node: Element | Text }}
   */
  // eslint-disable-next-line class-methods-use-this
  _partCacheInfo(root, partMeta) {
    /**
     * @type {Element}
     */
    let partEl = root;
    for (let j = 0; j < partMeta.path.length; j += 1) {
      partEl = partEl.children[partMeta.path[j]];
    }

    let renderer;
    let node;
    if (partMeta.type === "attribute") {
      node = partEl;
      /**
       * @param {HTMLElement} el
       * @param {boolean | string | null} [data]
       */
      renderer = (el, data) => {
        let formattedData = data;
        if (formattedData === true) {
          formattedData = "";
        }
        if (
          formattedData === false ||
          formattedData === null ||
          formattedData === undefined
        ) {
          el.removeAttribute(partMeta.name);
        } else {
          el.setAttribute(partMeta.name, formattedData);
        }
      };
    } else if (partMeta.type === "class") {
      node = partEl;
      /**
       * @param {HTMLElement} el
       * @param {any} data
       */
      renderer = (el, data) => {
        // eslint-disable-next-line no-unused-expressions
        data
          ? el.classList.add(partMeta.name)
          : el.classList.remove(partMeta.name);
      };
    } else {
      node = document.createTextNode("");
      partEl.replaceWith(node);
      /**
       * @param {HTMLElement} el
       * @param {string} data
       */
      renderer = (el, data) => {
        // eslint-disable-next-line no-param-reassign
        el.textContent = data;
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
          this._partsMeta[key].push({
            type: "class",
            path,
            name,
            formatter,
          });
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
