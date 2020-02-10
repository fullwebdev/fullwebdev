global.Benchmark = require('benchmark');

const file = process.argv[2];
const path = `./${file}.js`

if (!file || !fs.existsSync(path)) {
  console.log(`
${path} does not exist!

Usage: npm start <file name>

Run the given benchmark file using node.
  `);
} else {
  require(`./${process.argv[2]}.js`);
}

