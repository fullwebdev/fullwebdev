//#region import
import {
  html,
  render,
} from "https://unpkg.com/lit-html@2.0.0-pre.5/lit-html.js";
//#endregion import

//#region say-hello
function SayHello({ toWhat }) {
  return html`Hello ${toWhat}`;
}
//#endregion say-hello

//#region home
function Home({ appName, style, helloTo }) {
  return html`
    <main style="${style}">
      <h1>${appName}</h1>
      ${SayHello({ toWhat: helloTo })}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua.
      </p>
    </main>
  `;
}
//#endregion home

//#region render
const homeParams = {
  helloTo: "the World",
  appName: "Demo",
  style: "text-align: center",
};

const root = document.getElementById("root");

render(Home(homeParams), root);
//#endregion render

// Something else appens...

setTimeout(() => {
  //#region update
  homeParams.helloTo = "somebody else";

  render(Home(homeParams), root);
  //#endregion update
}, 1000);
