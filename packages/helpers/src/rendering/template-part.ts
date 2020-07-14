export interface TemplatePart {
  key: string;
  formatter: (data: any) => any;
}

interface AbsPartMeta {
  type: "attribute" | "class" | "text";
  path: number[];
  formatter: (data: any) => any;
}

export interface AttributePartMeta extends AbsPartMeta {
  type: "attribute";
  name: string;
}
export interface ClassPartMeta extends AbsPartMeta {
  type: "class";
  name: string;
}

export interface TextPartMeta extends AbsPartMeta {
  type: "text";
}

export type PartMeta = AttributePartMeta | ClassPartMeta | TextPartMeta;
