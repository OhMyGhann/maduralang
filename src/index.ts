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
export * as wilayah from './stdlib/wilayah/index.js';
export {
  daftarKabupaten,
  getKabupaten,
  daftarKecamatan,
  getKecamatan,
  daftarDesa,
  getDesa,
  cariDesa,
  cariWilayah,
  daftarPulau,
  cekKodePos,
  ringkasanStatistik,
  SEMUA_DESA_MADURA
} from './stdlib/wilayah/index.js';

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
 * Jalankan kode MaduraLang langsung di memori atau via modul dinamis jika memuat import.
 */
export async function run(source: string, extraContext: Record<string, any> = {}): Promise<any> {
  const jsCode = compile(source, { includeRuntime: false });

  // Jika memuat import statement, jalankan via ESM dynamic import
  if (/^\s*import\s+/m.test(jsCode)) {
    const fs = await import('node:fs');
    const os = await import('node:os');
    const path = await import('node:path');
    const { fileURLToPath, pathToFileURL } = await import('node:url');

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const runtimeUrl = pathToFileURL(path.resolve(__dirname, './stdlib/runtime.js')).href;
    const wilayahUrl = pathToFileURL(path.resolve(__dirname, './stdlib/wilayah/index.js')).href;

    let transformed = jsCode
      .replace(/['"]@ohmyghann\/maduralang\/wilayah['"]/g, `'${wilayahUrl}'`)
      .replace(/['"]@ohmyghann\/maduralang\/stdlib['"]/g, `'${runtimeUrl}'`);

    const tempFile = path.join(os.tmpdir(), `mdr-${Date.now()}-${Math.random().toString(36).slice(2)}.mjs`);
    const header = `import { kocaaghi, tanyaaghi } from '${runtimeUrl}';\n`;
    fs.writeFileSync(tempFile, header + transformed, 'utf8');

    // Pasang extraContext ke global jika ada (misal untuk mock kocaaghi di test)
    for (const [k, v] of Object.entries(extraContext)) {
      (globalThis as any)[k] = v;
    }

    try {
      return await import(pathToFileURL(tempFile).href);
    } finally {
      try { fs.unlinkSync(tempFile); } catch {}
    }
  }

  // Siapkan context runtime untuk skrip non-module biasa
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
