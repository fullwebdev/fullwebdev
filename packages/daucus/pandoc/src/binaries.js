import * as path from "path";
import { esmDirName } from "./utils.js";

const BINARIES_DIR = path.resolve(esmDirName(import.meta), "..", "_pandoc_");

/**
 * absolute path to Pandoc binary
 */
export const PANDOC_BIN = path.resolve(
  BINARIES_DIR,
  "bin",
  process.platform === "win32" ? "pandoc.exe" : "pandoc"
);

/**
 * absolute path to Pandoc filters
 */
export const FILTERS_DIR = path.resolve(BINARIES_DIR, "filters");

/**
 * absolute path to Pandoc filters
 */
export const FILTERS = {
  "standard-code": path.resolve(BINARIES_DIR, "filters", "standard-code.lua"),
};
