import fs from "fs";
import Benchmark from "benchmark";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
console.log(__dirname);

const file = process.argv[2];
const filePath = `./${file}.js`;

(async function () {
  if (!file || !fs.existsSync(path.join(__dirname, filePath))) {
    console.log(`
${filePath} does not exist!

Usage: npm run exec <file name>

Run the given benchmark file using node.
  `);
  } else {
    const { init, tests } = await import(filePath);

    const suite = new Benchmark.Suite();

    suite
      .on("cycle", (event) => {
        console.log(String(event.target));
      })
      .on("complete", function () {
        console.log(`Fastest is ${this.filter("fastest").map("name")}`);
      });

    const params = init();

    Object.entries(tests).forEach(([key, testFn]) => {
      suite.add(key, () => {
        testFn(params);
      });
    });

    suite.run({ async: false });
  }
})();
