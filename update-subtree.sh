#!/bin/bash
set -e

# inspired by https://github.com/xedi/action-subtree-sync

if [ "$1" != "--local" ]; then
  mkdir -p $HOME/.ssh
  
  # Key scan for github.com
  ssh-keyscan github.com >> $HOME/.ssh/known_hosts

  echo "${DEPLOY_KEY}" >> $HOME/.ssh/github
  chmod 0600 $HOME/.ssh/github

  cat <<EOF >> $HOME/.ssh/config
Host github
Hostname github.com
IdentityFile ~/.ssh/github
User git
EOF

fi

rm -rf /tmp/split

echo "Get release repository into split directory"
git clone github:"noelmace/data-driven-pwa" /tmp/split --bare

echo "Create the release split branch"
git subtree split --prefix="packages/data-driven-pwa" --squash -b split

echo "Push to the split directory"
git push /tmp/split split:master

echo "Push the split directory to the release origin"
cd /tmp/split
git push -u origin master
## TODO: fallback to an update branch if push failed

# Tag the subtree repository
# git tag "new-subtree-test"
# git push --tags

# DUN