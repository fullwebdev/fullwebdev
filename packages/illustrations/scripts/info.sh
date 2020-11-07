#!/usr/bin/env bash

find . -type f -name "*.png" -not -path "*/node_modules/*" -exec identify -format "%d/%f %wpx %xdpi\n" -units PixelsPerInch {} \;

echo -e "\n==other formats==\n"

find . -type f -name "*.svg" -not -path "*/node_modules/*"
find . -type f -name "*.jpg" -not -path "*/node_modules/*"
