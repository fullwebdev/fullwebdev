import { Options as HTMLMinifierOptions } from "html-minifier";
import { Compiler } from "../compilers/compiler";

export interface ProjectConfig {
  /**
   * Globby glob pattern matching the source files.
   */
  src: string;

  /**
   * The root of the source files.
   */
  root: string;

  /**
   * Specify which converter to use.
   * See the defaultCompiler global option for more details.
   */
  compiler?: Compiler;
}

export interface DaucusConfig {
  /**
   * The root of the generated files
   * @default "_daucus_"
   */
  output: string;

  /**
   * Enable internationalization.
   * @default false
   */
  i18n: boolean;

  /**
   * Default converter used for every project.
   * By default, 'pandoc' will be used if @daucus/pandoc was installed, or 'snarkdown' if it wasn't.
   */
  defaultCompiler?: Compiler;

  /**
   * Daucus projects config
   * @default { docs: { src: "**\/*.md", root: "docs" } }
   */
  projects: Record<string, ProjectConfig>;

  /**
   * custom html-minifier options
   * @see https://www.npmjs.com/package/html-minifier#options-quick-reference
   */
  htmlMinifierOptions: HTMLMinifierOptions;
}
