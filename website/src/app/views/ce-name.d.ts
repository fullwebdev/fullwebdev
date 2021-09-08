import { Constructor } from "../utils/constructor";
import { WithWordingInterface } from "../utils/with-wording";

type nameInfoKey =
  | "invalidElementNameError"
  | "notAPotentialCustomElementNameError"
  | "alreadyUsedElementNameError"
  | "validName"
  | "unknownError";

export interface CeNameTestWording {
  nameInfo: Record<nameInfoKey, (name: string) => string>;
  button: string;
}

export type WithCeNameTestWording = Constructor<
  WithWordingInterface<CeNameTestWording>
>;

export interface CeNameWording {
  title: string;
  intro: string;
  test: CeNameTestWording;
}

export type WithCeNameWording = Constructor<
  WithWordingInterface<CeNameWording>
>;
