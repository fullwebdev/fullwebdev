import Terser from "terser";
import { minifyHTMLLiterals } from "minify-html-literals";
import globby from "globby";
import * as path from "path";
import { promises as asyncFs } from "fs";
import { fileURLToPath } from "url";
import * as HTMLMin from "html-minifier-terser";
import CSSO from "csso";
import imagemin from "imagemin";
import imageminJpegtran from "imagemin-jpegtran";
import imageminPngquant from "imagemin-pngquant";
import imageminSvgo from "imagemin-svgo";
import imageminWebp from "imagemin-webp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const options = {
  terser: {
    compress: true,
    mangle: {
      toplevel: true,
      eval: true,
    },
    output: {
      comments: false,
      ascii_only: true,
    },
    module: true,
  },
  htmlMin: {
    collapseBooleanAttributes: true,
    collapseWhitespace: true,
    decodeEntities: true,
    includeAutoGeneratedTags: false,
    minifyCSS: true,
    minifyJS: true,
    minifyURLs: true,
    preventAttributesEscaping: true,
    processConditionalComments: true,
    removeAttributeQuotes: true,
    removeComments: true,
    removeEmptyAttributes: true,
    removeOptionalTags: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    sortAttributes: true,
    sortClassName: true,
    trimCustomFragments: true,
  },
};

const runners = [
  {
    glob: "**/*.js",
    minify: (source) => {
      const minLiterals = minifyHTMLLiterals(source);
      const jsContentWithMinifiedLiterals =
        (minLiterals && minLiterals.code) || source;
      const minified = Terser.minify(
        jsContentWithMinifiedLiterals,
        options.terser
      );
      if (minified.error) {
        throw new Error(minified.error);
      }
      return minified.code;
    },
  },
  {
    glob: ["**/*.html", "!**/fragments"],
    minify: (source) => HTMLMin.minify(source, options.htmlMin),
  },
  {
    glob: "**/*.css",
    minify: (source) => CSSO.minify(source).css,
  },
];

async function run() {
  await Promise.all(
    runners.map(async ({ glob, minify }) => {
      const files = await globby(glob, {
        absolute: true,
        cwd: path.resolve(__dirname, "..", "dist"),
      });

      return Promise.all(
        files.map(async (file) => {
          console.log(file);
          const content = await asyncFs.readFile(file, { encoding: "utf-8" });
          const minifiedContent = minify(content);
          await asyncFs.writeFile(file, minifiedContent, { encoding: "utf-8" });
        })
      );
    })
  );

  const imgs = await imagemin(["dist/**/*.{jpg,jpeg,png,svg}"], {
    plugins: [
      imageminJpegtran({
        progressive: true,
      }),
      imageminPngquant({
        quality: [0.6, 0.8],
      }),
      imageminSvgo({
        plugins: [{ removeViewBox: false }],
      }),
      // imageminWebp({quality: 50})
    ],
  });

  Promise.all(
    imgs.map(async ({ sourcePath, data }) => {
      console.log(sourcePath);
      await asyncFs.writeFile(sourcePath, data);
    })
  );
}

run();