import { describe, it, expect } from 'vitest';
import { run, compile } from '../src/index.js';

describe('OOP / Class MaduraLang', () => {
  it('berhasil mengompilasi deklarasi bhângsa, constructor, dan method', () => {
    const code = `
      bhangsa Pendekar {
        nyiptaaghi(nyama) {
          dibi'.nyama = nyama;
        }

        salam() {
          kocaaghi("Salam dhari: " + dibi'.nyama);
        }
      }

      sango p = anyar Pendekar("Sakera");
      p.salam();
    `;

    const js = compile(code, { includeRuntime: false });
    expect(js).toContain('class Pendekar {');
    expect(js).toContain('constructor(nyama)');
    expect(js).toContain('this.nyama = nyama;');
    expect(js).toContain('salam()');
    expect(js).toContain('new Pendekar("Sakera")');
  });

  it('menjalankan OOP dan mengeksekusi method dengan benar di runtime', async () => {
    const logs: any[] = [];
    const mockKocaaghi = (...args: any[]) => logs.push(args.join(' '));

    const code = `
      bhangsa Pendekar {
        nyiptaaghi(nyama, senjata) {
          dibi'.nyama = nyama;
          dibi'.senjata = senjata;
        }

        aksi() {
          kocaaghi(dibi'.nyama + " ngangghuy " + dibi'.senjata);
        }
      }

      bhangsa Jawara katoronan Pendekar {
        nyiptaaghi(nyama, senjata, pangkat) {
          dibi'.nyama = nyama;
          dibi'.senjata = senjata;
          dibi'.pangkat = pangkat;
        }

        lapor() {
          dibi'.aksi();
          kocaaghi("Pangkat: " + dibi'.pangkat);
        }
      }

      sango j = anyar Jawara("Sakera", "Calok", "Panglima");
      j.lapor();
    `;

    await run(code, { kocaaghi: mockKocaaghi });

    expect(logs).toContain('Sakera ngangghuy Calok');
    expect(logs).toContain('Pangkat: Panglima');
  });
});
