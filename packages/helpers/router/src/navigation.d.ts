export type PathUpdated = (path: string, event: Event | null) => void;

/**
 * Options used during a navigation
 *
 */
export interface NavigationOptions {
  /**
   * History state object.
   */
  state?: any;
  /**
   * Replace the history state.
   */
  redirection?: boolean;
  /**
   * Don't push any new history state.
   */
  skipLocationChange?: boolean;
  /**
   * Event which triggered the navigation.
   */
  event?: Event | null;
}

export interface NavigationEventDetail {
  path: string | null;
  options: NavigationOptions;
}

export interface RedirectionEventDetail {
  oldValue: NavigationEventDetail;
  newValue: NavigationEventDetail;
}
