export interface RouteMatchEvent extends CustomEvent {
  detail: {
    projectName: string;
    // FIXME
    route: any;
    templateHRef: string;
  };
}
