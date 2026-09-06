export type TingkatBhasa = 'enja-iya' | 'engghi-enten' | 'engghi-bhunten';

export type KelasKata =
  | 'nomina'       // Kata benda
  | 'verba'        // Kata kerja
  | 'adjektiva'    // Kata sifat
  | 'pronomina'    // Kata ganti
  | 'adverba'      // Kata keterangan
  | 'numeralia'    // Kata bilangan
  | 'partikel'     // Kata sambung / tugas
  | 'interjeksi';  // Kata seru

export interface TingkatanKata {
  enjaIya: string;            // Santai / akrab (teman sebaya, anak-anak)
  engghiEnten?: string;       // Sopan / tengahan (orang yang dihormati wajar)
  engghiBhunten?: string;     // Halus / krama inggil (orang tua, ulama, sesepuh)
}

export interface ContohKalimat {
  madura: string;
  indonesia: string;
  tingkat?: TingkatBhasa;
}

export interface EntriKamus {
  id: string;
  kataDasar: string;          // Kata dasar Madura
  artiIndonesia: string[];    // Daftar makna dalam bahasa Indonesia
  kelasKata: KelasKata;
  kategori: string;           // Kategori topik (keluarga, kerja, makanan, dll.)
  tingkatan: TingkatanKata;
  contohKalimat?: ContohKalimat;
}

export interface ParbhasanData {
  teks: string;               // Teks peribahasa Madura
  artiHarfiah: string;        // Makna perkata/harfiah
  maknaFilosofis: string;     // Pesan moral / filosofi hidup
  tema: string;               // Kerja keras, kesetiaan, agama, kehormatan
}
