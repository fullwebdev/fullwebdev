import { Language } from "../languages";

export interface WithWordingInterface<W> {
  readonly w: W;

  lang: Language;

  wording: W | null;
}
