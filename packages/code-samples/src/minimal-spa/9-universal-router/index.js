import { getPostData } from "../1-fundamentals/fetch.js";

const render = (html) => {
  document.getElementById("content").innerHTML = html;
};

//#region routes
const routes = [
  {
    path: "/",
    action: () => "<h1>Hello World!</h1>",
  },
  {
    path: "/post/:id",
    action: async (ctx) => {
      render("loading...");
      try {
        const data = await getPostData(ctx.params.id);
        return `
          <h1>${data.title}</h1>
          <p>${data.body}</p>
        `;
      } catch {
        return {
          redirect: "/notfound",
        };
      }
    },
  },
  { path: "/notfound", action: () => "<h1>Not Found</h1>" },
  {
    path: "(.*)",
    action: () => ({ redirect: "/notfound" }),
  },
];

const router = new UniversalRouter(routes);
//#endregion routes

//#region navigate
let baseUrl = "";
if (document.getElementsByTagName("base").length > 0) {
  const path = new URL(document.baseURI).pathname;
  baseUrl = path.replace(/\/$/, "");
}

async function navigate(
  path,
  redirection = true,
  update = true
) {
  //#region resolve
  const route = await router.resolve({ pathname: path });
  //#endregion resolve

  if (route.redirect) {
    navigate(route.redirect, true);
  } else {
    render(route);
    if (redirection) {
      history.replaceState({}, "", `${baseUrl}${path}`);
    } else if (update) {
      history.pushState({}, "", `${baseUrl}${path}`);
    }
  }
}
//#endregion navigate

function getPath(pathname = window.location.pathname) {
  return pathname.replace(baseUrl, "") || "/";
}

document.body.addEventListener("click", (e) => {
  if (
    e.defaultPrevented ||
    e.button !== 0 ||
    e.metaKey ||
    e.ctrlKey ||
    e.shiftKey
  ) {
    return;
  }

  const anchor = e.target;

  if (
    !anchor ||
    anchor.tagName !== "A" ||
    anchor.hasAttribute("download") ||
    anchor.getAttribute("rel") === "external"
  )
    return;

  let href = anchor.href;

  if (!href || href.includes("mailto:")) return;

  if (!href.startsWith(window.location.origin)) return;

  e.preventDefault();
  if (`${baseUrl}${href}` !== window.location.href) {
    navigate(getPath(new URL(href).pathname));
  }
});

window.onpopstate = () => {
  navigate(getPath(), false, false);
};

navigate(getPath());
