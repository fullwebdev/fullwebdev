const path = require("path");
const fs = require("fs-extra");
const { execFile, execFileSync } = require("child_process");

// FIXME: see https://github.com/pikapkg/snowpack/issues/312
// - logging data clean the console
// - there is no way to know when the server is ready

function rmClear(str) {
  return ("" + str)
    .replace("\x1B[2J\x1B[3J\x1B[H", "")
    .split("\n")
    .filter((line) => line.includes("[error] "))
    .join("\n");
}

let bin;

function binPath() {
  if (!bin) {
    const possibleBinPaths = [
      path.resolve("node_modules", ".bin", "snowpack"),
      path.resolve(__dirname, "..", "..", "..", "..", ".bin", "snowpack"),
      path.resolve(__dirname, "..", "..", "node_modules", ".bin", "snowpack"),
    ];
    const maybeBin = possibleBinPaths.find((maybePath) =>
      fs.existsSync(maybePath)
    );
    if (!maybeBin) {
      throw new Error("can't find the snowpack binary");
    }
    bin = maybeBin;
  }
  return bin;
}

/**
 * @param {string[]} args
 * @param {string} root
 */
module.exports.snowpack = (args, root) => {
  const snowp = execFile(
    binPath(),
    args,
    { cwd: path.resolve(process.cwd(), root), maxBuffer: 1024 * 1024 * 1024 },
    (error, stdout) => {
      stdout = rmClear(stdout);
      if (error) {
        console.warn(`[snowpack] ${error}`);
      }
      // console.debug(stdout);
    }
  );

  snowp.stdout.setEncoding("utf8");
  snowp.stdout.on("data", (data) => {
    data = rmClear(data);
    if (data) {
      console.debug(`[server] ${data}`);
    }
  });

  snowp.stderr.setEncoding("utf8");
  snowp.stderr.on("data", (data) => {
    data = rmClear(data);
    if (data) {
      console.debug(`[server error] ${data}`);
    }
  });

  return snowp;
};

/**
 * @param {string[]} args
 * @param {string} root
 */
module.exports.snowpackSync = (args, root) => {
  return execFileSync(binPath(), args, {
    cwd: path.resolve(process.cwd(), root),
    encoding: "utf-8",
    maxBuffer: 1024 * 1024 * 100,
  });
};
