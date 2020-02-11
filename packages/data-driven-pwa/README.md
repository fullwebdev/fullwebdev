# WoF - A Modern data-driven PWA

<p align="center">A <a href="https://wof.show" rel="nofollow"><strong>WoF</strong> Show</a> by <a href="https://twitter.com/noel_mace" rel="nofollow">Noël Macé</a>.</p>
<p align="center">
<a href="https://twitter.com/intent/follow?screen_name=noel_mace">
    <img src="https://img.shields.io/twitter/follow/noel_mace?style=social" alt="follow on Twitter">
  </a>
</p>

> This project is part of the [Web on FIRE](https://wof.show) project. \
> Go check the associated [monorepo](https://github.com/noelmace/web-on-fire) for more information.

During this codelab, you’ll create a fully offline-capable, data-driven Progressive Web App with state of the art modern capabilities.

- **:man_technologist: instructions: on [next.wof.show](https://next.wof.show/codelabs/doc/modern-data-driven)**
- **:man_teacher: Slides: [conf.wof.show](https://conf.wof.show)**
- **:book: Notes: [noelmace/slides-wof-conf > notes.md](https://github.com/noelmace/slides-wof-conf/blob/master/src/notes.md)**
- **:house: Home: [noelmace/web-on-fire](https://github.com/noelmace/web-on-fire)**



## Getting started

Follow the [Codelabs instructions](https://codelab.wof.show).

## Steps

Each step of this codelab can be automatically done by running one of the following commands from the root directory of this project.

> :warning: steps (i.e. patches) can only be applied **in the right order**\
> (4-4, then 4-5, then 4-6 etc...)

### node script

```bash
npm run goto --step="<short-step-name>"
```

"short-step-name" being the name of a directory in steps/

### git

```bash
git apply steps/<long-step-name>.patch
```

## More resources

* Data driven PWA codelab [instructions](https://codelabs.developers.google.com/codelabs/workbox-indexeddb/index.html) & [repository](https://github.com/googlecodelabs/workbox-indexeddb)
* IndexedDB [API](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API), [lecture](https://developers.google.com/web/ilt/pwa/working-with-indexeddb-slides), [lab](https://developers.google.com/web/ilt/pwa/lab-indexeddb), and [concepts](https://developers.google.com/web/ilt/pwa/working-with-indexeddb)
* [Workbox](https://workboxjs.org/)
* [Background Sync](https://developers.google.com/web/updates/2015/12/background-sync)
* [Workbox codelab](https://codelabs.developers.google.com/codelabs/workbox-lab/#0)
* [PWA training materials](https://developers.google.com/web/ilt/pwa/)

## License

© Copyright 2020 [Noël Macé](mailto:contact@noelmace.com)

This project is licensed under under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

This is a derivative of the [Workbox-Indexddb codelab starter code](https://github.com/googlecodelabs/workbox-indexeddb) by Google.
