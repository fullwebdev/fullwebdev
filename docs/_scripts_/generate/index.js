const { writeRoutes } = require("./write-routes");
const { execFile } = require("child_process");
const path = require("path");

async function generateAll() {
  // FIXME: see https://github.com/pikapkg/snowpack/issues/312
  // - logging data clean the console
  // - the page is opened in the default browser
  // - there is no way to know when the server is ready

  const snowp = execFile(
    path.resolve(__dirname, "..", "..", "node_modules", ".bin", "snowpack"),
    ["dev"],
    { cwd: path.resolve(__dirname, "..", "..") },
    (error, stdout) => {
      if (error) {
        console.warn(`[snowpack] ${error}`);
      }
    }
  );

  // snowp.stdout.setEncoding("utf8");
  // snowp.stdout.on("data", (data) => {
  //   console.log(`[server] ${data}`);
  // });

  // snowp.stderr.setEncoding("utf8");
  // snowp.stderr.on("data", (data) => {
  //   console.error(`[server] ${data}`);
  // });

  console.log("server started");
  console.log("generating routes.js file");

  await new Promise(resolve => setTimeout(resolve, 5000));

  await writeRoutes();
  snowp.kill();
}

module.exports = { generateAll };
