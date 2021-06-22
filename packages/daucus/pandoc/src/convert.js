import { run } from "./run.js";
import { FILTERS } from "./binaries.js";

/**
 * convert some content using pandoc
 *
 * @param {import('./io-formats').PandocInputFormat} from source format
 * @param {import('./io-formats').PandocOutputFormat} to output format
 * @param {string} content source content to convert
 * @param {string} [cwd] pandoc working directory
 * @param {Array<string>} [filters] name of filters
 * @param {Array<string>} [luaFilters] paths to lua filters
 * @param {Array<string>} [bibliographies] paths to bibliographic data files
 * @param {Record<string, string | boolean | number>} [opts] other options (long format w/o "--")
 */
export function convert(
  from,
  to,
  content,
  cwd,
  filters = [],
  luaFilters = [],
  bibliographies = [],
  opts = {}
) {
  return run(
    [
      `--from=${from}`,
      `--to=${to}`,
      ...filters.map((filter) => `--filter=${filter}`),
      // requires an absolute path to the filter
      ...luaFilters.map((filter) => `--lua-filter=${filter}`),
      ...bibliographies.map((bib) => `--bibliography=${bib}`),
      ...Object.entries(opts).map(([key, value]) => {
        const opt = `--${key}`;
        if (value === true) {
          return opt;
        }
        return `${opt}=${value}`;
      }),
    ],
    cwd,
    content
  );
}

/**
 * convert markdown to html
 *
 * @param {String} md markdown content
 * @param {import('./convertion-params.js').ConvertionParams} [params]
 */
export function md2html(md, params = {}) {
  const {
    root,
    filters = [],
    luaFilters = [],
    bibliographies,
    options = {},
  } = params;
  /**
   * @type {Record<string, boolean | string | number>}
   */
  const opts = {
    "no-highlight": true,
    ...options,
  };
  if (bibliographies && bibliographies.length > 0) {
    opts.citeproc = true;
  }
  return convert(
    // @ts-ignore TODO: add markdown extensions to definition
    "markdown+emoji",
    "html",
    md,
    root,
    filters,
    [FILTERS["standard-code"], ...luaFilters],
    bibliographies,
    opts
  );
}
