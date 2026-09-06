import { describe, it, expect } from 'vitest';
import { Lexer } from '../src/core/lexer.js';
import { TokenType } from '../src/core/tokens.js';

describe('Lexer MaduraLang', () => {
  it('berhasil memisahkan token variabel sango dan paggun', () => {
    const lexer = new Lexer('sango a = 10; paggun b = "Madura";');
    const tokens = lexer.tokenize();

    expect(tokens[0].type).toBe(TokenType.SANGO);
    expect(tokens[1].type).toBe(TokenType.IDENTIFIER);
    expect(tokens[1].value).toBe('a');
    expect(tokens[2].type).toBe(TokenType.ASSIGN);
    expect(tokens[3].type).toBe(TokenType.NUMBER);
    expect(tokens[3].value).toBe('10');

    expect(tokens[5].type).toBe(TokenType.PAGGUN);
    expect(tokens[6].type).toBe(TokenType.IDENTIFIER);
    expect(tokens[6].value).toBe('b');
  });

  it('mengenali keyword multi-kata lamon enja\'', () => {
    const lexer = new Lexer("lamon (x > 0) {} lamon enja' (x < 0) {}");
    const tokens = lexer.tokenize();

    expect(tokens[0].type).toBe(TokenType.LAMON);
    const elseIfToken = tokens.find(t => t.type === TokenType.LAMON_ENJA);
    expect(elseIfToken).toBeDefined();
    expect(elseIfToken?.value).toBe("lamon enja'");
  });

  it('mengenali nilai bhender, sala, dan tadhe\'', () => {
    const lexer = new Lexer("sango x = bhender; sango y = sala; sango z = tadhe';");
    const tokens = lexer.tokenize();

    expect(tokens.some(t => t.type === TokenType.BHENDER)).toBe(true);
    expect(tokens.some(t => t.type === TokenType.SALA)).toBe(true);
    expect(tokens.some(t => t.type === TokenType.TADHE)).toBe(true);
  });

  it('mengenali operator logika ban (&&) dan otaba (||)', () => {
    const lexer = new Lexer("a ban b otaba c");
    const tokens = lexer.tokenize();

    expect(tokens[1].type).toBe(TokenType.BAN);
    expect(tokens[3].type).toBe(TokenType.OTABA);
  });
});
