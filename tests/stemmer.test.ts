import { describe, it, expect } from 'vitest';
import { getStemCandidates } from '../src/stdlib/kamus/stemmer.js';

describe('Stemmer Morfologi Bahasa Indonesia (madura/kamus)', () => {
  it('dapat melucuti prefiks me- dan peluruhan MeN-', () => {
    expect(getStemCandidates('menyapu')).toContain('sapu');
    expect(getStemCandidates('mengajar')).toContain('ajar');
    expect(getStemCandidates('memasak')).toContain('masak');
    expect(getStemCandidates('menulis')).toContain('tulis');
    expect(getStemCandidates('melihat')).toContain('lihat');
  });

  it('dapat melucuti prefiks ber-, di-, ter-, ke-', () => {
    expect(getStemCandidates('berjalan')).toContain('jalan');
    expect(getStemCandidates('berlari')).toContain('lari');
    expect(getStemCandidates('dimasak')).toContain('masak');
    expect(getStemCandidates('tertidur')).toContain('tidur');
    expect(getStemCandidates('belajar')).toContain('ajar');
    expect(getStemCandidates('bekerja')).toContain('kerja');
  });

  it('dapat melucuti klitika dan sufiks (-ku, -mu, -nya, -kan, -an)', () => {
    expect(getStemCandidates('rumahnya')).toContain('rumah');
    expect(getStemCandidates('bukumu')).toContain('buku');
    expect(getStemCandidates('pekerjaan')).toContain('kerja');
    expect(getStemCandidates('kebersihan')).toContain('bersih');
  });
});
