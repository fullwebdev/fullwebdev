export interface ColorSchemeChangeData {
  colorScheme: string;
}

export interface ColorSchemeChangeEventDetail {
  detail: ColorSchemeChangeData;
}

export type ColorSchemeChangeEvent = CustomEvent<ColorSchemeChangeData>;

export class DarkModeElement extends HTMLElement {
  mode: string;
}
