export type DaucusRouteMatchedEvent = CustomEvent<{
  menuHTML: string;
  path: string;
  oldProjectName: string;
  newProjectName: string;
}>;

export type AppRouteMatchedEvent = CustomEvent<{ path: string }>;
