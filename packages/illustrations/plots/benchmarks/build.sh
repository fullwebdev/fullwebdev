#!/usr/bin/env bash

for d in ./*/; do
  cd "$d"
  for f in ./*.gnuplot; do
    gnuplot "$f"
  done
  cd ..
done
