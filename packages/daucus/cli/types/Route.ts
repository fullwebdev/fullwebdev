export interface Route {
  templateUrl: string;
  path: string;
  title: string;
  numbering: string;
  children: {
    [key: string]: Route;
  };
}
