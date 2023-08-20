import { OptionDefinition } from "command-line-args";
import { WorkSpace } from "../config/WorkSpace";

export interface CommandOption extends OptionDefinition {
  description: string;
}

export interface Command<T> {
  workspace: WorkSpace;

  run(params?: T): Promise<unknown>;
}

export type CommandConstructor<T> = {
  new (workspace: WorkSpace): Command<T>;
  help: string;
  options: CommandOption[];
  synopsis: string;
  description?: string;
};
