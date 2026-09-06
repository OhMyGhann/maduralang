/**
 * Stemmer Morfologi Bahasa Indonesia Cerdas untuk MaduraLang
 * 100% Offline, Zero-Dependency, Rule-Based (Algoritma Nazief-Adriani / CS Streamlined)
 *
 * Mampu melucuti imbuhan awalan (me-, ber-, di-, ter-, ke-, pe-, se-),
 * akhiran (-kan, -i, -an, -ku, -mu, -nya, -lah, -kah),
 * dan menangani peluruhan fonem (k, p, t, s).
 */

export interface StemResult {
  root: string;
  prefix?: string;
  suffix?: string;
  isPassive?: boolean;
}

/**
 * Menghasilkan daftar kandidat kata dasar dari suatu kata berimbuhan bahasa Indonesia
 */
export function getStemCandidates(word: string): string[] {
  const clean = word.toLowerCase().trim().replace(/[^a-z0-9']/g, '');
  if (clean.length <= 3) return [clean];

  const candidates = new Set<string>();
  candidates.add(clean);

  // 1. Lepas partikel penegas (-lah, -kah, -tah, -pun)
  let base = clean;
  for (const part of ['lah', 'kah', 'tah', 'pun']) {
    if (base.endsWith(part) && base.length > part.length + 3) {
      base = base.slice(0, -part.length);
      candidates.add(base);
      break;
    }
  }

  // 2. Lepas klitika kepemilikan (-ku, -mu, -nya)
  for (const clitic of ['ku', 'mu', 'nya']) {
    if (base.endsWith(clitic) && base.length > clitic.length + 3) {
      const stripped = base.slice(0, -clitic.length);
      candidates.add(stripped);
      base = stripped;
      break;
    }
  }

  // 3. Simpan kandidat sebelum pelepas sufiks turunan
  const preSuffix = base;

  // 4. Lepas sufiks derivasional (-kan, -an, -i)
  // Perhatian: untuk kata berakhiran 'i' asli seperti 'lari', 'beli', 'pagi',
  // jangan hapus jika panjangnya pendek atau tidak memiliki prefiks yang sesuai.
  for (const suf of ['kan', 'an']) {
    if (base.endsWith(suf) && base.length > suf.length + 3) {
      const stripped = base.slice(0, -suf.length);
      candidates.add(stripped);
      generatePrefixCandidates(stripped, candidates);
    }
  }
  if (base.endsWith('i') && base.length > 5 && !['pagi', 'hari', 'lari', 'beli', 'tali', 'kopi', 'nasi'].includes(base)) {
    const stripped = base.slice(0, -1);
    candidates.add(stripped);
    generatePrefixCandidates(stripped, candidates);
  }

  // 5. Lepas prefiks dari bentuk tanpa sufiks maupun dengan sufiks
  generatePrefixCandidates(base, candidates);
  generatePrefixCandidates(preSuffix, candidates);

  return Array.from(candidates);
}

/**
 * Menghasilkan variasi pelucutan awalan (prefiks) dan peluruhan fonem k/p/t/s
 */
function generatePrefixCandidates(word: string, out: Set<string>): void {
  if (word.length <= 3) return;

  // Awalan ber- / be-
  if (word.startsWith('ber') && word.length > 5) {
    out.add(word.slice(3));
  } else if (word.startsWith('bel') && word.length > 5) {
    out.add(word.slice(3)); // belajar -> ajar
  } else if (word.startsWith('be') && word.length > 4) {
    out.add(word.slice(2)); // bekerja -> kerja
  }

  // Awalan ter- / te-
  if (word.startsWith('ter') && word.length > 5) {
    out.add(word.slice(3));
  } else if (word.startsWith('te') && word.length > 4) {
    out.add(word.slice(2));
  }

  // Awalan di- (pasif)
  if (word.startsWith('di') && word.length > 4) {
    out.add(word.slice(2));
  }

  // Awalan ke-
  if (word.startsWith('ke') && word.length > 4) {
    out.add(word.slice(2));
  }

  // Awalan se-
  if (word.startsWith('se') && word.length > 4) {
    out.add(word.slice(2));
  }

  // Awalan per- / pe-
  if (word.startsWith('per') && word.length > 5) {
    out.add(word.slice(3));
  } else if (word.startsWith('pe') && word.length > 4) {
    out.add(word.slice(2));
  }

  // Awalan me- dengan aturan peluruhan fonem (MeN-)
  if (word.startsWith('me') && word.length > 4) {
    out.add(word.slice(2)); // me- + root (melihat, merawat, memasak, meminum)
  }

  if (word.startsWith('meny') && word.length > 6) {
    // menyapu -> sapu
    out.add('s' + word.slice(4));
    out.add(word.slice(4));
  } else if (word.startsWith('meng') && word.length > 6) {
    // mengajar -> ajar, mengirim -> kirim
    out.add(word.slice(4));
    out.add('k' + word.slice(4));
  } else if (word.startsWith('mem') && word.length > 5) {
    // membawa -> bawa, memilih -> pilih, memasak -> masak
    out.add(word.slice(3));
    out.add('p' + word.slice(3));
    out.add(word.slice(2)); // me- + m...
  } else if (word.startsWith('men') && word.length > 5) {
    // menulis -> tulis, mendengar -> dengar, menari -> tari / nari
    out.add(word.slice(3));
    out.add('t' + word.slice(3));
    out.add(word.slice(2)); // me- + n...
  }
}
