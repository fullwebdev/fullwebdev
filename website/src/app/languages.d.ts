export type Language = "en" | "fr";

export type Wording = { [key: string]: Wording };

export type Wordings = { [key in Language]: Wording };
