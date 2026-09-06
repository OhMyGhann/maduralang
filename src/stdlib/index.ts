export * from './runtime.js';
export * as wilayah from './wilayah/index.js';
export {
  daftarKabupaten,
  getKabupaten,
  daftarKecamatan,
  getKecamatan,
  daftarDesa,
  getDesa,
  cariDesa,
  cariWilayah,
  daftarPulau,
  cekKodePos,
  ringkasanStatistik,
  SEMUA_DESA_MADURA
} from './wilayah/index.js';
export * as kamus from './kamus/index.js';
export {
  terjemahKaMadura,
  terjemahKaIndonesia,
  cariKata,
  ubahTingkat,
  daftarKosakata,
  parbhasan,
  ringkasanKamus,
  KOSAKATA_MADURA,
  PARBHASAN_MADURA
} from './kamus/index.js';
