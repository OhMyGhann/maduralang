import { describe, it, expect } from 'vitest';
import {
  cariKata,
  terjemahKaMadura,
  terjemahKaIndonesia,
  ubahTingkat,
  daftarKosakata,
  parbhasan,
  ringkasanKamus
} from '../src/stdlib/kamus/index.js';
import { compile } from '../src/index.js';

describe('Pustaka Kamus & Penerjemah Madura (madura/kamus)', () => {
  it('dapat mencari kata dan tingkatan tutur (ondhaggha bhasa)', () => {
    const hasil = cariKata('makan');
    expect(hasil).toBeDefined();
    expect(hasil?.kataDasar).toBe('kakan');
    expect(hasil?.tingkatan.enjaIya).toBe('ngakan');
    expect(hasil?.tingkatan.engghiEnten).toBe('ngadhep');
    expect(hasil?.tingkatan.engghiBhunten).toBe("dha'ar");
  });

  it('dapat menerjemahkan kata/frasa Indonesia ke Madura santai (enja-iya)', () => {
    const hasil = terjemahKaMadura('terima kasih');
    expect(hasil).toBe('mator sakalangkong');

    const hasilMakan = terjemahKaMadura('saya makan', 'enja-iya');
    expect(hasilMakan).toBe('engkok ngakan');
  });

  it('dapat menerjemahkan ke tingkat tutur halus (engghi-bhunten)', () => {
    const hasilMakanHalus = terjemahKaMadura('saya makan', 'engghi-bhunten');
    expect(hasilMakanHalus).toBe("abdhina dha'ar");

    const hasilTidur = terjemahKaMadura('tidur', 'engghi-bhunten');
    expect(hasilTidur).toBe('sare');
  });

  it('dapat menerjemahkan kembali dari Madura ke Indonesia', () => {
    const ind = terjemahKaIndonesia('mator sakalangkong');
    expect(ind).toContain('terima kasih');

    const ind2 = terjemahKaIndonesia("tadhe' pesse");
    expect(ind2).toContain('tidak ada uang');
  });

  it('dapat mengubah tingkatan kata (convert politeness level)', () => {
    // ngakan (santai) -> dha'ar (halus)
    const halus = ubahTingkat('ngakan', 'engghi-bhunten');
    expect(halus).toBe("dha'ar");

    // engkok (santai) -> abdhina (halus)
    const gantiHalus = ubahTingkat('engkok', 'engghi-bhunten');
    expect(gantiHalus).toBe('abdhina');
  });

  it('memiliki koleksi peribahasa filosofis Madura (Parbhasan)', () => {
    const semuaParbhasan = parbhasan() as any[];
    expect(semuaParbhasan.length).toBeGreaterThanOrEqual(5);

    const omba = semuaParbhasan.find(p => p.teks.includes('Abhantal omba'));
    expect(omba).toBeDefined();
    expect(omba.artiHarfiah).toContain('ombak');
    expect(omba.maknaFilosofis).toContain('pelaut');
  });

  it('menyediakan statistik kamus yang valid', () => {
    const stats = ringkasanKamus();
    expect(stats.totalEntriKata).toBeGreaterThanOrEqual(30);
    expect(stats.totalParbhasan).toBeGreaterThanOrEqual(5);
  });

  it('mentranspile import "madura/kamus" menjadi subpath yang valid', () => {
    const code = `
      ngala' { terjemahKaMadura, cariKata } dhari "madura/kamus";
      sango arti = terjemahKaMadura("terima kasih");
    `;

    const js = compile(code, { includeRuntime: false });
    expect(js).toContain('import { terjemahKaMadura, cariKata } from "@ohmyghann/maduralang/kamus";');
  });
});
