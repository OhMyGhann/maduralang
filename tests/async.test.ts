import { describe, it, expect } from 'vitest';
import { run, compile } from '../src/index.js';

describe('Async, Arrow Function & Template String MaduraLang', () => {
  it('berhasil mengompilasi nyambi (async) dan antose (await)', () => {
    const code = `
      nyambi lakona ambilData() {
        pabali antose Promise.resolve("Data berres");
      }
    `;

    const js = compile(code, { includeRuntime: false });
    expect(js).toContain('async function ambilData()');
    expect(js).toContain('return (await Promise.resolve("Data berres"));');
  });

  it('menjalankan async function dan await dengan benar di runtime', async () => {
    const logs: any[] = [];
    const mockKocaaghi = (...args: any[]) => logs.push(args.join(' '));

    const code = `
      nyambi lakona hitungTunda(x) {
        sango hasil = antose Promise.resolve(x * 10);
        kocaaghi("Hasil Tunda:", hasil);
      }

      antose hitungTunda(5);
    `;

    await run(code, { kocaaghi: mockKocaaghi });

    expect(logs).toContain('Hasil Tunda: 50');
  });

  it('menjalankan arrow function dan interpolasi template string', async () => {
    const logs: any[] = [];
    const mockKocaaghi = (...args: any[]) => logs.push(args.join(' '));

    const code = `
      sango kali = (a, b) => a * b;
      sango nama = "Sakera";
      sango total = kali(4, 5);

      kocaaghi(\`Halo \${nama}, total: \${total}\`);
    `;

    await run(code, { kocaaghi: mockKocaaghi });

    expect(logs).toContain('Halo Sakera, total: 20');
  });
});
