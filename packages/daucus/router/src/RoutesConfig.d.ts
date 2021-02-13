// FIXME: dedupe with CLI

export interface Route {
  id?: string;
  position: string;
  templateUrl: string;
  path: string;
  title: string;
}

export interface ProjectRoutesConfig extends Partial<Route> {
  children?: {
    [key: string]: Partial<Route>;
  };
  menu?: string;
}

export type I18NProjectRoutesConfig = Record<string, ProjectRoutesConfig>;

export interface RoutesConfig {
  [key: string]: ProjectRoutesConfig;
}

export interface I18NRoutesConfig {
  [key: string]: I18NProjectRoutesConfig;
}
