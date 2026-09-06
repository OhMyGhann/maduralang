import { EntriKamus, ParbhasanData } from './types.js';

export const KOSAKATA_MADURA: EntriKamus[] = [
  // =========================================================================
  // 1. KATA GANTI ORANG (PRONOMINA)
  // =========================================================================
  {
    id: 'pron-01',
    kataDasar: 'engkok',
    artiIndonesia: ['saya', 'aku'],
    kelasKata: 'pronomina',
    kategori: 'kata_ganti',
    tingkatan: { enjaIya: 'engkok', engghiEnten: 'kula', engghiBhunten: 'abdhina' },
    contohKalimat: { madura: 'Engkok terro entara ka Pamekasan.', indonesia: 'Saya ingin pergi ke Pamekasan.' }
  },
  {
    id: 'pron-02',
    kataDasar: 'be\'en',
    artiIndonesia: ['kamu', 'engkau', 'anda'],
    kelasKata: 'pronomina',
    kategori: 'kata_ganti',
    tingkatan: { enjaIya: "be'en", engghiEnten: 'dhika', engghiBhunten: 'panjhenengngan' },
    contohKalimat: { madura: "Be'en la ngakan sate?", indonesia: 'Kamu sudah makan sate?' }
  },
  {
    id: 'pron-03',
    kataDasar: 'dhibi\'en',
    artiIndonesia: ['dia', 'beliau'],
    kelasKata: 'pronomina',
    kategori: 'kata_ganti',
    tingkatan: { enjaIya: "dhibi'en", engghiEnten: 'salerana', engghiBhunten: 'ajunan' },
    contohKalimat: { madura: "Dhibi'en ghi' alako neng sabha.", indonesia: 'Dia masih bekerja di sawah.' }
  },
  {
    id: 'pron-04',
    kataDasar: 'kabbhi',
    artiIndonesia: ['mereka', 'semua'],
    kelasKata: 'pronomina',
    kategori: 'kata_ganti',
    tingkatan: { enjaIya: 'kabbhi', engghiEnten: 'sadaja', engghiBhunten: 'sadajana' },
    contohKalimat: { madura: 'Reng-oreng rowa kabbhi taretan.', indonesia: 'Orang-orang itu semua bersaudara.' }
  },
  {
    id: 'pron-05',
    kataDasar: 'dhibi\'',
    artiIndonesia: ['sendiri', 'diri sendiri'],
    kelasKata: 'pronomina',
    kategori: 'kata_ganti',
    tingkatan: { enjaIya: "dhibi'", engghiEnten: "dhibi'", engghiBhunten: 'dibasa' },
    contohKalimat: { madura: "Engkok ngalakone dhibi'.", indonesia: 'Saya mengerjakannya sendiri.' }
  },

  // =========================================================================
  // 2. KATA KERJA VITAL (VERBA)
  // =========================================================================
  {
    id: 'verb-01',
    kataDasar: 'kakan',
    artiIndonesia: ['makan', 'bersantap'],
    kelasKata: 'verba',
    kategori: 'aktivitas',
    tingkatan: { enjaIya: 'ngakan', engghiEnten: 'ngadhep', engghiBhunten: "dha'ar" },
    contohKalimat: { madura: "Ngireng ngakan sate kambing Pamekasan.", indonesia: 'Mari makan sate kambing Pamekasan.' }
  },
  {
    id: 'verb-02',
    kataDasar: 'enom',
    artiIndonesia: ['minum'],
    kelasKata: 'verba',
    kategori: 'aktivitas',
    tingkatan: { enjaIya: 'ngènom', engghiEnten: 'ngènom', engghiBhunten: 'ngonjhum' },
    contohKalimat: { madura: 'Engkok ngènom aeng degan manes.', indonesia: 'Saya minum air kelapa manis.' }
  },
  {
    id: 'verb-03',
    kataDasar: 'tedhung',
    artiIndonesia: ['tidur', 'beristirahat'],
    kelasKata: 'verba',
    kategori: 'aktivitas',
    tingkatan: { enjaIya: 'tedhung', engghiEnten: "toro'", engghiBhunten: 'sare' },
    contohKalimat: { madura: 'Kyai la sare neng dhalem.', indonesia: 'Kyai sudah tidur di dalam.' }
  },
  {
    id: 'verb-04',
    kataDasar: 'enta',
    artiIndonesia: ['pergi', 'berangkat'],
    kelasKata: 'verba',
    kategori: 'aktivitas',
    tingkatan: { enjaIya: 'enta', engghiEnten: 'onggha', engghiBhunten: 'meyos' },
    contohKalimat: { madura: 'Engkok terro entara ka pasar.', indonesia: 'Saya ingin pergi ke pasar.' }
  },
  {
    id: 'verb-05',
    kataDasar: 'dateng',
    artiIndonesia: ['datang', 'tiba'],
    kelasKata: 'verba',
    kategori: 'aktivitas',
    tingkatan: { enjaIya: 'dateng', engghiEnten: 'rabu', engghiBhunten: 'meyossa' },
    contohKalimat: { madura: 'Tretan dhari Bangkalan la dateng.', indonesia: 'Saudara dari Bangkalan sudah datang.' }
  },
  {
    id: 'verb-06',
    kataDasar: 'toles',
    artiIndonesia: ['menulis', 'tulis'],
    kelasKata: 'verba',
    kategori: 'aktivitas',
    tingkatan: { enjaIya: 'noles', engghiEnten: 'noles', engghiBhunten: 'nyerrat' },
    contohKalimat: { madura: 'Engkok noles program ngangghuy MaduraLang.', indonesia: 'Saya menulis program memakai MaduraLang.' }
  },
  {
    id: 'verb-07',
    kataDasar: 'baca',
    artiIndonesia: ['membaca', 'baca'],
    kelasKata: 'verba',
    kategori: 'aktivitas',
    tingkatan: { enjaIya: 'maca', engghiEnten: 'maos', engghiBhunten: 'maos' },
    contohKalimat: { madura: 'Santri rowa gi\' maca ketab neng langghar.', indonesia: 'Santri itu sedang membaca kitab di musholla.' }
  },
  {
    id: 'verb-08',
    kataDasar: 'koca',
    artiIndonesia: ['berbicara', 'berkata', 'bicara'],
    kelasKata: 'verba',
    kategori: 'komunikasi',
    tingkatan: { enjaIya: 'ngoca\'', engghiEnten: 'ngoca\'', engghiBhunten: 'dhabu' },
    contohKalimat: { madura: 'Kyai adhabu parkara sopan santun.', indonesia: 'Kyai berbicara tentang sopan santun.' }
  },
  {
    id: 'verb-09',
    kataDasar: 'dingkal',
    artiIndonesia: ['dengar', 'mendengar'],
    kelasKata: 'verba',
    kategori: 'indera',
    tingkatan: { enjaIya: 'ngedhing', engghiEnten: 'meyarsa', engghiBhunten: 'meyarsa' },
    contohKalimat: { madura: 'Engkok ngedhing sowara bedhug.', indonesia: 'Saya mendengar suara bedug.' }
  },
  {
    id: 'verb-10',
    kataDasar: 'tenggu',
    artiIndonesia: ['melihat', 'lihat', 'nonton'],
    kelasKata: 'verba',
    kategori: 'indera',
    tingkatan: { enjaIya: 'nenggu', engghiEnten: 'ngoladi', engghiBhunten: 'mriksane' },
    contohKalimat: { madura: 'Ngireng nenggu karapan sape!', indonesia: 'Mari melihat karapan sapi!' }
  },
  {
    id: 'verb-11',
    kataDasar: 'mandi',
    artiIndonesia: ['mandi'],
    kelasKata: 'verba',
    kategori: 'kebersihan',
    tingkatan: { enjaIya: 'mandi', engghiEnten: 'asiram', engghiBhunten: 'asiram' },
    contohKalimat: { madura: 'Engkok la mandi aeng tawar.', indonesia: 'Saya sudah mandi air tawar.' }
  },
  {
    id: 'verb-12',
    kataDasar: 'alako',
    artiIndonesia: ['bekerja', 'kerja'],
    kelasKata: 'verba',
    kategori: 'profesi',
    tingkatan: { enjaIya: 'alako', engghiEnten: 'akarya', engghiBhunten: 'akarya' },
    contohKalimat: { madura: 'Oreng Madura ce\' rajhinna mon alako.', indonesia: 'Orang Madura sangat rajin kalau bekerja.' }
  },
  {
    id: 'verb-13',
    kataDasar: 'melle',
    artiIndonesia: ['membeli', 'beli'],
    kelasKata: 'verba',
    kategori: 'transaksi',
    tingkatan: { enjaIya: 'melle', engghiEnten: 'melle', engghiBhunten: 'mondhut' },
    contohKalimat: { madura: 'Ebu melle batik neng pasar Klampar.', indonesia: 'Ibu membeli batik di pasar Klampar.' }
  },
  {
    id: 'verb-14',
    kataDasar: 'jhuwal',
    artiIndonesia: ['menjual', 'jual'],
    kelasKata: 'verba',
    kategori: 'transaksi',
    tingkatan: { enjaIya: 'ajhuwal', engghiEnten: 'ajhuwal', engghiBhunten: 'nyade' },
    contohKalimat: { madura: 'Paman ajhuwal sate Madura.', indonesia: 'Paman menjual sate Madura.' }
  },
  {
    id: 'verb-15',
    kataDasar: 'tao',
    artiIndonesia: ['tahu', 'mengerti', 'paham'],
    kelasKata: 'verba',
    kategori: 'pengetahuan',
    tingkatan: { enjaIya: 'tao', engghiEnten: 'oneng', engghiBhunten: 'oneng' },
    contohKalimat: { madura: 'Engkok ta\' tao dalanna.', indonesia: 'Saya tidak tahu jalannya.' }
  },

  // =========================================================================
  // 3. KATA SIFAT & KONDISI (ADJEKTIVA)
  // =========================================================================
  {
    id: 'adj-01',
    kataDasar: 'bhaghus',
    artiIndonesia: ['bagus', 'baik', 'indah'],
    kelasKata: 'adjektiva',
    kategori: 'sifat',
    tingkatan: { enjaIya: 'bhaghus', engghiEnten: 'sae', engghiBhunten: 'sae' },
    contohKalimat: { madura: 'Pemandanganna ce\' bhaghussa.', indonesia: 'Pemandangannya sangat bagus.' }
  },
  {
    id: 'adj-02',
    kataDasar: 'jhubha\'',
    artiIndonesia: ['jelek', 'buruk', 'rusak'],
    kelasKata: 'adjektiva',
    kategori: 'sifat',
    tingkatan: { enjaIya: "jhubha'", engghiEnten: 'koreng', engghiBhunten: 'awon' },
    contohKalimat: { madura: "Jha' alako kalakowan jhubha'.", indonesia: 'Jangan berbuat perbuatan buruk.' }
  },
  {
    id: 'adj-03',
    kataDasar: 'penter',
    artiIndonesia: ['pintar', 'pandai', 'cerdas'],
    kelasKata: 'adjektiva',
    kategori: 'intelektual',
    tingkatan: { enjaIya: 'pènter', engghiEnten: 'pènter', engghiBhunten: 'oncol' },
    contohKalimat: { madura: 'Santri Madura pènter maca ketab.', indonesia: 'Santri Madura pintar membaca kitab.' }
  },
  {
    id: 'adj-04',
    kataDasar: 'budhu',
    artiIndonesia: ['bodoh', 'dungu'],
    kelasKata: 'adjektiva',
    kategori: 'intelektual',
    tingkatan: { enjaIya: 'budhu', engghiEnten: 'budhu', engghiBhunten: 'kirang manggi' },
    contohKalimat: { madura: 'Kodhu ajhar sopaja ta\' budhu.', indonesia: 'Harus belajar agar tidak bodoh.' }
  },
  {
    id: 'adj-05',
    kataDasar: 'raddin',
    artiIndonesia: ['cantik', 'jelita', 'ayu'],
    kelasKata: 'adjektiva',
    kategori: 'fisik',
    tingkatan: { enjaIya: 'raddin', engghiEnten: 'raddin', engghiBhunten: 'sopeng' },
    contohKalimat: { madura: 'Bhabine\' Pamekasan ce\' raddinna.', indonesia: 'Perempuan Pamekasan sangat cantik.' }
  },
  {
    id: 'adj-06',
    kataDasar: 'gantheng',
    artiIndonesia: ['tampan', 'gagah'],
    kelasKata: 'adjektiva',
    kategori: 'fisik',
    tingkatan: { enjaIya: 'gantheng', engghiEnten: 'gantheng', engghiBhunten: 'bhagus' },
    contohKalimat: { madura: 'Panglima Sakera orengnga gantheng ban gagah.', indonesia: 'Panglima Sakera orangnya tampan dan gagah.' }
  },
  {
    id: 'adj-07',
    kataDasar: 'senneng',
    artiIndonesia: ['senang', 'gembira', 'bahagia'],
    kelasKata: 'adjektiva',
    kategori: 'perasaan',
    tingkatan: { enjaIya: 'senneng', engghiEnten: 'senneng', engghiBhunten: 'bhingah' },
    contohKalimat: { madura: 'Ate engkok ce\' sennengnga arteyan e-bantu.', indonesia: 'Hati saya sangat senang karena dibantu.' }
  },
  {
    id: 'adj-08',
    kataDasar: 'sossa',
    artiIndonesia: ['sedih', 'susah', 'duka'],
    kelasKata: 'adjektiva',
    kategori: 'perasaan',
    tingkatan: { enjaIya: 'sossa', engghiEnten: 'sossa', engghiBhunten: 'sengkal' },
    contohKalimat: { madura: "Jhe' sossa tretan, gi' bannya' rejeke.", indonesia: 'Jangan sedih saudara, masih banyak rezeki.' }
  },
  {
    id: 'adj-09',
    kataDasar: 'lapar',
    artiIndonesia: ['lapar'],
    kelasKata: 'adjektiva',
    kategori: 'kondisi',
    tingkatan: { enjaIya: 'lapar', engghiEnten: 'lapar', engghiBhunten: 'leso' },
    contohKalimat: { madura: 'Engkok lapar terro ngakana nasi jagung.', indonesia: 'Saya lapar ingin makan nasi jagung.' }
  },
  {
    id: 'adj-10',
    kataDasar: 'kanyang',
    artiIndonesia: ['kenyang'],
    kelasKata: 'adjektiva',
    kategori: 'kondisi',
    tingkatan: { enjaIya: 'kanyang', engghiEnten: 'kanyang', engghiBhunten: 'tuwuk' },
    contohKalimat: { madura: 'Alhamdulillah la kanyang.', indonesia: 'Alhamdulillah sudah kenyang.' }
  },
  {
    id: 'adj-11',
    kataDasar: 'rajhe',
    artiIndonesia: ['besar', 'luas', 'agung'],
    kelasKata: 'adjektiva',
    kategori: 'ukuran',
    tingkatan: { enjaIya: 'rajhe', engghiEnten: 'rajhe', engghiBhunten: 'agung' },
    contohKalimat: { madura: 'Mator sakalangkong rajhe tretan!', indonesia: 'Terima kasih banyak saudaraku!' }
  },
  {
    id: 'adj-12',
    kataDasar: 'kene\'',
    artiIndonesia: ['kecil', 'mungil'],
    kelasKata: 'adjektiva',
    kategori: 'ukuran',
    tingkatan: { enjaIya: "kene'", engghiEnten: "kene'", engghiBhunten: 'alit' },
    contohKalimat: { madura: "Bengko kene' tapi nyaman.", indonesia: 'Rumah kecil tapi nyaman.' }
  },
  {
    id: 'adj-13',
    kataDasar: 'panas',
    artiIndonesia: ['panas'],
    kelasKata: 'adjektiva',
    kategori: 'suhu',
    tingkatan: { enjaIya: 'panas', engghiEnten: 'panas', engghiBhunten: 'bheddheng' },
    contohKalimat: { madura: 'Are mangken panas ongghu.', indonesia: 'Hari ini sangat panas.' }
  },
  {
    id: 'adj-14',
    kataDasar: 'cellep',
    artiIndonesia: ['dingin', 'sejuk'],
    kelasKata: 'adjektiva',
    kategori: 'suhu',
    tingkatan: { enjaIya: 'cellep', engghiEnten: 'cellep', engghiBhunten: 'asrep' },
    contohKalimat: { madura: 'Aeng cellep segar rasana.', indonesia: 'Air dingin segar rasanya.' }
  },

  // =========================================================================
  // 4. KELUARGA & KEKERABATAN (NOMINA)
  // =========================================================================
  {
    id: 'fam-01',
    kataDasar: 'bhuppa\'',
    artiIndonesia: ['ayah', 'bapak'],
    kelasKata: 'nomina',
    kategori: 'keluarga',
    tingkatan: { enjaIya: "ebha' / bapa'", engghiEnten: "bhuppa'", engghiBhunten: 'rama' },
    contohKalimat: { madura: "Bhuppa' ghi' neng sabha.", indonesia: 'Ayah masih di sawah.' }
  },
  {
    id: 'fam-02',
    kataDasar: 'embhu\'',
    artiIndonesia: ['ibu', 'emak'],
    kelasKata: 'nomina',
    kategori: 'keluarga',
    tingkatan: { enjaIya: "embu' / ebu", engghiEnten: "embhu'", engghiBhunten: 'ebhu' },
    contohKalimat: { madura: "Embhu' amassa' juko' neng dapor.", indonesia: 'Ibu memasak ikan di dapur.' }
  },
  {
    id: 'fam-03',
    kataDasar: 'tretan',
    artiIndonesia: ['saudara', 'saudari', 'kawan'],
    kelasKata: 'nomina',
    kategori: 'keluarga',
    tingkatan: { enjaIya: 'taretan', engghiEnten: 'tretan', engghiBhunten: 'tretan' },
    contohKalimat: { madura: 'Salam settong dhere taretan!', indonesia: 'Salam satu darah saudaraku!' }
  },
  {
    id: 'fam-04',
    kataDasar: 'ana\'',
    artiIndonesia: ['anak', 'putra', 'putri'],
    kelasKata: 'nomina',
    kategori: 'keluarga',
    tingkatan: { enjaIya: "ana'", engghiEnten: "ana'", engghiBhunten: 'potra' },
    contohKalimat: { madura: "Ana'na la sakola neng SD.", indonesia: 'Anaknya sudah sekolah di SD.' }
  },
  {
    id: 'fam-05',
    kataDasar: 'emba',
    artiIndonesia: ['kakek', 'nenek'],
    kelasKata: 'nomina',
    kategori: 'keluarga',
    tingkatan: { enjaIya: 'emba', engghiEnten: 'kyai / nyae', engghiBhunten: 'eyang' },
    contohKalimat: { madura: 'Emba nyaretaaghi sejarah Sakera.', indonesia: 'Kakek menceritakan sejarah Sakera.' }
  },

  // =========================================================================
  // 5. WAKTU & KETERANGAN (ADVERBA / NOMINA)
  // =========================================================================
  {
    id: 'time-01',
    kataDasar: 'sateya',
    artiIndonesia: ['sekarang', 'saat ini'],
    kelasKata: 'adverba',
    kategori: 'waktu',
    tingkatan: { enjaIya: 'sateya', engghiEnten: 'samangken', engghiBhunten: 'samangken' },
    contohKalimat: { madura: 'Samangken la pukul tello sore.', indonesia: 'Sekarang sudah pukul tiga sore.' }
  },
  {
    id: 'time-02',
    kataDasar: 'lagghu',
    artiIndonesia: ['besok', 'esok hari'],
    kelasKata: 'adverba',
    kategori: 'waktu',
    tingkatan: { enjaIya: 'lagghu', engghiEnten: 'lagghu', engghiBhunten: 'enjhang' },
    contohKalimat: { madura: 'Lagghu engkok terro entara ka Sumenep.', indonesia: 'Besok saya ingin pergi ke Sumenep.' }
  },
  {
    id: 'time-03',
    kataDasar: 'bari\'to',
    artiIndonesia: ['kemarin'],
    kelasKata: 'adverba',
    kategori: 'waktu',
    tingkatan: { enjaIya: "bari'to", engghiEnten: "bari'to", engghiBhunten: 'kalaenta' },
    contohKalimat: { madura: "Bari'to engkok melle bebek neng Bangkalan.", indonesia: 'Kemarin saya membeli bebek di Bangkalan.' }
  },
  {
    id: 'time-04',
    kataDasar: 'ghul-lagghu',
    artiIndonesia: ['pagi', 'pagi hari'],
    kelasKata: 'nomina',
    kategori: 'waktu',
    tingkatan: { enjaIya: 'ghul-lagghu', engghiEnten: 'ghul-lagghu', engghiBhunten: 'enjhang-enjhang' },
    contohKalimat: { madura: 'Ghul-lagghu hawana ce\' segar.', indonesia: 'Pagi hari hawanya sangat segar.' }
  },
  {
    id: 'time-05',
    kataDasar: 'malem',
    artiIndonesia: ['malam', 'malam hari'],
    kelasKata: 'nomina',
    kategori: 'waktu',
    tingkatan: { enjaIya: 'malem', engghiEnten: 'malem', engghiBhunten: 'dalem' },
    contohKalimat: { madura: 'Mon malem Arek Lancor ce\' rame-na.', indonesia: 'Kalau malam Arek Lancor sangat ramai.' }
  },

  // =========================================================================
  // 6. BENDA, ALAM & RUMAH TANGGA (NOMINA)
  // =========================================================================
  {
    id: 'noun-01',
    kataDasar: 'bengko',
    artiIndonesia: ['rumah', 'hunian', 'kediaman'],
    kelasKata: 'nomina',
    kategori: 'benda',
    tingkatan: { enjaIya: 'bengko', engghiEnten: 'roma', engghiBhunten: 'dalem' },
    contohKalimat: { madura: 'Bengkona Sakera neng Pamekasan.', indonesia: 'Rumahnya Sakera di Pamekasan.' }
  },
  {
    id: 'noun-02',
    kataDasar: 'aeng',
    artiIndonesia: ['air'],
    kelasKata: 'nomina',
    kategori: 'alam',
    tingkatan: { enjaIya: 'aeng', engghiEnten: 'aeng', engghiBhunten: 'aeeng / toya' },
    contohKalimat: { madura: 'Aeng neng Toroan Sampang moncor ka tase\'.', indonesia: 'Air di Toroan Sampang mengalir ke laut.' }
  },
  {
    id: 'noun-03',
    kataDasar: 'pesse',
    artiIndonesia: ['uang', 'dana', 'duit'],
    kelasKata: 'nomina',
    kategori: 'finansial',
    tingkatan: { enjaIya: 'pesse', engghiEnten: 'pesse', engghiBhunten: 'yatra' },
    contohKalimat: { madura: "Tadhe' pesse kaangghuy melle motor.", indonesia: 'Tidak ada uang untuk membeli motor.' }
  },
  {
    id: 'noun-04',
    kataDasar: 'tase\'',
    artiIndonesia: ['laut', 'pantai', 'samudra'],
    kelasKata: 'nomina',
    kategori: 'alam',
    tingkatan: { enjaIya: "tase'", engghiEnten: "tase'", engghiBhunten: 'segara' },
    contohKalimat: { madura: "Nelayan Madura nyare juko' neng tase'.", indonesia: 'Nelayan Madura mencari ikan di laut.' }
  },
  {
    id: 'noun-05',
    kataDasar: 'kopi',
    artiIndonesia: ['kopi'],
    kelasKata: 'nomina',
    kategori: 'makanan',
    tingkatan: { enjaIya: 'kopi', engghiEnten: 'kopi', engghiBhunten: 'kopi' },
    contohKalimat: { madura: 'Ngireng ngopi sarenge tretān.', indonesia: 'Mari minum kopi bersama saudara.' }
  },

  // =========================================================================
  // 7. KESANTUNAN & FRASA KUNCI
  // =========================================================================
  {
    id: 'phrase-01',
    kataDasar: 'sakalangkong',
    artiIndonesia: ['terima kasih'],
    kelasKata: 'interjeksi',
    kategori: 'kesantunan',
    tingkatan: { enjaIya: 'mator sakalangkong', engghiEnten: 'mator sakalangkong', engghiBhunten: 'mator sakalangkong rajhe' },
    contohKalimat: { madura: 'Mator sakalangkong rabuna tretan!', indonesia: 'Terima kasih banyak atas kedatangannya kawan!' }
  },
  {
    id: 'phrase-02',
    kataDasar: 'sapora',
    artiIndonesia: ['maaf', 'ampun', 'permisi'],
    kelasKata: 'interjeksi',
    kategori: 'kesantunan',
    tingkatan: { enjaIya: 'nyo\'on sapora', engghiEnten: 'nyo\'on sapora', engghiBhunten: 'neda nyo\'on pangapora' },
    contohKalimat: { madura: "Nyo'on sapora mon engkok sala.", indonesia: 'Minta maaf kalau saya salah.' }
  },
  {
    id: 'phrase-03',
    kataDasar: 'iye',
    artiIndonesia: ['ya', 'benar', 'betul'],
    kelasKata: 'partikel',
    kategori: 'kesantunan',
    tingkatan: { enjaIya: "iya / iye", engghiEnten: 'engghi', engghiBhunten: 'engghi leres' },
    contohKalimat: { madura: 'Engghi leres dhika bhender.', indonesia: 'Ya benar, kamu betul.' }
  },
  {
    id: 'phrase-04',
    kataDasar: 'enja\'',
    artiIndonesia: ['tidak', 'bukan'],
    kelasKata: 'partikel',
    kategori: 'kesantunan',
    tingkatan: { enjaIya: "enja'", engghiEnten: 'enten', engghiBhunten: 'bhunten' },
    contohKalimat: { madura: "Engkok enja' sengit ka be'en.", indonesia: 'Saya tidak benci kepadamu.' }
  },
  {
    id: 'phrase-05',
    kataDasar: 'tadhe\'',
    artiIndonesia: ['tidak ada', 'habis', 'kosong'],
    kelasKata: 'adverbia' as any,
    kategori: 'kesantunan',
    tingkatan: { enjaIya: "tadhe'", engghiEnten: 'sobung', engghiBhunten: 'sobung' },
    contohKalimat: { madura: "Nasina la tadhe' kabbhi.", indonesia: 'Nasinya sudah tidak ada semua.' }
  },
  {
    id: 'phrase-06',
    kataDasar: 'ngireng',
    artiIndonesia: ['mari', 'silakan', 'ayo'],
    kelasKata: 'interjeksi',
    kategori: 'kesantunan',
    tingkatan: { enjaIya: 'ayo / ngireng', engghiEnten: 'ngireng', engghiBhunten: 'ngireng ajunan' },
    contohKalimat: { madura: 'Ngireng rabu ka dhalem.', indonesia: 'Silakan masuk ke dalam.' }
  }
];

export const PARBHASAN_MADURA: ParbhasanData[] = [
  {
    teks: "Abhantal omba' asapo' angen",
    artiHarfiah: 'Berbantal ombak berselimut angin',
    maknaFilosofis: 'Menggambarkan etos kerja keras dan ketangguhan pelaut Madura yang rela menghadapi bahaya samudra demi menghidupi keluarga.',
    tema: 'Kerja Keras & Ketangguhan'
  },
  {
    teks: "Bhuppa' bhabhu' ghuru rato",
    artiHarfiah: 'Ayah, ibu, guru, pemimpin/raja',
    maknaFilosofis: 'Urutan hierarki penghormatan luhur dalam adat Madura: pertama patuh kepada orang tua, kedua kepada guru/kyai, dan ketiga kepada pemimpin.',
    tema: 'Etika & Bakti'
  },
  {
    teks: "Ango'an pothe tolang etembang pothe mata",
    artiHarfiah: 'Lebih baik putih tulang daripada putih mata',
    maknaFilosofis: 'Lebih baik gugur (mati membela kehormatan dan kebenaran) daripada hidup menanggung aib atau rasa malu.',
    tema: 'Kehormatan & Harga Diri'
  },
  {
    teks: "Mon aeng tengghi, parana tengghi",
    artiHarfiah: 'Jika air naik tinggi, maka perahu juga ikut terangkat tinggi',
    maknaFilosofis: 'Jika seorang pemimpin atau kepala keluarga memiliki martabat mulia, maka seluruh rakyat dan anak buahnya akan ikut terangkat mulia.',
    tema: 'Kepemimpinan'
  },
  {
    teks: "Ta' atellok ta' mera matana",
    artiHarfiah: 'Tidak melotot tidak merah matanya',
    maknaFilosofis: 'Ciri khas kesabaran sejati: tidak lekas marah atau dendam menghadapi cobaan hidup sebelum membuktikan dengan kerja nyata.',
    tema: 'Kesabaran & Pengendalian Diri'
  },
  {
    teks: "Kerrapan sape ta' kera nyerra",
    artiHarfiah: 'Karapan sapi tidak akan menyerah di tengah lintasan',
    maknaFilosofis: 'Sekali tekad sudah dipancang untuk mencapai cita-cita, pantang untuk mundur sebelum garis finish tercapai.',
    tema: 'Pantang Menyerah'
  }
];
