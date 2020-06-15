const templateStr = "<div>Hello World</div>".repeat(30);
const multi = 30;

/**
 * @type {import('../_runner_/benchmark').BenchmarkData[]}
 */
export const data = [
  {
    id: "innerHTML string",
    fn: (container) => {
      container.innerHTML = templateStr;
    },
  },
  {
    id: "innerHTML repeat string",
    fn: (container) => {
      container.innerHTML = "<div>Hello World</div>".repeat(30);
    },
    multi,
  },
  {
    id: "innerHTML concat",
    fn: (container) => {
      container.innerHTML = container.innerHTML + "<div>Hello World</div>";
    },
    multi,
  },
  {
    id: "createElement",
    fn: (container) => {
      const el = document.createElement("div");
      el.textContent = "Hello World";
      container.appendChild(el);
    },
    multi,
  },
];
