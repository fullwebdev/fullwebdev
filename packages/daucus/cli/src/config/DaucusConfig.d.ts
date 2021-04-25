import { Options as HTMLMinifierOptions } from "html-minifier";
import { Compiler } from "../compilers/compiler";

/**
 * Project configuration.
 */
export interface ProjectConfig {
  /**
   * Glob pattern matching the source files.
   */
  src: string;

  /**
   * Glob patterns to exclude matches.
   *
   * @default ["**\/node_modules\/**"]
   *
   */
  exclude?: string[];

  /**
   * The root of the source files.
   */
  root: string;

  /**
   * Specify which converter to use.
   * See the defaultCompiler global option for more details.
   */
  compiler?: Compiler;

  /**
   * Options passed to the compiler.
   */
  compilerOptions?: Record<string, any>;

  /**
   * Use file name as menu title instead of first h1
   */
  usePathAsTitle?: boolean;
}

/**
 * Computed workspace configuration.
 */
export interface WorkspaceConfig {
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
   * Options passed to the compiler by default.
   */
  defaultCompilerOptions?: Record<string, any>;

  /**
   * Daucus projects config
   * @default { docs: { src: "**\/*.md", root: "docs" } }
   */
  projects: Record<string, ProjectConfig>;

  /**
   * custom html-minifier options
   *
   * @see {@link https://www.npmjs.com/package/html-minifier#options-quick-reference|html-minifier - Options Quick Reference}
   */
  htmlMinifierOptions: HTMLMinifierOptions;
}

/**
 * Daucus workspace configuration as defined in a JSON or JS configuration file.
 */
export type DaucusJSConfig = Partial<WorkspaceConfig>;
