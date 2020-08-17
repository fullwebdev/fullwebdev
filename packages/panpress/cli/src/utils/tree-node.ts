interface MinimalDirTree {
  name: string;
  children?: Array<MinimalDirTree>;
}

export type DirTree = MinimalDirTree & { [key: string]: any };
