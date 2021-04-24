import { LanguageCode } from "@daucus/core";
import { ProjectConfig } from "../config/DaucusConfig";

/**
 * Source document and the associated project data for a {@link FunctionCompiler}.
 */
interface CompilerParams {
  /**
   * Path to source file.
   */
  filePath: string;
  /**
   * Path to the root source directory used for compilation.
   */
  root: string;
  /**
   * Language code associated to the source file.
   */
  lang: LanguageCode | "";
  /**
   * Compiled project to which this file belongs.
   */
  project: {
    /**
     * Name of the project as defined in the workspace configuration.
     */
    name: string;
    /**
     * Computed configuration for this project.
     */
    config: ProjectConfig;
  };
}

/**
 * Function converting a document to another format.
 *
 * @returns Content converted to the target format (a Promise can be used if the conversion needs to perform some asynchonous operations).
 */
type FunctionCompiler = (
  /**
   * Content of the source file.
   */
  source: string,
  /**
   * Information about the source document and the associated project.
   */
  params: CompilerParams
) => Promise<string> | string;

/**
 * Compiler id used to load the associated {@link FunctionCompiler}
 */
type CompilerId = "snarkdown" | "pandoc";

/**
 * Document converter
 */
type Compiler = CompilerId | FunctionCompiler;

export { CompilerId, Compiler, FunctionCompiler, CompilerParams };
