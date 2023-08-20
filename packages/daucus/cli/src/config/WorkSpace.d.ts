import { WorkspaceConfig } from "./DaucusConfig";

export interface WorkSpace {
  root: string;
  getConfig(): Promise<WorkspaceConfig>;
}
