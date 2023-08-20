import page from "https://unpkg.com/page/page.mjs";
import { getPostData } from "../1-fundamentals/fetch.js";

const render = (html) => {
  document.getElementById("content").innerHTML = html;
};

page.base("/minimal-spa/8-pagejs");

//#region routes
page("/", () => {
  render("Hello World!");
});

page("/post/:id", async (ctx) => {
  render("loading...");
  try {
    const data = await getPostData(ctx.params.id);
    render(`
      <h1>${data.title}</h1>
      <p>${data.body}</p>
    `);
  } catch {
    page.redirect("/notfound");
  }
});

page("/notfound", () => {
  render("not found");
});

page("*", "/home");
//#endregion routes

//#region config
page({
  click: true,
  popstate: false,
});
//#endregion config
