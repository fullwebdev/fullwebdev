const packages = [
  { name: "cli", scope: "daucus", type: "js", environment: "node" },
  { name: "html-loader", scope: "daucus", type: "js", environment: "browser" },
  { name: "menu", scope: "daucus", type: "js", environment: "browser" },
  { name: "pandoc", scope: "daucus", type: "js", environment: "node" },
  { name: "router", scope: "daucus", type: "js", environment: "browser" },
  // { name: 'helpers', scope: "", type: 'js', environment: 'browser' },
  { name: "custom-element-name", scope: "", type: 'js', environment: 'browser' },
  { name: "el", scope: "helpers", type: "js", environment: "browser" },
  { name: "router", scope: "helpers", type: "js", environment: "browser" },
  { name: "template", scope: "helpers", type: "js", environment: "browser" },
  // { name: "website", scope: "/", type: "js", environment: "browser", root: "" },
  // { name: 'code-samples', scope: "", type: 'js', environment: 'browser', root: "materials"},
];

export { packages };
