export type PathUpdated = (path: string, event: Event | null) => void;

export interface NavigationOptions {
  state?: any;
  redirection?: boolean;
  skipLocationChange?: boolean;
  event?: Event;
}

export type NavigationListener = (
  path: string,
  options?: NavigationOptions
) => [string, NavigationOptions] | null;
