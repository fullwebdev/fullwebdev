import snarkdown from "snarkdown";

/**
 * TODO: remplace by a generic plugin system
 */

/**
 *
 * @param {*} name
 */
export async function loadCompiler(name) {
  if (name === "snarkdown") {
    return snarkdown;
  }

  try {
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
