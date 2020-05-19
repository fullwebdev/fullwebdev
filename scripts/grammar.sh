TEXT=$(cat $1)

lim=0
while [ ${#TEXT} -gt $lim ]; do
  start=$lim
  lim=$(($lim + 10000));
  echo -e "${TEXT:${start}:${lim}}" | pylanguagetool -l fr -t markdown --pwl .vscode/spellright.dict
  read -p "continue? [Y/n]" -n 1 -r
  echo 
  if [[ $REPLY =~ ^[nN]$ ]]
  then
      exit 0
  fi
done
