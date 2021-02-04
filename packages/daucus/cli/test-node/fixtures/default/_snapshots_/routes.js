export default {
  docs: {
    children: {
      "after-first-part": {
        id: "",
        path: "after-first-part",
        title: "Inbetween",
        position: "01a",
        templateUrl: "01a-after-first-part/README.html",
      },
      "hello-world": {
        id: "hello-world",
        path: "hello-world",
        title: "Hello World!",
        position: "",
        templateUrl: "hello-world.html",
      },
      "first-part": {
        id: "",
        path: "first-part",
        position: "01",
        title: "",
        templateUrl: "01-first-part/index.html",
      },
      "second-part": {
        children: {
          "first-file": {
            id: "01-first-file",
            path: "second-part/first-file",
            title: "First file",
            position: "01",
            templateUrl: "02-second-part/01-first-file.html",
          },
          "another-file": {
            id: "0b-another-file",
            path: "second-part/another-file",
            position: "0b",
            title: "Another file",
            templateUrl: "02-second-part/0b-another-file.html",
          },
        },
      },
    },
    id: "",
    menu:
      '<div class="section-title menu-title"><a href=/docs/ >Pages project</a></div><ul class=menu><li><div class=section-title><a href=/docs/after-first-part>Inbetween</a></div><li><div class=section-title>first-part</div><li><div class=section-title>second-part</div><ul class=child-menu><li><div class=section-title><a href=/docs/second-part/first-file>First file</a></div><li><div class=section-title><a href=/docs/second-part/another-file>Another file</a></div></ul><li><div class=section-title><a href=/docs/hello-world>Hello World!</a></div></ul>',
    path: "",
    position: "",
    title: "Pages project",
    templateUrl: "README.html",
  },
};
