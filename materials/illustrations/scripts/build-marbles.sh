#!/usr/bin/env bash

set -e

mkdir -p graphs/images/marbles/

for graph in ./graphs/rxjs/*.marble; do
  filename=$(basename "$graph" .marble)
  echo "$graph > graphs/images/marbles/${filename}.png"
  marblesgen "$graph" -o graphs/images/marbles/${filename}.svg
  convert graphs/images/marbles/${filename}.svg \
    -units PixelsPerInch -density 96 -resize 1024x \
    graphs/images/marbles/${filename}.png
done
