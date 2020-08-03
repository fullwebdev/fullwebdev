---
title: "Code Samples"
---

## Components

1. Intro
   - [JQuery Plugin](components/jquery/range-slider.html)
2. AngularJS
   1. [v1.0 - directive](components/angularjs/directive/hello-world.html)
   2. [v1.2 - controllerAs](components/angularjs/controller-as/hello-world.html)
   3. [v1.3 - bindToController](components/angularjs/bindtocontroller/hello-world.html)
   4. [v1.5+ - component helper](components/angularjs/component-helper/hello-world.html)
3. React
   - [Hello World - without JSX](components/react/hello-world.html)
   - [Hello World - JSX](components/react/hello-jsx.html)
   - [State](components/react/stateful.html)
   - [Shared Hook](components/react/responsive-component/index.html)
     (from
     [Dan Abramov](https://gist.github.com/gaearon/cb5add26336003ed8c0004c4ba820eae))
4. Function-based
   - [Hello World](components/function/hello-world.html)
   - [Using Parameters](components/function/bad-update.html)
     (bad practice)
   - [Using Parameters](components/function/params.html)
     (not pure)
   - [With lit-html](components/function/with-lit-html.html)
     (not pure)

## Web Components

1. Custom Elements
   - [autonomous](components/custom-elements/autonomous/hello-world.html)
   - [customized built-in](components/custom-elements/customized-buit-in/hello-world.html)
   - [conflict](components/custom-elements/conflict/conflict.html)
   - [names validity](components/custom-elements/names/index.html)
   - attributes and properties
     - [basics](components/custom-elements/attrs-and-props/basics/index.html)
     - [attribute](components/custom-elements/attrs-and-props/attribute/index.html)
   - [life cycle](components/custom-elements/life-cycle/index.html)
2. Shadow DOM
   - [attach](components/shadow-dom/attach/index.html)
   - [open vs. closed](components/shadow-dom/access/bases/index.html)
   - workaround to closed mode
     - [using iife](components/shadow-dom/access/workaround/iife/index.html)
     - [using a private field](components/shadow-dom/access/workaround/private-field/index.html)
   - style
     - [host](components/shadow-dom/style/host/index.html)
     - [context](components/shadow-dom/style/context/index.html)
     - [CSS Custom Properties](components/shadow-dom/style/custom-props/index.html)
3. Template
   - [basics](components/template/basics/index.html)
   - [programmatic](components/template/prog/index.html)
4. Composition
   - [basics](components/slot/basics/index.html)
   - [named slots](components/slot/named/index.html)

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
      1. [DOM API](rendering/memorize/dom-api/index.html)
         - [with fragment](rendering/memorize/dom-api/fragment/index.html)
      1. [innerHTML](rendering/memorize/hyperscript/index.html)
      1. [HyperScript](rendering/memorize/hyperscript/index.html)
   1. memoize
      1. [latest update](rendering/memoize/dom-api/latest-count/index.html)
      2. [children](rendering/memoize/dom-api/children/index.html)
