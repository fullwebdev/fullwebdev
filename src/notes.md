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

## A modular & adaptive Web

- https://github.com/whatwg/html/issues/4697
- https://github.com/jackbsteinberg/std-toast
- https://web.dev/more-capable-form-controls/
- Media Queries Level 5
  - https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries
  - https://drafts.csswg.org/mediaqueries-5/

## A more efficient Web

- https://web.dev/native-lazy-loading/
- https://web.dev/load-faster-like-proxx/
- https://web.dev/preload-responsive-images/
- https://developers.google.com/web/updates/2019/08/get-started-with-gpu-compute-on-the-web

## Misc

- https://github.com/w3c/paint-timing
- https://github.com/whatwg/html/issues/3534
