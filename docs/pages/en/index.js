import home from "../../js/components/home.js";

export default () =>
  home({
    heroText: "Full Web",
    heroSubText: "Development",
    actionText: "Let's go",
    footer: "Copyright © 2020 Noël Macé",
    tagline: "Mastering the whole Modern Web",
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
  });
