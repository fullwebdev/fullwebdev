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
    path: "",
    position: "",
    title: "Pages project",
    templateUrl: "README.html",
  },
};
