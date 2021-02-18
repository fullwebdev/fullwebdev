// FIXME: dedupe with CLI

export interface Route {
  id?: string;
  position: string;
  templateUrl: string;
  path: string;
  title: string;
}

export interface RouteWithChildren extends Partial<Route> {
  children?: {
    [key: string]: RouteWithChildren;
  };
}

export interface ProjectRoutesConfig extends RouteWithChildren {
  menu?: string;
}

export type I18NProjectRoutesConfig = Record<string, ProjectRoutesConfig>;

export interface RoutesConfig {
  [key: string]: ProjectRoutesConfig;
}

export interface I18NRoutesConfig {
  [key: string]: I18NProjectRoutesConfig;
}
