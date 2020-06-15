export interface BenchmarkData {
  id: string;
  fn: (container: HTMLElement) => void;
  multi?: number;
}
