# Using the Chrome Dev Tools to understand how rendering works

::: danger
:construction: Work in progress

For now, instructions are only given in French in _[Développement et Architecture des Applications Web Modernes - Retrouver les fondamentaux](https://www.editions-eni.fr/livre/developpement-et-architecture-des-applications-web-modernes-retrouver-les-fondamentaux-9782409029523)_.
:::

::: tip
Use [the dedicated page](/tools/chrome-perf) to reproduce the following instructions using the Chrome Dev Tools.
:::

<!-- prettier-ignore -->
<<< @/../../../materials/code-samples/src/rendering/limitations/dom-api/heavy-rendering/create-content.js#render

<p class="code-caption">Sample code used during this execice</p>

![Overview](/illustrations/images/rendering/dom-api_override-innerHTML.png)

![First task cumulative processing time](/illustrations/images/rendering/dom-api_override-innerHTML_time-script.png)

![Zoom (first task): second parsing step](/illustrations/images/rendering/dom-api_override-innerHTML_zoom-parse2.png)

![Run time line by line](/illustrations/images/rendering/dom-api_override-innerHTML_code-time.png)

![Task 2 & 3: Rendering & Paint](/illustrations/images/rendering/dom-api_override-innerHTML_time-rendering.png)

![Main thread activity with only one modification of innerHTML](/illustrations/images/rendering/dom-api_no-override.png)

![Run time line by line](/illustrations/images/rendering/dom-api_no-override_code-time.png)
