export type FunctionCompiler = (source: string, rootDir: string) => string;

export type CompilerId = "snarkdown" | "pandoc";

export type Compiler = CompilerId | FunctionCompiler;
