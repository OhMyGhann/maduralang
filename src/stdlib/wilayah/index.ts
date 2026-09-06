import {
  KABUPATEN_MADURA,
  PULAU_MADURA,
  KabupatenData,
  KecamatanData,
  PulauData
} from './data.js';
import { SEMUA_DESA_MADURA, DesaData } from './desa.js';

export {
  KABUPATEN_MADURA,
  PULAU_MADURA,
  SEMUA_DESA_MADURA,
  KabupatenData,
  KecamatanData,
  PulauData,
  DesaData
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

/**
 * Mengambil daftar desa/kelurahan resmi Kemendagri.
 * Bisa difilter berdasarkan kecamatan dan/atau kabupaten.
 */
export function daftarDesa(namaKecamatan?: string, namaKabupaten?: string): DesaData[] {
  let list = SEMUA_DESA_MADURA;

  if (namaKabupaten) {
    const cleanKab = namaKabupaten.toLowerCase().replace(/^kabupaten\s+/i, '').trim();
    list = list.filter(d => d.kabupaten.toLowerCase() === cleanKab);
  }

  if (namaKecamatan) {
    const cleanKec = namaKecamatan.toLowerCase().replace(/^kecamatan\s+/i, '').trim();
    list = list.filter(d => d.kecamatan.toLowerCase() === cleanKec);
  }

  return list;
}

/**
 * Mengambil detail spesifik desa/kelurahan resmi
 */
export function getDesa(namaDesa: string, namaKecamatan?: string): DesaData | undefined {
  if (!namaDesa) return undefined;
  const cleanDesa = namaDesa.toLowerCase().replace(/^(desa|kelurahan)\s+/i, '').trim();

  if (namaKecamatan) {
    const cleanKec = namaKecamatan.toLowerCase().replace(/^kecamatan\s+/i, '').trim();
    return SEMUA_DESA_MADURA.find(
      d => d.nama.toLowerCase() === cleanDesa && d.kecamatan.toLowerCase() === cleanKec
    );
  }

  return SEMUA_DESA_MADURA.find(d => d.nama.toLowerCase() === cleanDesa);
}

/**
 * Mencari desa/kelurahan berdasarkan kata kunci nama desa
 */
export function cariDesa(kataKunci: string): DesaData[] {
  if (!kataKunci || !kataKunci.trim()) return [];
  const q = kataKunci.toLowerCase().trim();
  return SEMUA_DESA_MADURA.filter(d => d.nama.toLowerCase().includes(q));
}

export interface HasilCariWilayah {
  tipe: 'KABUPATEN' | 'KECAMATAN' | 'DESA' | 'PULAU';
  id?: string;
  nama: string;
  kabupaten: string;
  kecamatan?: string;
  kodePos?: string;
  info: string;
  koordinat: { lat: number; lng: number };
}

/**
 * Pencarian cerdas seputar wilayah Madura (desa, kecamatan, pulau, kabupaten, atau kode pos)
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

  // 3. Cek Desa (maksimal 15 hasil jika query sangat umum agar tidak overload)
  let desaCount = 0;
  for (const desa of SEMUA_DESA_MADURA) {
    if (desa.nama.toLowerCase().includes(q) || desa.id === q) {
      hasil.push({
        tipe: 'DESA',
        id: desa.id,
        nama: `Desa/Kel. ${desa.nama}`,
        kecamatan: desa.kecamatan,
        kabupaten: desa.kabupaten,
        info: `Kec. ${desa.kecamatan}, Kab. ${desa.kabupaten} (Kode Kemendagri: ${desa.id})`,
        koordinat: { lat: desa.lat, lng: desa.lng }
      });
      desaCount++;
      if (desaCount >= 15) break;
    }
  }

  // 4. Cek Pulau
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
  let totalLuasKm2 = 0;

  for (const kab of KABUPATEN_MADURA) {
    totalKecamatan += kab.kecamatan.length;
    totalLuasKm2 += kab.luasKm2;
  }

  return {
    provinsi: 'Jawa Timur',
    pulau: 'Madura',
    totalKabupaten,
    totalKecamatan,
    totalDesaResmi: SEMUA_DESA_MADURA.length,
    totalLuasKm2: Number(totalLuasKm2.toFixed(2)),
    kabupatenTerluas: 'Sumenep (2.093 km²)',
    kabupatenPusatBudaya: 'Pamekasan (Bumi Gerbang Salam & Sakera)'
  };
}
