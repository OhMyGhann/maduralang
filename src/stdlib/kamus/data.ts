import { EntriKamus, ParbhasanData } from './types.js';

export const KOSAKATA_MADURA: EntriKamus[] = [
  // =========================================================================
  // 1. KATA GANTI ORANG & PENUNJUK (PRONOMINA & DEMONSTRATIVA)
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
    artiIndonesia: ['kamu', 'engkau', 'anda', 'kau'],
    kelasKata: 'pronomina',
    kategori: 'kata_ganti',
    tingkatan: { enjaIya: "be'en", engghiEnten: 'dhika', engghiBhunten: 'panjhenengngan' },
    contohKalimat: { madura: "Be'en la ngakan sate?", indonesia: 'Kamu sudah makan sate?' }
  },
  {
    id: 'pron-03',
    kataDasar: 'dhibi\'en',
    artiIndonesia: ['dia', 'ia', 'beliau'],
    kelasKata: 'pronomina',
    kategori: 'kata_ganti',
    tingkatan: { enjaIya: "dhibi'en", engghiEnten: 'salerana', engghiBhunten: 'ajunan' },
    contohKalimat: { madura: "Dhibi'en ghi' alako neng sabha.", indonesia: 'Dia masih bekerja di sawah.' }
  },
  {
    id: 'pron-04',
    kataDasar: 'kami',
    artiIndonesia: ['kami', 'kita'],
    kelasKata: 'pronomina',
    kategori: 'kata_ganti',
    tingkatan: { enjaIya: 'sengko\' kabbhi', engghiEnten: 'kula sadaja', engghiBhunten: 'abdhina sadajana' },
    contohKalimat: { madura: 'Sengko\' kabbhi padha taretan.', indonesia: 'Kita semua sama-sama bersaudara.' }
  },
  {
    id: 'pron-05',
    kataDasar: 'kabbhi',
    artiIndonesia: ['mereka', 'semua', 'semuanya'],
    kelasKata: 'pronomina',
    kategori: 'kata_ganti',
    tingkatan: { enjaIya: 'kabbhi', engghiEnten: 'sadaja', engghiBhunten: 'sadajana' },
    contohKalimat: { madura: 'Reng-oreng rowa kabbhi taretan.', indonesia: 'Orang-orang itu semua bersaudara.' }
  },
  {
    id: 'pron-06',
    kataDasar: 'dhibi\'',
    artiIndonesia: ['sendiri', 'diri sendiri'],
    kelasKata: 'pronomina',
    kategori: 'kata_ganti',
    tingkatan: { enjaIya: "dhibi'", engghiEnten: "dhibi'", engghiBhunten: 'dibasa' },
    contohKalimat: { madura: "Engkok ngalakone dhibi'.", indonesia: 'Saya mengerjakannya sendiri.' }
  },
  {
    id: 'pron-07',
    kataDasar: 'reya',
    artiIndonesia: ['ini'],
    kelasKata: 'pronomina',
    kategori: 'penunjuk',
    tingkatan: { enjaIya: 'reya', engghiEnten: 'nika', engghiBhunten: 'paneka' },
    contohKalimat: { madura: 'Buku reya ampon e-baca.', indonesia: 'Buku ini sudah dibaca.' }
  },
  {
    id: 'pron-08',
    kataDasar: 'rowa',
    artiIndonesia: ['itu'],
    kelasKata: 'pronomina',
    kategori: 'penunjuk',
    tingkatan: { enjaIya: 'rowa', engghiEnten: 'nèko', engghiBhunten: 'panèka' },
    contohKalimat: { madura: 'Bengko rowa bengkona Kyai.', indonesia: 'Rumah itu rumahnya Kyai.' }
  },

  // =========================================================================
  // 2. KATA TANYA (INTEROGATIF)
  // =========================================================================
  {
    id: 'tanya-01',
    kataDasar: 'apa',
    artiIndonesia: ['apa'],
    kelasKata: 'pronomina',
    kategori: 'kata_tanya',
    tingkatan: { enjaIya: 'apa', engghiEnten: 'ponapa', engghiBhunten: 'ponapa' },
    contohKalimat: { madura: "Be'en ngakan apa?", indonesia: 'Kamu makan apa?' }
  },
  {
    id: 'tanya-02',
    kataDasar: 'sapa',
    artiIndonesia: ['siapa'],
    kelasKata: 'pronomina',
    kategori: 'kata_tanya',
    tingkatan: { enjaIya: 'sapa', engghiEnten: 'pasera', engghiBhunten: 'pasera' },
    contohKalimat: { madura: 'Nyama be\'en sapa?', indonesia: 'Nama kamu siapa?' }
  },
  {
    id: 'tanya-03',
    kataDasar: 'kemma',
    artiIndonesia: ['mana', 'dimana', 'di mana', 'ke mana', 'kemana'],
    kelasKata: 'pronomina',
    kategori: 'kata_tanya',
    tingkatan: { enjaIya: 'kemma / dimma', engghiEnten: 'kemma', engghiBhunten: 'ka\'dimma' },
    contohKalimat: { madura: 'Entara ka kemma be\'en?', indonesia: 'Mau pergi ke mana kamu?' }
  },
  {
    id: 'tanya-04',
    kataDasar: 'bila',
    artiIndonesia: ['kapan', 'bilamana'],
    kelasKata: 'pronomina',
    kategori: 'kata_tanya',
    tingkatan: { enjaIya: 'bila', engghiEnten: 'bila', engghiBhunten: 'sanapa' },
    contohKalimat: { madura: 'Bila be\'en mole ka Madura?', indonesia: 'Kapan kamu pulang ke Madura?' }
  },
  {
    id: 'tanya-05',
    kataDasar: 'arapa',
    artiIndonesia: ['kenapa', 'mengapa'],
    kelasKata: 'pronomina',
    kategori: 'kata_tanya',
    tingkatan: { enjaIya: 'arapa', engghiEnten: 'anapa', engghiBhunten: 'kadi ponapa' },
    contohKalimat: { madura: 'Arapa be\'en nanges?', indonesia: 'Kenapa kamu menangis?' }
  },
  {
    id: 'tanya-06',
    kataDasar: 'brampa',
    artiIndonesia: ['berapa'],
    kelasKata: 'pronomina',
    kategori: 'kata_tanya',
    tingkatan: { enjaIya: 'brampa', engghiEnten: 'saponapa', engghiBhunten: 'saponapa' },
    contohKalimat: { madura: 'Arghana sate reya brampa?', indonesia: 'Harganya sate ini berapa?' }
  },
  {
    id: 'tanya-07',
    kataDasar: 'dekremma',
    artiIndonesia: ['bagaimana', 'gimana'],
    kelasKata: 'pronomina',
    kategori: 'kata_tanya',
    tingkatan: { enjaIya: 'dekremma', engghiEnten: 'kadi ponapa', engghiBhunten: 'kadi ponapa' },
    contohKalimat: { madura: 'Dekremma kabarra tretan?', indonesia: 'Bagaimana kabarnya kawan?' }
  },

  // =========================================================================
  // 3. ARAH & NAVIGASI MATA ANGIN (SPATIAL & DIRECTION)
  // =========================================================================
  {
    id: 'dir-01',
    kataDasar: 'daja',
    artiIndonesia: ['utara'],
    kelasKata: 'nomina',
    kategori: 'arah',
    tingkatan: { enjaIya: 'daja', engghiEnten: 'daja', engghiBhunten: 'daja' },
    contohKalimat: { madura: 'Engkok bari\'to buru ka daja.', indonesia: 'Saya kemarin lari ke utara.' }
  },
  {
    id: 'dir-02',
    kataDasar: 'lao\'',
    artiIndonesia: ['selatan'],
    kelasKata: 'nomina',
    kategori: 'arah',
    tingkatan: { enjaIya: "lao'", engghiEnten: "lao'", engghiBhunten: "lao'" },
    contohKalimat: { madura: "Tase' Camplong bada neng lao'.", indonesia: 'Pantai Camplong ada di selatan.' }
  },
  {
    id: 'dir-03',
    kataDasar: 'temor',
    artiIndonesia: ['timur'],
    kelasKata: 'nomina',
    kategori: 'arah',
    tingkatan: { enjaIya: 'temor', engghiEnten: 'temor', engghiBhunten: 'temor' },
    contohKalimat: { madura: 'Sumenep bada neng bageyan temor Madura.', indonesia: 'Sumenep berada di bagian timur Madura.' }
  },
  {
    id: 'dir-04',
    kataDasar: 'bara\'',
    artiIndonesia: ['barat'],
    kelasKata: 'nomina',
    kategori: 'arah',
    tingkatan: { enjaIya: "bara'", engghiEnten: "bara'", engghiBhunten: "bara'" },
    contohKalimat: { madura: "Bangkalan bada neng bageyan bara'.", indonesia: 'Bangkalan berada di bagian barat.' }
  },
  {
    id: 'dir-05',
    kataDasar: 'attas',
    artiIndonesia: ['atas'],
    kelasKata: 'adverba',
    kategori: 'arah',
    tingkatan: { enjaIya: 'attas', engghiEnten: 'attas', engghiBhunten: 'ngengghen' },
    contohKalimat: { madura: 'Burong ngabher neng attas.', indonesia: 'Burung terbang di atas.' }
  },
  {
    id: 'dir-06',
    kataDasar: 'baba',
    artiIndonesia: ['bawah'],
    kelasKata: 'adverba',
    kategori: 'arah',
    tingkatan: { enjaIya: 'baba', engghiEnten: 'baba', engghiBhunten: 'andhap' },
    contohKalimat: { madura: 'Sendal e-sabha neng baba.', indonesia: 'Sandal ditaruh di bawah.' }
  },
  {
    id: 'dir-07',
    kataDasar: 'adep',
    artiIndonesia: ['depan', 'muka'],
    kelasKata: 'adverba',
    kategori: 'arah',
    tingkatan: { enjaIya: 'adep', engghiEnten: 'adep', engghiBhunten: 'ajunan' },
    contohKalimat: { madura: 'Toju\' neng adep.', indonesia: 'Duduk di depan.' }
  },
  {
    id: 'dir-08',
    kataDasar: 'budi',
    artiIndonesia: ['belakang'],
    kelasKata: 'adverba',
    kategori: 'arah',
    tingkatan: { enjaIya: 'budi', engghiEnten: 'budi', engghiBhunten: 'pungkuran' },
    contohKalimat: { madura: 'Bengko reya bada taneyan neng budi.', indonesia: 'Rumah ini ada halaman di belakang.' }
  },
  {
    id: 'dir-09',
    kataDasar: 'kacer',
    artiIndonesia: ['kiri'],
    kelasKata: 'adverba',
    kategori: 'arah',
    tingkatan: { enjaIya: 'kacer', engghiEnten: 'kacer', engghiBhunten: 'kacer' },
    contohKalimat: { madura: 'Belok ka kacer.', indonesia: 'Belok ke kiri.' }
  },
  {
    id: 'dir-10',
    kataDasar: 'kanan',
    artiIndonesia: ['kanan'],
    kelasKata: 'adverba',
    kategori: 'arah',
    tingkatan: { enjaIya: 'kanan', engghiEnten: 'kanan', engghiBhunten: 'tengen' },
    contohKalimat: { madura: 'Ngangghuy tanang kanan mon ngakan.', indonesia: 'Gunakan tangan kanan kalau makan.' }
  },

  // =========================================================================
  // 4. KATA KERJA GERAKAN & AKTIVITAS (VERBA)
  // =========================================================================
  {
    id: 'verb-run',
    kataDasar: 'buru',
    artiIndonesia: ['lari', 'berlari', 'kabur'],
    kelasKata: 'verba',
    kategori: 'gerakan',
    tingkatan: { enjaIya: 'buru', engghiEnten: 'buru', engghiBhunten: 'ngalencak' },
    contohKalimat: { madura: "Engkok bari'to buru ka daja.", indonesia: 'Saya kemarin lari ke utara.' }
  },
  {
    id: 'verb-walk',
    kataDasar: 'jhelan',
    artiIndonesia: ['jalan', 'berjalan'],
    kelasKata: 'verba',
    kategori: 'gerakan',
    tingkatan: { enjaIya: 'ajhelan', engghiEnten: 'ajhelan', engghiBhunten: 'alomampa' },
    contohKalimat: { madura: 'Sengko\' ajhelan ka masjid.', indonesia: 'Saya berjalan ke masjid.' }
  },
  {
    id: 'verb-jump',
    kataDasar: 'lonca\'',
    artiIndonesia: ['lompat', 'melompat'],
    kelasKata: 'verba',
    kategori: 'gerakan',
    tingkatan: { enjaIya: "alonca'", engghiEnten: "alonca'", engghiBhunten: "alonca'" },
    contohKalimat: { madura: "Kucing rowa alonca' tengghi.", indonesia: 'Kucing itu melompat tinggi.' }
  },
  {
    id: 'verb-sit',
    kataDasar: 'toju\'',
    artiIndonesia: ['duduk'],
    kelasKata: 'verba',
    kategori: 'gerakan',
    tingkatan: { enjaIya: "toju'", engghiEnten: "toju'", engghiBhunten: 'lengghi' },
    contohKalimat: { madura: "Ngireng toju' neng korse.", indonesia: 'Silakan duduk di kursi.' }
  },
  {
    id: 'verb-stand',
    kataDasar: 'ngadek',
    artiIndonesia: ['berdiri', 'tegak'],
    kelasKata: 'verba',
    kategori: 'gerakan',
    tingkatan: { enjaIya: 'ngadek', engghiEnten: 'ngadek', engghiBhunten: 'ngadek' },
    contohKalimat: { madura: "Jha' ngadek neng labang.", indonesia: 'Jangan berdiri di pintu.' }
  },
  {
    id: 'verb-fall',
    kataDasar: 'labu',
    artiIndonesia: ['jatuh'],
    kelasKata: 'verba',
    kategori: 'gerakan',
    tingkatan: { enjaIya: 'labu', engghiEnten: 'labu', engghiBhunten: 'dhabu' },
    contohKalimat: { madura: 'Bua mangga labu dhari kaju.', indonesia: 'Buah mangga jatuh dari pohon.' }
  },
  {
    id: 'verb-go',
    kataDasar: 'enta',
    artiIndonesia: ['pergi', 'berangkat'],
    kelasKata: 'verba',
    kategori: 'aktivitas',
    tingkatan: { enjaIya: 'enta', engghiEnten: 'onggha', engghiBhunten: 'meyos' },
    contohKalimat: { madura: 'Engkok terro entara ka pasar.', indonesia: 'Saya ingin pergi ke pasar.' }
  },
  {
    id: 'verb-come',
    kataDasar: 'dateng',
    artiIndonesia: ['datang', 'tiba', 'hadir'],
    kelasKata: 'verba',
    kategori: 'aktivitas',
    tingkatan: { enjaIya: 'dateng', engghiEnten: 'rabu', engghiBhunten: 'meyossa' },
    contohKalimat: { madura: 'Tretan dhari Bangkalan la dateng.', indonesia: 'Saudara dari Bangkalan sudah datang.' }
  },
  {
    id: 'verb-home',
    kataDasar: 'mole',
    artiIndonesia: ['pulang', 'kembali'],
    kelasKata: 'verba',
    kategori: 'aktivitas',
    tingkatan: { enjaIya: 'mole', engghiEnten: 'kondhor', engghiBhunten: 'kondhor' },
    contohKalimat: { madura: 'Are ampon sore, ngireng mole.', indonesia: 'Hari sudah sore, mari pulang.' }
  },
  {
    id: 'verb-eat',
    kataDasar: 'kakan',
    artiIndonesia: ['makan', 'bersantap'],
    kelasKata: 'verba',
    kategori: 'aktivitas',
    tingkatan: { enjaIya: 'ngakan', engghiEnten: 'ngadhep', engghiBhunten: "dha'ar" },
    contohKalimat: { madura: "Ngireng ngakan sate kambing Pamekasan.", indonesia: 'Mari makan sate kambing Pamekasan.' }
  },
  {
    id: 'verb-drink',
    kataDasar: 'enom',
    artiIndonesia: ['minum'],
    kelasKata: 'verba',
    kategori: 'aktivitas',
    tingkatan: { enjaIya: 'ngènom', engghiEnten: 'ngènom', engghiBhunten: 'ngonjhum' },
    contohKalimat: { madura: 'Engkok ngènom aeng degan manes.', indonesia: 'Saya minum air kelapa manis.' }
  },
  {
    id: 'verb-sleep',
    kataDasar: 'tedhung',
    artiIndonesia: ['tidur', 'beristirahat'],
    kelasKata: 'verba',
    kategori: 'aktivitas',
    tingkatan: { enjaIya: 'tedhung', engghiEnten: "toro'", engghiBhunten: 'sare' },
    contohKalimat: { madura: 'Kyai la sare neng dhalem.', indonesia: 'Kyai sudah tidur di dalam.' }
  },
  {
    id: 'verb-bath',
    kataDasar: 'mandi',
    artiIndonesia: ['mandi'],
    kelasKata: 'verba',
    kategori: 'aktivitas',
    tingkatan: { enjaIya: 'mandi', engghiEnten: 'asiram', engghiBhunten: 'asiram' },
    contohKalimat: { madura: 'Engkok la mandi ghul-lagghu.', indonesia: 'Saya sudah mandi pagi-pagi.' }
  },
  {
    id: 'verb-speak',
    kataDasar: 'koca',
    artiIndonesia: ['berbicara', 'bicara', 'berkata', 'ngomong'],
    kelasKata: 'verba',
    kategori: 'komunikasi',
    tingkatan: { enjaIya: "ngoca'", engghiEnten: "ngoca'", engghiBhunten: 'dhabu' },
    contohKalimat: { madura: "Kyai adhabu parkara kabecikan.", indonesia: 'Kyai berbicara perihal kebaikan.' }
  },
  {
    id: 'verb-hear',
    kataDasar: 'dingkal',
    artiIndonesia: ['dengar', 'mendengar'],
    kelasKata: 'verba',
    kategori: 'indera',
    tingkatan: { enjaIya: 'ngedhing', engghiEnten: 'meyarsa', engghiBhunten: 'meyarsa' },
    contohKalimat: { madura: 'Engkok ngedhing sowara adzan.', indonesia: 'Saya mendengar suara adzan.' }
  },
  {
    id: 'verb-see',
    kataDasar: 'tenggu',
    artiIndonesia: ['lihat', 'melihat', 'nonton'],
    kelasKata: 'verba',
    kategori: 'indera',
    tingkatan: { enjaIya: 'nenggu', engghiEnten: 'ngoladi', engghiBhunten: 'mriksane' },
    contohKalimat: { madura: 'Ngireng nenggu karapan sape!', indonesia: 'Mari melihat karapan sapi!' }
  },
  {
    id: 'verb-buy',
    kataDasar: 'melle',
    artiIndonesia: ['beli', 'membeli'],
    kelasKata: 'verba',
    kategori: 'transaksi',
    tingkatan: { enjaIya: 'melle', engghiEnten: 'melle', engghiBhunten: 'mondhut' },
    contohKalimat: { madura: 'Ebu melle beras neng pasar.', indonesia: 'Ibu membeli beras di pasar.' }
  },
  {
    id: 'verb-sell',
    kataDasar: 'jhuwal',
    artiIndonesia: ['jual', 'menjual'],
    kelasKata: 'verba',
    kategori: 'transaksi',
    tingkatan: { enjaIya: 'ajhuwal', engghiEnten: 'ajhuwal', engghiBhunten: 'nyade' },
    contohKalimat: { madura: 'Paman ajhuwal sate Madura.', indonesia: 'Paman menjual sate Madura.' }
  },
  {
    id: 'verb-work',
    kataDasar: 'alako',
    artiIndonesia: ['kerja', 'bekerja'],
    kelasKata: 'verba',
    kategori: 'profesi',
    tingkatan: { enjaIya: 'alako', engghiEnten: 'akarya', engghiBhunten: 'akarya' },
    contohKalimat: { madura: 'Oreng Madura ce\' rajhinna mon alako.', indonesia: 'Orang Madura sangat rajin kalau bekerja.' }
  },
  {
    id: 'verb-study',
    kataDasar: 'ajhar',
    artiIndonesia: ['belajar', 'mengaji'],
    kelasKata: 'verba',
    kategori: 'edukasi',
    tingkatan: { enjaIya: 'ajhar', engghiEnten: 'ngaos', engghiBhunten: 'ngaos' },
    contohKalimat: { madura: 'Santri gi\' ajhar neng pondok.', indonesia: 'Santri sedang belajar di pondok.' }
  },
  {
    id: 'verb-search',
    kataDasar: 'sare',
    artiIndonesia: ['cari', 'mencari'],
    kelasKata: 'verba',
    kategori: 'aktivitas',
    tingkatan: { enjaIya: 'nyare', engghiEnten: 'nyare', engghiBhunten: 'nyare' },
    contohKalimat: { madura: 'Engkok nyare rejeke halal.', indonesia: 'Saya mencari rezeki yang halal.' }
  },
  {
    id: 'verb-find',
    kataDasar: 'temmo',
    artiIndonesia: ['temu', 'menemukan', 'bertemu', 'ketemu'],
    kelasKata: 'verba',
    kategori: 'aktivitas',
    tingkatan: { enjaIya: 'nemmo', engghiEnten: 'panggi', engghiBhunten: 'manggi' },
    contohKalimat: { madura: 'Engkok nemmo pesse neng dalan.', indonesia: 'Saya menemukan uang di jalan.' }
  },
  {
    id: 'verb-give',
    kataDasar: 'berri\'',
    artiIndonesia: ['beri', 'memberi', 'kasih'],
    kelasKata: 'verba',
    kategori: 'sosial',
    tingkatan: { enjaIya: "merri'", engghiEnten: 'marenge', engghiBhunten: 'ngatorraghi' },
    contohKalimat: { madura: "Bapa' merri' sangon ka ana'na.", indonesia: 'Bapak memberi uang bekal ke anaknya.' }
  },
  {
    id: 'verb-take',
    kataDasar: 'kala\'',
    artiIndonesia: ['ambil', 'mengambil'],
    kelasKata: 'verba',
    kategori: 'aktivitas',
    tingkatan: { enjaIya: "ngala'", engghiEnten: "ngala'", engghiBhunten: 'ngasta' },
    contohKalimat: { madura: "Ngala' aeng kaangghuy ngènom.", indonesia: 'Mengambil air untuk minum.' }
  },
  {
    id: 'verb-bring',
    kataDasar: 'kiba',
    artiIndonesia: ['bawa', 'membawa'],
    kelasKata: 'verba',
    kategori: 'aktivitas',
    tingkatan: { enjaIya: 'ngibha', engghiEnten: 'makta', engghiBhunten: 'nyangking' },
    contohKalimat: { madura: 'Engkok ngibha oleh-oleh dhari Madura.', indonesia: 'Saya membawa oleh-oleh dari Madura.' }
  },
  {
    id: 'verb-write',
    kataDasar: 'toles',
    artiIndonesia: ['tulis', 'menulis'],
    kelasKata: 'verba',
    kategori: 'edukasi',
    tingkatan: { enjaIya: 'noles', engghiEnten: 'noles', engghiBhunten: 'nyerrat' },
    contohKalimat: { madura: 'Engkok noles surat kaangghuy tretan.', indonesia: 'Saya menulis surat untuk saudara.' }
  },
  {
    id: 'verb-read',
    kataDasar: 'baca',
    artiIndonesia: ['baca', 'membaca'],
    kelasKata: 'verba',
    kategori: 'edukasi',
    tingkatan: { enjaIya: 'maca', engghiEnten: 'maos', engghiBhunten: 'maos' },
    contohKalimat: { madura: 'Maca Al-Quran neng langghar.', indonesia: 'Membaca Al-Quran di musholla.' }
  },

  // =========================================================================
  // 5. KATA DEPAN, KATA SAMBUNG & PARTIKEL
  // =========================================================================
  {
    id: 'prep-to',
    kataDasar: 'ka',
    artiIndonesia: ['ke', 'menuju', 'kepada'],
    kelasKata: 'partikel',
    kategori: 'kata_depan',
    tingkatan: { enjaIya: 'ka', engghiEnten: 'ka', engghiBhunten: "dha'" },
    contohKalimat: { madura: "Engkok entara ka daja.", indonesia: 'Saya pergi ke utara.' }
  },
  {
    id: 'prep-from',
    kataDasar: 'dhari',
    artiIndonesia: ['dari', 'asal'],
    kelasKata: 'partikel',
    kategori: 'kata_depan',
    tingkatan: { enjaIya: 'dhari', engghiEnten: 'dhari', engghiBhunten: 'dhari' },
    contohKalimat: { madura: 'Asal dhari Pamekasan.', indonesia: 'Asal dari Pamekasan.' }
  },
  {
    id: 'prep-in',
    kataDasar: 'neng',
    artiIndonesia: ['di', 'pada'],
    kelasKata: 'partikel',
    kategori: 'kata_depan',
    tingkatan: { enjaIya: 'neng / e', engghiEnten: 'neng', engghiBhunten: 'neng' },
    contohKalimat: { madura: 'Engkok bada neng bengko.', indonesia: 'Saya ada di rumah.' }
  },
  {
    id: 'prep-and',
    kataDasar: 'ban',
    artiIndonesia: ['dan', 'dengan', 'beserta'],
    kelasKata: 'partikel',
    kategori: 'kata_sambung',
    tingkatan: { enjaIya: 'ban', engghiEnten: 'sarenge', engghiBhunten: 'sarenge' },
    contohKalimat: { madura: 'Sakera ban Marlena.', indonesia: 'Sakera dan Marlena.' }
  },
  {
    id: 'prep-for',
    kataDasar: 'kaangghuy',
    artiIndonesia: ['untuk', 'buat', 'bagi'],
    kelasKata: 'partikel',
    kategori: 'kata_sambung',
    tingkatan: { enjaIya: 'kaangghuy', engghiEnten: 'kaangghuy', engghiBhunten: 'kagem' },
    contohKalimat: { madura: 'Hadiah reya kaangghuy be\'en.', indonesia: 'Hadiah ini untuk kamu.' }
  },
  {
    id: 'prep-if',
    kataDasar: 'lamon',
    artiIndonesia: ['jika', 'kalau', 'bila', 'apabila'],
    kelasKata: 'partikel',
    kategori: 'kata_sambung',
    tingkatan: { enjaIya: 'lamon / mon', engghiEnten: 'mon', engghiBhunten: 'manabi' },
    contohKalimat: { madura: 'Mon lapar ngakan nase\'.', indonesia: 'Kalau lapar makan nasi.' }
  },
  {
    id: 'prep-already',
    kataDasar: 'la',
    artiIndonesia: ['sudah', 'telah', 'udah'],
    kelasKata: 'adverba',
    kategori: 'aspek',
    tingkatan: { enjaIya: 'la', engghiEnten: 'ampon', engghiBhunten: 'ampon' },
    contohKalimat: { madura: 'Engkok la ngakan sate.', indonesia: 'Saya sudah makan sate.' }
  },
  {
    id: 'prep-notyet',
    kataDasar: 'ghi\'',
    artiIndonesia: ['belum', 'masih'],
    kelasKata: 'adverba',
    kategori: 'aspek',
    tingkatan: { enjaIya: "ghi'", engghiEnten: "ghita'", engghiBhunten: "ghita'" },
    contohKalimat: { madura: "Engkok ghi' alako.", indonesia: 'Saya masih bekerja.' }
  },
  {
    id: 'prep-want',
    kataDasar: 'terro',
    artiIndonesia: ['mau', 'ingin', 'hendak', 'pengen'],
    kelasKata: 'verba',
    kategori: 'keinginan',
    tingkatan: { enjaIya: 'terro', engghiEnten: 'poron', engghiBhunten: 'karsa' },
    contohKalimat: { madura: "Engkok terro ngakana.", indonesia: 'Saya mau makan.' }
  },
  {
    id: 'prep-can',
    kataDasar: 'bisa',
    artiIndonesia: ['bisa', 'dapat', 'mampu'],
    kelasKata: 'adverba',
    kategori: 'kemampuan',
    tingkatan: { enjaIya: 'bisa', engghiEnten: 'kengeng', engghiBhunten: 'kengeng' },
    contohKalimat: { madura: 'Engkok bisa koding MaduraLang.', indonesia: 'Saya bisa koding MaduraLang.' }
  },
  {
    id: 'prep-no',
    kataDasar: 'enja\'',
    artiIndonesia: ['tidak', 'bukan', 'nggak', 'enggak', 'tak'],
    kelasKata: 'partikel',
    kategori: 'negasi',
    tingkatan: { enjaIya: "ta' / enja'", engghiEnten: 'enten', engghiBhunten: 'bhunten' },
    contohKalimat: { madura: "Engkok ta' tao dalanna.", indonesia: 'Saya tidak tahu jalannya.' }
  },
  {
    id: 'prep-exist',
    kataDasar: 'bada',
    artiIndonesia: ['ada'],
    kelasKata: 'verba',
    kategori: 'keberadaan',
    tingkatan: { enjaIya: 'bada', engghiEnten: 'bada', engghiBhunten: 'bada' },
    contohKalimat: { madura: 'Neng dinna\' bada aeng.', indonesia: 'Di sini ada air.' }
  },
  {
    id: 'prep-none',
    kataDasar: 'tadhe\'',
    artiIndonesia: ['tidak ada', 'tiada', 'habis', 'kosong'],
    kelasKata: 'verba',
    kategori: 'keberadaan',
    tingkatan: { enjaIya: "tadhe'", engghiEnten: 'sobung', engghiBhunten: 'sobung' },
    contohKalimat: { madura: "Tadhe' pesse neng kantong.", indonesia: 'Tidak ada uang di saku.' }
  },
  {
    id: 'prep-dont',
    kataDasar: 'jha\'',
    artiIndonesia: ['jangan'],
    kelasKata: 'partikel',
    kategori: 'larangan',
    tingkatan: { enjaIya: "jha'", engghiEnten: "jha'", engghiBhunten: 'ampun' },
    contohKalimat: { madura: "Jha' sossa tretan!", indonesia: 'Jangan sedih saudaraku!' }
  },

  // =========================================================================
  // 6. WAKTU & KETERANGAN (TEMPORAL)
  // =========================================================================
  {
    id: 'time-yesterday',
    kataDasar: 'bari\'to',
    artiIndonesia: ['kemarin', 'kemaren'],
    kelasKata: 'adverba',
    kategori: 'waktu',
    tingkatan: { enjaIya: "bari'to", engghiEnten: "bari'to", engghiBhunten: 'kalaenta' },
    contohKalimat: { madura: "Engkok bari'to buru ka daja.", indonesia: 'Saya kemarin lari ke utara.' }
  },
  {
    id: 'time-today',
    kataDasar: 'mangken',
    artiIndonesia: ['hari ini', 'sekarang', 'saat ini'],
    kelasKata: 'adverba',
    kategori: 'waktu',
    tingkatan: { enjaIya: 'sateya', engghiEnten: 'samangken', engghiBhunten: 'samangken' },
    contohKalimat: { madura: 'Samangken la pukul tello.', indonesia: 'Sekarang sudah pukul tiga.' }
  },
  {
    id: 'time-tomorrow',
    kataDasar: 'lagghu',
    artiIndonesia: ['besok', 'esok hari'],
    kelasKata: 'adverba',
    kategori: 'waktu',
    tingkatan: { enjaIya: 'lagghu', engghiEnten: 'lagghu', engghiBhunten: 'enjhang' },
    contohKalimat: { madura: 'Lagghu engkok entara ka Sumenep.', indonesia: 'Besok saya pergi ke Sumenep.' }
  },
  {
    id: 'time-morning',
    kataDasar: 'ghul-lagghu',
    artiIndonesia: ['pagi', 'pagi hari'],
    kelasKata: 'nomina',
    kategori: 'waktu',
    tingkatan: { enjaIya: 'ghul-lagghu', engghiEnten: 'ghul-lagghu', engghiBhunten: 'enjhang-enjhang' },
    contohKalimat: { madura: 'Ghul-lagghu hawana segar.', indonesia: 'Pagi hari hawanya segar.' }
  },
  {
    id: 'time-noon',
    kataDasar: 'seang',
    artiIndonesia: ['siang', 'siang hari'],
    kelasKata: 'nomina',
    kategori: 'waktu',
    tingkatan: { enjaIya: 'seang', engghiEnten: 'seang', engghiBhunten: 'seang' },
    contohKalimat: { madura: 'Mon seang panas ongghu.', indonesia: 'Kalau siang panas sekali.' }
  },
  {
    id: 'time-evening',
    kataDasar: 'sore',
    artiIndonesia: ['sore', 'sore hari'],
    kelasKata: 'nomina',
    kategori: 'waktu',
    tingkatan: { enjaIya: 'sore', engghiEnten: 'sore', engghiBhunten: 'sore' },
    contohKalimat: { madura: 'Sore are enta ka tase\'.', indonesia: 'Sore hari pergi ke pantai.' }
  },
  {
    id: 'time-night',
    kataDasar: 'malem',
    artiIndonesia: ['malam', 'malam hari'],
    kelasKata: 'nomina',
    kategori: 'waktu',
    tingkatan: { enjaIya: 'malem', engghiEnten: 'malem', engghiBhunten: 'dalem' },
    contohKalimat: { madura: 'Malem are hawa cellep.', indonesia: 'Malam hari hawa dingin.' }
  },

  // =========================================================================
  // 7. KATA SIFAT (ADJEKTIVA)
  // =========================================================================
  {
    id: 'adj-good',
    kataDasar: 'bhaghus',
    artiIndonesia: ['bagus', 'baik', 'indah'],
    kelasKata: 'adjektiva',
    kategori: 'sifat',
    tingkatan: { enjaIya: 'bhaghus', engghiEnten: 'sae', engghiBhunten: 'sae' },
    contohKalimat: { madura: 'Pemandanganna ce\' bhaghussa.', indonesia: 'Pemandangannya sangat bagus.' }
  },
  {
    id: 'adj-bad',
    kataDasar: 'jhubha\'',
    artiIndonesia: ['jelek', 'buruk', 'rusak'],
    kelasKata: 'adjektiva',
    kategori: 'sifat',
    tingkatan: { enjaIya: "jhubha'", engghiEnten: 'koreng', engghiBhunten: 'awon' },
    contohKalimat: { madura: "Jha' alako kalakowan jhubha'.", indonesia: 'Jangan berbuat perbuatan buruk.' }
  },
  {
    id: 'adj-big',
    kataDasar: 'rajhe',
    artiIndonesia: ['besar', 'luas', 'agung'],
    kelasKata: 'adjektiva',
    kategori: 'ukuran',
    tingkatan: { enjaIya: 'rajhe', engghiEnten: 'rajhe', engghiBhunten: 'agung' },
    contohKalimat: { madura: 'Mator sakalangkong rajhe!', indonesia: 'Terima kasih banyak!' }
  },
  {
    id: 'adj-small',
    kataDasar: 'kene\'',
    artiIndonesia: ['kecil', 'mungil'],
    kelasKata: 'adjektiva',
    kategori: 'ukuran',
    tingkatan: { enjaIya: "kene'", engghiEnten: "kene'", engghiBhunten: 'alit' },
    contohKalimat: { madura: "Bengko kene' tapi nyaman.", indonesia: 'Rumah kecil tapi nyaman.' }
  },
  {
    id: 'adj-fast',
    kataDasar: 'ghanceng',
    artiIndonesia: ['cepat', 'kencang', 'lekas'],
    kelasKata: 'adjektiva',
    kategori: 'kecepatan',
    tingkatan: { enjaIya: 'ghanceng', engghiEnten: 'ghanceng', engghiBhunten: 'enjhal' },
    contohKalimat: { madura: 'Karapan sape buru ce\' ghancengnga.', indonesia: 'Karapan sapi lari sangat cepat.' }
  },
  {
    id: 'adj-slow',
    kataDasar: 'lambat',
    artiIndonesia: ['lambat', 'pelan'],
    kelasKata: 'adjektiva',
    kategori: 'kecepatan',
    tingkatan: { enjaIya: 'lambat / leler', engghiEnten: 'lambat', engghiBhunten: 'lambat' },
    contohKalimat: { madura: "Ajhelan leler jha' buru-buru.", indonesia: 'Berjalan pelan jangan buru-buru.' }
  },
  {
    id: 'adj-far',
    kataDasar: 'jhau',
    artiIndonesia: ['jauh'],
    kelasKata: 'adjektiva',
    kategori: 'jarak',
    tingkatan: { enjaIya: 'jhau', engghiEnten: 'jhau', engghiBhunten: 'tebhi' },
    contohKalimat: { madura: 'Dhalanna ghi\' jhau.', indonesia: 'Jalannya masih jauh.' }
  },
  {
    id: 'adj-near',
    kataDasar: 'semma\'',
    artiIndonesia: ['dekat'],
    kelasKata: 'adjektiva',
    kategori: 'jarak',
    tingkatan: { enjaIya: "semma'", engghiEnten: "semma'", engghiBhunten: 'celak' },
    contohKalimat: { madura: "Pasarra semma' dhari bengko.", indonesia: 'Pasarnya dekat dari rumah.' }
  },
  {
    id: 'adj-tired',
    kataDasar: 'leso',
    artiIndonesia: ['lelah', 'capek', 'letih'],
    kelasKata: 'adjektiva',
    kategori: 'kondisi',
    tingkatan: { enjaIya: 'leso', engghiEnten: 'tessel', engghiBhunten: 'tessel' },
    contohKalimat: { madura: 'Engkok leso marrena alako.', indonesia: 'Saya lelah sesudah bekerja.' }
  },
  {
    id: 'adj-hungry',
    kataDasar: 'lapar',
    artiIndonesia: ['lapar'],
    kelasKata: 'adjektiva',
    kategori: 'kondisi',
    tingkatan: { enjaIya: 'lapar', engghiEnten: 'lapar', engghiBhunten: 'leso' },
    contohKalimat: { madura: 'Engkok lapar terro ngakana.', indonesia: 'Saya lapar ingin makan.' }
  },
  {
    id: 'adj-full',
    kataDasar: 'kanyang',
    artiIndonesia: ['kenyang'],
    kelasKata: 'adjektiva',
    kategori: 'kondisi',
    tingkatan: { enjaIya: 'kanyang', engghiEnten: 'kanyang', engghiBhunten: 'tuwuk' },
    contohKalimat: { madura: 'Alhamdulillah la kanyang.', indonesia: 'Alhamdulillah sudah kenyang.' }
  },
  {
    id: 'adj-happy',
    kataDasar: 'senneng',
    artiIndonesia: ['senang', 'gembira', 'bahagia'],
    kelasKata: 'adjektiva',
    kategori: 'perasaan',
    tingkatan: { enjaIya: 'senneng', engghiEnten: 'senneng', engghiBhunten: 'bhingah' },
    contohKalimat: { madura: 'Ate ce\' sennengnga.', indonesia: 'Hati sangat senang.' }
  },
  {
    id: 'adj-sad',
    kataDasar: 'sossa',
    artiIndonesia: ['sedih', 'susah'],
    kelasKata: 'adjektiva',
    kategori: 'perasaan',
    tingkatan: { enjaIya: 'sossa', engghiEnten: 'sossa', engghiBhunten: 'sengkal' },
    contohKalimat: { madura: "Jha' sossa tretan.", indonesia: 'Jangan sedih saudaraku.' }
  },
  {
    id: 'adj-brave',
    kataDasar: 'bangal',
    artiIndonesia: ['berani', 'pemberani'],
    kelasKata: 'adjektiva',
    kategori: 'sifat',
    tingkatan: { enjaIya: 'bangal', engghiEnten: 'bangal', engghiBhunten: 'kendel' },
    contohKalimat: { madura: 'Pendekar Sakera ce\' bangalla.', indonesia: 'Pendekar Sakera sangat pemberani.' }
  },
  {
    id: 'adj-fear',
    kataDasar: 'tako\'',
    artiIndonesia: ['takut'],
    kelasKata: 'adjektiva',
    kategori: 'perasaan',
    tingkatan: { enjaIya: "tako'", engghiEnten: "tako'", engghiBhunten: 'ajrih' },
    contohKalimat: { madura: "Jha' tako' ka muso.", indonesia: 'Jangan takut pada musuh.' }
  },

  // =========================================================================
  // 8. BENDA & ALAM (NOMINA)
  // =========================================================================
  {
    id: 'noun-house',
    kataDasar: 'bengko',
    artiIndonesia: ['rumah', 'hunian'],
    kelasKata: 'nomina',
    kategori: 'benda',
    tingkatan: { enjaIya: 'bengko', engghiEnten: 'roma', engghiBhunten: 'dalem' },
    contohKalimat: { madura: 'Bengkona Sakera neng Pamekasan.', indonesia: 'Rumahnya Sakera di Pamekasan.' }
  },
  {
    id: 'noun-water',
    kataDasar: 'aeng',
    artiIndonesia: ['air'],
    kelasKata: 'nomina',
    kategori: 'alam',
    tingkatan: { enjaIya: 'aeng', engghiEnten: 'aeng', engghiBhunten: 'toya' },
    contohKalimat: { madura: 'Aeng cellep segar rasana.', indonesia: 'Air dingin segar rasanya.' }
  },
  {
    id: 'noun-rice',
    kataDasar: 'nase\'',
    artiIndonesia: ['nasi', 'beras'],
    kelasKata: 'nomina',
    kategori: 'makanan',
    tingkatan: { enjaIya: "nase'", engghiEnten: "nase'", engghiBhunten: 'sekul' },
    contohKalimat: { madura: "Ngakan nase' jagung ban juko'.", indonesia: 'Makan nasi jagung dan ikan.' }
  },
  {
    id: 'noun-fish',
    kataDasar: 'juko\'',
    artiIndonesia: ['ikan', 'lauk'],
    kelasKata: 'nomina',
    kategori: 'makanan',
    tingkatan: { enjaIya: "juko'", engghiEnten: "juko'", engghiBhunten: 'eppan' },
    contohKalimat: { madura: "Juko' tongkol dhari tase'.", indonesia: 'Ikan tongkol dari laut.' }
  },
  {
    id: 'noun-money',
    kataDasar: 'pesse',
    artiIndonesia: ['uang', 'duit'],
    kelasKata: 'nomina',
    kategori: 'finansial',
    tingkatan: { enjaIya: 'pesse', engghiEnten: 'pesse', engghiBhunten: 'yatra' },
    contohKalimat: { madura: "Tadhe' pesse neng kantong.", indonesia: 'Tidak ada uang di saku.' }
  },
  {
    id: 'noun-sea',
    kataDasar: 'tase\'',
    artiIndonesia: ['laut', 'pantai'],
    kelasKata: 'nomina',
    kategori: 'alam',
    tingkatan: { enjaIya: "tase'", engghiEnten: "tase'", engghiBhunten: 'segara' },
    contohKalimat: { madura: "Nelayan nyare juko' neng tase'.", indonesia: 'Nelayan mencari ikan di laut.' }
  },
  {
    id: 'noun-road',
    kataDasar: 'dalan',
    artiIndonesia: ['jalan', 'lorong'],
    kelasKata: 'nomina',
    kategori: 'lokasi',
    tingkatan: { enjaIya: 'dalan', engghiEnten: 'dalan', engghiBhunten: 'mergi' },
    contohKalimat: { madura: 'Dalanna ampon alos.', indonesia: 'Jalannya sudah halus.' }
  },
  {
    id: 'noun-people',
    kataDasar: 'oreng',
    artiIndonesia: ['orang', 'manusia'],
    kelasKata: 'nomina',
    kategori: 'sosial',
    tingkatan: { enjaIya: 'oreng', engghiEnten: 'oreng', engghiBhunten: 'tiang' },
    contohKalimat: { madura: 'Oreng Madura kasohor bangal.', indonesia: 'Orang Madura terkenal pemberani.' }
  },
  {
    id: 'noun-friend',
    kataDasar: 'kanca',
    artiIndonesia: ['teman', 'kawan', 'sahabat'],
    kelasKata: 'nomina',
    kategori: 'sosial',
    tingkatan: { enjaIya: 'kanca', engghiEnten: 'kanca', engghiBhunten: 'mitra' },
    contohKalimat: { madura: 'Kanca alako sarenge kanca.', indonesia: 'Teman bekerja bersama teman.' }
  },

  // =========================================================================
  // 9. KESANTUNAN & UCAPAN HARIAN
  // =========================================================================
  {
    id: 'phrase-thanks',
    kataDasar: 'sakalangkong',
    artiIndonesia: ['terima kasih', 'makasih'],
    kelasKata: 'interjeksi',
    kategori: 'kesantunan',
    tingkatan: { enjaIya: 'mator sakalangkong', engghiEnten: 'mator sakalangkong', engghiBhunten: 'mator sakalangkong rajhe' },
    contohKalimat: { madura: 'Mator sakalangkong rabuna tretan!', indonesia: 'Terima kasih atas kedatangannya kawan!' }
  },
  {
    id: 'phrase-sorry',
    kataDasar: 'sapora',
    artiIndonesia: ['maaf', 'ampun'],
    kelasKata: 'interjeksi',
    kategori: 'kesantunan',
    tingkatan: { enjaIya: "nyo'on sapora", engghiEnten: "nyo'on sapora", engghiBhunten: "neda nyo'on pangapora" },
    contohKalimat: { madura: "Nyo'on sapora mon engkok sala.", indonesia: 'Minta maaf kalau saya salah.' }
  },
  {
    id: 'phrase-yes',
    kataDasar: 'iye',
    artiIndonesia: ['ya', 'benar', 'betul', 'iya'],
    kelasKata: 'partikel',
    kategori: 'kesantunan',
    tingkatan: { enjaIya: 'iye / iya', engghiEnten: 'engghi', engghiBhunten: 'engghi leres' },
    contohKalimat: { madura: 'Engghi leres dhika bhender.', indonesia: 'Ya benar, kamu betul.' }
  },
  {
    id: 'phrase-please',
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
