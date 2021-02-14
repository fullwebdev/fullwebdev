import { Route } from "./RoutesConfig";

export interface RouteMatch {
  projectName: string;
  route?: Partial<Route> | null;
}

export interface I18NRouteMatch extends RouteMatch {
  lang: string;
}

export type FindRouteFn = (path: string) => RouteMatch;
export type FindI18NRouteFn = (path: string, lang: string) => I18NRouteMatch;
