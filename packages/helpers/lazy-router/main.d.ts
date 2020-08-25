export interface RouterConfig {
  /**
   * force "hash routing" if true
   *
   * @default false
   */
  hashMode: boolean;
  /**
   * id of the element in which routes will be rendered
   *
   * @default "router-outlet"
   */
  containderId: string;
  /**
   * call a new navigation everytime an HTMLLinkElement pointing to a potential routed path is clicked
   *
   * @default true
   */
  emulateLinkHref: boolean;
}

export interface Route {
  path: RegExp;
  component: string;
}

export type Routes = Route[];

export type NavigationCallback<T> = (
  path?: string,
  rediction?: boolean,
  update?: boolean
) => T;
export type PathUpdated = (path: string, event: Event | null) => void;

export interface AsyncPage<T> {
  fetchData(routeMatch: RegExpExecArray): Promise<T>;
  default(config: { data: T | null; routeParams: RegExpExecArray }): unknown;
}

export interface SyncPage {
  default: ({ routeParams: RegExpExecArray }) => unknown;
}

export type Page = SyncPage | AsyncPage<any>;

export interface Renderer {
  (result: unknown, container: Element): void;
}

export interface SetUpCallbacks {
  routeNotFound: NavigationCallback<string>;
  importFailed: (
    url?: string,
    path?: string,
    rediction?: boolean,
    update?: boolean
  ) => Promise<{ page: Page | null; newPath?: string }>;
  templateCallFailed: NavigationCallback<unknown>;
  afterNavigation: (
    path?: string,
    rediction?: boolean,
    update?: boolean,
    routeContainer?: Element
  ) => void;
  pathUpdated: PathUpdated;
  templateParams: NavigationCallback<{ [key: string]: any }>;
}

export interface navigateFn {
  (path: string, redirection?: boolean, update?: boolean): Promise<void>;
}

export * from "./index";
