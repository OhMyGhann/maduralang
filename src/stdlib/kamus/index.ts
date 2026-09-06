import { EntriKamus, ParbhasanData, TingkatBhasa } from './types.js';
import { KOSAKATA_MADURA, PARBHASAN_MADURA } from './data.js';

export * from './types.js';
export { KOSAKATA_MADURA, PARBHASAN_MADURA };

/**
 * Mencari kata dalam kamus (bisa berupa kata Madura atau bahasa Indonesia)
 */
export function cariKata(kata: string): EntriKamus | undefined {
  if (!kata || !kata.trim()) return undefined;
  const q = kata.toLowerCase().trim();

  // 1. Cek langsung kata dasar Madura
  let found = KOSAKATA_MADURA.find(k => k.kataDasar.toLowerCase() === q);
  if (found) return found;

  // 2. Cek di tingkatan tutur Madura (enjaIya, engghiEnten, engghiBhunten)
  found = KOSAKATA_MADURA.find(k =>
    k.tingkatan.enjaIya.toLowerCase() === q ||
    (k.tingkatan.engghiEnten && k.tingkatan.engghiEnten.toLowerCase() === q) ||
    (k.tingkatan.engghiBhunten && k.tingkatan.engghiBhunten.toLowerCase() === q)
  );
  if (found) return found;

  // 3. Cek di padanan arti Indonesia
  return KOSAKATA_MADURA.find(k => k.artiIndonesia.some(a => a.toLowerCase() === q));
}

/**
 * Menerjemahkan kata atau kalimat pendek dari Bahasa Indonesia ke Bahasa Madura
 * Mendukung pilihan tingkatan tutur:
 * - 'enja-iya' (default: santai/akrab)
 * - 'engghi-enten' (sopan/tengahan)
 * - 'engghi-bhunten' (halus/krama inggil)
 */
export function terjemahKaMadura(teksIndonesia: string, tingkat: TingkatBhasa = 'enja-iya'): string {
  if (!teksIndonesia || !teksIndonesia.trim()) return '';

  const clean = teksIndonesia.toLowerCase().trim();

  // 1. Cek kecocokan langsung seluruh frasa (misal: "terima kasih", "tidak ada")
  const exactPhrase = KOSAKATA_MADURA.find(k =>
    k.artiIndonesia.some(arti => arti.toLowerCase() === clean)
  );
  if (exactPhrase) {
    if (tingkat === 'engghi-bhunten' && exactPhrase.tingkatan.engghiBhunten) {
      return exactPhrase.tingkatan.engghiBhunten;
    }
    if (tingkat === 'engghi-enten' && exactPhrase.tingkatan.engghiEnten) {
      return exactPhrase.tingkatan.engghiEnten;
    }
    return exactPhrase.tingkatan.enjaIya;
  }

  // 2. Jika kalimat, terjemahkan kata-per-kata
  const words = clean.split(/\s+/);
  const hasil = words.map(word => {
    // Bersihkan tanda baca sederhana di ujung kata
    const cleanWord = word.replace(/[^a-zA-Z0-9']/g, '');
    const punctuation = word.replace(/[a-zA-Z0-9']/g, '');

    const match = KOSAKATA_MADURA.find(k =>
      k.artiIndonesia.some(arti => arti.toLowerCase() === cleanWord)
    );

    if (match) {
      let maduraWord = match.tingkatan.enjaIya;
      if (tingkat === 'engghi-bhunten' && match.tingkatan.engghiBhunten) {
        maduraWord = match.tingkatan.engghiBhunten;
      } else if (tingkat === 'engghi-enten' && match.tingkatan.engghiEnten) {
        maduraWord = match.tingkatan.engghiEnten;
      }
      return maduraWord + punctuation;
    }

    return word; // Pertahankan kata aslinya jika belum ada di kamus
  });

  return hasil.join(' ');
}

/**
 * Menerjemahkan kata atau kalimat pendek dari Bahasa Madura ke Bahasa Indonesia
 */
export function terjemahKaIndonesia(teksMadura: string): string {
  if (!teksMadura || !teksMadura.trim()) return '';

  const clean = teksMadura.toLowerCase().trim();

  // 1. Cek langsung frasa utuh
  const exact = KOSAKATA_MADURA.find(k =>
    k.tingkatan.enjaIya.toLowerCase() === clean ||
    (k.tingkatan.engghiEnten && k.tingkatan.engghiEnten.toLowerCase() === clean) ||
    (k.tingkatan.engghiBhunten && k.tingkatan.engghiBhunten.toLowerCase() === clean)
  );
  if (exact) {
    return exact.artiIndonesia[0];
  }

  // 2. Terjemahkan kata-per-kata
  const words = clean.split(/\s+/);
  const hasil = words.map(word => {
    const cleanWord = word.replace(/[^a-zA-Z0-9']/g, '');
    const punctuation = word.replace(/[a-zA-Z0-9']/g, '');

    const match = KOSAKATA_MADURA.find(k =>
      k.kataDasar.toLowerCase() === cleanWord ||
      k.tingkatan.enjaIya.toLowerCase() === cleanWord ||
      (k.tingkatan.engghiEnten && k.tingkatan.engghiEnten.toLowerCase() === cleanWord) ||
      (k.tingkatan.engghiBhunten && k.tingkatan.engghiBhunten.toLowerCase() === cleanWord)
    );

    if (match) {
      return match.artiIndonesia[0] + punctuation;
    }

    return word;
  });

  return hasil.join(' ');
}

/**
 * Mengubah tingkatan kata Madura ke level yang dituju (misal dari 'enja-iya' ke 'engghi-bhunten')
 * Contoh: ubahTingkat("ngakan", "engghi-bhunten") -> "dha'ar"
 */
export function ubahTingkat(kataMadura: string, targetTingkat: TingkatBhasa): string {
  const item = cariKata(kataMadura);
  if (!item) return kataMadura;

  if (targetTingkat === 'engghi-bhunten' && item.tingkatan.engghiBhunten) {
    return item.tingkatan.engghiBhunten;
  }
  if (targetTingkat === 'engghi-enten' && item.tingkatan.engghiEnten) {
    return item.tingkatan.engghiEnten;
  }
  return item.tingkatan.enjaIya;
}

/**
 * Mengambil daftar kosakata yang terfilter berdasarkan kategori topik
 */
export function daftarKosakata(kategori?: string): EntriKamus[] {
  if (kategori) {
    const clean = kategori.toLowerCase().trim();
    return KOSAKATA_MADURA.filter(k => k.kategori.toLowerCase() === clean);
  }
  return KOSAKATA_MADURA;
}

/**
 * Mengambil kumpulan peribahasa bijak Madura (Parbhasan).
 * Jika acak = true, akan mengembalikan 1 peribahasa acak.
 */
export function parbhasan(acak: boolean = false): ParbhasanData | ParbhasanData[] {
  if (acak) {
    const idx = Math.floor(Math.random() * PARBHASAN_MADURA.length);
    return PARBHASAN_MADURA[idx];
  }
  return PARBHASAN_MADURA;
}

/**
 * Ringkasan statistik kamus
 */
export function ringkasanKamus() {
  const totalKata = KOSAKATA_MADURA.length;
  const kategoriList = Array.from(new Set(KOSAKATA_MADURA.map(k => k.kategori)));
  const totalParbhasan = PARBHASAN_MADURA.length;

  return {
    namaPustaka: 'Kamus Dwibahasa MaduraLang',
    totalEntriKata: totalKata,
    kategoriTersedia: kategoriList,
    totalParbhasan: totalParbhasan,
    tingkatanBahasa: ['enja-iya (akrab)', 'engghi-enten (sopan)', 'engghi-bhunten (halus)']
  };
}
