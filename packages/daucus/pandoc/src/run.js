import { Readable } from "stream";
import { spawn } from "child_process";
import { PANDOC_BIN } from "./binaries.js";

export class PandocRunError extends Error {
  /**
   * @param {string | undefined} message
   * @param {number | null} code
   */
  constructor(message, code) {
    super(message);
    this.code = code;
  }
}

/**
 * run a pandoc command
 *
 * @param {string[]} args command line arguments (for spawn)
 * @param {string} [cwd] command working directory
 * @param {string} [src] content to send to the standard input of the pandoc command
 *
 * @returns {Promise<string>}
 */
export function run(args, cwd, src) {
  const pandocProcess = spawn(PANDOC_BIN, args, cwd ? { cwd } : {});

  /** @type {string} */
  let output = "";
  /** @type {string} */
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
        const err = new PandocRunError(`[pandoc] ${errors}`, code);
        reject(err);
      }
    });
  });
}
