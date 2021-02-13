export default {
  "another-project": {
    __: {
      children: {
        infos: {
          children: {
            lorem: {
              id: "lorem",
              position: "",
              path: "infos/lorem",
              templateUrl: "infos/lorem.html",
              title: "Lorem Ipsum",
            },
          },
        },
      },
      id: "",
      position: "",
      path: "",
      templateUrl: "README.html",
      title: "Project w/o i18n directories",
      menu:
        '<div class="section-title menu-title"><a href=/another-project/ >Project w/o i18n directories</a></div><ul class=menu><li><div class=section-title><button aria-label=infos role=button>infos</button></div><ul class="child-menu collapsible"><li><div class=section-title><a href=/another-project/infos/lorem>Lorem Ipsum</a></div></ul></ul>',
    },
  },
  docs: {
    en: {
      children: {
        "after-first-part": {
          id: "",
          position: "01a",
          path: "after-first-part",
          templateUrl: "01a-after-first-part/README.html",
          title: "Inbetween",
        },
        "hello-world": {
          id: "hello-world",
          position: "",
          path: "hello-world",
          templateUrl: "hello-world.html",
          title: "Hello World!",
        },
        "second-part": {
          children: {
            "first-file": {
              id: "01-first-file",
              position: "01",
              path: "second-part/first-file",
              templateUrl: "02-second-part/01-first-file.html",
              title: "First file",
            },
            "another-file": {
              id: "0b-another-file",
              position: "0b",
              path: "second-part/another-file",
              templateUrl: "02-second-part/0b-another-file.html",
              title: "Another file",
            },
          },
          id: "",
          position: "02",
          path: "second-part",
          templateUrl: "02-second-part/index.html",
          title: "Second Part",
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
        '<div class="section-title menu-title"><a href=/docs/ >Pages project</a></div><ul class=menu><li><div class=section-title><a href=/docs/after-first-part>Inbetween</a></div><li><div class=section-title><button aria-label=first-part role=button>first-part</button></div><li><div class=section-title><a href=/docs/second-part>Second Part</a></div><ul class=child-menu><li><div class=section-title><a href=/docs/second-part/first-file>First file</a></div><li><div class=section-title><a href=/docs/second-part/another-file>Another file</a></div></ul><li><div class=section-title><a href=/docs/hello-world>Hello World!</a></div></ul>',
    },
    fr: {
      children: {
        "second-part": {
          children: {
            "another-file": {
              id: "0b-another-file",
              position: "0b",
              path: "second-part/another-file",
              templateUrl: "02-second-part/0b-another-file.html",
              title: "Un autre fichier",
            },
            "first-file": {
              id: "01-first-file",
              position: "01",
              path: "second-part/first-file",
              templateUrl: "02-second-part/01-first-file.html",
              title: "Premier fichier",
            },
          },
          id: "",
          position: "02",
          path: "second-part",
          templateUrl: "02-second-part/index.html",
          title: "Seconde partie",
        },
        "after-first-part": {
          id: "",
          position: "01a",
          path: "after-first-part",
          templateUrl: "01a-after-first-part/README.html",
          title: "Au milieu",
        },
        "first-part": {
          id: "",
          position: "01",
          path: "first-part",
          templateUrl: "01-first-part/index.html",
          title: "",
        },
        "hello-world": {
          id: "hello-world",
          position: "",
          path: "hello-world",
          templateUrl: "hello-world.html",
          title: "Bonjour le Monde !",
        },
      },
      id: "",
      position: "",
      path: "",
      templateUrl: "README.html",
      title: "Projet avec des pages",
      menu:
        '<div class="section-title menu-title"><a href=/docs/ >Projet avec des pages</a></div><ul class=menu><li><div class=section-title><a href=/docs/after-first-part>Au milieu</a></div><li><div class=section-title><button aria-label=first-part role=button>first-part</button></div><li><div class=section-title><a href=/docs/second-part>Seconde partie</a></div><ul class=child-menu><li><div class=section-title><a href=/docs/second-part/first-file>Premier fichier</a></div><li><div class=section-title><a href=/docs/second-part/another-file>Un autre fichier</a></div></ul><li><div class=section-title><a href=/docs/hello-world>Bonjour le Monde !</a></div></ul>',
    },
  },
};
