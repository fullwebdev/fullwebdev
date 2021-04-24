export interface ConvertionParams {
  /**
   * Path to the working directory.
   */
  root?: string;
  /**
   * Python filters.
   */
  filters?: string[];
  /**
   * Additionnal lua filters.
   */
  luaFilters?: string[];
  /**
   * Additionnal options (long format w/o "--")
   */
  options?: string[];
}
