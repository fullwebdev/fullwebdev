export default {
  docs: {
    children: {
      "hello-world": {
        id: "hello-world",
        position: "",
        path: "hello-world",
        templateUrl: "hello-world.html",
        title: "Hello World!",
        data: {
          title: "Demo",
        },
      },
    },
    menu:
      '<div class="section-title menu-title"><button aria-label=docs role=button>docs</button></div><ul class="collapsible menu"><li><div class=section-title><a href=/docs/hello-world>Hello World!</a></div></ul>',
  },
};
