export interface KecamatanData {
  nama: string;
  kodePos: string;
  jumlahDesa: number;
  isKepulauan?: boolean;
  namaPulau?: string;
  koordinat: { lat: number; lng: number };
  destinasiIkonik?: string;
}

export interface KabupatenData {
  kodeBps: string;
  nama: string;
  namaLengkap: string;
  ibukota: string;
  julukan: string;
  semboyan: string;
  luasKm2: number;
  jumlahKecamatan: number;
  koordinat: { lat: number; lng: number };
  deskripsi: string;
  kecamatan: KecamatanData[];
}

export interface PulauData {
  nama: string;
  kabupaten: string;
  keistimewaan: string;
  koordinat: { lat: number; lng: number };
}

export const KABUPATEN_MADURA: KabupatenData[] = [
  {
    kodeBps: '3526',
    nama: 'Bangkalan',
    namaLengkap: 'Kabupaten Bangkalan',
    ibukota: 'Bangkalan',
    julukan: 'Kota Dzikir dan Shalawat / Gerbang Madura',
    semboyan: 'Bangkalan Berhias Emas',
    luasKm2: 1260.14,
    jumlahKecamatan: 18,
    koordinat: { lat: -7.0455, lng: 112.7423 },
    deskripsi: 'Kabupaten pintu gerbang Pulau Madura yang terhubung langsung dengan Surabaya melalui Jembatan Suramadu.',
    kecamatan: [
      { nama: 'Arosbaya', kodePos: '69151', jumlahDesa: 18, koordinat: { lat: -6.9537, lng: 112.8465 }, destinasiIkonik: 'Makam Aer Mata Ibu & Bukit Pelalangan' },
      { nama: 'Bangkalan', kodePos: '69115', jumlahDesa: 13, koordinat: { lat: -7.0315, lng: 112.7472 }, destinasiIkonik: 'Alun-alun Bangkalan & Museum Cakraningrat' },
      { nama: 'Blega', kodePos: '69174', jumlahDesa: 19, koordinat: { lat: -7.1354, lng: 113.1118 }, destinasiIkonik: 'Pasar Tradisional Blega' },
      { nama: 'Burneh', kodePos: '69121', jumlahDesa: 12, koordinat: { lat: -7.0583, lng: 112.7845 }, destinasiIkonik: 'Bebek Sinjay Pusat' },
      { nama: 'Galis', kodePos: '69173', jumlahDesa: 21, koordinat: { lat: -7.1147, lng: 112.9863 }, destinasiIkonik: 'Pasar Galis' },
      { nama: 'Geger', kodePos: '69152', jumlahDesa: 13, koordinat: { lat: -6.9832, lng: 112.9056 }, destinasiIkonik: 'Bukit Geger & Hutan Wisata' },
      { nama: 'Kamal', kodePos: '69162', jumlahDesa: 10, koordinat: { lat: -7.1706, lng: 112.7214 }, destinasiIkonik: 'Pelabuhan Ujung-Kamal & Universitas Trunojoyo Madura' },
      { nama: 'Klampis', kodePos: '69153', jumlahDesa: 22, koordinat: { lat: -6.9142, lng: 112.8942 }, destinasiIkonik: 'Pantai Tengket' },
      { nama: 'Kokop', kodePos: '69155', jumlahDesa: 13, koordinat: { lat: -6.9875, lng: 113.0645 }, destinasiIkonik: 'Pemandangan Alam Pegunungan Kokop' },
      { nama: 'Konang', kodePos: '69175', jumlahDesa: 13, koordinat: { lat: -7.0854, lng: 113.1754 }, destinasiIkonik: 'Kawasan Dataran Tinggi Konang' },
      { nama: 'Kwanyar', kodePos: '69163', jumlahDesa: 16, koordinat: { lat: -7.1782, lng: 112.8654 }, destinasiIkonik: 'Makam Sunan Cendana' },
      { nama: 'Labang', kodePos: '69163', jumlahDesa: 13, koordinat: { lat: -7.1754, lng: 112.7754 }, destinasiIkonik: 'Kaki Jembatan Suramadu Sisi Madura' },
      { nama: 'Modung', kodePos: '69166', jumlahDesa: 17, koordinat: { lat: -7.1954, lng: 113.0321 }, destinasiIkonik: 'Pantai Modung' },
      { nama: 'Sepulu', kodePos: '69154', jumlahDesa: 15, koordinat: { lat: -6.8954, lng: 113.0124 }, destinasiIkonik: 'Pantai Maneron' },
      { nama: 'Socah', kodePos: '69161', jumlahDesa: 11, koordinat: { lat: -7.0954, lng: 112.7321 }, destinasiIkonik: 'Bukit Jaddih & Danau Biru' },
      { nama: 'Tanah Merah', kodePos: '69172', jumlahDesa: 23, koordinat: { lat: -7.0845, lng: 112.9124 }, destinasiIkonik: 'Pasar Sapi Tanah Merah' },
      { nama: 'Tanjung Bumi', kodePos: '69156', jumlahDesa: 14, koordinat: { lat: -6.8924, lng: 113.1254 }, destinasiIkonik: 'Sentra Batik Tulis Gentongan' },
      { nama: 'Tragah', kodePos: '69167', jumlahDesa: 18, koordinat: { lat: -7.1024, lng: 112.8254 }, destinasiIkonik: 'Kawasan Pertanian & Perkebunan Tragah' }
    ]
  },
  {
    kodeBps: '3527',
    nama: 'Sampang',
    namaLengkap: 'Kabupaten Sampang',
    ibukota: 'Sampang',
    julukan: 'Bumi Bahari',
    semboyan: 'Sampang Rato Ebhu',
    luasKm2: 1233.30,
    jumlahKecamatan: 14,
    koordinat: { lat: -7.1873, lng: 113.2394 },
    deskripsi: 'Kabupaten di bagian tengah selatan Pulau Madura yang kaya akan keindahan pesisir pantai dan air terjun alami.',
    kecamatan: [
      { nama: 'Banyuates', kodePos: '69263', jumlahDesa: 20, koordinat: { lat: -6.9124, lng: 113.2454 }, destinasiIkonik: 'Air Terjun Toroan & Pantai Nepa' },
      { nama: 'Camplong', kodePos: '69281', jumlahDesa: 14, koordinat: { lat: -7.2145, lng: 113.3354 }, destinasiIkonik: 'Pantai Wisata Camplong' },
      { nama: 'Jrengik', kodePos: '69272', jumlahDesa: 14, koordinat: { lat: -7.1542, lng: 113.1854 }, destinasiIkonik: 'Pusat Kuliner Bebek Songkem' },
      { nama: 'Karang Penang', kodePos: '69254', jumlahDesa: 7, koordinat: { lat: -7.0654, lng: 113.3654 }, destinasiIkonik: 'Dataran Tinggi Karang Penang' },
      { nama: 'Kedungdung', kodePos: '69252', jumlahDesa: 18, koordinat: { lat: -7.0954, lng: 113.2542 }, destinasiIkonik: 'Waduk Klampis' },
      { nama: 'Ketapang', kodePos: '69261', jumlahDesa: 14, koordinat: { lat: -6.8954, lng: 113.3124 }, destinasiIkonik: 'Hutan Kera Raden Segoro Nepa' },
      { nama: 'Omben', kodePos: '69262', jumlahDesa: 20, koordinat: { lat: -7.1124, lng: 113.2954 }, destinasiIkonik: 'Pemandian Sumber Oloh' },
      { nama: 'Pangarengan', kodePos: '69271', jumlahDesa: 6, koordinat: { lat: -7.2154, lng: 113.2124 }, destinasiIkonik: 'Sentra Garam Tradisional Pangarengan' },
      { nama: 'Robatal', kodePos: '69255', jumlahDesa: 9, koordinat: { lat: -7.0454, lng: 113.2854 }, destinasiIkonik: 'Wisata Alam Robatal' },
      { nama: 'Sampang', kodePos: '69216', jumlahDesa: 12, koordinat: { lat: -7.1854, lng: 113.2454 }, destinasiIkonik: 'Alun-alun Trunojoyo & Monumen Sampang' },
      { nama: 'Sokobanah', kodePos: '69264', jumlahDesa: 12, koordinat: { lat: -6.9024, lng: 113.4124 }, destinasiIkonik: 'Pantai Lon Malang' },
      { nama: 'Sreseh', kodePos: '69273', jumlahDesa: 12, koordinat: { lat: -7.1854, lng: 113.1254 }, destinasiIkonik: 'Kawasan Pesisir Mangrove Sreseh' },
      { nama: 'Tambelangan', kodePos: '69253', jumlahDesa: 10, koordinat: { lat: -7.1154, lng: 113.1654 }, destinasiIkonik: 'Kawasan Perbukitan Tambelangan' },
      { nama: 'Torjun', kodePos: '69271', jumlahDesa: 12, koordinat: { lat: -7.1654, lng: 113.2154 }, destinasiIkonik: 'Sentra Kerajinan Gerabah Torjun' }
    ]
  },
  {
    kodeBps: '3528',
    nama: 'Pamekasan',
    namaLengkap: 'Kabupaten Pamekasan',
    ibukota: 'Pamekasan',
    julukan: 'Bumi Gerbang Salam / Kota Batik Madura',
    semboyan: 'Mekkas Jatna Paksa Dhadireja',
    luasKm2: 792.24,
    jumlahKecamatan: 13,
    koordinat: { lat: -7.1611, lng: 113.4831 },
    deskripsi: 'Jantung kebudayaan Madura, tempat kelahiran Sakera, terkenal dengan Api Tak Kunjung Padam dan sentra Batik Tulis Pamekasan.',
    kecamatan: [
      { nama: 'Batumarmar', kodePos: '69354', jumlahDesa: 13, koordinat: { lat: -6.9124, lng: 113.5124 }, destinasiIkonik: 'Pantai Batu Kerbuy' },
      { nama: 'Galis', kodePos: '69382', jumlahDesa: 10, koordinat: { lat: -7.2154, lng: 113.5454 }, destinasiIkonik: 'Wisata Mangrove Lembung Galis' },
      { nama: 'Kadur', kodePos: '69355', jumlahDesa: 10, koordinat: { lat: -7.0654, lng: 113.5454 }, destinasiIkonik: 'Perkebunan Kopi & Cengkeh Kadur' },
      { nama: 'Larangan', kodePos: '69383', jumlahDesa: 14, koordinat: { lat: -7.1354, lng: 113.5754 }, destinasiIkonik: 'Pasar Tradisional Keppo & Sentra Batik' },
      { nama: 'Pademawu', kodePos: '69381', jumlahDesa: 22, koordinat: { lat: -7.1854, lng: 113.5354 }, destinasiIkonik: 'Pantai Jumiang & Garam Pademawu' },
      { nama: 'Pakong', kodePos: '69352', jumlahDesa: 12, koordinat: { lat: -7.0354, lng: 113.5654 }, destinasiIkonik: 'Bukit Brukoh Pakong' },
      { nama: 'Palengaan', kodePos: '69362', jumlahDesa: 12, koordinat: { lat: -7.1054, lng: 113.4254 }, destinasiIkonik: 'Pondok Pesantren Mambaul Ulum Bata-Bata' },
      { nama: 'Pamekasan', kodePos: '69317', jumlahDesa: 18, koordinat: { lat: -7.1611, lng: 113.4831 }, destinasiIkonik: 'Monumen Arek Lancor & Masjid Agung Asy-Syuhada' },
      { nama: 'Pasean', kodePos: '69356', jumlahDesa: 9, koordinat: { lat: -6.8954, lng: 113.5854 }, destinasiIkonik: 'Pantai Pasean & Pelabuhan Nelayan' },
      { nama: 'Pegantenan', kodePos: '69361', jumlahDesa: 13, koordinat: { lat: -7.0754, lng: 113.4854 }, destinasiIkonik: 'Wisata Puncak Ratu Pegantenan' },
      { nama: 'Proppo', kodePos: '69363', jumlahDesa: 27, koordinat: { lat: -7.1654, lng: 113.4154 }, destinasiIkonik: 'Sentra Pengrajin Batik Klampar Proppo' },
      { nama: 'Tlanakan', kodePos: '69371', jumlahDesa: 17, koordinat: { lat: -7.2154, lng: 113.4754 }, destinasiIkonik: 'Api Tak Kunjung Padam (Api Abadi) & Pantai Talang Siring' },
      { nama: 'Waru', kodePos: '69353', jumlahDesa: 12, koordinat: { lat: -6.9554, lng: 113.5454 }, destinasiIkonik: 'Air Terjun Durbugan Waru' }
    ]
  },
  {
    kodeBps: '3529',
    nama: 'Sumenep',
    namaLengkap: 'Kabupaten Sumenep',
    ibukota: 'Sumenep',
    julukan: 'The Soul of Madura / Kota Keris',
    semboyan: 'Sumekar (Sumenep Enak Karana Atellak)',
    luasKm2: 2093.47,
    jumlahKecamatan: 27,
    koordinat: { lat: -7.0083, lng: 113.8617 },
    deskripsi: 'Kabupaten paling timur Madura dengan 126 pulau eksotis, memiliki kadar oksigen tertinggi ke-2 di dunia di Gili Iyang, serta sentra keris UNESCO.',
    kecamatan: [
      // 18 Kecamatan Daratan
      { nama: 'Ambunten', kodePos: '69455', jumlahDesa: 15, koordinat: { lat: -6.9124, lng: 113.7124 }, destinasiIkonik: 'Pantai Pasir Putih Dalegan Ambunten' },
      { nama: 'Batang Batang', kodePos: '69491', jumlahDesa: 16, koordinat: { lat: -6.9854, lng: 114.0454 }, destinasiIkonik: 'Pantai Lombang (Cemara Udang)' },
      { nama: 'Batuputih', kodePos: '69453', jumlahDesa: 14, koordinat: { lat: -6.8954, lng: 113.8954 }, destinasiIkonik: 'Pantai Badur & Gua Payudan' },
      { nama: 'Bluto', kodePos: '69466', jumlahDesa: 20, koordinat: { lat: -7.1154, lng: 113.7854 }, destinasiIkonik: 'Sentra Kerajinan Anyaman Bluto' },
      { nama: 'Dasuk', kodePos: '69454', jumlahDesa: 15, koordinat: { lat: -6.9154, lng: 113.8254 }, destinasiIkonik: 'Pantai Slopeng (Bukit Pasir)' },
      { nama: 'Dungkek', kodePos: '69474', jumlahDesa: 15, koordinat: { lat: -7.0254, lng: 114.0654 }, destinasiIkonik: 'Pelabuhan Penyeberangan Gili Iyang' },
      { nama: 'Ganding', kodePos: '69462', jumlahDesa: 14, koordinat: { lat: -7.0654, lng: 113.6854 }, destinasiIkonik: 'Kawasan Pertanian & Perbukitan Ganding' },
      { nama: 'Gapura', kodePos: '69472', jumlahDesa: 17, koordinat: { lat: -7.0054, lng: 113.9654 }, destinasiIkonik: 'Pantai Kalbut & Kuliner Campor Gapura' },
      { nama: 'Guluk-Guluk', kodePos: '69463', jumlahDesa: 12, koordinat: { lat: -7.0554, lng: 113.6154 }, destinasiIkonik: 'Pondok Pesantren Annuqayah' },
      { nama: 'Kalianget', kodePos: '69471', jumlahDesa: 7, koordinat: { lat: -7.0554, lng: 113.9354 }, destinasiIkonik: 'Pelabuhan Kalianget & Kota Tua Kalianget' },
      { nama: 'Kota Sumenep', kodePos: '69417', jumlahDesa: 16, koordinat: { lat: -7.0083, lng: 113.8617 }, destinasiIkonik: 'Keraton Sumenep, Masjid Agung Sumenep & Asta Tinggi' },
      { nama: 'Lenteng', kodePos: '69461', jumlahDesa: 20, koordinat: { lat: -7.0554, lng: 113.7754 }, destinasiIkonik: 'Sentra Keris Tradisional Aeng Tong-tong (UNESCO)' },
      { nama: 'Manding', kodePos: '69452', jumlahDesa: 11, koordinat: { lat: -6.9554, lng: 113.8654 }, destinasiIkonik: 'Sentra Industri Ukir Kayu Manding' },
      { nama: 'Pasongsongan', kodePos: '69457', jumlahDesa: 10, koordinat: { lat: -6.8954, lng: 113.6454 }, destinasiIkonik: 'Pelabuhan Perikanan Pasongsongan' },
      { nama: 'Pragaan', kodePos: '69465', jumlahDesa: 14, koordinat: { lat: -7.1354, lng: 113.6954 }, destinasiIkonik: 'Pondok Pesantren Al-Amien Prenduan' },
      { nama: 'Rubaru', kodePos: '69456', jumlahDesa: 11, koordinat: { lat: -6.9854, lng: 113.7754 }, destinasiIkonik: 'Sentra Bawang Merah Goreng Rubaru' },
      { nama: 'Saronggi', kodePos: '69467', jumlahDesa: 14, koordinat: { lat: -7.0854, lng: 113.8554 }, destinasiIkonik: 'Bukit Kalompek & Sentra Rumput Laut' },
      { nama: 'Talango', kodePos: '69481', jumlahDesa: 8, isKepulauan: true, namaPulau: 'Pulau Poteran', koordinat: { lat: -7.0754, lng: 113.9654 }, destinasiIkonik: 'Asta Sayyid Yusuf Talango' },

      // 9 Kecamatan Kepulauan
      { nama: 'Arjasa', kodePos: '69492', jumlahDesa: 19, isKepulauan: true, namaPulau: 'Kepulauan Kangean', koordinat: { lat: -6.8654, lng: 115.3124 }, destinasiIkonik: 'Jantung Kepulauan Kangean & Pemandian Olbek' },
      { nama: 'Gayam', kodePos: '69483', jumlahDesa: 10, isKepulauan: true, namaPulau: 'Pulau Sapudi', koordinat: { lat: -7.1354, lng: 114.3254 }, destinasiIkonik: 'Pulau Sapudi Sisi Selatan & Karapan Sapi Perintis' },
      { nama: 'Giligenting', kodePos: '69482', jumlahDesa: 8, isKepulauan: true, namaPulau: 'Pulau Giligenting & Gili Labak', koordinat: { lat: -7.1954, lng: 114.0124 }, destinasiIkonik: 'Pantai Sembilan Giligenting & Snorkeling Gili Labak' },
      { nama: 'Kangayan', kodePos: '69493', jumlahDesa: 9, isKepulauan: true, namaPulau: 'Kepulauan Kangean (Timur)', koordinat: { lat: -6.8954, lng: 115.4854 }, destinasiIkonik: 'Hutan Bakau Celgung & Terumbu Karang Kangean' },
      { nama: 'Masalembu', kodePos: '69496', jumlahDesa: 4, isKepulauan: true, namaPulau: 'Kepulauan Masalembu', koordinat: { lat: -5.5654, lng: 114.4324 }, destinasiIkonik: 'Pulau Masakambing & Karang Masalembu di Laut Jawa' },
      { nama: 'Nonggunong', kodePos: '69484', jumlahDesa: 8, isKepulauan: true, namaPulau: 'Pulau Sapudi (Utara)', koordinat: { lat: -7.0854, lng: 114.3554 }, destinasiIkonik: 'Pantai Tanah Merah Sapudi' },
      { nama: 'Raas', kodePos: '69485', jumlahDesa: 9, isKepulauan: true, namaPulau: 'Kepulauan Raas', koordinat: { lat: -7.1454, lng: 114.5654 }, destinasiIkonik: 'Pelabuhan Tradisional Jungkat Raas' },
      { nama: 'Sapeken', kodePos: '69494', jumlahDesa: 11, isKepulauan: true, namaPulau: 'Kepulauan Sapeken', koordinat: { lat: -7.0054, lng: 115.7124 }, destinasiIkonik: 'Gugusan Terumbu Karang & Budidaya Kerapu Terbesar' },
      { nama: 'Gili Iyang', kodePos: '69474', jumlahDesa: 2, isKepulauan: true, namaPulau: 'Pulau Gili Iyang', koordinat: { lat: -7.0124, lng: 114.1754 }, destinasiIkonik: 'Titik Kadar Oksigen Tertinggi Ke-2 di Dunia (21.5%) & Gua Karst' }
    ]
  }
];

export const PULAU_MADURA: PulauData[] = [
  { nama: 'Pulau Madura (Pulau Utama)', kabupaten: 'Seluruh Kabupaten', keistimewaan: 'Pulau Garam dengan tradisi Karapan Sapi, Budaya Sakera, dan 4 Kabupaten bersejarah.', koordinat: { lat: -7.05, lng: 113.50 } },
  { nama: 'Gili Iyang', kabupaten: 'Sumenep', keistimewaan: 'Kadar oksigen tertinggi ke-2 di dunia setelah Laut Mati Yordania, pulau awet muda.', koordinat: { lat: -7.0124, lng: 114.1754 } },
  { nama: 'Gili Labak', kabupaten: 'Sumenep', keistimewaan: 'Surga diving dan snorkeling pasir putih dengan terumbu karang warna-warni.', koordinat: { lat: -7.2154, lng: 114.0654 } },
  { nama: 'Gili Genting', kabupaten: 'Sumenep', keistimewaan: 'Terkenal dengan Pantai Sembilan berbentuk angka 9 alami dari pasir putih.', koordinat: { lat: -7.1954, lng: 114.0124 } },
  { nama: 'Kepulauan Kangean', kabupaten: 'Sumenep', keistimewaan: 'Gugusan pulau terbesar di timur Madura, kaya gas alam, ikan laut, dan ayam bekisar asli.', koordinat: { lat: -6.8654, lng: 115.3124 } },
  { nama: 'Pulau Sapudi', kabupaten: 'Sumenep', keistimewaan: 'Pusat pembibitan sapi Madura unggul dan asal mula budaya Karapan Sapi.', koordinat: { lat: -7.1154, lng: 114.3354 } },
  { nama: 'Kepulauan Sapeken', kabupaten: 'Sumenep', keistimewaan: 'Sentra budidaya ikan kerapu dan mutiara laut eksotis perbatasan Selat Bali/Flores.', koordinat: { lat: -7.0054, lng: 115.7124 } },
  { nama: 'Kepulauan Masalembu', kabupaten: 'Sumenep', keistimewaan: 'Terletak di jantung persimpangan Laut Jawa dan Selat Makassar, pulau paling utara Jawa Timur.', koordinat: { lat: -5.5654, lng: 114.4324 } },
  { nama: 'Kepulauan Raas', kabupaten: 'Sumenep', keistimewaan: 'Pulau pembuat perahu pinisi tradisional dan kucing Busok (kucing ras asli Madura).', koordinat: { lat: -7.1454, lng: 114.5654 } },
  { nama: 'Pulau Mandangin', kabupaten: 'Sampang', keistimewaan: 'Pulau nelayan alami berpasir putih di lepas pantai selatan Sampang.', koordinat: { lat: -7.3124, lng: 113.2154 } }
];
