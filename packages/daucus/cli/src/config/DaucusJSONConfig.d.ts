import { WorkspaceConfig } from "./DaucusConfig";

export interface DaucusJSONConfig extends Partial<WorkspaceConfig> {
  htmlMinifierOptions: any;
}
