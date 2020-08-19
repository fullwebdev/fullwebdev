# Panpress (temporary name) - Starter Kit

Static site generator powered by [Pandoc](https://pandoc.org/) & [lit-html](https://lit-html.polymer-project.org/).

> [Template repository](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template) for [Panpress](https://www.npmjs.com/package/@panpress/cli).

## Status

This project is at a very early stage of development.

It is mosly intended to be used for the [FullWeb.dev](https://fullweb.dev) website (source [here](https://github.com/fullwebdev/fullwebdev/tree/master/docs)).

Please do not hesitate to [open an issue](https://github.com/fullwebdev/fullwebdev/issues/new) in the fullwebdev monorepo if you have any suggestion or question

## Get started

1. open the [Panpress Starter template repository](https://github.com/fullwebdev/panpress-starter) on github
2. login & click **Use this template** (see the GitHub [documentation](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template) for more information)
3. clone your new repository
4. install dependencies (`npm install`) (don't forget to commit package-lock.json)
5. [install Pandoc](https://pandoc.org/installing.html)
6. install [pandoc-import-code](https://github.com/noelmace/pandoc-import-code)
7. run `npm start`
8. open `localhost:8080` in your browser

## Required customisations

1. replace `https://github.com/fullwebdev/panpress-starter` by your repository's url in `panpress.json`, `js/components/page-footer.js` and `js/components/app-shell.js`
2. replace `assets/favicon` and `manifest.json` (using [favicon-generator.org](https://www.favicon-generator.org) and [the app-manifest generator](https://app-manifest.firebaseapp.com/))
3. replace `assets/social.png`
4. replace title and metas in `index.html`

## Pages

Lazy loaded routes and sidebar menu entries are automatically generated from the pages defined in the `/pages` directory.

_:warning: Pages without an `<h1>` title (`# title` with markdown) will not be displayed as this title is required when generating sidebar menu entries._

You can add two types of pages:

### markdown

`pages/**/*.md` files are used to generate lit-html "components" using Pandoc.

Meaning you can use the extended [Pandoc's syntax](https://pandoc.org/MANUAL.html#pandocs-markdown), and import external code snippets thanks to the [pandoc-import-code](https://github.com/noelmace/pandoc-import-code) filter.

### Lit-html

For more complexe use cases, you can directly use lit-html.

You just need to create a `pages/**/*.js` file, and add a default export function returning a lit-html template.

For example:

```js
import { html } from "lit-html";

export default () => {
  const today = new Date().toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return html`
    <h1>Today is</h1>
    <p>${today}</p>
  `;
};
```
