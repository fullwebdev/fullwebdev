/**
 * @param {string} msg
 */
const errMsg = (msg) => `<p class="html-loader__error">${msg}</p>`;

export class HTMLLoaderElement extends HTMLElement {
  static get observedAttributes() {
    return ["href"];
  }

  constructor() {
    super();
    this._cache = new Map();
    this._staticCache = new Map();
  }

  set href(path) {
    if (!path) {
      this.removeAttribute("href");
    } else {
      this.setAttribute("href", path);
    }
  }

  get href() {
    return this.getAttribute("href");
  }

  get fallback() {
    return this.getAttribute("fallback");
  }

  /**
   * @param {string | Node} nodeOrString
   */
  staticContent(nodeOrString) {
    this.href = "";
    if (typeof nodeOrString === "string") {
      this.innerHTML = nodeOrString;
    } else if (nodeOrString instanceof Node) {
      this.innerHTML = "";
      this.appendChild(nodeOrString);
    } else {
      throw new Error(
        "HTMLLoaderElement.staticContent() can only render a Node or a string"
      );
    }
  }

  /**
   * @param {string} name
   * @param {string} oldValue
   * @param {string} newValue
   */
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "href" && oldValue !== newValue) {
      this.innerText = "";
      if (!newValue) {
        this.dispatchEvent(new CustomEvent("html-reset", { bubbles: true }));
      } else {
        this._renderHRef(newValue);
      }
    }
  }

  connectedCallback() {
    if (!this.style.display) {
      this.style.display = "block";
    }
  }

  // TODO: debounce
  /**
   *
   * @param {string} href
   * @param {boolean} shouldFallback
   *
   * @returns {Promise<DocumentFragment>}
   */
  async _loadHTML(href, shouldFallback = true) {
    if (this._cache.has(href)) return this._cache.get(href).cloneNode(true);

    let html;
    let isFetchOk = false;
    try {
      const res = await fetch(href);
      if (!res.ok) throw new Error(`(${href}) ${res.status}`);
      html = await res.text();
      isFetchOk = true;
    } catch (err) {
      if (this.fallback && shouldFallback) {
        return this._loadHTML(this.fallback, false);
      }
      html = errMsg(err.message);
    }
    const template = document.createElement("template");
    template.innerHTML = html;
    const fragment = document.importNode(template.content, true);
    if (isFetchOk) {
      this._cache.set(href, fragment.cloneNode(true));
    }
    return fragment;
  }

  /**
   *
   * @param {string} href
   */
  async _renderHRef(href) {
    this.appendChild(await this._loadHTML(href));
    this.dispatchEvent(
      new CustomEvent("html-loaded", { detail: { href }, bubbles: true })
    );
  }
}
