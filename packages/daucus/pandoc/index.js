import { Readable } from "stream";
import { spawn } from "child_process";
import * as path from "path";
import { fileURLToPath } from "url";
import { statSync, readdirSync } from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * absolute path to Pandoc binary
 * FIXME: only suport linux-amd64 for now
 */
export function pandocBinPath() {
  return path.resolve(__dirname, "_pandoc_", "bin", "linux-amd64", "pandoc");
}

/**
 * run a pandoc command
 *
 * @param {string[]} args command line arguments (for spawn)
 * @param {string} [cwd] command working directory
 * @param {string} [src] content to send to the standard input of the pandoc command
 *
 * @returns {Promise<{output: string; errors: string;}>}
 */
export function run(args, cwd, src) {
  const pandocProcess = spawn(pandocBinPath(), args, cwd ? { cwd } : {});

  let output = "";
  let errors = "";

  pandocProcess.stdout.setEncoding("utf8");
  pandocProcess.stdout.on("data", (data) => {
    output += data;
  });

  pandocProcess.stderr.setEncoding("utf8");
  pandocProcess.stderr.on("data", (data) => {
    errors += data;
  });

  if (src) {
    const srcStream = Readable.from([src]);

    srcStream.pipe(pandocProcess.stdin);
  }

  return new Promise((resolve, reject) => {
    pandocProcess.on("close", (code) => {
      if (code === 0) {
        resolve(output);
      } else {
        const err = new Error(`child exited with code ${code}`);
        err.code = code;
        err.errors = errors;
        err.output = output;
        reject(err);
      }
    });
  });
}

/**
 * convert some content using pandoc
 *
 * @param {import('../../types/pandoc').PandocInputFormat} from source format
 * @param {import('../../types/pandoc').PandocOutputFormat} to output format
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
 * @param {String} [root] working directory
 * @param {Array<String>} [filters] additionnal python filters
 * @param {Array<String>} [luaFilters] additionnal lua filters
 * @param {Array<String>} [opts] additionnal options (long format w/o "--")
 */
export function md2html(md, root, filters = [], luaFilters = [], opts = []) {
  return convert(
    "markdown+emoji",
    "html",
    md,
    root,
    // TODO : don't rely on a global dependency & check if python is available
    ["pandoc-import-code", ...filters],
    [
      path.resolve(__dirname, "_pandoc_", "filters", "standard-code.lua"),
      ...luaFilters,
    ],
    ["no-highlight", ...opts]
  );
}
