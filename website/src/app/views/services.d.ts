import { Wordings } from "../languages";
import { Constructor } from "../utils/constructor";
import { WithWordingInterface } from "../utils/with-wording";

export interface ServicesWording {
  title: string;
  individuals: string;
  companies: string;
}

export type ServicesWordings = Wordings<ServicesWording>;

export type WithServicesWording = Constructor<
  WithWordingInterface<ServicesWording>
>;
