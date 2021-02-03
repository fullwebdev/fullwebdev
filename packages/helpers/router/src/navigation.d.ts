export type PathUpdated = (path: string, event: Event | null) => void;

export interface NavigationOptions {
  state?: any;
  redirection?: boolean;
  skipLocationChange?: boolean;
  event?: Event | null;
}

export type NavigationListener = (
  path: string,
  options: NavigationOptions
) =>
  | Promise<[string, NavigationOptions | undefined] | undefined>
  | [string, NavigationOptions | undefined]
  | undefined;
