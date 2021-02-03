/**
 * inspired by angular devkit
 *
 * from Google Inc. under the MIT-style license that can be found in the LICENSE
 * file at https://angular.io/license
 *
 * see https://github.com/angular/angular-cli/blob/master/packages/angular_devkit/core/src/virtual-fs/path.ts
 */

export class InvalidPathException extends Error {
  /**
   * @param {string} path
   */
  constructor(path) {
    super(`Path ${path} is invalid.`);
  }
}
export class PathMustBeAbsoluteException extends Error {
  /**
   * @param {string} path
   */
  constructor(path) {
    super(`Path ${path} must be absolute.`);
  }
}
export class PathMustBeRelativeException extends Error {
  /**
   * @param {string} path
   */
  constructor(path) {
    super(`Path ${path} must be relative.`);
  }
}

const prefixRegexStr = "[0-9][a-z0-9]*-";
const prefixInNameRegex = new RegExp(`^([0-9][0-9a-z]*)-(.*)`);

export class VPath {
  /**
   *
   * @param {string} [platform]
   */
  constructor(platform) {
    this.sep = platform?.startsWith("win32") ? "\\" : "/";
    this._prefixInPathRegex = new RegExp(
      `(^${prefixRegexStr})|((?<=\\${this.sep})(${prefixRegexStr}))`,
      "g"
    );
  }

  /**
   *
   * @param {string} path
   */
  dirname(path) {
    const index = path.lastIndexOf(this.sep);
    if (index === -1) {
      return "";
    }

    const endIndex = index === 0 ? 1 : index;

    return path.substr(0, endIndex);
  }

  /**
   *
   * @param {string} path
   */
  basename(path) {
    const i = path.lastIndexOf(this.sep);
    if (i == -1) {
      return path;
    } else {
      return path.substr(path.lastIndexOf(this.sep) + 1);
    }
  }

  /**
   *
   * @param {string} path
   */
  extname(path) {
    const base = this.basename(path);
    const i = base.lastIndexOf(".");
    if (i < 1) {
      return "";
    } else {
      return base.substr(i);
    }
  }

  /**
   *
   * @param {string} path
   */
  split(path) {
    const fragments = path.split(this.sep);
    if (fragments[fragments.length - 1].length === 0) {
      fragments.pop();
    }

    return fragments;
  }

  /**
   *
   * @param {string} p1
   * @param  {...string} others
   */
  join(p1, ...others) {
    if (others.length > 0) {
      return this.normalize((p1 ? p1 + this.sep : "") + others.join(this.sep));
    } else {
      return p1;
    }
  }

  /**
   *
   * @param {string} path
   */
  normalize(path) {
    if (path == "" || path == ".") {
      return "";
    } else if (path == this.sep) {
      return this.sep;
    }

    // Match absolute windows path.
    const original = path;

    // Will also convert Windows paths if posix
    const p = path.split(/[\/\\]/g);
    let relative = false;
    let i = 1;

    // Special case the first one.
    if (p[0] != "") {
      p.unshift(".");
      relative = true;
    }

    while (i < p.length) {
      if (p[i] == ".") {
        p.splice(i, 1);
      } else if (p[i] == "..") {
        if (i < 2 && !relative) {
          throw new InvalidPathException(original);
        } else if (i >= 2 && p[i - 1] != "..") {
          p.splice(i - 1, 2);
          i--;
        } else {
          i++;
        }
      } else if (p[i] == "") {
        p.splice(i, 1);
      } else {
        i++;
      }
    }

    if (p.length == 1) {
      return p[0] == "" ? this.sep : "";
    } else {
      if (p[0] == ".") {
        p.shift();
      }

      return p.join(this.sep);
    }
  }

  /**
   *
   * @param {string} path
   */
  removePrefixes(path) {
    return path ? path.replace(this._prefixInPathRegex, "") : "";
  }

  /**
   * @param {string} str
   */
  splitPrefix(str) {
    const match = prefixInNameRegex.exec(str);
    if (match && match.length > 1) {
      return match.slice(1);
    }
  }

  /**
   *
   * @param {string} path
   */
  parse(path) {
    /** @type {{dir: string, ext: string, base: string, name: string}} */
    let parsed = {};
    const i = path.lastIndexOf(this.sep);
    if (i == -1) {
      parsed.base = path;
      parsed.dir = "";
    } else {
      parsed.base = path.substr(path.lastIndexOf(this.sep) + 1);
      parsed.dir = path.substr(0, path.lastIndexOf(this.sep));
    }
    parsed.ext = parsed.base.substr(parsed.base.lastIndexOf("."));
    parsed.name = parsed.base.substr(0, parsed.base.lastIndexOf("."));

    return parsed;
  }
}

export const sysVPath = new VPath(process.platform);
export const posixVPath = new VPath();
