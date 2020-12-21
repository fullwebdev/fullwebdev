import { el } from "https://unpkg.com/redom@3.27.1/dist/redom.es.min.js";

//#region Post
class Post {
  constructor() {
    this.el = el(
      ".post",
      (this.title = el("h1")),
      (this.body = el("p"))
    );
  }

  update({ title, body }) {
    this.title.textContent = title;
    this.body.textContent = body;
  }
}
//#endregion Post

export { Post };
