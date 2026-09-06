import { Lexer } from './core/lexer.js';
import { Parser } from './core/parser.js';
import { CodeGenerator, CodeGenOptions } from './core/codegen.js';
import { kocaaghi, tanyaaghi, MaduraStd } from './stdlib/runtime.js';

export { Lexer } from './core/lexer.js';
export { Parser } from './core/parser.js';
export { CodeGenerator } from './core/codegen.js';
export * from './core/tokens.js';
export * from './core/ast.js';
export * from './stdlib/runtime.js';

/**
 * Transpile kode MaduraLang (.mdr) menjadi JavaScript.
 */
export function compile(source: string, options: CodeGenOptions = { includeRuntime: true }): string {
  const lexer = new Lexer(source);
  const tokens = lexer.tokenize();
  const parser = new Parser(tokens);
  const ast = parser.parse();
  const codegen = new CodeGenerator();
  return codegen.generate(ast, options);
}

/**
 * Jalankan kode MaduraLang langsung di memori.
 */
export async function run(source: string, extraContext: Record<string, any> = {}): Promise<any> {
  const jsCode = compile(source, { includeRuntime: false });

  // Siapkan context runtime
  const context: Record<string, any> = {
    console,
    process,
    kocaaghi,
    tanyaaghi,
    madura: MaduraStd,
    ...extraContext
  };

  const contextKeys = Object.keys(context);
  const contextValues = Object.values(context);

  // Bungkus dalam async function agar support await jika dibutuhkan
  const fn = new Function(...contextKeys, `
    return (async () => {
      ${jsCode}
    })();
  `);

  return await fn(...contextValues);
}
