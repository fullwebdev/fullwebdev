#!/usr/bin/env bash

find . -name "*.gnuplot" -exec echo {} \; -exec gnuplot {} \;
