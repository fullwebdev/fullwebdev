/* eslint-disable import/no-cycle */

import { BuildCommand } from "./build.js";
import { HelpCommand } from "./help.js";
import { WatchCommand } from "./watch.js";

/**
 * @template T
 * @typedef {import('./AbstractCommand.js').CommandConstructor<T>} CommandConstructor
 */

/**
 * @type Record<string, CommandConstructor<any>>
 */
export const commands = {
  build: BuildCommand,
  help: HelpCommand,
  watch: WatchCommand,
};
