import { Language } from "./languages";

export interface ShellWording {
  navLinks: Array<string>;
  languageSwitch: string;
  editButton: string;
}

export type ShellWordings = Record<Language, ShellWording>;
