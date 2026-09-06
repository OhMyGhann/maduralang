import { describe, it, expect } from 'vitest';
import { compile } from '../src/index.js';

describe('Code Generator MaduraLang', () => {
  it('menghasilkan JavaScript valid untuk variabel dan kondisi', () => {
    const source = `
      sango x = 10;
      lamon (x > 5) {
        kocaaghi("Rajhe");
      } laen {
        kocaaghi("Kene'");
      }
    `;
    const js = compile(source, { includeRuntime: false });

    expect(js).toContain('let x = 10;');
    expect(js).toContain('if ((x > 5))');
    expect(js).toContain('else');
    expect(js).toContain('kocaaghi("Rajhe");');
  });

  it('menghasilkan JavaScript valid untuk loop poter dan sampek', () => {
    const source = `
      poter (sango i = 0; i < 3; i++) {
        kocaaghi(i);
      }
      sampek (x > 0) {
        x--;
      }
    `;
    const js = compile(source, { includeRuntime: false });

    expect(js).toContain('for (let i = 0; (i < 3); i++)');
    expect(js).toContain('while ((x > 0))');
  });
});
