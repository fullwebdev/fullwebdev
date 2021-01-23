export const init = function () {
  const container = document.createElement("div");
  document.body.append(container);
  return { container };
};

// prettier-ignore
export const tests = {
createElement: function ({ container }) {
  for (let i = 0; i < 10; i++) {
    const div = document.createElement('div');
    div.textContent = 'Hello World!';
    container.appendChild(div);
  }
},
innerHTML: function ({ container }) {
  container.innerHTML = `
    <div>Hello World!</div>
    <div>Hello World!</div>
    <div>Hello World!</div>
    <div>Hello World!</div>
    <div>Hello World!</div>
    <div>Hello World!</div>
    <div>Hello World!</div>
    <div>Hello World!</div>
    <div>Hello World!</div>
    <div>Hello World!</div>
  `;
},
};
