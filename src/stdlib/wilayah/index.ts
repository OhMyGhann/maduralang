import {
  KABUPATEN_MADURA,
  PULAU_MADURA,
  KabupatenData,
  KecamatanData,
  PulauData
} from './data.js';

export {
  KABUPATEN_MADURA,
  PULAU_MADURA,
  KabupatenData,
  KecamatanData,
  PulauData
};

/**
 * Mengembalikan daftar 4 Kabupaten di Pulau Madura
 */
export function daftarKabupaten(): KabupatenData[] {
  return KABUPATEN_MADURA;
}

/**
 * Mengambil detail kabupaten berdasarkan nama (misal: "Pamekasan", "Bangkalan")
 */
export function getKabupaten(nama: string): KabupatenData | undefined {
  if (!nama) return undefined;
  const clean = nama.toLowerCase().replace(/^kabupaten\s+/i, '').trim();
  return KABUPATEN_MADURA.find(k => k.nama.toLowerCase() === clean);
}

/**
 * Mengembalikan daftar kecamatan.
 * Jika kabupaten ditentukan, hanya mengembalikan kecamatan di kabupaten tersebut.
 */
export function daftarKecamatan(namaKabupaten?: string): (KecamatanData & { kabupaten: string })[] {
  if (namaKabupaten) {
    const kab = getKabupaten(namaKabupaten);
    if (!kab) return [];
    return kab.kecamatan.map(kec => ({ ...kec, kabupaten: kab.nama }));
  }

  const all: (KecamatanData & { kabupaten: string })[] = [];
  for (const kab of KABUPATEN_MADURA) {
    for (const kec of kab.kecamatan) {
      all.push({ ...kec, kabupaten: kab.nama });
    }
  }
  return all;
}

/**
 * Mencari detail kecamatan berdasarkan namanya (misal: "Proppo", "Gili Iyang", "Kamal")
 */
export function getKecamatan(namaKecamatan: string): (KecamatanData & { kabupaten: string; namaLengkapKabupaten: string }) | undefined {
  if (!namaKecamatan) return undefined;
  const clean = namaKecamatan.toLowerCase().replace(/^kecamatan\s+/i, '').trim();

  for (const kab of KABUPATEN_MADURA) {
    const found = kab.kecamatan.find(kec => kec.nama.toLowerCase() === clean);
    if (found) {
      return {
        ...found,
        kabupaten: kab.nama,
        namaLengkapKabupaten: kab.namaLengkap
      };
    }
  }
  return undefined;
}

export interface HasilCariWilayah {
  tipe: 'KABUPATEN' | 'KECAMATAN' | 'PULAU';
  nama: string;
  kabupaten: string;
  kodePos?: string;
  info: string;
  koordinat: { lat: number; lng: number };
}

/**
 * Pencarian cerdas seputar wilayah Madura (bisa nama kecamatan, pulau, kabupaten, atau kode pos)
 */
export function cariWilayah(kataKunci: string): HasilCariWilayah[] {
  if (!kataKunci || !kataKunci.trim()) return [];
  const q = kataKunci.toLowerCase().trim();
  const hasil: HasilCariWilayah[] = [];

  // 1. Cek Kabupaten
  for (const kab of KABUPATEN_MADURA) {
    if (kab.nama.toLowerCase().includes(q) || kab.julukan.toLowerCase().includes(q) || kab.kodeBps === q) {
      hasil.push({
        tipe: 'KABUPATEN',
        nama: kab.namaLengkap,
        kabupaten: kab.nama,
        info: `${kab.julukan} | ${kab.jumlahKecamatan} Kecamatan | Luas ${kab.luasKm2} km²`,
        koordinat: kab.koordinat
      });
    }

    // 2. Cek Kecamatan
    for (const kec of kab.kecamatan) {
      if (
        kec.nama.toLowerCase().includes(q) ||
        kec.kodePos.includes(q) ||
        (kec.destinasiIkonik && kec.destinasiIkonik.toLowerCase().includes(q)) ||
        (kec.namaPulau && kec.namaPulau.toLowerCase().includes(q))
      ) {
        hasil.push({
          tipe: 'KECAMATAN',
          nama: `Kecamatan ${kec.nama}`,
          kabupaten: kab.nama,
          kodePos: kec.kodePos,
          info: `Kode Pos: ${kec.kodePos} | ${kec.jumlahDesa} Desa | Ikon: ${kec.destinasiIkonik || '-'}`,
          koordinat: kec.koordinat
        });
      }
    }
  }

  // 3. Cek Pulau
  for (const pulau of PULAU_MADURA) {
    if (pulau.nama.toLowerCase().includes(q) || pulau.keistimewaan.toLowerCase().includes(q)) {
      hasil.push({
        tipe: 'PULAU',
        nama: pulau.nama,
        kabupaten: pulau.kabupaten,
        info: pulau.keistimewaan,
        koordinat: pulau.koordinat
      });
    }
  }

  return hasil;
}

/**
 * Mengembalikan daftar pulau-pulau eksotis di Madura
 */
export function daftarPulau(): PulauData[] {
  return PULAU_MADURA;
}

/**
 * Mencari wilayah berdasarkan 5 digit Kode Pos
 */
export function cekKodePos(kodePos: string): (KecamatanData & { kabupaten: string }) | undefined {
  if (!kodePos) return undefined;
  const clean = kodePos.trim();
  for (const kab of KABUPATEN_MADURA) {
    const found = kab.kecamatan.find(k => k.kodePos === clean);
    if (found) {
      return { ...found, kabupaten: kab.nama };
    }
  }
  return undefined;
}

/**
 * Ringkasan statistik geografis Pulau Madura
 */
export function ringkasanStatistik() {
  const totalKabupaten = KABUPATEN_MADURA.length;
  let totalKecamatan = 0;
  let totalDesa = 0;
  let totalLuasKm2 = 0;

  for (const kab of KABUPATEN_MADURA) {
    totalKecamatan += kab.kecamatan.length;
    totalLuasKm2 += kab.luasKm2;
    for (const kec of kab.kecamatan) {
      totalDesa += kec.jumlahDesa;
    }
  }

  return {
    provinsi: 'Jawa Timur',
    pulau: 'Madura',
    totalKabupaten,
    totalKecamatan,
    estimasiTotalDesa: totalDesa,
    totalLuasKm2: Number(totalLuasKm2.toFixed(2)),
    kabupatenTerluas: 'Sumenep (2.093 km²)',
    kabupatenPusatBudaya: 'Pamekasan (Bumi Gerbang Salam & Sakera)'
  };
}
