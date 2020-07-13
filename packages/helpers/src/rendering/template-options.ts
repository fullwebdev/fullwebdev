import { TemplatePart } from "./template-part.js";

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
  _partsCache?: Map<
    string,
    { node: Node; setter: (node: Node, data: any) => void }[]
  >;
  _statesMap?: Map<string, any>;
  state?: { [key: string]: any };
}
