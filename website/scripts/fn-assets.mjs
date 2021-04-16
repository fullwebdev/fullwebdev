import { promises as asyncFs } from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function run() {
  await asyncFs.copyFile(
    path.resolve(__dirname, "..", "dist", "index.html"),
    path.resolve(__dirname, "..", "functions", "hosting", "index.html")
  );
}

run();
