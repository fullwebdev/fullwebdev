#!/bin/bash

## Workaround to lerna run ci:build because it doesn't permit to add a precondition
## nor to return success if one or more (but not all) scripts failed

## TODO: use jq via https://github.com/awesome-global-contributions/action-yq
packages=('slides/reveal')

ROOTWD=$(pwd)
echo "root set to $ROOTWD"

CI_BUILD_FAILED=true

for pkg in $packages; do
  if (bash ./check-changed.sh "$pkg"); then
    CI_BUILD_FAILED=false
    cd "$pkg"
    npm run build
    cp -RT ./dist/* "${ROOTWD}/dist/"
    cd "${ROOTWD}"
  else
    echo "skipping $pkg build"
  fi
done

if ${CI_BUILD_FAILED}; then
  echo "ALL builds failed"
  exit 1
fi
