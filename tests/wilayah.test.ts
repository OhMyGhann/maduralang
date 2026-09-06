import { describe, it, expect } from 'vitest';
import {
  daftarKabupaten,
  getKabupaten,
  daftarKecamatan,
  getKecamatan,
  cariWilayah,
  daftarPulau,
  cekKodePos,
  ringkasanStatistik
} from '../src/stdlib/wilayah/index.js';
import { compile } from '../src/index.js';

describe('Pustaka Wilayah Madura (madura/wilayah)', () => {
  it('memiliki data resmi 4 kabupaten di Madura', () => {
    const kabupaten = daftarKabupaten();
    expect(kabupaten.length).toBe(4);

    const namaKabupaten = kabupaten.map(k => k.nama);
    expect(namaKabupaten).toContain('Bangkalan');
    expect(namaKabupaten).toContain('Sampang');
    expect(namaKabupaten).toContain('Pamekasan');
    expect(namaKabupaten).toContain('Sumenep');
  });

  it('memiliki total tepat 72 kecamatan di seluruh Madura', () => {
    const semuaKecamatan = daftarKecamatan();
    expect(semuaKecamatan.length).toBe(72);

    // Bangkalan 18
    expect(daftarKecamatan('Bangkalan').length).toBe(18);
    // Sampang 14
    expect(daftarKecamatan('Sampang').length).toBe(14);
    // Pamekasan 13
    expect(daftarKecamatan('Pamekasan').length).toBe(13);
    // Sumenep 27
    expect(daftarKecamatan('Sumenep').length).toBe(27);
  });

  it('dapat mengambil detail kecamatan beserta kode pos dan kabupaten', () => {
    const proppo = getKecamatan('Proppo');
    expect(proppo).toBeDefined();
    expect(proppo?.kabupaten).toBe('Pamekasan');
    expect(proppo?.kodePos).toBe('69363');

    const giliIyang = getKecamatan('Gili Iyang');
    expect(giliIyang).toBeDefined();
    expect(giliIyang?.kabupaten).toBe('Sumenep');
    expect(giliIyang?.isKepulauan).toBe(true);
  });

  it('dapat mencari wilayah pintar berdasarkan kata kunci', () => {
    const hasilBatik = cariWilayah('Batik');
    expect(hasilBatik.length).toBeGreaterThan(0);

    const hasilApiAbadi = cariWilayah('Api Tak Kunjung Padam');
    expect(hasilApiAbadi.length).toBeGreaterThan(0);
    expect(hasilApiAbadi[0].kabupaten).toBe('Pamekasan');

    const hasilKodePos = cariWilayah('69162'); // Kamal Bangkalan
    expect(hasilKodePos.length).toBeGreaterThan(0);
    expect(hasilKodePos[0].nama).toContain('Kamal');
  });

  it('dapat mencari wilayah berdasarkan kode pos secara langsung', () => {
    const wilayah = cekKodePos('69317');
    expect(wilayah).toBeDefined();
    expect(wilayah?.nama).toBe('Pamekasan');
    expect(wilayah?.kabupaten).toBe('Pamekasan');
  });

  it('memiliki data kepulauan eksotis Madura', () => {
    const pulau = daftarPulau();
    expect(pulau.length).toBeGreaterThanOrEqual(8);

    const namaPulau = pulau.map(p => p.nama);
    expect(namaPulau).toContain('Gili Iyang');
    expect(namaPulau).toContain('Gili Labak');
    expect(namaPulau).toContain('Kepulauan Kangean');
    expect(namaPulau).toContain('Kepulauan Masalembu');
  });

  it('menghasilkan ringkasan statistik geografis yang valid', () => {
    const stats = ringkasanStatistik();
    expect(stats.totalKabupaten).toBe(4);
    expect(stats.totalKecamatan).toBe(72);
    expect(stats.totalLuasKm2).toBeGreaterThan(5000);
  });

  it('mentranspile import "madura/wilayah" menjadi subpath yang valid', () => {
    const code = `
      ngala' { daftarKecamatan, cariWilayah } dhari "madura/wilayah";
      sango hasil = daftarKecamatan("Pamekasan");
    `;

    const js = compile(code, { includeRuntime: false });
    expect(js).toContain('import { daftarKecamatan, cariWilayah } from "@ohmyghann/maduralang/wilayah";');
  });
});
