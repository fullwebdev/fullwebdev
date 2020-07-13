export class TemplatePart {
  /**
   * @param {string} key
   * @param {(data: any) => any} [formatter]
   */
  constructor(key, formatter) {
    this.key = key;
    this.formatter = formatter;
  }
}

export class PartMeta {
  /**
   * @param {(data: any) => any} formatter
   * @param {number[]} path
   */
  constructor(path, formatter) {
    this.path = path;
    this.formatter = formatter;
  }
}

export class AttributePartMeta extends PartMeta {
  /**
   * @param {(data: any) => string} formatter
   * @param {number[]} path
   * @param {string} name
   */
  constructor(path, name, formatter) {
    super(path, formatter);
    this.name = name;
  }
}
export class ClassPartMeta extends PartMeta {
  /**
   * @param {(data: any) => boolean} formatter
   * @param {number[]} path
   * @param {string} name
   */
  constructor(path, name, formatter) {
    super(path, formatter);
    this.name = name;
  }
}

export class TextPartMeta extends PartMeta {}

/**
 * mark a Text node in a Template
 * @param {string} key
 * @param {(data: any) => string | boolean} [formatter]
 */
export function part(key, formatter) {
  return new TemplatePart(key, formatter);
}
