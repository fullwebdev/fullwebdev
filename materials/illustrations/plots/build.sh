#!/usr/bin/env bash

find ${1:-$(dirname $0)} -name "*.gnuplot" -exec echo {} \; -exec gnuplot {} \;
