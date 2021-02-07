export default {
  "docs": {
    "children": {
      "ipsum": {
        "id": "",
        "position": "02",
        "path": "ipsum",
        "templateUrl": "02-ipsum/index.html",
        "title": "Chapter 2 — Ispum",
        "children": {
          "world": {
            "id": "01-world",
            "position": "01",
            "path": "ipsum/world",
            "templateUrl": "02-ipsum/01-world.html",
            "title": "Section 1 — World!"
          }
        }
      },
      "lorem": {
        "id": "",
        "position": "01",
        "path": "lorem",
        "templateUrl": "01-lorem/README.html",
        "title": "Chapter 1 — Lorem",
        "children": {
          "more": {
            "children": {
              "foo": {
                "id": "01-foo",
                "position": "01",
                "path": "lorem/more/foo",
                "templateUrl": "01-lorem/02-more/01-foo.html",
                "title": "Part 1 — Foo"
              }
            },
            "id": "",
            "position": "02",
            "path": "lorem/more",
            "templateUrl": "01-lorem/02-more/index.html",
            "title": "Section 2 — more"
          },
          "hello": {
            "id": "01-hello",
            "position": "01",
            "path": "lorem/hello",
            "templateUrl": "01-lorem/01-hello.html",
            "title": "Section 1 — Hello"
          }
        }
      },
      "misc": {
        "children": {
          "about": {
            "id": "about",
            "position": "",
            "path": "misc/about",
            "templateUrl": "misc/about.html",
            "title": "About"
          }
        }
      }
    },
    "id": "",
    "position": "",
    "path": "",
    "templateUrl": "index.html",
    "title": "Hello Daucus!",
    "menu": "<div class=\"section-title menu-title\"><a href=/docs/ >Hello Daucus!</a></div><ul class=menu><li><div class=section-title><a href=/docs/lorem>Chapter 1 — Lorem</a></div><ul class=child-menu><li><div class=section-title><a href=/docs/lorem/hello>Section 1 — Hello</a></div><li><div class=section-title><a href=/docs/lorem/more>Section 2 — more</a></div><ul class=child-menu><li><div class=section-title><a href=/docs/lorem/more/foo>Part 1 — Foo</a></div></ul></ul><li><div class=section-title><a href=/docs/ipsum>Chapter 2 — Ispum</a></div><ul class=child-menu><li><div class=section-title><a href=/docs/ipsum/world>Section 1 — World!</a></div></ul><li><div class=section-title><button aria-label=misc role=button>misc</button></div><ul class=\"child-menu collapsible\"><li><div class=section-title><a href=/docs/misc/about>About</a></div></ul></ul>"
  },
  "book": {
    "children": {
      "ipsum": {
        "id": "",
        "position": "02",
        "path": "ipsum",
        "templateUrl": "02-ipsum/index.html",
        "title": "Chapter 2 — Ispum",
        "children": {
          "world": {
            "id": "01-world",
            "position": "01",
            "path": "ipsum/world",
            "templateUrl": "02-ipsum/01-world.html",
            "title": "Section 1 — World!"
          }
        }
      },
      "misc": {
        "children": {
          "about": {
            "id": "about",
            "position": "",
            "path": "misc/about",
            "templateUrl": "misc/about.html",
            "title": "About"
          }
        }
      }
    },
    "id": "",
    "position": "",
    "path": "",
    "templateUrl": "index.html",
    "title": "Hello Daucus!",
    "menu": "<div class=\"section-title menu-title\"><a href=/docs/ >Hello Daucus!</a></div><ul class=menu><li><div class=section-title><li><div class=section-title><a href=/docs/ipsum>Chapter 2 — Ispum</a></div><ul class=child-menu><li><div class=section-title><a href=/docs/ipsum/world>Section 1 — World!</a></div></ul><li><div class=section-title><button aria-label=misc role=button>misc</button></div><ul class=\"child-menu collapsible\"><li><div class=section-title><a href=/docs/misc/about>About</a></div></ul></ul>"
  }
}
