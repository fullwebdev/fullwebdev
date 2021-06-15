import { Wordings } from "../languages";

export interface ServicesWording {
  title: string;
  individuals: string;
  companies: string;
}

export type ServicesWordings = Wordings<ServicesWording>;
