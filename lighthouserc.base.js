module.exports = {
  ci: {
    collect: {
      isSinglePageApplication: true,
      url: [
        "http://localhost/",
        "http://localhost/introduction/",
        "http://localhost/conferences/",
      ],
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
      },
    },
  },
};
