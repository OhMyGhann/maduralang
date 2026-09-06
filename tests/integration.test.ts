import { describe, it, expect, vi } from 'vitest';
import { run } from '../src/index.js';

describe('Integration Test MaduraLang Runtime', () => {
  it('menjalankan kode lengkap dan mencetak output yang sesuai', async () => {
    const logs: any[] = [];
    const mockKocaaghi = (...args: any[]) => logs.push(args.join(' '));

    const code = `
      lakona lipat(n) {
        pabali n * 2;
      }

      sango angka = 7;
      sango hasel = lipat(angka);
      kocaaghi("Hasel:", hasel);
    `;

    await run(code, { kocaaghi: mockKocaaghi });

    expect(logs).toContain('Hasel: 14');
  });

  it('menangani error handling dengan jhe_sossa dan ngarte', async () => {
    const logs: any[] = [];
    const mockKocaaghi = (...args: any[]) => logs.push(args.join(' '));

    const code = `
      jhe_sossa {
        ngamok "Bahaya tretan!";
      } ngarte (err) {
        kocaaghi("Tangkep:", err);
      } totop {
        kocaaghi("Totop marè");
      }
    `;

    await run(code, { kocaaghi: mockKocaaghi });

    expect(logs[0]).toBe('Tangkep: Bahaya tretan!');
    expect(logs[1]).toBe('Totop marè');
  });
});
