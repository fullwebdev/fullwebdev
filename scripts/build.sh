#!/bin/bash

## Workaround to lerna run ci:build because it doesn't permit to add a precondition
## nor to return success if one or more (but not all) scripts failed
## TODO: move to monocli

PACKAGES=('website' 'materials/codelabs' 'materials/slides/wof-2' 'materials/slides/wof-1' 'materials/slides/vanilla-1' )
ROOT_DISTS=('' 'codelabs/doc' 'slides/wof' 'slides/wof1' 'slides/vanilla1' )

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
  ${ROOTWD}/node_modules/.bin/monocli check "$pkg" --tag latest
  HAS_CHANGED=$?

  if [[ $pkg == "website" ]] && [[ $HAS_CHANGED -eq 0 ]]; then
    echo "Website changed!"
    echo "Forcing all packages to rebuild."
    rm -rf "${root_dist}"
    mkdir "${root_dist}"
    FORCE=true
  fi

  if [[ $FORCE = true ]] || [[ $HAS_CHANGED -eq 0 ]]; then
    CI_BUILD_FAILED=false
    echo "[cd] $pkg"
    cd "$pkg"
    npm run build
    # TODO: check for file conflicts (website)
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
