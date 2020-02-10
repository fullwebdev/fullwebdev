#!/bin/bash
set -e

# inspired by https://github.com/xedi/action-subtree-sync

PACKAGES=('packages/data-driven-pwa')
REPOS=('noelmace/data-driven-pwa')

NBR_PACKAGES=${#PACKAGES[@]}
NBR_REPOS=${#REPOS[@]}

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
mkdir -p /tmp/split

for (( i=0; i<${NBR_PACKAGES}; i++ )); do
  
  pkg="${PACKAGES[$i]}"
  repo="${REPOS[$i]}"
  echo "== $pkg -> $repo =="

  set +e
  bash ./check-changed.sh "$pkg"
  HAS_CHANGED=$?
  set -e

  if [[ $HAS_CHANGED -eq 0 ]]; then

    echo "Get release repository into split directory"
    git clone github:"$repo" /tmp/split/$repo --bare

    echo "Create the release split branch"
    git subtree split --prefix="packages/data-driven-pwa" --squash -b split

    echo "Push to the split directory"
    git push /tmp/split/$repo split:master
    git branch -D split

    echo "Push the split directory to $repo"
    cd /tmp/split/$repo
    git push -u origin master
    ## TODO: fallback to an update branch if push failed

    ## only for tags
    # TAG_NAME=$(basename "${GITHUB_REF}")
    # echo "Tag ${TAG_NAME} in $repo"
    # git tag ${TAG_NAME}
    # git push origin refs/tags/${TAG_NAME} -f

    cd -
  else
    echo "no change in "
  fi
done
