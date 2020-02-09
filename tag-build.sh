#!/bin/bash
# From https://github.com/weareyipyip/walking-tag-action
set -eu

printenv

git_setup ( ) {
  cat <<- EOF > $HOME/.netrc
        machine github.com
        login $GITHUB_ACTOR
        password $GITHUB_TOKEN
        machine api.github.com
        login $GITHUB_ACTOR
        password $GITHUB_TOKEN
EOF
  chmod 600 $HOME/.netrc

  git config --global user.email "actions@github.com"
  git config --global user.name "Github Actions"
}

TAG_NAME="build-${GITHUB_SHA:0:7}"

echo "Setting up git machine..."
git_setup

echo "Adding tag..."
git tag -a "${TAG_NAME}" -m "CD: ${GITHUB_SHA}" "${GITHUB_SHA}"

echo "Pushing tag..."
git push origin refs/tags/${TAG_NAME}
