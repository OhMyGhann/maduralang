import { describe, it, expect } from 'vitest';
import { run, compile } from '../src/index.js';

describe('Switch Case, Ternary, dan Modul MaduraLang', () => {
  it('berhasil menjalankan pilih (switch) dan kadhadhiyan (case)', async () => {
    const logs: any[] = [];
    const mockKocaaghi = (...args: any[]) => logs.push(args.join(' '));

    const code = `
      lakona cekStatus(hari) {
        pilih (hari) {
          kadhadhiyan "Jumat":
            kocaaghi("Solat Jumat tretan!");
            ambu;
          kadhadhiyan "Minggu":
            kocaaghi("Prei");
            ambu;
          bawaan:
            kocaaghi("Alako bhei");
        }
      }

      cekStatus("Jumat");
      cekStatus("Senin");
    `;

    await run(code, { kocaaghi: mockKocaaghi });

    expect(logs).toContain('Solat Jumat tretan!');
    expect(logs).toContain('Alako bhei');
  });

  it('berhasil mengevaluasi operator ternary', async () => {
    const logs: any[] = [];
    const mockKocaaghi = (...args: any[]) => logs.push(args.join(' '));

    const code = `
      sango omor = 20;
      sango label = (omor >= 17) ? "Dewasa" : "Kene'";
      kocaaghi("Status:", label);
    `;

    await run(code, { kocaaghi: mockKocaaghi });

    expect(logs).toContain('Status: Dewasa');
  });

  it('berhasil mengompilasi ngala\' (import) dan baghi (export)', () => {
    const code = `
      ngala' { kocaaghi, MaduraStd } dhari "maduralang";
      baghi sango versi = "2.0.0";
      baghi lakona halo() {
        pabali "Salam";
      }
    `;

    const js = compile(code, { includeRuntime: false });
    expect(js).toContain('import { kocaaghi, MaduraStd } from "maduralang";');
    expect(js).toContain('export let versi = "2.0.0";');
    expect(js).toContain('export function halo()');
  });
});
