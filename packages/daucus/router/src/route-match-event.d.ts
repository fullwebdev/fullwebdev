import { Route } from "./RoutesConfig";

export interface RouteMatchEventDetail {
  projectName: string;
  route: Partial<Route>;
  templateHRef: string;
}
export interface RouteMatchEvent extends CustomEvent {
  detail: RouteMatchEventDetail;
}
