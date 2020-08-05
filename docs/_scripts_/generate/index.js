const path = require("path");
const { html } = require("@popeindustries/lit-html-server");
const fs = require("fs-extra");

// require.extensions['.js'] = require.extensions['.mjs'];

const repoRoot = path.resolve(__dirname, "..", "..", "..");

const fakeContext = { html };

async function importView() {
  const filePath = path.join(repoRoot, "docs", "views", "en", "about", "index");
  let content = fs.readFileSync(filePath.concat(".js"), { encoding: "utf8" });
  content = content
    .split("\n")
    .filter((line) => !line.match(/import .* from ['"]lit-html['"]/))
    .join("\n");
  fs.createFileSync(filePath.concat(".mjs"));
  fs.writeFileSync(filePath.concat(".mjs"), content);

  const { default: view } = await import(filePath.concat(".mjs"));
  const template = view.bind(fakeContext)();
  const html = template.getHTML();
  console.log(html);
}

importView();
