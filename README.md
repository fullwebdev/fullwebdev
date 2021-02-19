# FullWeb.dev

<p align="center">
<img src="website/public/images/favicon/android-icon-144x144.png" alt="logo"></img>
</p>

<p align="center"><b>A new perspective of Web Development</b></p>

<!-- markdownlint-disable header-style -->

##

<!-- markdownlint-enable header-style -->

<p align="center"><a href="https://fullweb.dev"><img src="https://img.shields.io/website?up_message=fullweb.dev&amp;url=https%3A%2F%2Ffullweb.dev" alt="Website"></a>
<a href="https://twitter.com/intent/follow?screen_name=noel_mace"><img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/noel_mace?label=Stay%20tunned%21&style=social"></a></p>

<p align="center">
<img alt="GitHub package.json version" src="https://img.shields.io/github/package-json/v/fullwebdev/fullwebdev">
<a href="https://github.com/fullwebdev/fullwebdev/releases/tag/latest"><img alt="Latest (Pre-)Release Date" src="https://img.shields.io/github/release-date-pre/fullwebdev/fullwebdev?label=latest%20release"></a>
</p>

<p align="center">
<a href="https://github.com/fullwebdev/fullwebdev/actions?query=workflow%3ADeploy"><img src="https://github.com/fullwebdev/fullwebdev/workflows/Deploy/badge.svg" alt="Deploy"></a>
<a href="https://github.com/fullwebdev/fullwebdev/actions?query=workflow%3A%22Release+Subtrees%22"><img src="https://github.com/fullwebdev/fullwebdev/workflows/Release%20Subtrees/badge.svg" alt="Release Subtrees"></a>
<a href="https://github.com/fullwebdev/fullwebdev/actions?query=workflow%3A%22Audit+Website%22"><img src="https://github.com/fullwebdev/fullwebdev/workflows/Audit%20Website/badge.svg" alt="Audit Website"></a>
<a href="https://github.com/fullwebdev/fullwebdev/actions?query=workflow%3A%22Deploy+to+dev%22"><img src="https://github.com/fullwebdev/fullwebdev/workflows/Deploy%20to%20dev/badge.svg" alt="Deploy to dev"></a>
</p>

## TL;DR

Providing a holistic view of modern web development through learning materials, development libraries, and build tools.

## Philosophy

Nowadays, Web Development is becoming more and more specialized, and dogmatic.

_"Which framework should I learn first?" "Which one should I choose for my project?"_ Nobody has a clear answer to those questions. And yet, those are the ones we hear the most.

Developers are pushed to adopt one framework and to stick with it. To start learning web development with one of those, and then to become an "expert" on it. Even though people behind those frameworks are often working together, our community is torn apart by some trolls who never miss an opportunity to tell everyone how any other choice than theirs is wrong.

From this, it's tempting to reject them all. To hope the framework era is close to its end. And to do everything on our own, without any external tool.

We, at FullWeb.dev, think all these approaches can complete each other. That they don't contradict each other.

Opting, or not, for a framework or library, should only be based on context. This requires a full understanding of the consequences of this choice.

## Projects

### Website

> The core of the FullWebDev project.

<!-- prettier-ignore -->
|         | Releases | Directory |
| ------- | -------- | --------- |
| [fullweb.dev](https://fullweb.dev) | [![Prod env](https://img.shields.io/website?label=prod%20env&logo=firebase&url=https%3A%2F%2Ffullweb.dev)](https://github.com/fullwebdev/fullwebdev/releases/tag/latest)<br>[![Dev env](https://img.shields.io/website?label=dev%20env&logo=firebase&url=https%3A%2F%2Ffullweb-dev-dev.web.app)](https://fullweb-dev-dev.web.app/)<br>[![lighthouse CI reports](https://img.shields.io/badge/lighthouse-reports-F44B21?logo=lighthouse)](https://lhci-fullwebdev.herokuapp.com/app/projects/fullwebdev/dashboard?branch=master&runUrl=https%3A%2F%2Ffullweb.dev%2F) | [/website](./website/) |

### Tools

> Dev tools & libraries

<!-- prettier-ignore -->
|         | Releases | Directory |
| ------- | -------- | --------- |
| [static site generator](https://www.npmjs.com/package/@daucus/cli) | ![npm](https://img.shields.io/npm/v/@daucus/cli) | [/packages/daucus/](./packages/daucus/) |
| [modern-helpers](https://www.npmjs.com/package/modern-helpers) | ![npm](https://img.shields.io/npm/v/modern-helpers) | [/packages/helpers/](./packages/helpers/) |

### Learning materials

<!-- prettier-ignore -->
|         | Releases | Directory |
| ------- | -------- | --------- |
| code samples | [![GitHub package.json version](https://img.shields.io/github/package-json/v/fullwebdev/code-samples?label=sandox&logo=codesandbox)](https://codesandbox.io/s/github/fullwebdev/fullwebdev/tree/master/materials/code-samples/src/) | [/materials/code-samples/](./materials/code-samples/) |
| [codelabs](https://fullweb.dev/docs/codelabs) | ![GitHub package.json version](https://img.shields.io/badge/dynamic/json?color=important&label=version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Ffullwebdev%2Ffullwebdev%2Fmaster%2Fpackages%2Fcodelabs%2Fpackage.json) | [/materials/codelabs/](./materials/codelabs/) |
| [data-driven-pwa](https://github.com/fullwebdev/data-driven-pwa)<br>(sample app) | ![GitHub (subtree) last commit](https://img.shields.io/github/last-commit/fullwebdev/data-driven-pwa?label=subtree&logo=git) | [/materials/data-driven-pwa/](./materials/data-driven-pwa/)<br>(see the associated [codelab](https://fullweb.dev/docs/codelabs) for instructions) |
| [slides](https://fullweb.dev/conferences/) | [![GitHub package.json version](https://img.shields.io/badge/dynamic/json?color=success&label=WoF%20S2&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Ffullwebdev%2Ffullwebdev%2Fmaster%2Fpackages%2Fslides%2Fwof-2%2Fpackage.json)](https://fullweb.dev/slides/wof/latest/)<br>[![GitHub package.json version](https://img.shields.io/badge/dynamic/json?color=success&label=vanilla-1&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Ffullwebdev%2Ffullwebdev%2Fmaster%2Fpackages%2Fslides%2Fvanilla-1%2Fpackage.json)](https://fullweb.dev/slides/vanilla1/latest/)<br>[![GitHub package.json version](https://img.shields.io/badge/dynamic/json?color=success&label=WoF%20S1&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Ffullwebdev%2Ffullwebdev%2Fmaster%2Fpackages%2Fslides%2Fwof-1%2Fpackage.json)](https://fullweb.dev/slides/wof1/) | [/materials/slides/](./materials/slides/) |
| [illustrations](https://github.com/fullwebdev/illustrations) | ![GitHub package.json version](https://img.shields.io/github/package-json/v/fullwebdev/illustrations) | [/materials/illustrations](./materials/illustrations)

## Status

This website and the associated contents are still at a very early stage of development.

If you want to be informed of the latest evolutions, subscribe to (i.e. "watch") this project's releases
and follow [Noël Macé](https://twitter.com/intent/follow?screen_name=noel_mace) on Twitter.

Contributions are very welcomed too, so do not hesitate to open an issue and to fork this repository and send a Pull-Request. Don't forget to read [CONTRIBUTING.md](./CONTRIBUTING.md) first.

## License

© Copyright 2020 [Noël Macé](mailto:contact@noelmace.com)

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /> Except as otherwise noted, the content of this project is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>, and programming source code (including code samples) is licensed under the [MIT license](./LICENSE).
