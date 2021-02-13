export type ComponentProp =
  | string
  | number
  | boolean
  | Array<unknown>
  | Record<string, unknown>;

export type ComponentProps = Record<string, ComponentProp>;

export interface StaticRoute {
  template?: () => Node;
  templateName?: string;
  componentURL?: string;
  wordingsURL?: string;
  props?: ComponentProps;
  iframeSrc?: string;
}

type Functions<T> = {
  [P in keyof T]: (...params: any[]) => T[P];
};

export type RegExpRoute = Functions<StaticRoute>;

export interface AppRoutes {
  static: Record<string, StaticRoute>;
  match: Array<[RegExp, RegExpRoute]>;
}
