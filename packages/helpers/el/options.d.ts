/**
 * Options for element creation via the el function.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement|Document.createElement()) second argument, "options"
 */
export interface ElOptions extends ElementCreationOptions {
  /**
   * Name and value of the element's attributes.
   *
   * If the value is a boolean, this associated attribute will be created with an emptry string value if true, or removed if false.
   *
   * @see HTMLElement.setAttribute
   */
  attributes?: Array<[string, string | boolean]>;
  /**
   * Content of the Element's class attribute.
   *
   * @see HTMLElement.className
   */
  className?: string;
}
