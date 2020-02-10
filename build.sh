#!/bin/bash

## Workaround to lerna run ci:build because it doesn't permit to add a precondition
## nor to return success if one or more (but not all) scripts failed

## TODO: use jq via https://github.com/awesome-global-contributions/action-yq
PACKAGES=('slides/reveal')
ROOT_DISTS=('slides/reveal')

NBR_PACKAGES=${#PACKAGES[@]}
NBR_ROOT_DISTS=${#ROOT_DISTS[@]}

if [[ "$1" == "-f" ]]; then
  echo "Force build"
  FORCE=true
fi

if [[ "${NBR_PACKAGES}" -ne "${NBR_ROOT_DISTS}" ]]; then
  echo "Configuration error"
  exit 2
fi

ROOTWD=$(pwd)
echo "root set to $ROOTWD"

CI_BUILD_FAILED=true

for (( i=0; i<${NBR_PACKAGES}; i++ )); do
  pkg="${PACKAGES[$i]}"
  echo "Package: $pkg"
  root_dist="${ROOTWD}/dist/${ROOT_DISTS[$i]}"
  if [[ $FORCE = true ]] || (bash ./check-changed.sh "$pkg"); then
    CI_BUILD_FAILED=false
    cd "$pkg"
    npm run build
    rm -rf "${root_dist}"
    mkdir -p "${root_dist}"
    cp -RT ./dist "${root_dist}"
    cd "${ROOTWD}"
  else
    echo "skipping $pkg build"
  fi
done

if ${CI_BUILD_FAILED}; then
  echo "Nothing to build!"
  exit 1
fi
