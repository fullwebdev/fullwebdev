export interface ElOptions extends ElementCreationOptions {
  attributes?: Array<[string, string]>;
  className?: string;
}

export type ElDescriptor = [
  string,
  ElOptions,
  ElDescriptor[]?
] | { partKey: string };

export interface FwdElement extends HTMLElement {
  parts?: { [key:string] : string }
  _childParts?: Map<string, Node>
}
