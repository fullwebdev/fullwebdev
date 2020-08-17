export interface Config {
  repository: {
    url: string;
    root: string;
    branch: string;
    submodules: {
      [key: string]: {
        url: string;
        branch: string;
        path: string;
      };
    };
  };
  additionnalPages: {
    src: string;
    base: string;
    dest: string;
    extract: boolean;
  }[];
}
