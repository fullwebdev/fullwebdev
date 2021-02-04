const heroes = [
  { id: 11, name: "Dr Nice" },
  { id: 12, name: "Narco" },
  { id: 13, name: "Bombasto" },
  { id: 14, name: "Celeritas" },
  { id: 15, name: "Magneta" },
  { id: 16, name: "RubberMan" },
  { id: 17, name: "Dynama" },
  { id: 18, name: "Dr IQ" },
  { id: 19, name: "Magma" },
  { id: 20, name: "Tornado" },
];

/**
 * @type {import('../_runner_/benchmark').BenchmarkData[]}
 */
export const data = [
  {
    id: "innerHTML",
    fn: (container) => {
      // eslint-disable-next-line no-param-reassign
      container.innerHTML = heroes
        .map(
          (hero) => /* HTML */ `
            <h2>${hero.name} Details</h2>
            <div><span>id: </span>${hero.id}</div>
            <div>
              <label
                >name:
                <input type="text" value="${hero.name}" placeholder="name" />
              </label>
            </div>
          `
        )
        .join("");
    },
  },
  {
    id: "createElement",
    fn: (container) => {
      heroes.forEach((hero) => {
        const title = document.createElement("h2");
        title.textContent = `${hero.name} Details`;
        container.appendChild(title);

        const id = document.createElement("div");
        const idSpan = document.createElement("span");
        idSpan.textContent = `id: `;
        id.appendChild(idSpan);
        // @ts-ignore cast number to a string
        const heroId = document.createTextNode(hero.id);
        id.appendChild(heroId);
        container.appendChild(id);

        const body = document.createElement("div");
        const label = document.createElement("label");
        label.textContent = "name:";
        const input = document.createElement("input");
        input.setAttribute("type", "text");
        input.type = "text";
        input.value = hero.name;
        input.placeholder = "name";
        label.appendChild(input);
        body.appendChild(label);
        container.appendChild(body);
      });
    },
  },
];
