/* eslint-disable class-methods-use-this, eqeqeq, max-classes-per-file */

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

/**
 * Virtual Path
 *
 * inspired by angular devkit
 *
 * from Google Inc. under the MIT-style license that can be found in the LICENSE
 * file at https://angular.io/license
 *
 * see https://github.com/angular/angular-cli/blob/master/packages/angular_devkit/core/src/virtual-fs/path.ts
 */
export class VPath {
  /**
   *
   * @param {NodeJS.Platform} [platform] the "\\" separator will be used only if the platform equals "win32"
   */
  constructor(platform) {
    this.sep = platform?.startsWith("win32") ? "\\" : "/";
    /** @private */
    this._prefixInPathRegex = new RegExp(
      `(^${prefixRegexStr})|((?<=\\${this.sep})(${prefixRegexStr}))`,
      "g"
    );
  }

  /**
   * Return the directory name of a path. Similar to the Unix dirname command.
   *
   * @param {string} path the path to evaluate.
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
   * Return the last portion of a path. Similar to the Unix basename command.
   * Often used to extract the file name from a fully qualified path.
   *
   * @param {string} path the path to evaluate.
   */
  basename(path) {
    const i = path.lastIndexOf(this.sep);
    if (i == -1) {
      return path;
    }
    return path.substr(path.lastIndexOf(this.sep) + 1);
  }

  /**
   * Return the extension of the path, from the last '.' to end of string in the last portion of the path.
   * If there is no '.' in the last portion of the path or the first character of it is '.', then it returns an empty string
   *
   * @param {string} path the path to evaluate.
   */
  extname(path) {
    const base = this.basename(path);
    const i = base.lastIndexOf(".");
    if (i < 1) {
      return "";
    }
    return base.substr(i);
  }

  /**
   * Split a path into substrings using the vpath separator and return them as an array.
   *
   * @param {string} path the path to evaluate.
   */
  split(path) {
    const fragments = path.split(this.sep);
    if (fragments[fragments.length - 1].length === 0) {
      fragments.pop();
    }

    return fragments;
  }

  /**
   * Adds all the elements of an array into a normalized path.
   *
   * @param {string} p1
   * @param  {...string} others
   */
  join(p1, ...others) {
    if (others.length > 0) {
      return this.normalize((p1 ? p1 + this.sep : "") + others.join(this.sep));
    }
    return p1;
  }

  /**
   * Normalize a string path, reducing '..' and '.' parts.
   * When multiple slashes are found, they're replaced by a single one; when the path contains a trailing slash, it is preserved.
   * Windows path are converted to posix according to the vpath configuration.
   *
   * @param {string} path string path to normalize.
   */
  normalize(path) {
    if (path == "" || path == ".") {
      return "";
    }
    if (path == this.sep) {
      return this.sep;
    }

    const original = path;

    // convert Windows
    const p = path.split(/[/\\]/g);
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
          i -= 1;
        } else {
          i += 1;
        }
      } else if (p[i] == "") {
        p.splice(i, 1);
      } else {
        i += 1;
      }
    }

    if (p.length == 1) {
      return p[0] == "" ? this.sep : "";
    }
    if (p[0] == ".") {
      p.shift();
    }

    return p.join(this.sep);
  }

  /**
   * Remove [0-9][a-z0-9]*- prefixes from every part of a path
   *
   * @param {string} path the path to evaluate.
   */
  removePrefixes(path) {
    return path ? path.replace(this._prefixInPathRegex, "") : "";
  }

  /**
   * Separate prefix from the rest of a filename
   *
   * @param {string} str the filename to evaluate.
   */
  splitPrefix(str) {
    const match = prefixInNameRegex.exec(str);
    if (match && match.length > 1) {
      return match.slice(1);
    }
    return ["", str];
  }

  /**
   * Returns an object from a path string - the opposite of format().
   *
   * @param {string} path the path to evaluate.
   */
  parse(path) {
    /** @type {{dir: string, ext: string, base: string, name: string}} */
    const parsed = {};
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
