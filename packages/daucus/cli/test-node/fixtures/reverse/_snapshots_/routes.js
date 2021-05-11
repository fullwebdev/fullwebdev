export default {
  docs: {
    children: {
      "hello-world": {
        id: "hello-world",
        position: "",
        path: "hello-world",
        templateUrl: "hello-world.html",
        title: "Hello World!",
      },
      "second-part": {
        children: {
          "another-file": {
            id: "0b-another-file",
            position: "0b",
            path: "second-part/another-file",
            templateUrl: "02-second-part/0b-another-file.html",
            title: "Another file",
          },
          "first-file": {
            id: "01-first-file",
            position: "01",
            path: "second-part/first-file",
            templateUrl: "02-second-part/01-first-file.html",
            title: "First file",
          },
        },
        id: "",
        position: "02",
        path: "second-part",
        templateUrl: "02-second-part/index.html",
        title: "Second Part",
      },
      "after-first-part": {
        id: "",
        position: "01a",
        path: "after-first-part",
        templateUrl: "01a-after-first-part/README.html",
        title: "Inbetween",
      },
      "first-part": {
        id: "",
        position: "01",
        path: "first-part",
        templateUrl: "01-first-part/index.html",
        title: "",
      },
    },
    id: "",
    position: "",
    path: "",
    templateUrl: "README.html",
    title: "Pages project",
    menu:
      '<div class="section-title menu-title"><a href=/docs/ >Pages project</a></div><ul class=menu><li><div class=section-title><a href=/docs/hello-world>Hello World!</a></div><li><div class=section-title><a href=/docs/second-part>Second Part</a></div><ul class=child-menu><li><div class=section-title><a href=/docs/second-part/another-file>Another file</a></div><li><div class=section-title><a href=/docs/second-part/first-file>First file</a></div></ul><li><div class=section-title><button aria-label=first-part role=button>first-part</button></div><li><div class=section-title><a href=/docs/after-first-part>Inbetween</a></div></ul>',
  },
};
