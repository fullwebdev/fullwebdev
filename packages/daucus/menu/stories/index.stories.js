/* eslint-disable lit-a11y/click-events-have-key-events */
import { html } from "lit-html";
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
  return html`
    <div @click=${mockClickListener}>
      <daucus-menu
        .routes=${routes}
        project=${ifDefined(project)}
        active-path=${ifDefined(activePath)}
      >
      </daucus-menu>
    </div>
  `;
}

export const Default = Template.bind({});

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
