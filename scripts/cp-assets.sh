#!/usr/bin/env bash

set -e +x

rm -rf docs/assets/graphs
rm -rf docs/assets/images
rm -rf docs/assets/plots
mkdir -p docs/assets/graphs
cp -r packages/illustrations/graphs/images docs/assets/graphs/images
cp -r packages/illustrations/images docs/assets/images
cp -r packages/illustrations/plots docs/assets/plots
