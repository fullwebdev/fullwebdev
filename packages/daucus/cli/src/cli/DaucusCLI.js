import commandLineArgs from "command-line-args";
// eslint-disable-next-line import/named
import { commands } from "../commands/index.js";
import { findWorkspace } from "../config/workspace.js";

export class DaucusCLI {
  static options = [
    { name: "command", defaultOption: true, defaultValue: "help" },
  ];

  /**
   * @param {string[]} argv
   * @param {{ cwd?: string }} options
   */
  constructor(argv, { cwd } = {}) {
    const mainOptions = commandLineArgs(DaucusCLI.options, {
      stopAtFirstUnknown: true,
      argv,
    });

    let cmdName = mainOptions.command;
    const cmdArgs = mainOptions._unknown || [];

    if (!commands[cmdName]) {
      cmdName = "help";
    }

    this.workspace = findWorkspace(cwd);

    const Command = commands[cmdName];
    if (!Command) {
      throw new Error(`command not found`);
    }
    /** @type {any} */
    this.cmdParams = commandLineArgs(Command.options, { argv: cmdArgs });

    this.command = new Command(this.workspace);
  }

  async run() {
    try {
      await this.command.run(this.cmdParams);
    } catch (err) {
      console.error(err);
      process.exit(1);
    }
  }
}
