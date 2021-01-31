const errMsg = msg => `<p class="html-loader__error">${msg}</p>`;

export class HTMLLoaderElement extends HTMLElement {
  static get observedAttributes() {
    return ['href'];
  }

  constructor() {
    super();
    this._cache = new Map();
  }

  set href(path) {
    this.setAttribute('href', path);
  }

  get href() {
    return this.getAttribute('href');
  }

  get fallback() {
    return this.getAttribute('fallback');
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'href' && oldValue !== newValue) {
      this._render(newValue);
    }
  }

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
    const template = document.createElement('template');
    template.innerHTML = html;
    const fragment = document.importNode(template.content, true);
    if (isFetchOk) {
      this._cache.set(href, fragment.cloneNode(true));
    }
    return fragment;
  }

  async _render(href) {
    this.innerText = '';
    this.appendChild(await this._loadHTML(href));
  }
}
