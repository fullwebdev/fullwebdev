import {
  TemplatePart,
  AttributePartMeta,
  TextPartMeta,
  PartMeta,
  ClassPartMeta,
} from "./template-part.js";

/**
 * @typedef {import("./template-options").TemplateInstance} TemplateInstance
 * @typedef {import("./template-options").TemplateElChild} TemplateElChild
 * @typedef {import("./template-options").TemplateElOptions} TemplateElOptions
 */

class Template {
  /**
   * @param {string} tagName
   * @param {TemplateElOptions} options
   * @param {TemplateElChild[]} children
   */
  constructor(tagName, options, children) {
    this.root = this._createElement(tagName, options, []);
    this.childrenData = children;
    /**
     * @type {Map<string, PartMeta[]>}
     */
    this._partsMeta = new Map();
    this._step(this.root, this.childrenData);
  }

  /**
   * @param {TemplateInstance} parent
   * @param {TemplateElChild[]} descriptors
   * @param {number[]} childPath
   */
  _step(parent, descriptors, childPath = []) {
    for (let i = 0; i < descriptors.length; i++) {
      const descOrPart = descriptors[i];
      let node;

      if (descOrPart instanceof TemplatePart) {
        node = document.createElement("span");
        // we do not check if a property already exist with this name for performance reasons
        // if there is one, it will just be overridden
        this._partsMeta.set(descOrPart.key, [
          ...this._partsMeta.get(descOrPart.key),
          new TextPartMeta([...childPath, i], descOrPart.formatter),
        ]);
      } else if (typeof descOrPart === "string") {
        node = document.createTextNode(descOrPart);
      } else {
        const [type, options, children] = descOrPart;
        node = this._createElement(type, options, [...childPath, i]);
        if (children) {
          this._step(node, descOrPart[2], [...childPath, i]);
        }
      }
      parent.append(node);
    }
  }

  /**
   * @param {{ [key: string]: any; }} props
   */
  render(props) {
    const root = /** @type {TemplateInstance} */ (this.root.cloneNode(true));
    root._partsCache = new Map();
    root.state = {};
    root._statesMap = new Map();

    for (let [key, partsMeta] of this._partsMeta.entries()) {
      const prop = props[key];
      if (prop === undefined) {
        throw new Error(`missing prop ${key}`);
      }

      for (let i = 0; i < partsMeta.length; i++) {
        const partMeta = partsMeta[i];

        /**
         * @type {Element}
         */
        let partEl = root;
        for (let j = 0; j < partMeta.path.length; j++) {
          partEl = partEl.children[partMeta.path[j]];
        }

        let setter, node;
        if (partMeta instanceof AttributePartMeta) {
          node = partEl;
          setter = partMeta.formatter
            ? (node, data) => {
                let formattedData = partMeta.formatter(data);
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
              }
            : (node, data) => {
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
        } else if (partMeta instanceof ClassPartMeta) {
          node = partEl;
          setter = partMeta.formatter
            ? (node, data) => {
                partMeta.formatter(data)
                  ? node.classList.add(partMeta.name)
                  : node.classList.remove(partMeta.name);
              }
            : (node, data) => {
                data
                  ? node.classList.add(partMeta.name)
                  : node.classList.remove(partMeta.name);
              };
        } else if (partMeta instanceof TextPartMeta) {
          node = document.createTextNode("");
          partEl.replaceWith(node);
          setter = partMeta.formatter
            ? (node, data) => {
                node.textContent = partMeta.formatter(data);
              }
            : (node, data) => {
                node.textContent = data;
              };
        }
        root._partsCache.set(key, [
          ...(root._partsCache.get(key) || []),
          { node, setter },
        ]);
      }

      Object.defineProperty(root.state, key, {
        get: function () {
          // @ts-ignore
          return this._statesMap.get(key);
        }.bind(root),
        set: function (data) {
          // @ts-ignore
          const cache = this._partsCache.get(key);
          for (let i = 0; i < cache.length; i++) {
            cache[i].setter(cache[i].node, data);
          }
          // @ts-ignore
          this._statesMap.set(key, data);
        }.bind(root),
      });

      root.state[key] = prop;
    }

    return root;
  }

  /**
   * @param {string} tagName
   * @param {TemplateElOptions} options
   * @param {number[]} path
   * @returns {TemplateInstance}
   */
  _createElement(tagName, { is, classList, attributes = [] }, path) {
    const node = !is
      ? document.createElement(tagName)
      : document.createElement(tagName, { is });

    // forEach is faster than for..of & for loops on very small arrays
    // i.e. when length < 10
    attributes.forEach(([key, value]) => {
      if (value instanceof TemplatePart) {
        this._partsMeta.set(value.key, [
          ...(this._partsMeta.get(value.key) || []),
          new AttributePartMeta(path, key, value.formatter),
        ]);
      } else if (value === false || value === null || value === undefined) {
        node.removeAttribute(key);
      } else if (value === true) {
        node.setAttribute(key, "");
      } else {
        node.setAttribute(key, value);
      }
    });

    if (typeof classList === "string") {
      node.className = classList;
    } else {
      classList.forEach((klass) => {
        if (Array.isArray(klass)) {
          const [name, { key, formatter }] = klass;
          this._partsMeta.set(key, [
            ...(this._partsMeta.get(key) || []),
            new ClassPartMeta(path, name, formatter),
          ]);
        } else {
          node.classList.add(klass);
        }
      });
    }
    return node;
  }
}

/**
 * mark a Text node in a Template
 * @param {string} key
 * @param {(data: any) => string | boolean} [formatter]
 */
export function part(key, formatter) {
  return new TemplatePart(key, formatter);
}

/**
 * generate a pre-parsed template
 *
 * @param {string} tagName
 * @param {TemplateElOptions} options
 * @param {TemplateElChild[]} children
 */
export function template(tagName, options, children = []) {
  return new Template(tagName, options, children);
}
