import { DaucusConfig } from "./DaucusConfig";

export interface DaucusJSONConfig extends Partial<DaucusConfig> {
  htmlMinifierOptions: any;
}
