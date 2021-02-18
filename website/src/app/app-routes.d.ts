import { Language } from "./languages";

export type ComponentProp =
  | string
  | number
  | boolean
  | Array<unknown>
  | Record<string, unknown>;

export type ComponentProps = Record<string, ComponentProp>;

export interface AppRoute {
  template?: (lang: Language) => Node;
  templateName?: string;
  componentURL?: string;
  wordings?: string;
  props?: ComponentProps;
}

export type AppRoutes = Record<string, AppRoute>;
