const packages = [
  { name: 'cli', scope: "daucus", type: 'js', environment: 'node' },
  { name: 'html-loader', scope: "daucus", type: 'js', environment: 'browser' },
  { name: 'pandoc', scope: "daucus", type: 'js', environment: 'node' },
  { name: 'router', scope: "daucus", type: 'js', environment: 'browser' },
  // { name: 'helpers', scope: "", type: 'js', environment: 'browser' },
  { name: 'el', scope: "helpers", type: 'js', environment: 'browser' },
  { name: 'router', scope: "helpers", type: 'js', environment: 'browser' },
  { name: 'template', scope: "helpers", type: 'js', environment: 'browser' },
  // { name: 'code-samples', scope: "", type: 'js', environment: 'browser', materials: true },
];

export { packages };
