#!/bin/bash
set -e

mkdir -p $HOME/.ssh

# Key scan for github.com
ssh-keyscan github.com >>$HOME/.ssh/known_hosts

echo "${DEPLOY_KEY}" >>$HOME/.ssh/github
chmod 0600 $HOME/.ssh/github

cat <<EOF >>$HOME/.ssh/config
Host github
Hostname github.com
IdentityFile ~/.ssh/github
User git
EOF
