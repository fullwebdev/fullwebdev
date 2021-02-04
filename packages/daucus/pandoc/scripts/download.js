import * as fs from "fs";
import { resolve } from "path";
import download from "download";
import { esmDirName } from "../src/utils.js";

const asyncFs = fs.promises;

/**
 * released on 2021-01-24
 * @see https://github.com/jgm/pandoc/releases/latest
 */
const BIN_VERSION = "2.11.4";

console.log(
  `[@daucus/pandoc] install Pandoc ${BIN_VERSION} ${process.platform} binary`
);

const GITHUB_RELEASE_URL = "https://github.com/jgm/pandoc/releases/download";
const ARCHIVE_NAMES = {
  linux: "pandoc-2.11.4-linux-amd64.tar.gz",
  darwin: "pandoc-2.11.4-macOS.zip",
  win32: "pandoc-2.11.4-windows-x86_64.zip",
};
const DESTINATION_DIR = resolve(esmDirName(import.meta), "..", "_pandoc_");
const TMP_DIR = resolve(DESTINATION_DIR, ".tmp");
const BIN_DIR = resolve(DESTINATION_DIR, "bin");

if (!Object.keys(ARCHIVE_NAMES).includes(process.platform)) {
  console.error(`platform ${process.platform} isn't supported by Pandoc`);
  process.exit(1);
}

const archiveURL = `${GITHUB_RELEASE_URL}/${BIN_VERSION}/${
  ARCHIVE_NAMES[process.platform]
}`;

async function cleanDir(path) {
  if (fs.existsSync(path)) {
    await asyncFs.rmdir(path, { recursive: true });
  }
  return asyncFs.mkdir(path, { recursive: true });
}

async function downloadPandocBin() {
  await cleanDir(TMP_DIR);
  await cleanDir(BIN_DIR);

  console.log(`[@daucus/pandoc] downloading Pandoc from ${archiveURL}...`);
  await download(archiveURL, TMP_DIR, { extract: true });

  if (process.platform === "win32") {
    await asyncFs.rename(
      resolve(TMP_DIR, "pandoc.exe"),
      resolve(BIN_DIR, "pandoc.exe")
    );
  } else {
    await asyncFs.rename(
      resolve(TMP_DIR, `pandoc-${BIN_VERSION}`, "bin", "pandoc"),
      resolve(BIN_DIR, "pandoc")
    );
  }

  await asyncFs.rmdir(TMP_DIR, { recursive: true });
}

downloadPandocBin().catch((e) => {
  console.error(
    "\ninstallation of Pandoc binary for @daucus/pandoc failed due to the following error:\n"
  );
  console.error(e.message);
  process.exitCode = 2;
});
