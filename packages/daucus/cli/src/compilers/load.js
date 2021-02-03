import snarkdown from "snarkdown";

/**
 * TODO: remplace by a generic plugin system
 */

/**
 * @typedef {import('./compiler').FunctionCompiler} FunctionCompiler
 */

/**
 *
 * @param {import('./compiler').CompilerId | undefined} name
 *
 * @returns {Promise<FunctionCompiler>}
 */
export async function loadCompiler(name) {
  if (name === "snarkdown") {
    return snarkdown;
  }

  try {
    // @ts-ignore for build
    const { md2html } = await import("@daucus/pandoc");
    return md2html;
  } catch (e) {
    if (name === "pandoc") {
      throw new Error("can't find the @daucus/pandoc package");
    }
    console.warn(
      "can't find @daucus/pandoc package - falling back to snarkdown"
    );
    return snarkdown;
  }
}
