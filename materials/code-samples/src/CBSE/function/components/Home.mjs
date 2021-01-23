import { SayHello } from "./SayHello.mjs";

//#region home
function Home({ appName, style, helloTo }) {
  return `
    <main style="${style}">
      <h1>${appName}</h1>
      <div class="hello">
        ${SayHello({ toWhat: helloTo })}
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua.
      </p>
    </main>
  `;
}
//#endregion home

export { Home };
