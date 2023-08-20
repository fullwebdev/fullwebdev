#!/usr/bin/env bash

set -e +x

rm -rf website/public/illustrations
rm -rf website/public/browsers-history
mkdir -p website/public/illustrations/graphs
mkdir -p website/public/browsers-history
cp -r materials/illustrations/graphs/images website/public/illustrations/graphs/images
cp -r materials/illustrations/images website/public/illustrations/images
cp -r materials/illustrations/plots website/public/illustrations/plots
cp -r materials/illustrations/browsers-history website/public/illustrations/browsers-history
cp -r materials/browsers-history/assets/* website/public/browsers-history
