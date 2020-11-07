#!/usr/bin/env bash

find . -type f -name "*.png" -not -path "*/node_modules/*" -exec identify -format "%d/%f %wpx %xdpi\n" -units PixelsPerInch {} \;
