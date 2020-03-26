WARNING="<!--

  !!! DO NOT EDIT !!!
  
  THIS FILE WAS AUTO-GENERATED

  Changes to this file can be made in README.md

-->
"

HTML=$(pandoc -s src/README.md -t html --metadata title="Modern Web Apps - Demos")

echo -e "${WARNING}${HTML}" > src/index.html

git add src/index.html
