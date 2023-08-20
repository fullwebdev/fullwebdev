export interface Route {
  path: string | RegExp;
  renderer?: (params?: any) => string;
  data?: (params?: any) => any;
  redirect?: string;
  error?: string;
}
