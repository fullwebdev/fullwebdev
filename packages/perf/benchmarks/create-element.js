const suite = new Benchmark.Suite();

const input = 5.9;

const container = document.createElement("div");
document.body.append(container);

suite
  .add("createElement", function () {
    for (let i = 0; i < 10; i++) {
      const div = document.createElement("div");
      div.textContent = "Hello World!";
      container.appendChild(div);
    }
  })
  .add("innerHTML", function () {
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
  })
  .on("cycle", function (event) {
    console.log(String(event.target));
  })
  .on("complete", function () {
    console.log("Fastest is " + this.filter("fastest").map("name"));
  })
  .run({ async: false });
