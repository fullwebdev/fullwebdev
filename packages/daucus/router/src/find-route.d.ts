import { Route, LanguageCodeOrDefault } from "@daucus/core";

export interface RouteMatch {
  projectName: string;
  route?: Partial<Route> | null;
}

export interface PositiveRouteMatch {
  projectName: string;
  route: Partial<Route>;
}

export interface I18NRouteMatch extends RouteMatch {
  lang: string;
}

/**
 * Match a path with a Daucus route
 */
export type FindRouteFn = (path: string | null) => RouteMatch;
/**
 * Match a path with a Daucus route (when the i18n option was set to true)
 */
export type FindI18NRouteFn = (
  path: string | null,
  lang: LanguageCodeOrDefault
) => I18NRouteMatch;
