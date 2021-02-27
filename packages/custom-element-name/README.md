# custom-element-name

> Check if a given string can _really_ be used as a custom element name.

```js
import {
  validateAndCreateElement,
  InvalidElementNameError,
  NotAPotentialCustomElementNameError,
  AlreadyUsedElementNameError,
} from "custom-element-name";

class EmotionElement extends HTMLElement {
  //...
}

/** @type {EmotionElement} */
let el;
try {
  el = validateAndCreateElement("emotion-😍", EmotionElement);
} catch (e) {
  if (e instanceof InvalidElementNameError) {
    // not a valid element name`;
  } else if (e instanceof NotAPotentialCustomElementNameError) {
    // not a valid custom element name`;
  } else if (e instanceof AlreadyUsedElementNameError) {
    // already used name
  } else if (e instanceof DOMException && e.name === "InvalidCharacterError") {
    // HERE: 'emotion-😍' is not a valid name
    // browsers doesn't really like emojis & stuff 🤷‍
  }
}
```

## Functions

### `isValidElementName(name: string)`

Check if a string is a valid HTML Element name according to the standard.

See:

- [Name production](https://www.w3.org/TR/xml/#NT-Name)
- ["Valid Custom Element Name"](https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name)
- [CreateElement](https://dom.spec.whatwg.org/#dom-document-createelement)

### `matchPotentialCustomElementName(name: string)`

Check if a string is a valid custom element name according to the standard.

See:

- [PotentialCustomElementName production](https://html.spec.whatwg.org/multipage/custom-elements.html#prod-potentialcustomelementname)

### `validateAndCreateElement(name, class)`

Define and create a custom element only if the given name is valid according to the standard.

Params:

- `name: string`
- `class: CustomElementConstructor`

Returns: `HTMLElement | undefined`

Throws:

- `InvalidElementNameError` if the given name isn't a valid HTML Element name
- `NotAPotentialCustomElementNameError` if the given name isn't a valid Custom Element name
- `AlreadyUsedElementNameError` if a custom element was already defined for the given name
- `DOMException` (`name : InvalidCharacterError`) if, well, the browser doesn't agree with some character you used anyway...

See :

- <https://github.com/whatwg/html/issues/1754>
- <https://stackoverflow.com/questions/60608372/how-to-create-a-custom-element-that-contains-special-characters-in-its-name>
