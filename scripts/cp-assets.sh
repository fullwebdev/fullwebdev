#!/usr/bin/env bash

set -e +x

rm -rf docs/assets/graphs
rm -rf docs/assets/images
rm -rf docs/assets/plots
mkdir -p docs/assets/graphs
cp -r materials/illustrations/graphs/images docs/assets/graphs/images
cp -r materials/illustrations/images docs/assets/images
cp -r materials/illustrations/plots docs/assets/plots
