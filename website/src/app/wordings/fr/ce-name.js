/** @type {import('../../views/ce-name').CeNameWording} */
const wording = {
  title: "Nommer un élément personnalisé",
  intro: /* HTML */ `<blockquote>
      Vous pouvez reproduire les tests suivants via le paquet npm
      <a
        href="https://www.npmjs.com/package/custom-element-name"
        target="_blank"
        rel="noopener noreferrer"
        >custom-element-name</a
      >. Rendez-vous sur la <a href="/custom-element-name">documentation</a> de
      ce paquet pour plus d'informations.
    </blockquote>
    <p>Le nom d'un élément personnalisé doit :</p>
    <ul>
      <li>contenir un tiret</li>
      <li>commencer par une lettre minuscule non accentuée</li>
      <li>
        ne contenir aucune lettre majuscule (HTML n'étant pas sensible à la
        casse)
      </li>
      <li>et ... ne contenir que des caractères "valides" 🤷‍</li>
    </ul>
    <p>
      Je vous l'accorde, ce dernier point est "légèrement" déroutant. Mieux vaut
      donc s'en tenir, dans la "vraie vie", aux lettres minuscules et chiffres.
    </p>
    <p>
      Mais soyons joueurs. Le formulaire ci-dessous permet de tester si une
      chaîne de caractère peut véritablement être utilisée comme nom pour un
      élément personnalisé. Chaque erreur y est expliquée en détail.
    </p>
    <p>
      Vous pouvez également cliquer sur un des boutons suivants pour tester les
      4 résultats possibles.
    </p> `,
  test: {
    nameInfo: {
      invalidElementNameError: (name) => /* HTML */ `
        <p class="result error">
          "${name}" n'est pas un nom d'élément HTML valide
        </p>
        <p>
          Un élément personnalisé est avant tout un élément HTML. Or, tout
          élément HTML doit, d'après le standard, avoir un nom qui respecte la
          règle de production
          <a
            href="https://www.w3.org/TR/xml/#NT-Name"
            target="_blank"
            rel="noopener noreferrer"
            >Name</a
          >. Ainsi, ce nom ne peut notamment pas commencer par un chiffre ou un
          tiret.
        </p>
      `,
      notAPotentialCustomElementNameError: (name) => /* HTML */ `
        <p class="result error">
          "${name}" n'est pas un nom d'élément personnalisé valide
        </p>
        <p>
          D'après le standard HTML, un nom d'élément personnalisé doit respecter
          la règle de production
          <a
            href="https://html.spec.whatwg.org/multipage/custom-elements.html#prod-potentialcustomelementname"
            target="_blank"
            rel="noopener noreferrer"
            >PotentialCustomElementName</a
          >. Règle de production qui définit donc précisément les restrictions
          évoquées en introduction de cette page.
        </p>
        <p>Les caractères suivants sont notamment interdits :</p>
        <p>
          ! " # $ % & ' ( ) * + , / : ; < = > ? @ [ \\ ] ^ \` { | } ~ ¡ ¢ £ ¤ ¥
          ¦ § ¨ © ª « ¬ ® ¯ ° ± ² ³ ´ µ ¶ × ÷
        </p>
        <p>
          Mais de nombreux autres son autorisés, comme les lettres de l'alphabet
          grec (α, β, etc.) et les emojis.
        </p>
        <p>
          <code>&lt;math-α&gt;</code> et <code>&lt;emotion-😍&gt;</code> sont
          même présentés dans le standard comme des exemples d'éléments
          personnalisés valides.
        </p>
      `,
      alreadyUsedElementNameError: (name) => /* HTML */ `<p
          class="result warning"
        >
          "${name}" a déjà été utilisé pour définir un élément personnalisé dans
          cette page
        </p>
        <p>
          Ce nom est a priori valide, mais vous l'avez déjà testé. Ou alors,
          l'application définit déjà un élément personnalisé du même nom. Comme
          il est impossible de redéfinir un élément personnalisé existant,
          <code>customElements.define("${name}", ...)</code> aurait renvoyé une
          erreur si executé.
        </p>
        <p>
          Ici, nous avons évité cette erreur en faisant appel à
          <code>customElements.get("${name}")</code>.
        </p> `,
      unknownError: (name) => /* HTML */ `
        <p class="result warning">
          "${name}" est un nom d'élément personnalisé valide selon le
          standard... mais votre navigateur ne semble pas totalement d'accord
          avec ça.
        </p>
        <p>
          A priori, l'élément personnalisé devrait avoir été définit
          correctement pour cette page.
        </p>
        <p>
          Vous pouvez vérifier cela en lançant
          <code>customElements.get("${name}")</code> dans la console.
        </p>
        <p>
          MAIS, votre navigateur ne pense pas que ce nom soit "vraiment" valide
          dans tous les cas.
        </p>
        <p>
          Ici,
          <code>document.createElement("${name}")</code> a donc renvoyé une
          erreur.
        </p>
        <p>
          Vous pouvez cela dit créer l'élément en faisant appel à son
          constructeur, ou en utilisant <code>HTMLElement.innerHTML</code> :
        </p>
        <p>
          <code>el.innerHTML = "&lt;${name}&gt;&lt;/${name}&gt;"</code>
        </p>
      `,
      validName: (name) => /* HTML */ `<p class="result success">
          "${name}" est un nom d'élément personnalisé valide
        </p>
        <p>Tout va bien, vous pouvez tester un autre nom.</p>`,
    },
    button: "vérifier",
  },
};

export default wording;
