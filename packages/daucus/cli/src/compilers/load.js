import snarkdown from "snarkdown";

/**
 * @type {import('./compiler').FunctionCompiler}
 */
function snarkdownCompiler(source) {
  return snarkdown(source);
}

/**
 * TODO: remplace by a generic plugin system
 */

/**
 *
 * @param {import('./compiler').CompilerId | undefined} name
 *
 * @returns {Promise<import('./compiler').FunctionCompiler>}
 */
export async function loadCompiler(name) {
  if (name === "snarkdown") {
    return snarkdownCompiler;
  }

  try {
    // @ts-ignore pandoc is an optionnal dependency
    // eslint-disable-next-line import/no-extraneous-dependencies
    const { md2html } = await import("@daucus/pandoc");

    return md2html;
  } catch (e) {
    if (name === "pandoc") {
      throw new Error("can't find the @daucus/pandoc package");
    }
    console.warn(
      "can't find @daucus/pandoc package - falling back to snarkdown"
    );
    return snarkdownCompiler;
  }
}
