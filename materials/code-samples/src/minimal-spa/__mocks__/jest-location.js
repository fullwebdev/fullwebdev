/**
 *
 * @param {*} href
 */
export class locationStub {
  constructor(href) {
    const url = new URL(href);
    this.origin = url.origin;
    this.href = url.href;
    this.assign = jest.fn();
    this.replace = jest.fn();
  }
}
