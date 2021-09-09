/**
 * @template W
 * @template {import('./constructor').Constructor<import('lit').LitElement>} T
 * @param {T} superClass
 * @returns {import('./constructor').Constructor<import('./with-wording').WithWordingInterface<W>> & T}
 */
export const WithWording = (superClass) => {
  class WithWordingElement extends superClass {
    static get properties() {
      return {
        lang: { type: String },
        wording: { type: Object, attribute: false },
      };
    }

    /**
     * @param {any[]} args
     */
    // see https://github.com/microsoft/TypeScript/issues/37142
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    constructor(...args) {
      super();
      /** @type {import('../languages').Language} */
      this.lang = "en";
      /** @type {W | null} */
      this.wording = null;
    }

    /** @type {W} */
    get w() {
      if (!this.wording)
        throw new Error(`can't find any wording for ${this.className}`);
      return this.wording;
    }
  }
  return WithWordingElement;
};
