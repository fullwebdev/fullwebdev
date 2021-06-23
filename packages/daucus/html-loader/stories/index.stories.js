import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import "../html-loader.js";

const TEMPLATE_FILES = {
  DEMO: "./demo/template.html",
  FALLBACK: "./demo/fallback.html",
  NOPE: "./demo/nope.html",
};

export default {
  title: "HtmlLoader",
  component: "html-loader",
  argTypes: {
    href: { type: "select", options: TEMPLATE_FILES },
    fallback: { type: "select", options: TEMPLATE_FILES },
  },
};

function Template({ href, fallback }) {
  return html`
    <html-loader .href=${ifDefined(href)} fallback=${ifDefined(fallback)}>
    </html-loader>
  `;
}

export const Default = Template.bind({});

export const Regular = Template.bind({});
Regular.args = {
  href: TEMPLATE_FILES.DEMO,
};

export const Fallback = Template.bind({});
Fallback.args = {
  href: TEMPLATE_FILES.NOPE,
  fallback: TEMPLATE_FILES.FALLBACK,
};

export const HTTPError = Template.bind({});
HTTPError.args = {
  href: TEMPLATE_FILES.NOPE,
};
