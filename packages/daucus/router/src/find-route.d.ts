import { Route } from "./RoutesConfig";

export type RouteMatch = [string, Partial<Route> | null] | [string];

export type FindRouteFn = (path: string) => RouteMatch;
export type FindI18NRouteFn = (path: string, lang: string) => RouteMatch;
