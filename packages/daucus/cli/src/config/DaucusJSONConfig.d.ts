import { CompilerId } from "../compilers/compiler";
import { WorkspaceConfig, ProjectConfig } from "./DaucusConfig";

type GenericOptionsObj = {
  [key: string]: boolean | string | string[] | number | GenericOptionsObj;
};

interface ProjectJSONConfig extends ProjectConfig {
  /**
   * Specify which converter to use.
   */
  compiler?: CompilerId;

  /**
   * Options passed to the compiler.
   */
  compilerOptions?: GenericOptionsObj;
}

export interface DaucusJSONConfig extends Partial<WorkspaceConfig> {
  /**
   * Default converter used for every project.
   *
   * By default, 'pandoc' will be used if @daucus/pandoc was installed, or 'snarkdown' if it wasn't.
   */
  defaultCompiler?: CompilerId;

  /**
   * Options passed to the compiler by default.
   */
  defaultCompilerOptions?: GenericOptionsObj;

  /**
   * Custom html-minifier options.
   *
   * @see {@link https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/html-minifier/index.d.ts|@types/html-minifier}
   */
  htmlMinifierOptions?: GenericOptionsObj;

  /**
   * Daucus projects config
   *
   * @default { "docs": { "src": "**\u002F*.md", "root": "docs" } }
   *
   * @see {@link https://github.com/YousefED/typescript-json-schema/issues/337|typescript-json-schema - Issue 337 - first class TS advances types stringified instead of expanded }
   */
  projects?: { [key: string]: ProjectJSONConfig };
}
