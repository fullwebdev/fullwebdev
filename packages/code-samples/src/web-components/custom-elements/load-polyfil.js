if (this.customElements) {
  try {
    customElements.define(
      "built-in",
      document.createElement("p").constructor,
      { extends: "p" }
    );
  } catch (_) {
    document.write(
      '<script src="//unpkg.com/@ungap/custom-elements-builtin"><\x2fscript>'
    );
  }
} else {
  document.write(
    '<script src="//unpkg.com/document-register-element"><\x2fscript>'
  );
}
