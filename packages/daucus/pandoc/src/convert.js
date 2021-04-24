import { run } from "./run.js";
import { FILTERS } from "./binaries.js";

/**
 * convert some content using pandoc
 *
 * @param {import('./io-formats').PandocInputFormat} from source format
 * @param {import('./io-formats').PandocOutputFormat} to output format
 * @param {String} content source content to convert
 * @param {String} [cwd] pandoc working directory
 * @param {Array<String>} [filters] name of filters
 * @param {Array<String>} [luaFilters] paths to lua filters
 * @param {Array<String>} [opts] other options (long format w/o "--")
 */
export function convert(
  from,
  to,
  content,
  cwd,
  filters = [],
  luaFilters = [],
  opts = []
) {
  return run(
    [
      `--from=${from}`,
      `--to=${to}`,
      ...filters.map((filter) => `--filter=${filter}`),
      // requires an absolute path to the filter
      ...luaFilters.map((filter) => `--lua-filter=${filter}`),
      ...opts.map((opt) => `--${opt}`),
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
  const { root, filters = [], luaFilters = [], options = [] } = params;
  return convert(
    // @ts-ignore TODO: add markdown extensions to definition
    "markdown+emoji",
    "html",
    md,
    root,
    filters,
    [FILTERS["standard-code"], ...luaFilters],
    ["no-highlight", ...options]
  );
}
