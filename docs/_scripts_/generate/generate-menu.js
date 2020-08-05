const path = require("path");
const { readDirTree } = require("../utils/dir-tree");
const { getMenu } = require("./menu");
const { generateMenuData } = require('./menu-with-titles');

(async () => {
  // const dirPath = path.resolve(__dirname, "..", "..", "views");
  // const menuData = await readDirTree(dirPath, ".js");

  // console.log(menuData);

  // /**
  //  * - si path ou menu (au click)
  //  *    - si path
  //  *        - navigation
  //  *    - si menu
  //  *        - si niveau avant navigation < 2
  //  *           - dérouler le menu
  //  *        - sinon afficher nouveau menu avec titre pointant du << back
  //  */
  // console.log(JSON.stringify(getMenu(menuData, ["en"]), null, 2));
  // console.log(JSON.stringify(getMenu(menuData,["en", "flashcards"]), null, 2));
  // console.log(JSON.stringify(getMenu(menuData, ["en", "materials"]), null, 2));
  // console.log(JSON.stringify(getMenu(menuData, ["en", "materials", "2-components"]), null, 2));

  console.log(JSON.stringify(await generateMenuData(), null, 2));
})();
