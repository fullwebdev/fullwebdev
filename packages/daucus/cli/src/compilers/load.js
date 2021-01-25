import snarkdown from "snarkdown";

/**
 * TODO: remplace by a generic plugin system
 */

export async function loadCompiler(name) {
  if (name === "snarkdown") {
    return snarkdown;
  }

  try {
    const { md2html } = await import("@daucus/pandoc");
    return md2html;
  } catch (e) {
    // console.warn(
    //   "can't find @daucus/pandoc package - falling back to snarkdown"
    // );
    // return snarkdown;
    throw new Error("no @daucus/pandoc package");
  }
}
