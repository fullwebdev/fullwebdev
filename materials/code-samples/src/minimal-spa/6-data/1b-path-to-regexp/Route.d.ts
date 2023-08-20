export interface Route {
  path: string;
  renderer?: (params?: any) => string;
  data?: (params?: any) => any;
  redirect?: string;
  error?: string;
}
