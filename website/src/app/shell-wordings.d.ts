import { Language } from "./languages";

export interface ShellWording {
  navLinks: Array<string>;
  languageSwitch: string;
  languageSwitcherLabel: string;
  editButton: string;
  copyright: string;
}

export type ShellWordings = Record<Language, ShellWording>;
