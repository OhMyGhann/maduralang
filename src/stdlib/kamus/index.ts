import { EntriKamus, ParbhasanData, TingkatBhasa } from './types.js';
import { KOSAKATA_MADURA, PARBHASAN_MADURA } from './data.js';
import { getStemCandidates } from './stemmer.js';

export * from './types.js';
export { getStemCandidates };
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
 * Menerjemahkan teks dari Bahasa Indonesia ke Bahasa Madura
 * Mendukung 3 tingkatan tutur (Ondhaggha Bhasa):
 * - 'enja-iya' (santai/akrab - default)
 * - 'engghi-enten' (sopan/sedang)
 * - 'engghi-bhunten' (halus/krama inggil)
 */
export function terjemahKaMadura(teksIndonesia: string, tingkat: TingkatBhasa = 'enja-iya'): string {
  if (!teksIndonesia || !teksIndonesia.trim()) return '';

  let text = teksIndonesia.trim();

  // Helper untuk mendapatkan kata Madura sesuai tingkatan tutur
  const getWordForLevel = (entry: EntriKamus): string => {
    let word = entry.tingkatan.enjaIya;
    if (tingkat === 'engghi-bhunten' && entry.tingkatan.engghiBhunten) {
      word = entry.tingkatan.engghiBhunten;
    } else if (tingkat === 'engghi-enten' && entry.tingkatan.engghiEnten) {
      word = entry.tingkatan.engghiEnten;
    }
    return word.includes('/') ? word.split('/')[0].trim() : word;
  };

  // 1. Tangani frasa multi-kata terlebih dahulu (misal: "terima kasih", "tidak ada", "kepala desa")
  const multiWordEntries: { phrase: string; entry: EntriKamus }[] = [];
  for (const entry of KOSAKATA_MADURA) {
    for (const arti of entry.artiIndonesia) {
      if (arti.includes(' ')) {
        multiWordEntries.push({ phrase: arti, entry });
      }
    }
  }
  // Urutkan dari frasa terpanjang agar "terima kasih banyak" didahulukan sebelum "terima kasih"
  multiWordEntries.sort((a, b) => b.phrase.length - a.phrase.length);

  for (const { phrase, entry } of multiWordEntries) {
    const escaped = phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`\\b${escaped}\\b`, 'gi');
    if (regex.test(text)) {
      text = text.replace(regex, getWordForLevel(entry));
    }
  }

  // 2. Terjemahkan kata-per-kata untuk kata tunggal
  const words = text.split(/\s+/);
  const hasil = words.map(word => {
    const cleanWord = word.toLowerCase().replace(/[^a-zA-Z0-9']/g, '');
    const punctuation = word.replace(/[a-zA-Z0-9']/g, '');

    // Cek kecocokan langsung
    let match = KOSAKATA_MADURA.find(k =>
      k.artiIndonesia.some(arti => arti.toLowerCase() === cleanWord)
    );

    // Jika tidak cocok langsung, gunakan Stemmer Morfologi Cerdas
    if (!match) {
      const candidates = getStemCandidates(cleanWord);
      for (const cand of candidates) {
        if (cand === cleanWord) continue;
        const candMatch = KOSAKATA_MADURA.find(k =>
          k.artiIndonesia.some(arti => arti.toLowerCase() === cand)
        );
        if (candMatch) {
          match = candMatch;
          break;
        }
      }
    }

    if (match) {
      return getWordForLevel(match) + punctuation;
    }

    return word;
  });

  return hasil.join(' ');
}

/**
 * Daftarkan kata atau kosakata baru ke kamus MaduraLang secara dinamis saat runtime
 */
export function daftarkanKata(entri: EntriKamus): void {
  if (!entri || !entri.kataDasar || !entri.tingkatan) {
    throw new Error("Entri kamus ta' lerres. Koddhu badha kataDasar ban tingkatan.");
  }
  KOSAKATA_MADURA.unshift(entri);
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
