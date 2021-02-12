import { Wordings } from "./languages";

export interface Project {
  href?: string;
  type: string;
  spotlight?: boolean;
  wip?: boolean;
  date?: string;
  img: { src: string; alt: string; height?: number };
  desc: { title: string; subtitle: string };
  cta?: Array<{ href: string; text: string; primary?: boolean }>;
}

export interface ProjectListWording {
  title: string;
  abstract: string;
  items: Array<Project> | string;
}

export type ProjectListWordings = Wordings<ProjectListWording>;
