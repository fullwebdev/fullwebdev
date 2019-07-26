# Web Components flashcards

## Introduction

<details><summary>What's the purpose of Web Components ?</summary>
<p>

- create **reusable** components
- w/ vanilla JS/HTML/CSS only!
- without fear of code collisions

</p>
</details>

<details>
<summary>What are the 3 main technologies behind Web Components?</summary>
<p>

- Custom elements
- Shadow DOM
- HTML Templates

</p>
</details>

<details>
<summary>What are the usual steps required to define a Web Component?</summary>
<p>

1. **Create a class or a function** in which you specify your web component **functionality**
2. **register** your custom element
3. _(optional)_ **attach a shadow DOM** to the custom element
4. _(optional)_ **define an HTML template** using `<template>` and `<slot>`, **clone** the template and **attach it** to
   your shadow DOM.

You can now use your custom element wherever you like on your page, just like you would any regular HTML element.

</p>
</details>

<details>
<summary>What method permits to register a custom element?</summary>
<p>

```javascript
CustomElementRegistry.define()
```

Passing it:

1. the element name to be defined
2. the class or function in which its functionality is specified
3. (optionally) what element it inherits from

</p>
</details>

<details>
<summary>What method permits to attach a shadow DOM to a custom element?</summary>
<p>

```javascript
Element.attachShadow()
```

</p>
</details>

<br>

> **references**
>
> - [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
>  by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/Web_Components$history)

## Custom Elements

<details>
<summary>For what purposes do we use Custom Elements?</summary>
<p>

- create **new HTML tags**
- beef-up existing HTML tags
- or extend the components other developers have authored

</p>
</details>

<details>
<summary>
What should you avoid when you're looking for information about the Custom Element standard?
</summary>
<p>

To confuse it with the "v0 version", a [working draft](https://www.w3.org/TR/2016/WD-custom-elements-20160226/) which
have only been implemented [by Chrome & Opera](https://caniuse.com/#feat=custom-elements).

The actual (or v1) Custom Element standard is the one defined in the [WHATWG html living
standard](https://html.spec.whatwg.org/multipage/custom-elements.html#custom-elements), and now supported by [most
browsers](https://caniuse.com/#feat=custom-elementsv1).

</p>
</details>

<br>

> **references**
>
> - [Using custom elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements)
>   by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements$history)
> - [Custom Elements v1](https://developers.google.com/web/fundamentals/web-components/customelements)
>   by [Eric Bidelman](https://developers.google.com/web/resources/contributors/ericbidelman), Google

## _Acknowledgments_

Portions of this flashcards are modifications based on:

- most previously noticed _references_
- [The HTML Living Standard](https://html.spec.whatwg.org/) by the WHATWG (Apple, Google, Mozilla, Microsoft) ([CC BY 4.0][by4])
- [Building Components](https://developers.google.com/web/fundamentals/web-components/) by Google ([CC BY 4.0][by4])
- [The MDN Web Docs](https://developer.mozilla.org/en-US/) by Mozilla Contributors ([CC BY-SA 2.5][bysa25])

Copyright © 2019 Noël Macé (noelmace.com). This work is licensed under a
<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">
Creative Commons Attribution-ShareAlike 4.0 International License
</a>.

<!-- references -->

  [by4]: https://creativecommons.org/licenses/by/4.0/
  [bysa25]: http://creativecommons.org/licenses/by-sa/2.5/
