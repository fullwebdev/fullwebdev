export default {
  docs: {
    id: "",
    path: "",
    title: "Home",
    templateUrl: "index.html",
    children: {
      chapter1: {
        id: "",
        path: "chapter1/",
        title: "Chapter 1",
        templateUrl: "chapter1/index.html",
        children: {
          section1: {
            id: "",
            path: "chapter1/section1/",
            title: "Chapter 1 - Section 1",
            templateUrl: "chapter1/section1/index.html",
            children: {
              file1: {
                id: "file1",
                path: "chapter1/section1/file1",
                title: "Chapter 1 - Section 1 - file 1",
                templateUrl: "chapter1/section1/file1.html",
              },
              file2: {
                id: "file2",
                path: "chapter1/section1/file2",
                title: "Chapter 1 - Section 1 - file 2",
                templateUrl: "chapter1/section1/file2.html",
              },
            },
          },
          section2: {
            id: "",
            path: "chapter1/section2/",
            title: "Chapter 1 - Section 2",
            templateUrl: "chapter1/section2/index.html",
            children: {
              file1: {
                id: "file1",
                path: "chapter1/section2/file1",
                title: "Chapter 1 - Section 2 - file 1",
                templateUrl: "chapter1/section2/file1.html",
              },
              file2: {
                id: "file2",
                path: "chapter1/section2/file2",
                title: "Chapter 1 - Section 2 - file 2",
                templateUrl: "chapter1/section2/file2.html",
              },
            },
          },
        },
      },
      chapter2: {
        id: "",
        path: "chapter2/",
        title: "Chapter 2",
        templateUrl: "chapter2/index.html",
        children: {
          section1: {
            id: "",
            path: "chapter2/section1/",
            title: "Chapter 2 - Section 1",
            templateUrl: "chapter2/section1/index.html",
            children: {
              file1: {
                id: "file1",
                path: "chapter2/section1/file1",
                title: "Chapter 2 - Section 1 - file 1",
                templateUrl: "chapter2/section1/file1.html",
              },
              file2: {
                id: "file2",
                path: "chapter2/section1/file2",
                title: "Chapter 2 - Section 1 - file 2",
                templateUrl: "chapter2/section1/file2.html",
              },
            },
          },
          section2: {
            id: "",
            path: "chapter2/section2/",
            title: "Chapter 2 - Section 2",
            templateUrl: "chapter2/section2/index.html",
            children: {
              file1: {
                id: "file1",
                path: "chapter2/section2/file1",
                title: "Chapter 2 - Section 2 - file 1",
                templateUrl: "chapter2/section2/file1.html",
              },
              file2: {
                id: "file2",
                path: "chapter2/section2/file2",
                title: "Chapter 2 - Section 2 - file 2",
                templateUrl: "chapter2/section2/file2.html",
              },
            },
          },
        },
      },
    },
  },
};
