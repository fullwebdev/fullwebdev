/**
 * @typedef {{command?: string}} HelpCommandOptions
 * @typedef {import('./AbstractCommand').Command<HelpCommandOptions>} HelpCommandInterface
 * @typedef {import('./AbstractCommand').CommandConstructor<HelpCommandOptions>} HelpCommandConstructor
 * @typedef {import('../config/WorkSpace').WorkSpace} WorkSpace
 */

import chalk from "chalk";
// eslint-disable-next-line import/no-cycle, import/named
import { commands } from "./index.js";

const header = (/** @type {string} */ str) =>
  chalk.underline.bold(`\n${str}\n`);
const line = (/** @type {string} */ str) => `  ${str}`;
const synopsis = (/** @type {string} */ str) =>
  line(`$ ${chalk.italic(`${str}`)}`);

/**
 * @implements HelpCommandInterface
 * @type HelpCommandConstructor
 */
export class HelpCommand {
  static help = "display help information about Daucus";

  static synopsis = "[command]";

  static options = [
    {
      name: "command",
      type: String,
      defaultOption: true,
      description:
        "specific command name for details (print a list of available commands by default)",
    },
  ];

  /**
   * @param {WorkSpace} workspace
   */
  constructor(workspace) {
    this.workspace = workspace;
  }

  /**
   * @param {HelpCommandOptions} [params] command parameters
   */
  // eslint-disable-next-line class-methods-use-this
  async run(params = {}) {
    if (!params.command) {
      console.log(header("Daucus"));
      console.log(line("Universal static stuff generator"));
      console.log(header("Synopsis"));
      console.log(synopsis("daucus command [<args>]"));
      console.log(header("Commands"));
      for (const [name, cmd] of Object.entries(commands)) {
        console.log(line(`${name}\t\t${cmd.help}`));
      }
      console.log();
      console.log(
        "See 'git help <command>' to read about a specific subcommand"
      );
    } else if (commands[params.command]) {
      const cmd = commands[params.command];
      console.log(header(`Daucus-${params.command}`));
      console.log(line(cmd.help));
      console.log(header("Synopsis"));
      console.log(synopsis(`daucus ${params.command} ${cmd.synopsis}`));
      console.log(header("Options"));
      for (const opt of cmd.options) {
        let name = "";
        if (opt.alias) {
          name = `-${opt.alias}, `;
        }
        name = chalk.bold(`${name}${opt.defaultOption ? "" : "--"}${opt.name}`);
        let value = "";
        if (!opt.defaultOption && opt.type !== Boolean) {
          value = ` ${chalk.underline(opt.name)}`;
        }
        console.log(line(`${name}${value}\t${opt.description}`));
      }
    }
  }
}
