import { describe, it, expect } from 'vitest';
import { Lexer } from '../src/core/lexer.js';
import { Parser } from '../src/core/parser.js';

describe('Parser MaduraLang', () => {
  it('berhasil mem-parse deklarasi variabel', () => {
    const lexer = new Lexer('sango omor = 20;');
    const tokens = lexer.tokenize();
    const parser = new Parser(tokens);
    const ast = parser.parse();

    expect(ast.body).toHaveLength(1);
    expect(ast.body[0].type).toBe('VariableDeclaration');
    const varDecl = ast.body[0] as any;
    expect(varDecl.kind).toBe('sango');
    expect(varDecl.name).toBe('omor');
    expect(varDecl.init.type).toBe('NumberLiteral');
    expect(varDecl.init.value).toBe(20);
  });

  it('berhasil mem-parse lakona (fungsi) dan pabali', () => {
    const lexer = new Lexer('lakona kali(a, b) { pabali a * b; }');
    const tokens = lexer.tokenize();
    const parser = new Parser(tokens);
    const ast = parser.parse();

    expect(ast.body[0].type).toBe('FunctionDeclaration');
    const fnDecl = ast.body[0] as any;
    expect(fnDecl.name).toBe('kali');
    expect(fnDecl.params).toEqual(['a', 'b']);
    expect(fnDecl.body.body[0].type).toBe('ReturnStatement');
  });

  it('berhasil mem-parse struktur jhe_sossa, ngarte, totop', () => {
    const lexer = new Lexer(`
      jhe_sossa {
        ngamok "Kena sala!";
      } ngarte (err) {
        kocaaghi(err);
      } totop {
        kocaaghi("Berres");
      }
    `);
    const tokens = lexer.tokenize();
    const parser = new Parser(tokens);
    const ast = parser.parse();

    expect(ast.body[0].type).toBe('TryCatchStatement');
    const tryStmt = ast.body[0] as any;
    expect(tryStmt.block.body[0].type).toBe('ThrowStatement');
    expect(tryStmt.handler.param).toBe('err');
    expect(tryStmt.finalizer).toBeDefined();
  });
});
