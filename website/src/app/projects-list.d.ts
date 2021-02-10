import { Wordings } from "./languages";

export interface Project {
  href?: string;
  type: string;
  spotlight?: boolean;
  img: { src: string; alt: string; height: number };
  desc: { title: string; subtitle: string };
  cta?: Array<{ href: string; text: string; primary?: boolean }>;
}

export interface ProjectListWording {
  title: string;
  abstract: string;
  items: Array<Project>;
}

export type ProjectListWordings = Wordings<ProjectListWording>;
