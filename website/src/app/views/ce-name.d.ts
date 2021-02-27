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

export interface CeNameWording {
  title: string;
  intro: string;
  test: CeNameTestWording;
}
