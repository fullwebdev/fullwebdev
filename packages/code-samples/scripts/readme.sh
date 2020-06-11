# TODO: move to vuepress

WARNING="<!--

  !!! DO NOT EDIT !!!

  THIS FILE WAS AUTO-GENERATED

  Changes to this file can be made in README.md

-->
"

function build_index() {
  HTML=$(pandoc -s src/README.md -t html --metadata title="Modern Web Apps - Demos")

  echo -e "${WARNING}${HTML}" > src/index.html
}

build_index

if [ "$1" = "--watch" ]; then
  echo "watching src/README.md..."

  # requires https://github.com/inotify-tools/inotify-tools/wiki
  while inotifywait -e modify src/README.md; do
    build_index
    echo "new version"
  done
fi;
