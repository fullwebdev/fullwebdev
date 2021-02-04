/* eslint-disable wc/no-invalid-element-name */
export class SuccessComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<p class="success">This Custom Element works!</p>`;
  }
}

/**
 * Validate against Name Production
 * (see https://www.w3.org/TR/xml/#NT-Name)
 *
 * ValidCustomElementName:
 * (see https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name)
 *
 * "They can always be created with createElement() and
 * createElementNS(), which have restrictions that go beyond
 * the parser's."
 *
 * createElement:
 * (see https://dom.spec.whatwg.org/#dom-document-createelement)
 *
 * "If localName does not match the Name production, then
 * throw an "InvalidCharacterError" DOMException."
 *
 * Discussion in https://stackoverflow.com/questions/60608372/how-to-create-a-custom-element-that-contains-special-characters-in-its-name
 *
 */
const isValidElementName = (str) => {
  const nameStartChar =
    ":|[A-Z]|_|[a-z]|[\u{C0}-\u{D6}]| [\u{D8}-\u{F6}]|[\u{F8}-\u{2FF}]|[\u{370}-\u{37D}]|[\u{37F}-\u{1FFF}]|[\u{200C}-\u{200D}]|[\u{2070}-\u{218F}]|[\u{2C00}-\u{2FEF}]|[\u{3001}-\u{D7FF}]|[\u{F900}-\u{FDCF}]|[\u{FDF0}-\u{FFFD}]|[\u{10000}-\u{EFFFF}]";
  const nameChar = `${nameStartChar}|-|.|[0-9]|\u{B7}|[\u{0300}-\u{036F}]|[\u{203F}-\u{2040}]`;
  const name = `${nameStartChar}${nameChar}*`;

  return new RegExp(name, "u").test(str);
};

/**
 * Validate against PotentialCustomElementName
 * @see https://html.spec.whatwg.org/multipage/custom-elements.html#prod-potentialcustomelementname
 * @see https://github.com/whatwg/html/issues/1754
 *
 * @param {string} str custom element name to validate
 */
const isValidCustomElementName = (str) => {
  //#region PotentialCustomElementName
  const PCEnChar = [
    /* Basin Latin + middle dot
     Exclude:
     ! " # $ % & ' ( ) * + , / : ;
     < = > ? @ [ \ ] ^ ` { | } ~
     ¡ ¢ £ ¤ ¥ ¦ § ¨ © ª « ¬ ® ¯
     ° ± ² ³ ´ µ ¶ */
    "-|.|[0-9]|_|[a-z]|·",
    // Latin 1 Letters
    // exclude multiplication division signs
    "[À-Ö]|[Ø-ö]|[ø-ÿ]",
    // LatinExtended to Combining Diacritical Marks
    "[\u{100}-\u{36F}]",
    // Greek & Coptic Letters
    "[\u{370}-\u{37D}]|[\u{37F}-\u{3FF}]",
    // Cyrillic to Greek Extended
    "[\u{400}-\u{1FFF}]",
    // zero width
    "[\u{200C}-\u{200D}]",
    // tie
    "[\u{203F}-\u{2040}]",
    // Superscripts to Number Forms
    "[\u{2070}-\u{218F}]",
    // Glagolitic to Kangxi Radicals
    "[\u{2C00}-\u{2FEF}]",
    "[\u{3001}-\u{D7FF}]",
    "[\u{F900}-\u{FDCF}]",
    "[\u{FDF0}-\u{FFFD}]",
    "[\u{10000}-\u{EFFFF}]",
  ].join("|");

  const PotentialCustomElementName = `[a-z](${PCEnChar})*-(${PCEnChar})*`;
  //#endregion PotentialCustomElementName

  return new RegExp(PotentialCustomElementName, "u").test(
    str
  );
};

const showErrors = (
  container,
  error,
  ceName,
  methodName
) => {
  const errorEl = document.createElement("p");
  errorEl.classList.add("error");
  errorEl.innerHTML = `${methodName}() failed for "${ceName}":<br/>${error}`;

  const ceNameValidationEl = document.createElement("p");

  if (isValidCustomElementName(ceName)) {
    ceNameValidationEl.classList.add("success");
    ceNameValidationEl.textContent = `"${ceName}" is a valid custom element name string`;
  } else {
    ceNameValidationEl.classList.add("error");
    ceNameValidationEl.textContent = `"${ceName}" isn't a valid custom element name string`;
  }

  container.appendChild(ceNameValidationEl);

  const nameValidationEl = document.createElement("p");

  if (isValidElementName(ceName)) {
    nameValidationEl.classList.add("success");
    nameValidationEl.textContent = `"${ceName}" is a valid name for createElement as defined by the HTML standard`;
  } else {
    nameValidationEl.classList.add("error");
    nameValidationEl.textContent = `"${ceName}" isn't a valid name for createElement as defined by the HTML standard`;
  }

  container.appendChild(nameValidationEl);
  container.appendChild(errorEl);
};

try {
  //#region no-hypen
  customElements.define("success", SuccessComponent);
  //#endregion no-hypen
} catch (e) {
  const noHyphenErrorContainer = document.getElementById(
    "no-hyphen-error"
  );
  showErrors(
    noHyphenErrorContainer,
    e,
    "success",
    "define"
  );
}

const nonAsciiContainer = document.getElementById(
  "non-ascii-container"
);

const nonAsciiName = "emotion-😍";

customElements.define(nonAsciiName, SuccessComponent);

try {
  const nonAsciiCE = document.createElement(nonAsciiName);
  nonAsciiContainer.appendChild(nonAsciiCE);
} catch (e) {
  showErrors(
    nonAsciiContainer,
    e,
    nonAsciiName,
    "createElement"
  );

  const workaroundTitle = document.createElement("p");
  workaroundTitle.classList.add("transition");
  workaroundTitle.textContent =
    "but when using `innerHTML`...";
  nonAsciiContainer.appendChild(workaroundTitle);

  const workaroundEl = document.createElement("div");
  workaroundEl.innerHTML = `<${nonAsciiName}></${nonAsciiName}>`;

  nonAsciiContainer.appendChild(workaroundEl);
}
