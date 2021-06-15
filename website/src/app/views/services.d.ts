import { Wordings } from "../languages";

export interface ServicesWording {
  title: string;
  choices: Array<{
    href: string;
    text: string;
    image: { url: string; alt: string };
  }>;
}

export type ServicesWordings = Wordings<ServicesWording>;
