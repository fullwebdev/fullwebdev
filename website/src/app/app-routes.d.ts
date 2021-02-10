export type ComponentProp =
  | string
  | number
  | boolean
  | Array<unknown>
  | Record<string, unknown>;

export type ComponentProps = Record<string, ComponentProp>;

export interface AppRoute {
  template?: () => Node;
  templateName?: string;
  componentURL?: string;
  wordingsURL?: string;
  props?: ComponentProps;
}

export type AppRoutes = Record<string, AppRoute>;
