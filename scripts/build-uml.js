const plantuml = require("node-plantuml");
const fs = require("fs");
const path = require("path");

/**
 * @param {string} path
 */
(async srcdir => {
  const files = await fs.promises.readdir(srcdir);
  let count = 0;
  for await (const file of files) {
    const src = path.join(srcdir, file);
    const stat = await fs.promises.stat(src);
    if (stat.isFile() && src.match(/\.(pu|puml|plantuml)$/)) {
      const dist = path.join(srcdir, "images", path.parse(src).name + ".svg");
      console.log(`${src} → ${dist}`);
      const gen = plantuml.generate(src, { format: "svg" });
      const outStream = fs.createWriteStream(dist);
      gen.out.pipe(outStream);
      count++;
    }
  }
  return count;
})("graphs/").then(count => {
  console.log(`${count} plantuml files processed`);
});
