export interface AppRoute {
  template?: () => Node;
  templateName?: string;
}

export interface AppRoutes {
  [key: string]: AppRoute;
}
