const { writeRoutes } = require("./write-routes");
const { execFile } = require("child_process");
const path = require("path");

function rmClear(str) {
  return str.replace("\x1B[2J\x1B[3J\x1B[H", "");
}
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
      error = rmClear(error);
      stdout = rmClear(stdout);
      if (error) {
        console.warn(`[snowpack] ${error}`);
      }
      console.debug(stdout);
    }
  );

  snowp.stdout.setEncoding("utf8");
  snowp.stdout.on("data", (data) => {
    data = rmClear(data);
    console.debug(`[server] ${data}`);
  });

  snowp.stderr.setEncoding("utf8");
  let previousError;
  snowp.stderr.on("data", (data) => {
    data = rmClear(data);
    if (data !== previousError) {
      console.debug(`[server error] ${data}`);
    }
    previousError = data;
  });

  console.log("server started");
  console.log("generating routes.js file");

  await new Promise((resolve) => setTimeout(resolve, 8000));

  await writeRoutes();
  snowp.kill();
}

module.exports = { generateAll };
