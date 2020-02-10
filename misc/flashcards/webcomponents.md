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

<details>
<summary>What global object permits to manage Custom Elements registration?</summary>
<p>

```javascript
Window.customElements
```

</p>
</details>

<details>
<summary>
How using a Custom Element is different from using any other HTML element?
</summary>
<p>

**It's NOT!**

A Custom Element constructor **needs** to extend the
[`HTMLElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)
interface in order to inherit the entire DOM API!

</p>
</details>

<details>
<summary>Define a <code>&lt;dumb-element&gt;</code> Custom Element.</summary>
<p>

```javascript
class DumbElement extends HTMLElement {...}
window.customElements.define('dumb-element', DumbElement);

// Or use an anonymous class if you don't want a named constructor in current scope.
window.customElements.define('dumb-element', class extends HTMLElement {...});
```

</p>
</details>

<details>
<summary>What do you define using a CE class?</summary>
<p>

The CE public JavaScript API and some of its behavior.

For example, you could define how to "open" an `<app-drawer>` CE like so:

```javascript
class AppDrawer extends HTMLElement {

  // A getter/setter for an open property.
  get open() {
    return this.hasAttribute('open');
  }

  set open(val) {
    // Reflect the value of the open property as an HTML attribute.
    if (val) {
      this.setAttribute('open', '');
    } else {
      this.removeAttribute('open');
    }
    this.toggleDrawer();
  }

    // Can define constructor arguments if you wish.
  constructor() {
    super();

    // Setup a click listener on <app-drawer> itself.
    this.addEventListener('click', e => {
      this.toggleDrawer();
    });
  }

  toggleDrawer() {
    ...
  }
}
```

</p>
</details>

<details>
<summary>
What should you always do if you define a constructor for a CE class?
</summary>
<p>

If you define a constructor, always call super() first!
This is specific to CE and required by the spec.

</p>
</details>

<details>
<summary>What are the 3 rules your have to follow when defining a CE?</summary>
<p>

1. The name of a custom element **must contain a dash** (-). 
> So `<x-tags>`, `<my-element>`, and `<my-awesome-app>` are all valid names, while `<tabs>` and `<foo_bar>` are not.
> This requirement is so the HTML parser can distinguish custom elements from regular elements. It also ensures forward compatibility when new tags are added to HTML.
2. You can't register the same tag more than **once**.
> Attempting to do so will throw a DOMException.
3. Custom elements cannot be **self-closing**.
> This is because HTML only allows a few elements to be self-closing. Always write a closing tag (<app-drawer></app-drawer>).

</p>
</details>

<br>

> **references**
>
> - [Using custom elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements)
>   by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements$history)
> - [Custom Elements v1](https://developers.google.com/web/fundamentals/web-components/customelements)
>   by [Eric Bidelman](https://developers.google.com/web/resources/contributors/ericbidelman), Google

## Templates & Slots

<details>
<summary>What are the attributes and elements permitting to use slots?</summary>
<p>

Inside a template or your WC, use the [`<slot>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) element
in order to define a placeholder:

```javascript
customElements.define(
  'my-element',
  class extends HTMLElement {
    constructor() {
      super();

      const shadow = this.attachShadow({ mode: 'open' });
      const container = document.createElement('div');

      container.innerHTML = `
        <slot name="title"></slot>
      `;

      shadow.appendChild(container);
    }
  }
);
```

Use the [`slot`](https://developer.mozilla.org/fr/docs/Web/HTML/Attributs_universels#attr-slot) attribute to define the
content for this slot:

```html
<my-element>
  <span slot="title">Hello World!</span>
</my-element>
```

You can also use one anonymous slot by removing the `name` attribute and the `slot` attribute value.

</p>
</details>

## Styling

<details>
<summary>How could you selectively expose chosen elements from their shadow tree to the outside page for styling purposes?</summary>
<p>

You can use [CSS Shadow Parts](https://drafts.csswg.org/css-shadow-parts/) for that!

The **experimental** [`::part`](https://developer.mozilla.org/en-US/docs/Web/CSS/::part) CSS pseudo-element permits to
select an element within a shadow tree that has a matching `part` attribute.

Here is an example:

**light tree**

```html
<style>
  custom-element::part(hello-world) {
    color: red;
  }
</style>
<custom-element></custom-element>
```

**shadow tree (in your WC)**

```html
<div part="hello-world">
  Hello World!
</div>
```

> :warning: **highly experimental**
>
> This feature is only at the first stage for W3C specification ("First Public Working Draft").
> It's only supported by Chrome 73 and Firefox 69 behind the `layout.css.shadow-parts.enabled` preference.
> Check the [explainer](https://github.com/fergald/docs/blob/master/explainers/css-shadow-parts-1.md),
> [Editor's Draft](https://drafts.csswg.org/css-shadow-parts/) and
> [issues](https://github.com/w3c/csswg-drafts/labels/css-shadow-parts-1) before using it in production, and be prepared
> for changes!

</p>
</details>

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
