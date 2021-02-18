/* eslint-disable lit-a11y/click-events-have-key-events */
import { html } from "lit-html";
import { unsafeHTML } from "lit-html/directives/unsafe-html";
import { ifDefined } from "lit-html/directives/if-defined";
import routes from "../demo/routes.js";
import "../daucus-menu.js";

export default {
  title: "Daucus Menu",
  component: "daucus-menu",
  argTypes: {
    project: { type: "string", options: ["docs", "book"] },
    activePath: { type: "string" },
  },
};

function Template({ project, activePath }) {
  const mockClickListener = (e) => {
    const target = e.composedPath()[0];
    if (target instanceof HTMLAnchorElement) {
      console.log(`link clicked: href=${target.href}`);
    } else if (target instanceof HTMLButtonElement) {
      console.log(`button clicked: textContent=${target.textContent}`);
    }
    e.preventDefault();
  };
  // TODO: export default styles & dedup
  return html`
    <style>
      daucus-menu {
        padding: 2rem 2.5rem;
        margin: 0 auto;
        max-width: 740px;
        text-align: left;
      }

      daucus-menu .menu-title {
        font-weight: bold;
        font-size: 20px;
      }

      daucus-menu ul {
        list-style: none;
      }

      daucus-menu li {
        padding: 7px 0;
      }

      daucus-menu button {
        background: none;
        border: none;
        padding: 0;
        font-family: inherit;
        cursor: pointer;
        font-size: 1em;
        color: var(--daucus-menu-default-color, #666);
        display: flex;
        align-items: center;
        width: 100%;
      }

      daucus-menu button:after {
        content: "›";
        width: 1em;
        height: 1em;
        font-weight: bold;
        color: var(--daucus-menu-default-color, #666);
        text-align: center;
        transition: all 0.1s;
        transform-origin: center;
        line-height: 1em;
        margin-left: 0.5em;
      }

      daucus-menu button[aria-pressed="true"]:after {
        transform: rotate(90deg);
      }

      daucus-menu a {
        color: inherit;
        text-decoration: none;
      }

      daucus-menu .menu {
        padding: 0;
      }

      daucus-menu .child-menu {
        padding: 7px 0 0px 20px;
        overflow: hidden;
        max-height: 0px;
        transition: max-height 150ms ease-out;
      }

      daucus-menu .child-menu.open {
        max-height: 50vh;
        transition: max-height 1s ease-out;
      }

      daucus-menu .section-title.active {
        color: var(--daucus-menu-active-color, #b20000);
        font-weight: bold;
      }
    </style>
    <div @click=${mockClickListener}>
      <daucus-menu active-path=${ifDefined(activePath)}>
        ${unsafeHTML(routes[project].menu)}
      </daucus-menu>
    </div>
  `;
}

export const Docs = Template.bind({});
Docs.args = {
  project: "docs",
};

export const Book = Template.bind({});
Book.args = {
  project: "book",
};

export const ActivePath = Template.bind({});
ActivePath.args = {
  project: "docs",
  activePath: "/docs/lorem/more/foo",
};
