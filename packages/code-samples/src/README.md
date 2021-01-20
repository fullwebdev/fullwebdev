---
title: "Code Samples"
---

> Une [page d'accueil en français](./ENI-DPAWN.html),
> suivant le déroulement du livre
> "[Développement et architecture des Applications Web Modernes](https://www.editions-eni.fr/livre/developpement-et-architecture-des-applications-web-modernes-retrouver-les-fondamentaux-9782409029523)"
> publié par les éditions ENI, est également disponible.

## Component Based Software Engineering

1. Intro
   - [JQuery Plugin](CBSE/jquery/slider.html)
2. AngularJS
   1. [v1.0 - directive](CBSE/angularjs/directive/hello-world.html)
   2. [v1.2 - controllerAs](CBSE/angularjs/controller-as/hello-world.html)
   3. [v1.3 - bindToController](CBSE/angularjs/bindtocontroller/hello-world.html)
   4. [v1.5+ - component helper](CBSE/angularjs/component-helper/hello-world.html)
3. React
   - without JSX
     - [basics](CBSE/react/hello-world.html)
     - [composition](CBSE/react/composition.html)
     - [props](CBSE/react/composition-props.html)
   - [JSX](CBSE/react/hello-jsx.html)
   - [State](CBSE/react/stateful.html)
   - [Shared Hook](CBSE/react/responsive-component/index.html)
     (from
     [Dan Abramov](https://gist.github.com/gaearon/cb5add26336003ed8c0004c4ba820eae))
4. Function-based
   - [Hello World](CBSE/function/hello-world.html)
   - [Using Parameters](CBSE/function/bad-update.html) (bad
     practice)
   - [Using Parameters](CBSE/function/params.html) (not
     pure)
   - [With lit-html](CBSE/function/with-lit-html.html) (not
     pure)

## Web Components

1. Custom Elements
   - [autonomous](web-components/custom-elements/autonomous/hello-world.html)
   - [life cycle](web-components/custom-elements/life-cycle/index.html)
     - [call constructor before define](web-components/custom-elements/life-cycle/before-define/index.html)
     - [call constructor after define](web-components/custom-elements/life-cycle/after-define/index.html)
     - [connectedCallback](web-components/custom-elements/life-cycle/connected/index.html)
   - [customized built-in](web-components/custom-elements/customized-built-in/hello-world.html)
   - [conflict](web-components/custom-elements/conflict/conflict.html)
   - [names validity](web-components/custom-elements/names/index.html)
2. Shadow DOM
   - [attach](web-components/shadow-dom/attach/index.html)
   - [open vs. closed](web-components/shadow-dom/access/bases/index.html)
   - workaround to closed mode
     - [using a private field](web-components/shadow-dom/access/workaround/private-field/index.html)
     - [using a WeakMap](web-components/shadow-dom/access/workaround/weak/index.html)
   - style
     - [shared style](web-components/shadow-dom/style/shared/index.html)
     - [constructable stylesheet](web-components/shadow-dom/style/constructable/index.html)
     - [host](web-components/shadow-dom/style/host/index.html)
     - [context](web-components/shadow-dom/style/context/index.html)
     - [CSS Custom Properties](web-components/shadow-dom/style/custom-props/index.html)
3. Template
   - [basics](web-components/template/basics/index.html)
   - [programmatic](web-components/template/prog/index.html)
4. Composition
   - [basics](web-components/slot/basics/index.html)
   - [named slots](web-components/slot/named/index.html)
5. attributes and properties
   - [basics](web-components/custom-elements/attrs-and-props/basics/index.html)
   - [attribute](web-components/custom-elements/attrs-and-props/attribute/index.html)

## Routing

1. [Single Page Applications](minimal-spa/1-fundamentals/index.html)
1. [Location API](minimal-spa/2-location/index.html)
1. HashRoute
   - [Update](minimal-spa/3-hashroute/update/index.html)
   - [Replace](minimal-spa/3-hashroute/replace/index.html)
1. [History API](minimal-spa/4-history-api/index.html)
1. Routes
   - [asynchronous](minimal-spa/5-routes/1-async/index.html)
     (bad practice)
   - [synchronous](minimal-spa/5-routes/2-sync/index.html)
   - [redirect](minimal-spa/5-routes/3-redirect/index.html)
1. Data
   - [route parameters](minimal-spa/6-data/1-route-params/index.html)
   - [route parameters with path-to-regexp](minimal-spa/6-data/1b-path-to-regexp/index.html)
   - [query parameters](minimal-spa/6-data/2-query-params/index.html)
   - [history state](minimal-spa/6-data/3-history-state/index.html)
1. Navigation
   - [`onclick` callback](minimal-spa/7-navigation/1-callback/index.html)
   - [global handling](minimal-spa/7-navigation/2-global/index.html)

## Rendering

1. Introduction
   - [Network limitations](rendering/limitations/network/scripts/index.html)
   - [Performance API](rendering/performance-api/index.html)
   - [DOM Freeze](rendering/limitations/dom-api/heavy-rendering/index.html)
1. create elements
   1. DOM API
      - [simple example](rendering/create-element/dom-api/index.html)
      - [component](rendering/create-element/dom-api/component/index.html)
      - [DocumentFragment](rendering/create-element/dom-api/fragment/index.html)
   1. innerHTML
      - [very bad example](rendering/create-element/innerHTML/very-bad/index.html)
      - [using handlers functions as string (bad practice)](rendering/create-element/innerHTML/bad-handlers/index.html)
      - [local handlers](rendering/create-element/innerHTML/handlers/local/index.html)
      - [global handler](rendering/create-element/innerHTML/handlers/global/index.html)
      - [better example](rendering/create-element/innerHTML/better/index.html)
   1. HyperScript
      - [minimal component example](rendering/create-element/hyperscript/index.html)
1. Memorization
   1. child element cache
      1. [DOM API](rendering/caching/elements/dom-api/index.html)
         - [with fragment](rendering/caching/elements/dom-api/fragment/index.html)
      1. [innerHTML](rendering/caching/elements/innerHTML/index.html)
      1. [HyperScript](rendering/caching/elements/hyperscript/index.html)
   1. children
      1. [deep](rendering/caching/children/deep/index.html)
      1. [on call](packages/code-samples/src/rendering/caching/children/on-call/index.html)
      1. [without copy](packages/code-samples/src/rendering/caching/children/without-copy/index.html)
   1. state
      1. [DOM API](rendering/caching/state/dom-api/latest-count/index.html)
   1. memoize
      1. [latest update](rendering/memoize/dom-api/latest-count/index.html)
      1. [children](rendering/memoize/dom-api/children/index.html)

## Libraries

1. Rendering
   - [RE:DOM](minimal-spa/redom/index.html)
2. Routing
   - [Page.js](minimal-spa/8-pagejs/index.html)
   - [universal-router](minimal-spa/9-universal-router/index.html)
3. Reactive Programming
   - [RxJS](libs/reactive/rxjs/complete/index.html)
     - [cold observable](libs/reactive/rxjs/complete/cold/index.html)
   - [Bacon.js](libs/reactive/baconjs/index.html)
4. State Management
   - Redux
     - [Simple Counter](libs/reactive/redux/simple-counter/index.html)
     - [Realistic Example](libs/reactive/redux/good-counter/index.html)
     - [with a wrapper component](libs/reactive/redux/wrapped-counter/index.html)
5. Tagged Templates
   - [introduction](rendering/tagged-template/index.html)
6. Components
   1. lit-element
      - [hello world](libs/lit-element/index.html)
      - [with es-module-shims](libs/lit-element/importmap/index.html)
