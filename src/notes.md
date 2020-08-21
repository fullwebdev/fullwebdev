# The Web is on :fire: F.I.R.E. :fire:

> **:construction: Work In Progress :construction:**

## F.I.R.E.

1. Fast
2. Integrated
3. Reliable
4. Engaging

## How the Web evolves

Standardization process, involving standardization authorities and integrators (i.e. Web Browsers builders).

### Standardization authorities

#### W3C

> World Wide Web Consortium - [w3.org](https://www.w3.org/)

- https://github.com/w3ctag/design-reviews
- https://github.com/w3ctag/meetings

##### How it works

- https://www.w3.org/2019/Process-20190301/#Organization
- https://www.w3.org/Consortium/fees
- https://www.w3.org/community/

#### WHATWG

> Web Hypertext Application Technology Working Group - [whatwg.org](https://whatwg.org/)

##### How it works

- [FAQ](https://whatwg.org/faq)
- [Working Mode](https://whatwg.org/working-mode)
- [Workstream Policy](https://whatwg.org/workstream-policy)
- [Participate](https://github.com/whatwg/participate.whatwg.org)

Since May 2019, the [war is over](https://www.theregister.co.uk/2019/05/29/w3c_whatwg_working_on_one_html_dom_spec/)
between the W3C and WHATWG!

##### Contribute

:octocat: On Github:

- [HTML standard](https://github.com/whatwg/html)
- [DOM standard](https://github.com/whatwg/dom)

##### Tracking

- [New Features Awaiting Implementation Interest](https://wiki.whatwg.org/wiki/New_Features_Awaiting_Implementation_Interest)

#### WICG

> Web Incubator Community Group - [wicg.io](https://wicg.io/)

July 2015: [Launch announcement](https://www.w3.org/blog/2015/07/wicg/)

##### Tracking

- [Proposals Tracking](https://docs.google.com/spreadsheets/d/1K2EtkvKXMDk_h2goR34uMIWmw1LfPhIi-QAJHcQBP_4/edit?usp=sharing)

##### Contribute

- :octocat:https://github.com/WICG
- :speaking_head: https://discourse.wicg.io/

#### TC39

> Ecma International, Technical Committee 39 - ECMAScript - [tc39.es](https://tc39.es/)

##### How it works

[Process](https://tc39.es/process-document/)

##### Contribute

:octocat: On Github

- [TC39 org](https://github.com/tc39)
- [proposals](https://github.com/tc39/proposals)

### Integrators

#### Chrome

- Chrome Status: [in development](https://chromestatus.com/features#browsers.chrome.status%3A%22In%20development%22)
- Google Developers, Web: [Updates](https://developers.google.com/web/updates/)
- [Origin Trials](https://github.com/GoogleChrome/OriginTrials/blob/gh-pages/README.md)

#### Mozilla

- :octocat: [mozilla/standards-positions](https://github.com/mozilla/standards-positions): Mozilla's Positions on Emerging Web Specifications
- :bug: https://bugzilla.mozilla.org/describecomponents.cgi
- :twisted_rightwards_arrows: https://wiki.mozilla.org/Platform/Roadmap
- :writing_hand: https://hacks.mozilla.org/

## An integrated Web

- [Patterns for Promoting PWA Installation (mobile)](https://developers.google.com/web/fundamentals/app-install-banners/promoting-install-mobile)
  - June 2019: [news](https://developers.google.com/web/updates/2019/06/pwa-install-patterns)

### PWA Install UX

#### in Chrome

- Initial Proposals (2015)
  - [slightlyoff/AppInstallImprovements](https://github.com/slightlyoff/AppInstallImprovements)
  - https://chromestatus.com/features/4540065577435136

##### mini-infobar

![mini-infobar](./assets/img/install-promo/a2hs-infobar-cropped.png)

> « The mini-infobar is an interim experience that becomes annoying (the number of PWAs is growing).
> Starting in Chrome 76, it's possible to prevent the mini-infobar from appearing by calling `preventDefault()`
> on the `beforeinstallprompt` event (see [2019/05 mini-infobar-update](https://developers.google.com/web/updates/2019/05/mini-infobar-update)),
> but according to our observations very few developers do it. »
>
> — [Issue 988301, comment 1](https://bugs.chromium.org/p/chromium/issues/detail?id=988301#c1)

##### omnibox install icon

![omnibox install icon](assets/img/install-promo/pwa-install-addressbar.gif)

- [Issue 988301: PWA install icon in the omnibox for Android](https://bugs.chromium.org/p/chromium/issues/detail?id=988301&q=mini-infobar&colspec=ID%20Pri%20M%20Stars%20ReleaseBlock%20Component%20Status%20Owner%20Summary%20OS%20Modified)
- PWA install icon in the omnibox for desktop:
  - [Issue 907351: Surface PWA installation in the omnibox](https://bugs.chromium.org/p/chromium/issues/detail?id=907351)
  - [Annoucement](https://developers.google.com/web/updates/2019/06/pwa-install-addressbar)

#### in Firefox Mobile

MDN:

- https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Installable_PWAs
- https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Add_to_home_screen

##### Firefox info banner

Only shows once!

![Firefox info banner](./assets/img/install-promo/firefox/js13kpwa-icon.png)

### Closing the _App Gap_

Chrome: [Unlocking new capabilities for the web](https://developers.google.com/web/updates/capabilities)

- [API Tracker](https://docs.google.com/spreadsheets/d/1de0ZYDOcafNXXwMcg4EZhT0346QM-QFvZfoD8ZffHeA/edit?usp=sharing)
- [proj-fugu issues](https://bugs.chromium.org/p/chromium/issues/list?q=proj-fugu)
- [Codelab](https://codelabs.developers.google.com/codelabs/web-capabilities/#0)

## A modular Web

### Import Maps & built-in modules

Import Maps:

- https://wicg.github.io/import-maps/
- https://chromestatus.com/feature/5315286962012160
- https://github.com/mozilla/standards-positions/issues/146

Built-in modules:

- https://github.com/tc39/proposal-javascript-standard-library
- Stage 1 - last presented on [June 2019](https://github.com/tc39/tc39-notes/blob/master/meetings/2019-06/june-5.md#javascript-standard-library-for-stage-2--part-2-)

KV Storage:

- https://developers.google.com/web/updates/2019/03/kv-storage
- https://chromestatus.com/features/6428344899862528
- https://wicg.github.io/kv-storage/
- https://github.com/mozilla/standards-positions/issues/145

### HTML Elements provided as build-in modules

- whatwg/html: [Introducing new HTML elements that are pay-for-what-you-use #4697](https://github.com/whatwg/html/issues/4697)
- [Define Web IDL Modules](https://github.com/heycam/webidl/pull/675)

see also:

- https://github.com/drufball/layered-apis ([chrome status](https://www.chromestatus.com/features/6555299569729536))

#### experiments in progress

- https://github.com/WICG/virtual-scroller ([demos](https://github.com/fergald/virtual-scroller-demos) - [Chrome Status](https://www.chromestatus.com/feature/5673195159945216))
- https://github.com/jackbsteinberg/std-toast ([TAG Review](https://github.com/w3ctag/design-reviews/issues/385) - [Chrome Status](https://www.chromestatus.com/feature/5674896879255552))
- https://github.com/tkent-google/std-switch/ ([TAG Review](https://github.com/w3ctag/design-reviews/issues/384) - [Chrome Status](https://www.chromestatus.com/feature/6624580116414464))

- see also
  - https://github.com/WICG/display-locking

## An adaptive Web

### Media Queries Level 5

- https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries
- https://drafts.csswg.org/mediaqueries-5/

#### Dark/Light Mode

Read [_Hello darkness my old friend_](https://web.dev/prefers-color-scheme) by Thomas Steiner on Web.dev.

- prefers-color-scheme ([MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme))
- [color-scheme](https://medium.com/dev-channel/what-does-dark-modes-supported-color-schemes-actually-do-69c2eacdfa1d) ([csswg draft](https://drafts.csswg.org/css-color-adjust-1/#propdef-color-scheme), [Chrome Status](https://chromestatus.com/feature/5330651267989504))

##### Emulation / DevTools

###### Chrome
[Issue 977243: DevTool helper for prefers-color-scheme: dark](https://bugs.chromium.org/p/chromium/issues/detail?id=977243)

###### Puppeeteer

[feat: emulate prefers-color-scheme #4906](https://github.com/GoogleChrome/puppeteer/issues/4906)

###### Firefox

_from [stackoverflow](https://stackoverflow.com/questions/56401662/firefox-how-to-test-prefers-color-scheme):_
1. open about:config
2. add a ui.systemUsesDarkTheme integer entry set to 1
3. restart firefox

#### Reduced Motion

[Move Ya! Or maybe, don't, if the user prefers-reduced-motion!](https://developers.google.com/web/updates/2019/03/prefers-reduced-motion)

[MDN](https://developer.mozilla.org/fr/docs/Web/CSS/@media/prefers-reduced-motion)

#### misc

- https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-transparency
- https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-contrast
- https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme
- https://developer.mozilla.org/en-US/docs/Web/CSS/@media/scripting
- https://developer.mozilla.org/en-US/docs/Web/CSS/@media/light-level
- https://developer.mozilla.org/en-US/docs/Web/CSS/@media/forced-colors

## A more efficient Web

- https://web.dev/native-lazy-loading/
- https://web.dev/load-faster-like-proxx/
- https://web.dev/preload-responsive-images/
- https://developers.google.com/web/updates/2019/08/get-started-with-gpu-compute-on-the-web

## Misc

- https://github.com/w3c/paint-timing
- https://github.com/whatwg/html/issues/3534
- https://web.dev/more-capable-form-controls/
