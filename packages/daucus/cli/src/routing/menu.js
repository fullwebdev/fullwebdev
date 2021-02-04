/** @typedef {import('./Route').RoutesConfig} RoutesConfig */
/** @typedef {import('./Route').ProjectRoutesConfig} ProjectRoutesConfig */

import { sortRoutesChildEntriesByPosition } from "./sort.js";

/**
 *
 * @param {ProjectRoutesConfig} routes
 * @param {string} projectName
 *
 * @returns {string} HTML template
 */
export function menuTemplate(routes, projectName) {
  /**
   *
   * @param {ProjectRoutesConfig} route
   * @param {number} depth
   * @param {string} routeName
   *
   * @returns {string}
   */
  function menu(route, depth, routeName) {
    return `
      <div class="${depth === 0 ? "menu-title" : ""} section-title">
        ${
          route.title && route.path !== undefined
            ? `<a href="/${projectName}/${route.path}">${route.title}</a>`
            : route.title || routeName
        }
      </div>
      ${
        route.children && depth < 3
          ? `
            <ul class=${depth > 0 ? "child-menu" : "menu"}>
              ${Object.entries(route.children)
                .sort(sortRoutesChildEntriesByPosition)
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
