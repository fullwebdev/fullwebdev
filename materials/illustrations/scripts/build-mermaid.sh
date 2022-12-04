#!/usr/bin/env bash

set -e

for graph in ./graphs/*.mmd; do
  filename=$(basename "$graph" .mmd)
  echo "mmdc -i $graph -o graphs/images/${filename}.png"
  yarn run mmdc -i "$graph" -o "graphs/images/${filename}.png"
done
