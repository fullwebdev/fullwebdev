/** @typedef {import('@daucus/core').ProjectRoutesConfig} ProjectRoutesConfig */
/** @typedef {import('@daucus/core').Route} Route */

import HTMLMin from "html-minifier";
import { menuTemplate } from "./menu.js";

export class ProjectRoutesConfigBuilder {
  /**
   * @param {string} projectName
   */
  constructor(projectName) {
    /**
     * @type {ProjectRoutesConfig}
     * @private
     */
    this._projectRoutesConfig = { children: {} };
    /** @private */
    this._isComplete = false;
    /** @private */
    this._projectName = projectName;
  }

  get config() {
    if (!this.isComplete) {
      throw new Error(
        `ProjectRoutesConfig unavailable as the builder still need some informations`
      );
    }
    return this._projectRoutesConfig;
  }

  get isComplete() {
    return this._isComplete;
  }

  /**
   *
   * @param {string | null} key
   * @param {Route} route
   */
  push(key, route) {
    if (this.isComplete) {
      throw new Error(`can't add more information to this completed builder`);
    }
    const routeParents = route.path.split("/").filter((p) => p);
    if (key) {
      routeParents.pop();
    }

    let acc = this._projectRoutesConfig;
    routeParents.forEach((elmt) => {
      if (!acc.children) {
        acc.children = {};
      }
      if (!acc.children[elmt]) {
        acc.children[elmt] = {};
      }
      acc = acc.children[elmt];
    });

    if (key) {
      if (!acc.children) {
        acc.children = {};
      }
      acc.children[key] = route;
    } else {
      Object.assign(acc, route);
    }
  }

  /**
   * @param {HTMLMin.Options} htmlMinifierOptions
   */
  complete(htmlMinifierOptions) {
    this._projectRoutesConfig.menu = HTMLMin.minify(
      menuTemplate(this._projectRoutesConfig, this._projectName),
      htmlMinifierOptions
    );
    this._isComplete = true;
  }
}
