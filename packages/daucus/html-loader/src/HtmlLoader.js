/* eslint-disable max-classes-per-file */
/**
 * @param {string} msg
 */
const errMsg = (msg) => `<p class="html-loader__error">${msg}</p>`;

export class HTMLLoadingErrorEvent extends CustomEvent {
  /**
   * @param {Error} error
   */
  constructor(error) {
    super("html-loading-error", {
      detail: {
        error,
      },
    });
  }
}

/**
 * Load and render remote HTML template files
 *
 * @element html-loader
 *
 * @fires html-reset Element's content reset
 * @fires html-loaded HTML template successfully loaded
 * @fires html-loading-error An error occured when trying to load an HTML template
 */
export class HTMLLoaderElement extends HTMLElement {
  static get observedAttributes() {
    return ["href"];
  }

  constructor() {
    super();
    /** @private */
    this._cache = new Map();
    /** @private */
    this._staticCache = new Map();
  }

  set href(path) {
    if (!path) {
      this.removeAttribute("href");
    } else {
      this.setAttribute("href", path);
    }
  }

  /**
   * Template's URL
   */
  get href() {
    return this.getAttribute("href") || "";
  }

  /**
   * Default template's URL
   */
  get fallback() {
    return this.getAttribute("fallback") || "";
  }

  /**
   * @param {string | Node} [nodeOrString]
   */
  staticContent(nodeOrString) {
    this.href = "";
    if (!nodeOrString) {
      this.textContent = "";
      return;
    }
    if (typeof nodeOrString === "string") {
      this.innerHTML = nodeOrString;
      return;
    }
    if (nodeOrString instanceof Node) {
      this.textContent = "";
      this.appendChild(nodeOrString);
      return;
    }
    throw new Error(
      "HTMLLoaderElement.staticContent() can only render a Node or a string"
    );
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
   * @private
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
      this.dispatchEvent(new HTMLLoadingErrorEvent(err));
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
   * @private
   * @param {string} href
   */
  async _renderHRef(href) {
    this.appendChild(await this._loadHTML(href));
    this.dispatchEvent(
      new CustomEvent("html-loaded", { detail: { href }, bubbles: true })
    );
  }
}
