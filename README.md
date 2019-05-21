# Web On F.I.R.E.

:fire: **Learning materials for Web's modern capabilities & Progressive Web Apps.** :fire:

<br>

![](https://media.giphy.com/media/SpZEbPjQTTKZa/giphy.gif)

<br>

**F**ast, **I**ntegrated, **R**eliable & **E**ngaging Web Apps with state-of-the-art techniques.

## Docs/slides

All docs & slides are availables at:

> **[fire.noelmace.com](http://fire.noelmace.com)**

## Light it up!

### PRPL Demo App

1. Install dependencies: `npm i`
1. Install nghttp2 (see instructions [below](#nghttp2))
1. Start: `npm start`
1. Test: open https://localhost:8443

### Requirements

#### nghttp2

In order to run the PRPL Demo App locally, you'll need the nghttpx command, which is part of the [nghttp2](https://nghttp2.org) library.

##### Mac OS X

1. install Homebrew:
   ```
   /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
   ```
1. run `brew install nghttp2`

##### Arch Linux

run `pacman -S nghttp2`

_details [here](https://www.archlinux.org/packages/extra/x86_64/nghttp2/)_

##### Windows

You'll need to build the package yourself. For detailed instructions, see the nghttp2 [documentation](https://nghttp2.org/documentation/package_README.html#notes-for-building-on-windows-msvc).

##### Other Linux distributions

You can edit package.json `prpl:start` to use [`./nghttpx`](./server/http2-proxy/nghttpx) instead of `nghttpx` if you use Linux.

Be aware that you may run into several issues doing so, as this is just a quick and dirty help. Please reach back to me if you do.

### Variations

You could also run some variations that you could find in `/steps`.

To do so, run:

1. `npm run api`
1. (in another terminal) `npm run step --step=<dirname>`

## :warning: Warning: May Contain Hot Topics

This project may contain a bunch of work in progress as I use it mainly to experiment new modern web capabilities and approach, in order to demonstrate them during my talks & workshops. As a result, there is a good chance that some part of it simply doesn't work, or that the documentation will not be sufficient by itself to allow a complete understanding. _This is especially the case with "steps" (`/steps` & `npm run step --step="step-name"`)._

**Please, open an issue if you have any question, request or suggestion!**

## Acknowledgements

This project couldn't exist without the support of my company, [Bonitasoft](https://www.bonitasoft.com), and the help I get from all our teams!

At first, I started it as a fork from the Open Source PWA [SFEIR School](https://github.com/sfeir-open-source/sfeir-school-pwa) I contributed to re-design and update between late 2018 and early 2019. This wouldn't have been possible without the help I got from a lot of people there.

A big thanks to them all, and especially the following people who helped me a lot:

| <a href="https://github.com/jefBinomed" target="_blank">Jean-François<br>Garreau</a> |                     <a href="https://github.com/manekinekko" target="_blank">Wassim<br>Chegham</a>                      |        <a href="https://github.com/wolfgangGoedel" target="_blank">Wolfgang<br>Goedel</a>        |             <a href="https://github.com/dahfazz" target="_blank">Fabien<br>Zibi</a>              |
| :----------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------: |
|         ![jefBinomed](https://avatars0.githubusercontent.com/u/681267?s=100)         |                        ![Wassil Chegham](https://avatars1.githubusercontent.com/u/1699357?s=100)                        |          ![Wolfgang Goedel](https://avatars3.githubusercontent.com/u/3933928?s=100&v=4)          |              ![Fabien Zibi](https://avatars0.githubusercontent.com/u/1621916?s=100)              |
| [contributions](https://github.com/Sfeir/pwa-200/graphs/contributors)<br> & support  | [Original idea](https://github.com/Sfeir/pwa-200/graphs/contributors)<br> & [OSS](https://github.com/sfeir-open-source) | [workshop](https://twitter.com/bestofwebconf/status/1004696329208172544)<br> co-presenter (2019) | [workshop](https://twitter.com/bestofwebconf/status/1004696329208172544)<br> co-presenter (2018) |
