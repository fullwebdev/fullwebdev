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
}

export interface RoutesConfig {
  [key: string]: ProjectRoutesConfig;
}
