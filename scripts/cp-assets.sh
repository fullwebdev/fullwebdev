#!/usr/bin/env bash

set -e +x

rm -rf website/public/illustrations
mkdir -p website/public/illustrations
cp -r materials/illustrations/graphs/images website/public/illustrations/graphs/images
cp -r materials/illustrations/images website/public/illustrations/images
cp -r materials/illustrations/plots website/public/illustrations/plots
