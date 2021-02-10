export type Language = "en" | "fr";

export type Wordings<T> = { [key in Language]: T };
