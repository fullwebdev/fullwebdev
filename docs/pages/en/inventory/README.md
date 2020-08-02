# Inventory

Inventory of WebDev tools, libraries and frameworks.

Entries are orderred by popularity, based on npmjs.org download statistics.

Open the _"details"_ containers for unmaintained projects with low popularity.

::: tip
Is your favorite tool or library missing?

Go [edit this page](https://github.com/fullwebdev/fullwebdev/edit/master/docs/inventory/README.md) or [open an issue](https://github.com/fullwebdev/fullwebdev/issues/new) on GitHub.
:::

> This presentation is temporary and, well ... hacky.
> Meaning performance is very poor, and a 404 message may appear before the actual content loads.
> This will be resolved in the next version of this website which will get rid of Vuepress and process as much data as possible at build time.
> Be patient, it will take me a long time :wink:

## Runtime Libraries

### Rendering

DOM Manipulation & templating. May also include some libraries requiring specific build tools.

Performance indexes from [js-framework-benchmark](https://rawgit.com/krausest/js-framework-benchmark/master/webdriver-ts-results/table.html). Only the slowdown geometric mean of the lower keyed implementation is given if there is multiple implementations for the same library.

| name                             | popularity | syntax                              | perf        | status                    |
| -------------------------------- | ---------- | ----------------------------------- | ----------- | ------------------------- |
| [react-dom](./react-dom)         | 93         | JSX                                 | 1.85        |                           |
| [jQuery](./jquery)               | 85         | DOM manipulation                    |             | :warning: not recommended |
| [preact](./preact)               | 56         | HyperScript (or JSX-like with htm)  | 1.54        | :zap: up-to-date microlib |
| [lit-html](./lit-html)           | 47         | Tagged templates                    | 1.34        | :zap: up-to-date microlib |
| [inferno](./inferno)             | 38         | HyperScript or JSX                  | **1.19**    |                           |
| [hyperapp](./hyperapp)           | 38         | HyperScript                         | 1.33        | :zap: up-to-date microlib |
| [htm](./htm)                     | 32         | Tagged templates & HyperScript      |             | :zap: up-to-date microlib |
| [alpine](./alpinejs)             | 30         | Extended HTML                       |             |                           |
| [ractive](./ractive)             | 30         | Mustaches                           | 2.37        |                           |
| [nerv](./nervjs)                 | 30         | JSX                                 | 1.87        |                           |
| [redom](./redom)                 | 24         | HyperScript                         | 1.23        | :zap: up-to-date microlib |
| [hyperhtml](./hyperhtml)         | 24         | Tagged templates                    | 1.25        |                           |
| [nanohtml](./nanohtml)           | 24         | Template Strings                    |             |                           |
| [moon](./moon)                   | 21         | JSX-like                            | _(NK) 1.15_ | :zap: up-to-date microlib |
| [maquette](./maquette)           | 18         | HyperScript                         | 2.22        | :zap: up-to-date microlib |
| [lighterhtml](./lighterhtml)     | 17         | Tagged templates                    | 1.30        |                           |
| [sinuous](./sinuous)             | 16         | HyperScript, Tagged templates & JSX | **1.05**    | :zap: up-to-date microlib |
| [domdiff](./domdiff)             | 15         | none                                | **1.12**    | :zap: up-to-date microlib |
| [Dyo](./dyo)                     | 13         | HyperScript                         | 1.31        |                           |
| [µhtml](./uhtml)                 | 13         | Tagged templates                    | 1.21        | :zap: up-to-date microlib |
| [petit-dom](./petit-dom)         | 12         | JSX & HyperScript                   | 1.18        |                           |
| [ivi](./ivi)                     | 10         | HyperScript                         | **1.17**    |                           |
| [Tonic](./%40optoolco%2Ftonic)   | 9          | Tagged templates                    |             | :zap: up-to-date microlib |
| [isotope](./%40isotope%2Fcore)   | 9          | Chaining                            | 1.51        | :zap: up-to-date microlib |
| [tiny-lit](./%40tiny-lit%2Fcore) | 7          | Tagged templates                    |             | :zap: up-to-date microlib |
| [attodom](./attodom)             | 5          | HyperScript                         | **1.17**    | :zap: up-to-date microlib |
| [stage0](./stage0)               | 4          | Tagged templates                    | **1.06**    |                           |
| [solid](./solid-js)              | 3          | JSX                                 | **1.06**    |                           |

::: details

| name                         | popularity | status                                                    |
| ---------------------------- | ---------- | --------------------------------------------------------- |
| [virtual-dom](./virtual-dom) | 39         | :x: unmaintained                                          |
| [hyperscript](./hyperscript) | 32         | :x: unmaintained                                          |
| [react-lite](./react-lite)   | 19         | :x: unmaintained                                          |
| [surplus](./surplus)         | 15         | :x: unmaintained                                          |
| [vidom](./vidom)             | 14         | :wavy_dash: low maintenance & :turtle: performance issues |
| [domvm](./domvm)             | 14         | :wavy_dash: low maintenance                               |
| [simulacra](./simulacra)     | 13         | :wavy_dash: low maintenance                               |
| [petit-dom](./petit-dom)     | 12         | :wavy_dash: low maintenance                               |
| [mikado](./mikado)           | 8          | :wavy_dash: low maintenance                               |
| [domc](./domc)               | 8          | :x: unmaintained                                          |
| [HyperAxe](./hyperaxe)       | 7          | :x: unmaintained                                          |
| [ganic](./ganic)             | 6          | :turtle: performance issues                               |
| [CRUI](./%40crui%2Fcore)     | 4          | :wavy_dash: low maintenance                               |
| [lite-html](./lite-html)     | 4          | :x: unmaintained                                          |
| [faster-dom](./faster-dom)   | 8          | :wavy_dash: low maintenance                               |
| [glasgow](./glasgow)         | 4          | :wavy_dash: low maintenance & :turtle: performance issues |
| [fntags](./fntags)           | 3          | :wavy_dash: low maintenance & :turtle: performance issues |
| [Datum.js](./Datum)          | 3          | :turtle: performance issues                               |
| [literaljs](./literaljs)     | 1          | :wavy_dash: low maintenance & :turtle: performance issues |

:::

### Routing

| name                                   | popularity | status |
| -------------------------------------- | ---------- | ------ |
| [path-to-regexp](./path-to-regexp)     | 79         |        |
| [Page.js](./page)                      | 38         |        |
| [universal-router](./universal-router) | 27         |        |

### State Management

| name                      | popularity | status                    |
| ------------------------- | ---------- | ------------------------- |
| [Redux](./redux)          | 86         | :zap: up-to-date microlib |
| [VueX](./vuex)            | 72         |
| [MobX](./mobx)            | 60         |
| [NgRX](./%40ngrx%2Fstore) | 48         |
| [beedle](./beedle)        | 15         |
| [lit-up](./lit-up)        | 5          | :zap: up-to-date microlib |

### Reactive programming

| name                  | popularity | status           |
| --------------------- | ---------- | ---------------- |
| [RxJS](./rxjs)        | 92         |                  |
| [Bacon.js](./baconjs) | 35         |                  |
| [Kefir](./kefir)      | 31         |                  |
| [s-js](./s-js)        | 16         | :x: unmaintained |

### Styling

| name         | popularity | status |
| ------------ | ---------- | ------ |
| [JSS](./jss) | 58         |        |

### Collections of helpers

- [vanillajstoolkit](https://vanillajstoolkit.com/)
- Polymer [pwa-helpers](https://github.com/Polymer/pwa-helpers)

### Misc

| name                                      | popularity | status                      | details                                               |
| ----------------------------------------- | ---------- | --------------------------- | ----------------------------------------------------- |
| [three.js](./three)                       | 63         |                             | 3D library                                            |
| [vuera](./vuera)                          | 27         | :wavy_dash: low maintenance | Use React in Vue and Vue in React                     |
| [Modernizr](./modernizr)                  | 24         |                             | detects HTML5 and CSS3 features in the user’s browser |
| [haunted](./haunted)                      | 22         |                             | Hooks for web components                              |
| [lit-helpers](./%40open-wc%2Flit-helpers) | 20         | :zap: up-to-date microlib   | Helpers and utils for lit-html and lit-element        |
| [val](./%40skatejs%2Fval)                 | 17         |                             | VirtualDOM abstraction layer                          |
| [wicked-elements](wicked-elements)        | 11         | :zap: up-to-date microlib   | handle any element as if it was a Custom Element      |
| [neverland](./neverland)                  | 9          |                             | React like Hooks for hyperHTML                        |
| [augmentor](./augmentor)                  | 4          |                             | React like hooks for the masses                       |

## Component-Based Development

| name                                         | popularity | status |
| -------------------------------------------- | ---------- | ------ |
| [lit-element](./lit-element)                 | 49         |        |
| [svelte](./svelte?library=false)             | 48         |        |
| [stencil](./%40stencil%2Fcore?library=false) | 41         |        |
| [sapper](./sapper?library=false)             | 28         |        |
| [hybrids](./hybrids)                         | 21         |        |

:::details

| name                 | popularity | status                      |
| -------------------- | ---------- | --------------------------- |
| [Etch](./etch)       | 22         | :x: unmaintained            |
| [SkateJS](./skatejs) | 20         | :x: unmaintained            |
| [Slim.js](./slim-js) | 16         | :wavy_dash: low maintenance |
| [Heresy](./heresy)   | 12         | :turtle: performance issues |
| [mimbl](./mimbl)     | 6          | :turtle: performance issues |

:::

## Frameworks

May include some multi-purpose libraries which doesn't define themselves as "frameworks".

<!-- prettier-ignore -->
| name                                | popularity   | status                                     |
| ----------------------------------- | ------------ | ------------------------------------------ |
| [Vue](./vue)                        | 84           |                                            |
| [Angular](./%40angular%2Fcore)      | 79           |                                            |
| [AngularJS](./angular)              | 66           | :stop_sign: deprecated in favor of Angular |
| [Next.js](./next)                   | 63           |                                            |
| [backbone](./backbone)              | 61           | :wavy_dash: low maintenance                |
| [Nuxt.js](./nuxt)                   | 52           |                                            |
| [Polymer](./%40polymer%2Fpolymer)   | 52           | :stop_sign: [deprecated in favor of LitElement](https://www.polymer-project.org/blog/2018-05-02-roadmap-faq) |
| [Ionic](./%40ionic%2Fcore)          | 49           |                                            |
| [knockout](./knockout)              | 43           |                                            |
| [mithril](./mithril)                | 40           |                                            |
| [ember](./ember-cli)                | 39           |                                            |
| [Flutter Web](https://flutter.dev/docs/get-started/flutter-for/web-devs) | NA |                 |
| [Meteor](https://www.meteor.com/)   | (:star: 42k) |                                            |
| [riot](./riot)                      | 36           |                                            |
| [Yew](https://yew.rs)               | (:star: 13k) |                                            |
| [Marionette](./backbone.marionette) | 35           |                                            |
| [rax](./rax)                        | 31           |                                            |
| [Cycle.js](./%40cycle%2Fdom)        | 30           |                                            |
| [choo](./choo)                      | 28           |                                            |
| [san](./san)                        | 24           |                                            |
| [Mavo](https://mavo.io/)            | (:star: 3k)  |                                            |
| [aurelia](./aurelia)                | 18           |                                            |
| [Dojo](./%40dojo%2Fframework)       | 18           |                                            |
| [apprun](./apprun)                  | 17           |                                            |
| [bobril](./bobril)                  | 16           |                                            |
| [scarletsframe](./scarletsframe)    | 5            |                                            |
| [sifrr](./%40sifrr%2Fdev)           | 3            |                                            |

:::details

| name                   | popularity | status                                      |
| ---------------------- | ---------- | ------------------------------------------- |
| [hyperdom](./hyperdom) | 11         | :wavy_dash: low maintenance                 |
| [doz](./doz)           | 7          | :turtle: performance issues                 |
| [stem](./stem-core)    | 6          | :turtle: performance issues                 |
| [plastiq](./plastiq)   | 6          | :stop_sign: deprecated in favor of Hyperdom |
| [nanochoo](./nanochoo) | 6          | :x: unmaintained                            |
| [hyperoop](./hyperoop) | 4          | :wavy_dash: low maintenance                 |

:::

## Static Site Generation

| name                                            | popularity   | status |
| ----------------------------------------------- | ------------ | ------ |
| [Gatsby](./gatsby?library=false)                | 60           |
| [hugo](https://gohugo.io/)                      | (:star: 45k) |
| [Jekyll](https://jekyllrb.com/)                 | (:star: 41k) |
| [vuepress](./vuepress?library=false)            | 43           |
| [Hexo](./hexo?library=false)                    | 38           |
| [Eleventy](./%4011ty%2Feleventy?library=false)  | 32           |
| [gridsome](./gridsome?library=false)            | 30           |
| [harp](./harp?library=false)                    | 25           |
| [Scully](./%40scullyio%2Fscully?library=false)  | 20           |
| [yst](https://github.com/jgm/yst)               | (:star: 300) |
| [Hydrogen](./hydrogen-cli?library=false)        | 6            |
| [Greenwood](./%40greenwood%2Fcli?library=false) | 5            |

## Languages

| name                                                                       | popularity    | status |
| -------------------------------------------------------------------------- | ------------- | ------ |
| [typescript](./typescript?library=false)                                   | 67            |
| [marko](./marko?library=false)                                             | 36            |
| [Clojure / ClojureScript](https://clojurescript.org/)                      | (:star: 8.4k) |
| [Elm](https://elm-lang.org)                                                | (:star: 6k)   |
| [Reason](https://reasonml.github.io) _(via [BuncleScript](./bs-platform))_ | 34            |
| [purescript](./purescript)                                                 | 28            |
| [imba](./imba?library=false)                                               | 26            |

## Build & Dev Tools

### HTML Generation / transformation

| name                   | popularity | status |
| ---------------------- | ---------- | ------ |
| [posthtml](./posthtml) | 47         |        |

### Linters & Formatters

| name                                   | popularity | status                                    |
| -------------------------------------- | ---------- | ----------------------------------------- |
| [ESlint](./eslint?library=false)       | 88         |                                           |
| [prettier](./prettier?library=false)   | 86         |                                           |
| [TSLint](./tslint?library=false)       | 69         | :stop_sign: deprecated in favor or ESLint |
| [StandardJS](./standard?library=false) | 54         |                                           |

### Type Checking

> TypeScript itself is mentionned in the [Languages](#languages) section.

| name                                         | popularity | status |
| -------------------------------------------- | ---------- | ------ |
| [lit-analyzer](./lit-analyzer?library=false) | 15         |        |

### Bundlers

| name                               | popularity | status |
| ---------------------------------- | ---------- | ------ |
| [Webpack](./webpack?library=false) | 93         |        |
| [Rollup](./rollup?library=false)   | 72         |        |
| [Parcel](./parcel?library=false)   | 44         |        |

### Compression

| name                             | popularity | status |
| -------------------------------- | ---------- | ------ |
| [Terser](./terser?library=false) | 71         |        |

<!-- markdownlint-disable no-duplicate-heading -->

### Misc

| name                                                          | popularity    | details                                                   |
| ------------------------------------------------------------- | ------------- | --------------------------------------------------------- |
| [browserslist](https://github.com/browserslist/browserslist)  | (:star: 8k)   | Share target browsers between different front-end tools   |
| [static siteboiler plate](https://staticsiteboilerplate.com/) | (:star: 1.4k) | better workflow for building modern static websites       |
| [es-dev-server](./es-dev-server?library=false)                | 25            | Development server for modern web apps                    |
| [rawact](./babel-plugin-rawact)                               | 18            | Compiles React.js components into native DOM instructions |

## Further reading

- [js-framework-benchmark](https://rawgit.com/krausest/js-framework-benchmark/master/webdriver-ts-results/table.html) for performance comparisons
- [johnpapa/hello-worlds](https://github.com/johnpapa/hello-worlds/) for code samples
- the [Frontend Developer Roadmap](https://roadmap.sh/frontend) for a step-by-step guide

### Other lists

- [Awesome JavaScript](https://github.com/sorrycc/awesome-javascript#testing-frameworks)
- [Web Component Libraries](https://open-wc.org/guide/component-libraries.html)
- [awesome lit-html](https://github.com/web-padawan/awesome-lit-html)
- [awesome Webpack](https://github.com/webpack-contrib/awesome-webpack)
- [awesome Vue.js](https://github.com/vuejs/awesome-vue)
- [awesome Jest](https://github.com/jest-community/awesome-jest)
- [Awesome Rollup](https://github.com/rollup/awesome)
- [Awesome React Renderer](https://github.com/chentsulin/awesome-react-renderer)
- [Static Site Generators](https://staticsitegenerators.net/)
