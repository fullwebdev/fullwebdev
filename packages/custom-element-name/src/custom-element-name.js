/**
 * Validate against PotentialCustomElementName
 * @see https://html.spec.whatwg.org/multipage/custom-elements.html#prod-potentialcustomelementname
 * @see https://github.com/whatwg/html/issues/1754
 *
 * @param {string} str custom element name to validate
 */
export const matchPotentialCustomElementName = (str) => {
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

  return new RegExp(PotentialCustomElementName, "u").test(str);
};
