import { html } from "lit-html";
import logo from "~app/js/components/logo.js";
import home from "@panpress/webapp/components/home.js";

export default () =>
  home({
    heroText: "The Full Web",
    heroSubText: "Developer",
    actionText: "Let's go",
    license: "MIT & CC BY-NC-SA Licensed",
    copyright: "Copyright © 2020 fullwebdev, Noël Macé",
    tagline: "Alpha Version",
    features: [
      {
        title: "Accessible",
        details:
          "Our first goal is to help everyone master modern web development. This requires taking action against discriminations. Following the principles of web accessibility and making our creations as understandable as possible is only the first step.",
      },
      {
        title: "Future-proof",
        details:
          "FullWeb.dev is against all dogmatism. We strive for long term substainability of webdev skills and projects. We strongly believe that focusing on the web platform itself and understanding what exactly makes each tool's strengths and weaknesses is the best way to achieve this goal.",
      },
      {
        title: "Open & Fair",
        details:
          "Most of our creations are Open-Source, in order to facilitate contributions. However, some of our content may require copyright or paywall. When this is the case, we do our best to never discriminate against anyone.",
      },
    ],
    logo: logo(),
    content: html`<div class="banner">
      This project is at a very early stage. And we are by no means infallible,
      of course. So if you have any questions, ideas, comments or advice, please
      share them with us via
      <a
        href="https://github.com/fullwebdev/fullwebdev/issues/new"
        target="_blank"
        rel="noopener noreferrer"
        >a Github issue</a
      >
      or
      <a
        href="https://twitter.com/messages/compose?recipient_id=191620154"
        target="_blank"
        rel="noopener noreferrer"
        >a direct message on Twitter</a
      >. Especially if you think we are failing to meet the above commitments.
    </div> `,
  });
