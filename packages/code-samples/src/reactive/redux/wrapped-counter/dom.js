export const button = (className, text) => {
  const elmt = document.createElement("button");
  elmt.className = className;
  elmt.textContent = text;
  return elmt;
};

export const p = (...children) => {
  const elmt = document.createElement("p");
  elmt.append(...children);
  return elmt;
};
