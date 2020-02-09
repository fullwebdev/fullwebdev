#!/bin/bash
set -e

# This script test if
# the paths passed as an argument haven't changed.
# 
# Example usage:
# ./check-changed.sh path/to/dir1 path/to/dir2
# 
# For reference:
# https://gist.github.com/naesheim/18d0c0a58ee61f4674353a2f4cf71475
# https://discuss.circleci.com/t/ability-to-return-successfully-from-a-job-before-completing-all-the-next-steps/12969/4


# 1. Get all the arguments of the script
# https://unix.stackexchange.com/a/197794
PATHS_TO_SEARCH="$*"

# 2. Make sure the paths to search are not empty
if [ -z "$PATHS_TO_SEARCH" ]; then
    echo "Please provide the paths to search for."
    echo "Example usage:"
    echo "./exit-if-path-not-changed.sh path/to/dir1 path/to/dir2"
    exit 2
fi

# 3. Get the latest commit in the searched paths
LATEST_COMMIT_IN_PATH=$(git log -1 --format=format:%H --full-diff ${PATHS_TO_SEARCH})
echo "Latest commit in ${PATHS_TO_SEARCH} is ${LATEST_COMMIT_IN_PATH:0:7}"

# 4. test of the "latest" tags contains this commit
NUMBER_OF_RELEASES=$(git tag 'latest' --contains ${LATEST_COMMIT_IN_PATH} | wc -l)

if [ "${NUMBER_OF_RELEASES}" -gt "0" ]; then
    echo "${LATEST_COMMIT_IN_PATH:0:7} have already been deployed"
    exit 1
fi

echo "${LATEST_COMMIT_IN_PATH:0:7} have not been deployed yet"
exit 0
