export interface ElOptions extends ElementCreationOptions {
  attributes?: Array<[string, string | boolean]>;
  className?: string;
}

export { el } from "./index.js";
