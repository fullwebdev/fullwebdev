export default {
  docs: {
    children: {
      "after-first-part": {
        id: "",
        path: "after-first-part",
        title: "Inbetween",
        templateUrl: "01a-after-first-part/README.html",
      },
      "hello-world": {
        id: "hello-world",
        path: "hello-world",
        title: "Hello World!",
        templateUrl: "hello-world.html",
      },
      "first-part": {
        id: "",
        path: "first-part",
        title: "",
        templateUrl: "01-first-part/index.html",
      },
      "second-part": {
        children: {
          "first-file": {
            id: "01-first-file",
            path: "second-part/first-file",
            title: "First file",
            templateUrl: "02-second-part/01-first-file.html",
          },
          "another-file": {
            id: "0b-another-file",
            path: "second-part/another-file",
            title: "Another file",
            templateUrl: "02-second-part/0b-another-file.html",
          },
        },
      },
    },
    id: "",
    path: "",
    title: "Pages project",
    templateUrl: "README.html",
  },
};
