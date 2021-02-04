import { TemplatePart } from "./template-part";

export interface TemplateElOptions extends ElementCreationOptions {
  attributes?: Array<[string, string | boolean | TemplatePart]>;
  classList?: Array<string | [string, TemplatePart]> | string;
}

type TemplateElDescriptor = [
  string,
  TemplateElOptions,
  (TemplateElDescriptor | string | TemplatePart)[]?
];
export type TemplateElChild = TemplateElDescriptor | string | TemplatePart;

export interface TemplateInstance extends HTMLElement {
  /**
   * node and renderer of each dynamic part of the template
   * cached by state key
   *
   * used for re-rendering the corresponding dynamic parts
   * each time a new state is defined
   */
  _partsCache?: {
    [key: string]: { node: Element | Text; renderer: (node: HTMLElement, data: any) => void }[];
  };
  /**
   * internal state value
   */
  _stateCache?: { [key: string]: any };
  /**
   * getters and setters used to re-render the element parts
   */
  state?: { [key: string]: any };
}
