#!/usr/bin/env bash

set -e +x

rm -rf docs/assets/graphs
rm -rf docs/assets/images
mkdir -p docs/assets/graphs
cp -r packages/illustrations/graphs/images docs/assets/graphs/images
cp -r packages/illustrations/images docs/assets/images
