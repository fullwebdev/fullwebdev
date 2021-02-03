export type FunctionCompiler = (
  source: string,
  ...params: any[]
) => Promise<string> | string;

export type CompilerId = "snarkdown" | "pandoc";

export type Compiler = CompilerId | FunctionCompiler;
