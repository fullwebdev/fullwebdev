import commandLineArgs from "command-line-args";
import { commandsMap } from "../commands/index.js";
import { findWorkspace } from "../config/workspace.js";

export class DaucusCLI {
  static options = [
    { name: "command", defaultOption: true, defaultValue: "help" },
  ];

  /**
   * @param {string[]} argv
   * @param {{ cwd: string }} [options]
   */
  constructor(argv, { cwd } = {}) {
    const mainOptions = commandLineArgs(DaucusCLI.options, {
      stopAtFirstUnknown: true,
      argv,
    });

    let cmdName = mainOptions.command;
    const cmdArgs = mainOptions._unknown || [];

    if (!commandsMap.has(cmdName)) {
      cmdName = "help";
    }

    this.workspace = findWorkspace(cwd);

    const Command = commandsMap.get(cmdName);
    this.cmdParams = commandLineArgs(Command.options, { argv: cmdArgs });

    this.command = new Command(this.workspace);
  }

  async run() {
    return this.command.run(this.cmdParams);
  }
}
