#!/usr/bin/env bash

convert $1 -units PixelsPerInch -density 96 -resize 1024x ${1%.*}.png
