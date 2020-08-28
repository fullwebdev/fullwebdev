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
  environments: {
    prod: {
      host: string;
      // TODO
      // basehref: string
    };
    // TODO: allow using other environements
    // [key: string]: {
    //   host: string,
    //   basehref: string
    // }
  };
}
