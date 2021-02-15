module.exports = {
  ci: {
    collect: {
      isSinglePageApplication: true,
      url: ["http://localhost/", "http://localhost/learn"],
    },
    upload: {
      target: "lhci",
      serverBaseUrl: "https://lhci-fullwebdev.herokuapp.com",
      token: "0e1d5fb9-ef35-4463-93d3-2e1a6f25b13f",
    },
    assert: {
      preset: "lighthouse:no-pwa",
      assertions: {
        "external-anchors-use-rel-noopener": "warn",
        // stylesheet tags wich "Does not have a media attribute that matches the user's device"
        "render-blocking-resources": ["error", { maxLength: 2 }],
        // TODO: (Lit 2.0) use a div instead of an anchor for projectCard when href is falsy
        "crawlable-anchors": "warn",
        // @material/drawer.js
        "unused-javascript": ["error", { maxLength: 1 }],
      },
    },
  },
};
