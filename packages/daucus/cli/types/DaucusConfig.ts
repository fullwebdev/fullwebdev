import { Options as HTMLMinifierOptions } from "html-minifier";

export interface ProjectConfig {
  src: string;
  root: string;
}

export interface DaucusConfig {
  //TODO: docs
  output: string;
  defaultCompiler: string;
  projects: { [key: string]: ProjectConfig };
  htmlMinifierOptions: HTMLMinifierOptions;
}
