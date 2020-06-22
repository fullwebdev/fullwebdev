# Inventory

Inventory of WebDev tools, libraries and frameworks.

Entries are orderred by popularity, based on npmjs.org download statistics.

::: tip
Is your favorite tool or library missing?

Go [edit this page](https://github.com/fullwebdev/fullwebdev/edit/master/docs/inventory/README.md) or [open an issue](https://github.com/fullwebdev/fullwebdev/issues/new) on GitHub.
:::

::: warning
May I remind you that this website is still under construction? :sweat_smile:

Details about most libraries and tools are available via a component attached to the `/inventory/:name` route. You just need to click on the item's name in the following list. But as Vuepress isn't exactly intended to be used for this kind of stuff, this is, well ... hacky.

Meaning performance is very poor, and a 404 message may appear before the actual content loads.

This will be resolved in the next version of this website, which won't use Vuepress. Be patient 😉
:::

## Runtime Libraries

### Rendering

Includes DOM Manipulation & templating.

| name                             | popularity | status                      |
| -------------------------------- | ---------- | --------------------------- |
| [react](./react)                 | 94         |                             |
| [jQuery](./jquery)               | 85         | :warning: not recommended   |
| [preact](./preact)               | 56         |                             |
| [lit-html](./lit-html)           | 47         |                             |
| [inferno](./inferno)             | 38         |                             |
| [htm](./htm)                     | 32         |                             |
| [alpine](./alpinejs)             | 30         |                             |
| [ractive](./ractive)             | 30         |                             |
| [redom](./redom)                 | 24         |                             |
| [hyperhtml](./hyperhtml)         | 24         |                             |
| [nanohtml](./nanohtml)           | 24         |                             |
| [lighterhtml](./lighterhtml)     | 17         |                             |
| [sinuous](./sinuous)             | 16         |                             |
| [surplus](./surplus)             | 15         | :x: unmaintained            |
| [domdiff](./domdiff)             | 15         |                             |
| [domvm](./domvm)                 | 14         | :wavy_dash: low maintenance |
| [uhtml](./uhtml)                 | 13         |                             |
| [simulacra](./simulacra)         | 13         | :wavy_dash: low maintenance |
| [ivi](./ivi)                     | 10         |                             |
| [mikado](./mikado)               | 8          | :wavy_dash: low maintenance |
| [domc](./domc)                   | 8          | :x: unmaintained            |
| [tiny-lit](./%40tiny-lit%2Fcore) | 7          |                             |
| [attodom](./attodom)             | 5          |                             |
| [stage0](./stage0)               | 4          |                             |
| [lite-html](./lite-html)         | 4          | :x: unmaintained            |
| [solid](./solid-js)              | 3          |                             |

### Routing

| name                                   | popularity | status |
| -------------------------------------- | ---------- | ------ |
| [path-to-regexp](./path-to-regexp)     | 79         |        |
| [Page.js](./page)                      | 38         |        |
| [universal-router](./universal-router) | 27         |        |

### State Management

| name                      | popularity | status |
| ------------------------- | ---------- | ------ |
| [Redux](./redux)          | 86         |
| [VueX](./vuex)            | 72         |
| [MobX](./mobx)            | 60         |
| [NgRX](./%40ngrx%2Fstore) | 48         |

### Reactive programming

| name                  | popularity | status |
| --------------------- | ---------- | ------ |
| [RxJS](./rxjs)        | 92         |        |
| [Bacon.js](./baconjs) | 35         |        |

### Misc

| name                                      | popularity | details                                        |
| ----------------------------------------- | ---------- | ---------------------------------------------- |
| [haunted](./haunted)                      | 22         | Hooks for web components                       |
| [lit-helpers](./%40open-wc%2Flit-helpers) | 20         | Helpers and utils for lit-html and lit-element |
| [neverland](./neverland)                  | 9          | React like Hooks for hyperHTML                 |

## Component-Based Development

| name                           | popularity | status                      |
| ------------------------------ | ---------- | --------------------------- |
| [lit-element](./lit-element)   | 49         |                             |
| [svelte](./svelte)             | 48         |                             |
| [stencil](./%40stencil%2Fcore) | 41         |                             |
| [sapper](./sapper)             | 28         |                             |
| [hybrids](./hybrids)           | 21         |                             |
| [SkateJS](./skatejs)           | 20         | :x: unmaintained            |
| [Slim.js](./slim-js)           | 16         | :wavy_dash: low maintenance |

## Frameworks

May include some multi-purpose libraries which doesn't define themselves as "frameworks".

| name                                                                     | popularity | status                      |
| ------------------------------------------------------------------------ | ---------- | --------------------------- |
| [Vue](./vue)                                                             | 84         |                             |
| [angular](./%40angular%2Fcore)                                           | 79         |                             |
| [angularjs](./angular)                                                   | 66         | :stop_sign: deprecated      |
| [Next.js](./next)                                                        | 63         |                             |
| [backbone](./backbone)                                                   | 61         | :wavy_dash: low maintenance |
| [Nuxt.js](./nuxt)                                                        | 52         |                             |
| [Polymer](./%40polymer%2Fpolymer)                                        | 52         | :stop_sign: deprecated      |
| [Ionic](./%40ionic%2Fcore)                                               | 49         |                             |
| [knockout](./knockout)                                                   | 43         |                             |
| [mithril](./mithril)                                                     | 40         |                             |
| [ember](./ember-cli)                                                     | 39         |                             |
| [Flutter Web](https://flutter.dev/docs/get-started/flutter-for/web-devs) | NA         |                             |
| [Meteor](https://www.meteor.com/)                                        | NA         |                             |
| [hyperapp](./hyperapp)                                                   | 38         |                             |
| [riot](./riot)                                                           | 36         |                             |
| [aurelia](./aurelia)                                                     | 18         |                             |
| [apprun](./apprun)                                                       | 17         |                             |
| [bobril](./bobril)                                                       | 16         |                             |
| [doz](./doz)                                                             | 7          |                             |

## Static Site Generation

| name                              | popularity | status |
| --------------------------------- | ---------- | ------ |
| [Gatsby](./gatsby)                | 60         |
| [vuepress](./vuepress)            | 43         |
| [hugo](https://gohugo.io/)        | NA         |
| [Jekyll](https://jekyllrb.com/)   | NA         |
| [Eleventy](./%4011ty%2Feleventy)  | 32         |
| [gridsome](./gridsome)            | 30         |
| [Scully](./%40scullyio%2Fscully)  | 20         |
| [Hydrogen](./hydrogen-cli)        | 6          |
| [Greenwood](./%40greenwood%2Fcli) | 5          |

## Languages

| name                                                                       | popularity | status |
| -------------------------------------------------------------------------- | ---------- | ------ |
| [typescript](./typescript)                                                 | 67         |
| [Elm](https://elm-lang.org)                                                | NA         |
| [marko](./marko)                                                           | 36         |
| [Reason](https://reasonml.github.io) _(via [BuncleScript](./bs-platform))_ | 34         |
| [imba](./imba)                                                             | 26         |

## Dev Tools

### Linters & Formatters

| name                     | popularity | status                                    |
| ------------------------ | ---------- | ----------------------------------------- |
| [ESlint](./eslint)       | 88         |                                           |
| [prettier](./prettier)   | 86         |                                           |
| [TSLint](./tslint)       | 69         | :stop_sign: deprecated in favor or ESLint |
| [StandardJS](./standard) | 54         |                                           |

### Bundlers

| name                 | popularity | status |
| -------------------- | ---------- | ------ |
| [Webpack](./webpack) | 93         |        |
| [Rollup](./rollup)   | 72         |        |
| [Parcel](./parcel)   | 44         |        |

<!-- markdownlint-disable no-duplicate-heading -->

### Misc

| name                             | popularity | details                                |
| -------------------------------- | ---------- | -------------------------------------- |
| [es-dev-server](./es-dev-server) | 25         | Development server for modern web apps |

## Further reading

- [js-framework-benchmark](https://rawgit.com/krausest/js-framework-benchmark/master/webdriver-ts-results/table.html) for performance comparisons
- [johnpapa/hello-worlds](https://github.com/johnpapa/hello-worlds/) for code samples
- the [Frontend Developer Roadmap](https://roadmap.sh/frontend) for a step-by-step guide

### Other lists

- [awesome-lit-html](https://github.com/web-padawan/awesome-lit-html)
- [Web Component Libraries](https://open-wc.org/guide/component-libraries.html)
