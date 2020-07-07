# Inventory

Inventory of WebDev tools, libraries and frameworks.

Entries are orderred by popularity, based on npmjs.org download statistics.

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

Includes DOM Manipulation & templating.

| name                                         | popularity | status                                                   |
| -------------------------------------------- | ---------- | -------------------------------------------------------- |
| [react-dom](./react-dom)                     | 93         |                                                          |
| [jQuery](./jquery)                           | 85         | :warning: not recommended                                |
| [preact](./preact)                           | 56         | :zap: up-to-date microlib                                |
| [lit-html](./lit-html)                       | 47         | :zap: up-to-date microlib                                |
| [posthtml](./posthtml)                       | 47         |                                                          |
| [hyperapp](./hyperapp)                       | 38         | :zap: up-to-date microlib (with some performance issues) |
| [inferno](./inferno)                         | 38         |                                                          |
| [htm](./htm)                                 | 32         | :zap: up-to-date microlib                                |
| [alpine](./alpinejs)                         | 30         |                                                          |
| [ractive](./ractive)                         | 30         |                                                          |
| [redom](./redom)                             | 24         | :zap: up-to-date microlib                                |
| [hyperhtml](./hyperhtml)                     | 24         |                                                          |
| [nanohtml](./nanohtml)                       | 24         |                                                          |
| [lighterhtml](./lighterhtml)                 | 17         |                                                          |
| [hyperscript-helpers](./hyperscript-helpers) | 17         |                                                          |
| [val](./%40skatejs%2Fval)                    | 17         |                                                          |
| [sinuous](./sinuous)                         | 16         | :zap: up-to-date microlib                                |
| [surplus](./surplus)                         | 15         | :x: unmaintained                                         |
| [domdiff](./domdiff)                         | 15         | :zap: up-to-date microlib                                |
| [domvm](./domvm)                             | 14         | :wavy_dash: low maintenance                              |
| [Dyo](./dyo)                                 | 13         |                                                          |
| [uhtml](./uhtml)                             | 13         | :zap: up-to-date microlib                                |
| [simulacra](./simulacra)                     | 13         | :wavy_dash: low maintenance                              |
| [ivi](./ivi)                                 | 10         |                                                          |
| [mikado](./mikado)                           | 8          | :wavy_dash: low maintenance                              |
| [domc](./domc)                               | 8          | :x: unmaintained                                         |
| [tiny-lit](./%40tiny-lit%2Fcore)             | 7          | :zap: up-to-date microlib                                |
| [HyperAxe](./hyperaxe)                       | 7          | :x: unmaintained                                         |
| [attodom](./attodom)                         | 5          |                                                          |
| [stage0](./stage0)                           | 4          |                                                          |
| [CRUI](./%40crui%2Fcore)                     | 4          | :wavy_dash: low maintenance                              |
| [lite-html](./lite-html)                     | 4          | :x: unmaintained                                         |
| [faster-dom](./faster-dom)                   | 8          | :wavy_dash: low maintenance                              |
| [glasgow](./glasgow)                         | 4          | :wavy_dash: low maintenance                              |
| [solid](./solid-js)                          | 3          |                                                          |
| [fntags](./fntags)                           | 3          | :wavy_dash: low maintenance                              |
| [Datum.js](./datum)                          | 2          | :x: unmaintained                                         |

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

| name                  | popularity | status |
| --------------------- | ---------- | ------ |
| [RxJS](./rxjs)        | 92         |        |
| [Bacon.js](./baconjs) | 35         |        |
| [Kefir](./kefir)      | 31         |        |

### Styling

| name         | popularity | status |
| ------------ | ---------- | ------ |
| [JSS](./jss) | 58         |        |

### Collections of helpers

- [vanillajstoolkit](https://vanillajstoolkit.com/)
- Polymer [pwa-helpers](https://github.com/Polymer/pwa-helpers)

### Misc

| name                                      | popularity | status                    | details                                               |
| ----------------------------------------- | ---------- | ------------------------- | ----------------------------------------------------- |
| [Modernizr](./modernizr)                  | 24         |                           | detects HTML5 and CSS3 features in the user’s browser |
| [haunted](./haunted)                      | 22         |                           | Hooks for web components                              |
| [lit-helpers](./%40open-wc%2Flit-helpers) | 20         | :zap: up-to-date microlib | Helpers and utils for lit-html and lit-element        |
| [neverland](./neverland)                  | 9          |                           | React like Hooks for hyperHTML                        |
| [three.js](./three)                       | 63         |                           | 3D library                                            |

## Component-Based Development

| name                                         | popularity | status                      |
| -------------------------------------------- | ---------- | --------------------------- |
| [lit-element](./lit-element)                 | 49         |                             |
| [svelte](./svelte?library=false)             | 48         |                             |
| [stencil](./%40stencil%2Fcore?library=false) | 41         |                             |
| [sapper](./sapper?library=false)             | 28         |                             |
| [Etch](./etch)                               | 22         | :x: unmaintained            |
| [hybrids](./hybrids)                         | 21         |                             |
| [SkateJS](./skatejs)                         | 20         | :x: unmaintained            |
| [Slim.js](./slim-js)                         | 16         | :wavy_dash: low maintenance |
| [Heresy](./heresy)                           | 12         |                             |

## Frameworks

May include some multi-purpose libraries which doesn't define themselves as "frameworks".

<!-- prettier-ignore -->
| name                              | popularity | status                                                                                                       |
| --------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------ |
| [Vue](./vue)                      | 84         |                                                                                                              |
| [Angular](./%40angular%2Fcore)    | 79         |                                                                                                              |
| [AngularJS](./angular)            | 66         | :stop_sign: deprecated in favor of Angular                                                                   |
| [Next.js](./next)                 | 63         |                                                                                                              |
| [backbone](./backbone)            | 61         | :wavy_dash: low maintenance                                                                                  |
| [Nuxt.js](./nuxt)                 | 52         |                                                                                                              |
| [Polymer](./%40polymer%2Fpolymer) | 52         | :stop_sign: [deprecated in favor of LitElement](https://www.polymer-project.org/blog/2018-05-02-roadmap-faq) |
| [Ionic](./%40ionic%2Fcore)        | 49         |                                                                                                              |
| [knockout](./knockout)            | 43         |                                                                                                              |
| [mithril](./mithril)              | 40         |                                                                                                              |
| [ember](./ember-cli)              | 39         |                                                                                                              |
| [Mavo](https://mavo.io/)          | NA         |                                                                                                              |
| [Flutter Web](https://flutter.dev/docs/get-started/flutter-for/web-devs) | NA |                                                                               |
| [Meteor](https://www.meteor.com/) | NA         |                                                                                                              |
| [riot](./riot)                    | 36         |                                                                                                              |
| [choo](./choo)                    | 28         |                                                                                                              |
| [aurelia](./aurelia)              | 18         |                                                                                                              |
| [apprun](./apprun)                | 17         |                                                                                                              |
| [bobril](./bobril)                | 16         |                                                                                                              |
| [Dojo](./%40dojo%2Fcore)          | 15         | :x: unmaintained                                                                                             |
| [doz](./doz)                      | 7          |                                                                                                              |
| [nanochoo](./nanochoo)            | 6          | :x: unmaintained                                                                                             |

## Static Site Generation

| name                                            | popularity | status |
| ----------------------------------------------- | ---------- | ------ |
| [Gatsby](./gatsby?library=false)                | 60         |
| [vuepress](./vuepress?library=false)            | 43         |
| [hugo](https://gohugo.io/)                      | NA         |
| [Jekyll](https://jekyllrb.com/)                 | NA         |
| [Eleventy](./%4011ty%2Feleventy?library=false)  | 32         |
| [gridsome](./gridsome?library=false)            | 30         |
| [Scully](./%40scullyio%2Fscully?library=false)  | 20         |
| [Hydrogen](./hydrogen-cli?library=false)        | 6          |
| [Greenwood](./%40greenwood%2Fcli?library=false) | 5          |

## Languages

| name                                                                       | popularity | status |
| -------------------------------------------------------------------------- | ---------- | ------ |
| [typescript](./typescript?library=false)                                   | 67         |
| [Elm](https://elm-lang.org)                                                | NA         |
| [marko](./marko?library=false)                                             | 36         |
| [Reason](https://reasonml.github.io) _(via [BuncleScript](./bs-platform))_ | 34         |
| [imba](./imba?library=false)                                               | 26         |

## Dev Tools

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

| name                                                         | popularity | details                                                 |
| ------------------------------------------------------------ | ---------- | ------------------------------------------------------- |
| [es-dev-server](./es-dev-server?library=false)               | 25         | Development server for modern web apps                  |
| [browserslist](https://github.com/browserslist/browserslist) | NA         | Share target browsers between different front-end tools |

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
