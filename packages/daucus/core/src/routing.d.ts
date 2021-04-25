import { LanguageCodeOrDefault } from "./language-code";

/**
 * Route for a generated HTML Template
 */
export interface Route {
  /**
   * Id of the route (from the source file name)
   */
  id?: string;
  /**
   * String used to order routes
   */
  position: string;
  /**
   * URL to use when importing the HTML template associated to the route
   */
  templateUrl: string;
  /**
   * Navigation path of the route
   */
  path: string;
  /**
   * Main title
   */
  title: string;
}

/**
 * Route for a generated HTML template, including its child routes
 */
export interface RouteWithChildren extends Partial<Route> {
  /**
   * Nested routes
   */
  children?: {
    [key: string]: RouteWithChildren;
  };
}

/**
 * Generated routes configuration for a Daucus project
 */
export interface ProjectRoutesConfig extends RouteWithChildren {
  menu?: string;
}

/**
 * Generated routes configuration for a Daucus project with internationalisation
 */
export type I18NProjectRoutesConfig = {
  [key in LanguageCodeOrDefault]?: ProjectRoutesConfig;
};

/**
 * Generated routes configuration for an entire Daucus workspace without internationalisation
 */
export interface SimpleRoutesConfig {
  [key: string]: ProjectRoutesConfig;
}

/**
 * Generated routes configuration for an entire Daucus workspace with internationalisation
 */
export interface I18NRoutesConfig {
  [key: string]: I18NProjectRoutesConfig;
}

/**
 * Generated routes configuration for an entire Daucus workspace
 */
export type RoutesConfig = SimpleRoutesConfig | I18NRoutesConfig;
