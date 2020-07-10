export interface ElOptions extends ElementCreationOptions {
  attributes?: Array<[string, string]>;
  className?: string;
}

export type ElDescriptor = [
  string,
  ElOptions,
  ElDescriptor[]?
];

export interface TemplateInstance extends HTMLElement {
  _partsCache?: Map<string, Node>
  parts?: { [key : string]: string }
}
