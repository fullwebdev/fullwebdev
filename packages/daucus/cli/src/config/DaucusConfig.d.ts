import { Options as HTMLMinifierOptions } from "html-minifier";
import { Compiler } from "../compilers/compiler";

export interface ProjectConfig {
  src: string;
  root: string;
  compiler?: Compiler;
}

export interface DaucusConfig {
  // TODO: docs
  output: string;
  defaultCompiler?: Compiler;
  projects: { [key: string]: ProjectConfig };
  htmlMinifierOptions: HTMLMinifierOptions;
}