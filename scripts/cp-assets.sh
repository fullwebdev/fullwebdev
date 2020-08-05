#!/usr/bin/env bash

set -e +x

rm -rf docs/.vuepress/public/graphs
rm -rf docs/.vuepress/public/images
mkdir -p docs/.vuepress/public/graphs
cp -r packages/illustrations/graphs/images docs/images/graphs/images
cp -r packages/illustrations/images docs/images
