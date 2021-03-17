/** @type {import('../../views/ce-name').CeNameWording} */
const wording = {
  title: "Naming a Custom Element",
  intro: /* HTML */ `<p>
      When using <code>customElements.define(name, clazz)</code>, the
      <code>name</code> string should :
    </p>
    <ul>
      <li>include a dash</li>
      <li>start with a unaccented lowercase letter</li>
      <li>contain no uppercase letter (because HTML isn't case sensitive)</li>
      <li>and... only use "valid" characters.</li>
    </ul>
    <p>
      Well, this last rule is a little weird. In everyday life, it's way easier
      to only use unaccented latin lowercase letters, and maybe some digits.
      That it.
    </p>
    <p>
      But it's way more complicated than that. So, I made this little tool and a
      npm package
      <a
        href="https://www.npmjs.com/package/custom-element-name"
        target="_blank"
        rel="noopener noreferrer"
        >custom-element-name</a
      >
      to help you better understand how it works. Just type a sequence of
      characters in the following text field, submit the form, and you'll see if
      you can use this string as a custom element name.
    </p>
    <p>If the string is invalid, it will give you a detailled explaination.</p>
    <p>
      Or just click one of the following buttons to test the 4 different use
      cases.
    </p> `,
  test: {
    nameInfo: {
      invalidElementNameError: (name) => /* HTML */ `
        <p class="result error">"${name}" isn't a valid element name.</p>
        <p>
          A custom element is, above all, an HTML element. The HTML standard
          states that any element should be named according to a production rule
          called
          <a
            href="https://www.w3.org/TR/xml/#NT-Name"
            target="_blank"
            rel="noopener noreferrer"
            >Name</a
          >.
        </p>
        <p>Thus, this name can't start with a digit or a dash, for example.</p>
      `,
      notAPotentialCustomElementNameError: (name) => /* HTML */ `
        <p class="result error">"${name}" isn't a valid custom element name.</p>
        <p>
          According to the HTML living standard, a custom element name should
          follow the
          <a
            href="https://html.spec.whatwg.org/multipage/custom-elements.html#prod-potentialcustomelementname"
            target="_blank"
            rel="noopener noreferrer"
            >PotentialCustomElementName</a
          >
          production rule.
        </p>
        <p>Therefore, we can't use characters like:</p>
        <p></p>
        <p>
          ! " # $ % & ' ( ) * + , / : ; < = > ? @ [ \\ ] ^ \` { | } ~ ¡ ¢ £ ¤ ¥
          ¦ § ¨ © ª « ¬ ® ¯ ° ± ² ³ ´ µ ¶ × ÷
        </p>
        <p>
          But many more characters are allowed, like grec letters (α, β, etc.)
          and emojis.
        </p>
        <p>
          Elements like <code>&lt;math-α&gt;</code> and
          <code>&lt;emotion-😍&gt;</code> are given as examples of valid custom
          elements.
        </p>
      `,
      alreadyUsedElementNameError: (name) => /* HTML */ `
        <p class="result warning">"${name}" was already used on this page.</p>
        <p>
          It would seem that this name is valid. But you already tested it, or
          it was already used by this app.
        </p>
        <p>
          You can't redefine a custom element. Therefore, you can't call
          <code>customElements.define("${name}", ...)</code> a second time.
        </p>
        <p>
          Here, in order to avoid this error, we tested if this name was already
          used by calling <code>customElements.get("${name}")</code>.
        </p>
      `,
      unknownError: (name) => /* HTML */ `
        <p class="result warning">
          According to the HTML living standard, "${name}" is a valid custom
          element name. Yet, your browser isn't OK with that.
        </p>
        <p>
          So first, this custom element should have been defined without any
          problem.
        </p>
        <p>
          You can verify this by running
          <code>customElements.get("${name}")</code> in the console.
        </p>
        <p>
          BUT, this browser doesn't think this name is "really" valid. Which
          leads to an error when running
          <code>document.createElement("${name}")</code>.
        </p>
        <p>
          Well OK, you can still use this name if you really want to. Instead of
          using createElement, you can directly call the custom element
          constructor, or use innerHTML:
        </p>
        <p>
          <code>el.innerHTML = "&lt;${name}&gt;&lt;/${name}&gt;"</code>
        </p>
      `,
      validName: (name) => /* HTML */ `
        <p class="result success">"${name}" is a valid custom element name</p>
        <p>Nothing special about it.</p>
      `,
    },
    button: "check",
  },
};

export default wording;
