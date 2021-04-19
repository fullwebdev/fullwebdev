import { LanguageCodeOrDefault } from "../compilers/language-code";

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

export type I18NProjectRoutesConfig = {
  [key in LanguageCodeOrDefault]?: ProjectRoutesConfig;
};

export interface SimpleRoutesConfig {
  [key: string]: ProjectRoutesConfig;
}

export interface I18NRoutesConfig {
  [key: string]: I18NProjectRoutesConfig;
}

export type RoutesConfig = SimpleRoutesConfig | I18NRoutesConfig;
