import { html } from "lit-html";
import { repeat } from "lit-html/directives/repeat.js";
import { classMap } from "lit-html/directives/class-map.js";
import { sidebarState } from "../js/sidebar";

/**
 * @typedef {{text: {en: string, fr?: string}, link: string}} NavItem
 */

/**
 * @param {NavItem & { lang: 'en' | 'fr', path?: string }} data
 */
const navLink = (data) => {
  const classes = { "router-link-active": data.path === data.link };
  return html`<div class="nav-item">
    <a href=${data.link} class="nav-link ${classMap(classes)}">
      ${data.text[data.lang]}
    </a>
  </div>`;
};

/**
 * @param {NavItem & { lang: 'en' | 'fr', path?: string }} data
 */
const sidebarLink = (data) => {
  const classes = { active: data.path === data.link };
  return html`<li>
    <a
      href=${data.link}
      aria-current="page"
      class="sidebar-link ${classMap(classes)}"
    >
      ${data.text[data.lang]}
    </a>
  </li>`;
};

const sidebarButton = html`<div
  class="sidebar-button"
  @click=${() => sidebarState.toggleSidebar()}
>
  <svg
    class="icon"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="img"
    viewBox="0 0 448 512"
  >
    <path
      fill="currentColor"
      d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"
      class=""
    />
  </svg>
</div>`;

/**
 * @type {NavItem[]}
 */
const navbar = [
  {
    text: {
      en: "Home",
      fr: "Accueil",
    },
    link: "/",
  },
  {
    text: {
      en: "About",
      fr: "À propos",
    },
    link: "/about/",
  },
];

/**
 * @type {NavItem[]}
 */
const sidebar = [
  {
    text: {
      en: "About",
      fr: "À propos",
    },
    link: "/about/",
  },
  {
    text: {
      en: "Conferences",
      fr: "Conférences",
    },
    link: "/conferences/",
  },
  {
    text: {
      en: "Code Samples",
      fr: "Code & Démos",
    },
    link: "/code-samples/",
  },
  {
    text: {
      en: "Codelabs",
      fr: "Codelabs",
    },
    link: "/codelabs/",
  },
  {
    text: {
      en: "Inventory",
      fr: "Inventaire",
    },
    link: "/inventory/",
  },
  {
    text: {
      en: "Instructional Materials",
      fr: "Fragments pédagogiques",
    },
    link: "/materials/",
  },
  {
    text: {
      en: "Flashcards",
      fr: "Flashcards",
    },
    link: "/flashcards/",
  },
];

const githubLink = () => html` <a
  href="https://github.com/fullwebdev/fullwebdev"
  target="_blank"
  rel="noopener noreferrer"
  class="repo-link"
>
  GitHub
</a>`;

/**
 * @param {{ lang: "en" | "fr"; path?: string; }} data
 */
export default (data) => html` <header class="navbar">
    ${sidebarButton}
    <a class="nav-link" href="/">
      <img
        src="/images/favicon/icon-384x384.png"
        alt="FullWeb.dev"
        class="logo"
      />
      <span class="site-name can-hide">FullWeb.dev</span>
    </a>
    <div class="links" style="max-width: 1553px;">
      <nav class="nav-links can-hide">
        ${repeat(
          navbar,
          (item) => item.link,
          (item) => navLink({ ...item, ...data })
        )}
        ${githubLink()}
      </nav>
    </div>
  </header>
  <aside class="sidebar">
    <nav class="nav-links">
      ${repeat(
        navbar,
        (item) => item.link,
        (item) => navLink({ ...item, ...data })
      )}
      ${githubLink()}
    </nav>
    <ul class="sidebar-links">
      ${repeat(
        sidebar,
        (item) => item.link,
        (item) => sidebarLink({ ...item, ...data })
      )}
    </ul>
  </aside>`;
