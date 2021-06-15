import { Wordings } from "../languages";

export interface CallToActionParams {
  href?: string;
  text: string;
  primary?: boolean;
  onclick?: EventListener;
}
export interface Project {
  href?: string;
  type?: string;
  spotlight?: boolean;
  wip?: boolean;
  date?: string;
  backgroundImg?: string;
  img?: { src: string; alt: string; height?: number };
  desc: { title: string; subtitle: string };
  cta?: Array<CallToActionParams>;
}

export interface ProjectListWording {
  title: string;
  abstract?: string;
  items: Array<Project> | string;
  cta?: Array<CallToActionParams>;
}

export type ProjectListWordings = Wordings<ProjectListWording>;
