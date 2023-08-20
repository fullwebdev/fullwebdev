/** @typedef {import('@daucus/core').RoutesConfig} RoutesConfig */
/** @typedef {import('@daucus/core').ProjectRoutesConfig} ProjectRoutesConfig */

import { sortRoutesChildEntriesByPosition } from "./sort.js";

/**
 * @param {ProjectRoutesConfig} routes
 * @param {string} projectName
 * @param {boolean} [reverse]
 *
 * @returns {string} HTML template
 */
export function menuTemplate(routes, projectName, reverse) {
  /**
   *
   * @param {ProjectRoutesConfig} route
   * @param {number} depth
   * @param {string} routeName
   *
   * @returns {string}
   */
  function menu(route, depth, routeName) {
    /** @type {[string, import('@daucus/core').RouteWithChildren][]} */
    let sortedChildren = [];
    if (route.children) {
      sortedChildren = Object.entries(route.children).sort(
        sortRoutesChildEntriesByPosition
      );
      if (reverse) {
        sortedChildren.reverse();
      }
    }

    return `
      <div class="${depth === 0 ? "menu-title" : ""} section-title">
        ${
          route.title && route.path !== undefined
            ? `<a href="/${projectName}/${route.path}">${route.title}</a>`
            : `<button role="button" aria-label="${route.title || routeName}">${
                route.title || routeName
              }</button>`
        }
      </div>
      ${
        route.children && depth < 4
          ? `
            <ul class="${
              (depth > 0 ? "child-menu" : "menu") +
              (route.path === undefined ? " collapsible" : "")
            }">
              ${sortedChildren
                .map(
                  ([childRouteName, childRoute]) =>
                    `<li>
                      ${menu(childRoute, depth + 1, childRouteName)}
                    </li>`
                )
                .join("")}
            </ul>
          `
          : ""
      }
    `;
  }

  return menu(routes, 0, projectName);
}
