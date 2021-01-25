import { DaucusConfig } from "./DaucusConfig";

export interface WorkSpace {
  root: string;
  getConfig(): Promise<DaucusConfig>;
}
