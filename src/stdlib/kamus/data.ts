import { EntriKamus, ParbhasanData } from './types.js';

/**
 * =============================================================================
 * PUSTAKA KAMUS DWIBAHASA RESMI MADURALANG (v2.0.0)
 * =============================================================================
 * Koleksi Leksikal Otentik Bahasa Madura:
 * - Mencakup dialek Pamekasan, Sumenep, Bangkalan, dan Sampang.
 * - Dilengkapi Ondhaggha Bhasa (3 Tingkatan Tutur):
 *   1. Enja'-Iya     : Ragam Akrab / Santai / Sehari-hari
 *   2. Engghi-Enten  : Ragam Sopan / Netral / Penengah
 *   3. Engghi-Bhunten: Ragam Halus / Krama Inggil / Kehormatan Tinggi
 *
 * Disusun dan dikurasi oleh: OhMyGhann
 * Lisensi: MIT (Pustaka Standar MaduraLang)
 * =============================================================================
 */

export const KOSAKATA_MADURA: EntriKamus[] = [
  {
    "id": "pron-aku",
    "kataDasar": "engkok",
    "artiIndonesia": [
      "saya",
      "aku"
    ],
    "kelasKata": "pronomina",
    "kategori": "kata_ganti",
    "tingkatan": {
      "enjaIya": "engkok",
      "engghiEnten": "kula",
      "engghiBhunten": "abdhina"
    },
    "contohKalimat": {
      "madura": "Engkok terro entara ka Pamekasan.",
      "indonesia": "Saya ingin pergi ke Pamekasan."
    }
  },
  {
    "id": "pron-kamu",
    "kataDasar": "be'en",
    "artiIndonesia": [
      "kamu",
      "engkau",
      "anda",
      "kau"
    ],
    "kelasKata": "pronomina",
    "kategori": "kata_ganti",
    "tingkatan": {
      "enjaIya": "be'en",
      "engghiEnten": "dhika",
      "engghiBhunten": "panjhenengngan"
    },
    "contohKalimat": {
      "madura": "Be'en la ngakan sate?",
      "indonesia": "Kamu sudah makan sate?"
    }
  },
  {
    "id": "pron-kamu-bana",
    "kataDasar": "ba'na",
    "artiIndonesia": [
      "kamu",
      "engkau",
      "kau"
    ],
    "kelasKata": "pronomina",
    "kategori": "kata_ganti",
    "tingkatan": {
      "enjaIya": "ba'na",
      "engghiEnten": "dhika",
      "engghiBhunten": "ajunan"
    },
    "contohKalimat": {
      "madura": "Ba'na molea bila?",
      "indonesia": "Kamu mau pulang kapan?"
    }
  },
  {
    "id": "pron-dia",
    "kataDasar": "dhibi'en",
    "artiIndonesia": [
      "dia",
      "ia",
      "beliau"
    ],
    "kelasKata": "pronomina",
    "kategori": "kata_ganti",
    "tingkatan": {
      "enjaIya": "dhibi'en",
      "engghiEnten": "salerana",
      "engghiBhunten": "ajunan"
    },
    "contohKalimat": {
      "madura": "Dhibi'en ghi' alako neng sabha.",
      "indonesia": "Dia masih bekerja di sawah."
    }
  },
  {
    "id": "pron-kami",
    "kataDasar": "kami",
    "artiIndonesia": [
      "kami",
      "kita"
    ],
    "kelasKata": "pronomina",
    "kategori": "kata_ganti",
    "tingkatan": {
      "enjaIya": "sengko' kabbhi",
      "engghiEnten": "kula sadaja",
      "engghiBhunten": "abdhina sadajana"
    },
    "contohKalimat": {
      "madura": "Sengko' kabbhi padha taretan.",
      "indonesia": "Kita semua sama-sama bersaudara."
    }
  },
  {
    "id": "pron-mereka",
    "kataDasar": "kabbhi",
    "artiIndonesia": [
      "mereka",
      "semua",
      "semuanya"
    ],
    "kelasKata": "pronomina",
    "kategori": "kata_ganti",
    "tingkatan": {
      "enjaIya": "kabbhi",
      "engghiEnten": "sadaja",
      "engghiBhunten": "sadajana"
    },
    "contohKalimat": {
      "madura": "Reng-oreng rowa kabbhi taretan.",
      "indonesia": "Orang-orang itu semua bersaudara."
    }
  },
  {
    "id": "pron-sendiri",
    "kataDasar": "dhibi'",
    "artiIndonesia": [
      "sendiri",
      "diri sendiri"
    ],
    "kelasKata": "pronomina",
    "kategori": "kata_ganti",
    "tingkatan": {
      "enjaIya": "dhibi'",
      "engghiEnten": "dhibi'",
      "engghiBhunten": "dibasa"
    },
    "contohKalimat": {
      "madura": "Engkok ngalakone dhibi'.",
      "indonesia": "Saya mengerjakannya sendiri."
    }
  },
  {
    "id": "pron-tuan",
    "kataDasar": "panjhenengngan",
    "artiIndonesia": [
      "tuan",
      "anda",
      "beliau"
    ],
    "kelasKata": "pronomina",
    "kategori": "kata_ganti",
    "tingkatan": {
      "enjaIya": "be'en",
      "engghiEnten": "dhika",
      "engghiBhunten": "panjhenengngan"
    },
    "contohKalimat": {
      "madura": "Panjhenengngan ampon rabu.",
      "indonesia": "Anda sudah datang."
    }
  },
  {
    "id": "pron-saudara",
    "kataDasar": "taretan",
    "artiIndonesia": [
      "saudara",
      "kawan",
      "kerabat",
      "saudaraku",
      "saudaranya",
      "temanku"
    ],
    "kelasKata": "nomina",
    "kategori": "sosial",
    "tingkatan": {
      "enjaIya": "tretan",
      "engghiEnten": "taretan",
      "engghiBhunten": "taretan sadajana"
    },
    "contohKalimat": {
      "madura": "Salam settong dhere taretan!",
      "indonesia": "Salam satu darah saudaraku!"
    }
  },
  {
    "id": "pron-kiai",
    "kataDasar": "kyai",
    "artiIndonesia": [
      "kiai",
      "ulama",
      "guru agama"
    ],
    "kelasKata": "nomina",
    "kategori": "sosial",
    "tingkatan": {
      "enjaIya": "kyai",
      "engghiEnten": "kyai",
      "engghiBhunten": "kyai seppo"
    },
    "contohKalimat": {
      "madura": "Noro' dhabuna kyai.",
      "indonesia": "Mengikuti petuah kyai."
    }
  },
  {
    "id": "pron-lurah",
    "kataDasar": "klebun",
    "artiIndonesia": [
      "kepala desa",
      "lurah"
    ],
    "kelasKata": "nomina",
    "kategori": "sosial",
    "tingkatan": {
      "enjaIya": "klebun",
      "engghiEnten": "klebun",
      "engghiBhunten": "petingghi"
    },
    "contohKalimat": {
      "madura": "Klebun mimpin rapat dhisa.",
      "indonesia": "Kepala desa memimpin rapat desa."
    }
  },
  {
    "id": "fam-ayah",
    "kataDasar": "eppa'",
    "artiIndonesia": [
      "ayah",
      "bapak",
      "papa",
      "bapakku",
      "ayahku"
    ],
    "kelasKata": "nomina",
    "kategori": "keluarga",
    "tingkatan": {
      "enjaIya": "eppa'",
      "engghiEnten": "eppa'",
      "engghiBhunten": "rama"
    },
    "contohKalimat": {
      "madura": "Eppa' melle sape neng pasar.",
      "indonesia": "Ayah membeli sapi di pasar."
    }
  },
  {
    "id": "fam-ibu",
    "kataDasar": "embu'",
    "artiIndonesia": [
      "ibu",
      "mama",
      "emak",
      "ibuku",
      "mamaku"
    ],
    "kelasKata": "nomina",
    "kategori": "keluarga",
    "tingkatan": {
      "enjaIya": "embu'",
      "engghiEnten": "embu'",
      "engghiBhunten": "ebhuan"
    },
    "contohKalimat": {
      "madura": "Embu' mamasak nase' jagung.",
      "indonesia": "Ibu memasak nasi jagung."
    }
  },
  {
    "id": "fam-anak",
    "kataDasar": "ana'",
    "artiIndonesia": [
      "anak",
      "anak kandung"
    ],
    "kelasKata": "nomina",
    "kategori": "keluarga",
    "tingkatan": {
      "enjaIya": "ana'",
      "engghiEnten": "ana'",
      "engghiBhunten": "pottra"
    },
    "contohKalimat": {
      "madura": "Pottrana kyai ce' santunna.",
      "indonesia": "Putranya kiai sangat sopan."
    }
  },
  {
    "id": "fam-kakak",
    "kataDasar": "kaka'",
    "artiIndonesia": [
      "kakak",
      "abang"
    ],
    "kelasKata": "nomina",
    "kategori": "keluarga",
    "tingkatan": {
      "enjaIya": "kaka'",
      "engghiEnten": "kaka'",
      "engghiBhunten": "raka"
    },
    "contohKalimat": {
      "madura": "Kaka' la alako neng kantor.",
      "indonesia": "Kakak sudah bekerja di kantor."
    }
  },
  {
    "id": "fam-adik",
    "kataDasar": "ale'",
    "artiIndonesia": [
      "adik"
    ],
    "kelasKata": "nomina",
    "kategori": "keluarga",
    "tingkatan": {
      "enjaIya": "ale'",
      "engghiEnten": "ale'",
      "engghiBhunten": "tari"
    },
    "contohKalimat": {
      "madura": "Ale' ghi' asakola SD.",
      "indonesia": "Adik masih bersekolah di SD."
    }
  },
  {
    "id": "fam-kakek",
    "kataDasar": "kae",
    "artiIndonesia": [
      "kakek"
    ],
    "kelasKata": "nomina",
    "kategori": "keluarga",
    "tingkatan": {
      "enjaIya": "kae",
      "engghiEnten": "kae",
      "engghiBhunten": "eyang"
    },
    "contohKalimat": {
      "madura": "Kae asare neng langghar.",
      "indonesia": "Kakek istirahat di langgar."
    }
  },
  {
    "id": "fam-nenek",
    "kataDasar": "nyae",
    "artiIndonesia": [
      "nenek"
    ],
    "kelasKata": "nomina",
    "kategori": "keluarga",
    "tingkatan": {
      "enjaIya": "nyae",
      "engghiEnten": "nyae",
      "engghiBhunten": "eyang"
    },
    "contohKalimat": {
      "madura": "Nyae nyerret bako.",
      "indonesia": "Nenek melipat tembakau."
    }
  },
  {
    "id": "fam-cucu",
    "kataDasar": "compo'",
    "artiIndonesia": [
      "cucu"
    ],
    "kelasKata": "nomina",
    "kategori": "keluarga",
    "tingkatan": {
      "enjaIya": "compo'",
      "engghiEnten": "compo'",
      "engghiBhunten": "wayah"
    },
    "contohKalimat": {
      "madura": "Compo'na ampon rajhe.",
      "indonesia": "Cucunya sudah besar."
    }
  },
  {
    "id": "fam-paman",
    "kataDasar": "paman",
    "artiIndonesia": [
      "paman",
      "om"
    ],
    "kelasKata": "nomina",
    "kategori": "keluarga",
    "tingkatan": {
      "enjaIya": "paman",
      "engghiEnten": "paman",
      "engghiBhunten": "rama kene'"
    },
    "contohKalimat": {
      "madura": "Paman alako neng pelabbhuwan.",
      "indonesia": "Paman bekerja di pelabuhan."
    }
  },
  {
    "id": "fam-bibi",
    "kataDasar": "bibi",
    "artiIndonesia": [
      "bibi",
      "tante"
    ],
    "kelasKata": "nomina",
    "kategori": "keluarga",
    "tingkatan": {
      "enjaIya": "bibi",
      "engghiEnten": "bibi",
      "engghiBhunten": "ebhuan kene'"
    },
    "contohKalimat": {
      "madura": "Bibi ajual rujak cingur.",
      "indonesia": "Bibi menjual rujak cingur."
    }
  },
  {
    "id": "fam-mertua",
    "kataDasar": "matowa",
    "artiIndonesia": [
      "mertua"
    ],
    "kelasKata": "nomina",
    "kategori": "keluarga",
    "tingkatan": {
      "enjaIya": "matowa",
      "engghiEnten": "matowa",
      "engghiBhunten": "marapoh"
    },
    "contohKalimat": {
      "madura": "Hormati rama matowa.",
      "indonesia": "Hormati ayah mertua."
    }
  },
  {
    "id": "fam-menantu",
    "kataDasar": "matoan",
    "artiIndonesia": [
      "menantu"
    ],
    "kelasKata": "nomina",
    "kategori": "keluarga",
    "tingkatan": {
      "enjaIya": "matoan",
      "engghiEnten": "matoan",
      "engghiBhunten": "mantoh"
    },
    "contohKalimat": {
      "madura": "Matoan rajin nolonge mertua.",
      "indonesia": "Menantu rajin menolong mertua."
    }
  },
  {
    "id": "fam-ipar",
    "kataDasar": "epar",
    "artiIndonesia": [
      "ipar"
    ],
    "kelasKata": "nomina",
    "kategori": "keluarga",
    "tingkatan": {
      "enjaIya": "epar",
      "engghiEnten": "epar",
      "engghiBhunten": "epar"
    },
    "contohKalimat": {
      "madura": "Eparna dhateng dhari polo Sapudi.",
      "indonesia": "Iparnya datang dari pulau Sapudi."
    }
  },
  {
    "id": "fam-istri",
    "kataDasar": "bine",
    "artiIndonesia": [
      "istri"
    ],
    "kelasKata": "nomina",
    "kategori": "keluarga",
    "tingkatan": {
      "enjaIya": "bine",
      "engghiEnten": "bine",
      "engghiBhunten": "rabu"
    },
    "contohKalimat": {
      "madura": "Rabuna ampon ngongghai haji.",
      "indonesia": "Istrinya sudah menunaikan haji."
    }
  },
  {
    "id": "fam-suami",
    "kataDasar": "lake",
    "artiIndonesia": [
      "suami"
    ],
    "kelasKata": "nomina",
    "kategori": "keluarga",
    "tingkatan": {
      "enjaIya": "lake",
      "engghiEnten": "lake",
      "engghiBhunten": "raka"
    },
    "contohKalimat": {
      "madura": "Lakena alako neng tase'.",
      "indonesia": "Suaminya bekerja di laut."
    }
  },
  {
    "id": "body-kepala",
    "kataDasar": "cethak",
    "artiIndonesia": [
      "kepala"
    ],
    "kelasKata": "nomina",
    "kategori": "tubuh",
    "tingkatan": {
      "enjaIya": "cethak",
      "engghiEnten": "olo",
      "engghiBhunten": "sirah"
    },
    "contohKalimat": {
      "madura": "Cethakka sake' polana panas are.",
      "indonesia": "Kepalanya sakit karena panas terik matahari."
    }
  },
  {
    "id": "body-rambut",
    "kataDasar": "obu'",
    "artiIndonesia": [
      "rambut"
    ],
    "kelasKata": "nomina",
    "kategori": "tubuh",
    "tingkatan": {
      "enjaIya": "obu'",
      "engghiEnten": "obu'",
      "engghiBhunten": "rema"
    },
    "contohKalimat": {
      "madura": "Obu'na celleng meles.",
      "indonesia": "Rambutnya hitam pekat."
    }
  },
  {
    "id": "body-mata",
    "kataDasar": "mata",
    "artiIndonesia": [
      "mata"
    ],
    "kelasKata": "nomina",
    "kategori": "tubuh",
    "tingkatan": {
      "enjaIya": "mata",
      "engghiEnten": "soca",
      "engghiBhunten": "soca"
    },
    "contohKalimat": {
      "madura": "Socana ampon bhender ngonjhing.",
      "indonesia": "Matanya sudah benar-benar awas melihat."
    }
  },
  {
    "id": "body-telinga",
    "kataDasar": "kopeng",
    "artiIndonesia": [
      "telinga",
      "kuping"
    ],
    "kelasKata": "nomina",
    "kategori": "tubuh",
    "tingkatan": {
      "enjaIya": "kopeng",
      "engghiEnten": "kopeng",
      "engghiBhunten": "karnan"
    },
    "contohKalimat": {
      "madura": "Karnan meyarce dhabu beccik.",
      "indonesia": "Telinga mendengarkan perkataan baik."
    }
  },
  {
    "id": "body-hidung",
    "kataDasar": "elong",
    "artiIndonesia": [
      "hidung"
    ],
    "kelasKata": "nomina",
    "kategori": "tubuh",
    "tingkatan": {
      "enjaIya": "elong",
      "engghiEnten": "elong",
      "engghiBhunten": "grana"
    },
    "contohKalimat": {
      "madura": "Elongnga manconggheng.",
      "indonesia": "Hidungnya mancung."
    }
  },
  {
    "id": "body-mulut",
    "kataDasar": "colo'",
    "artiIndonesia": [
      "mulut"
    ],
    "kelasKata": "nomina",
    "kategori": "tubuh",
    "tingkatan": {
      "enjaIya": "colo'",
      "engghiEnten": "colo'",
      "engghiBhunten": "lessen"
    },
    "contohKalimat": {
      "madura": "Jha' ngoca' sala colo'.",
      "indonesia": "Jangan berkata salah mulut."
    }
  },
  {
    "id": "body-gigi",
    "kataDasar": "gigi",
    "artiIndonesia": [
      "gigi"
    ],
    "kelasKata": "nomina",
    "kategori": "tubuh",
    "tingkatan": {
      "enjaIya": "gigi",
      "engghiEnten": "gigi",
      "engghiBhunten": "baja"
    },
    "contohKalimat": {
      "madura": "Bajana pote bhender.",
      "indonesia": "Giginya putih sekali."
    }
  },
  {
    "id": "body-lidah",
    "kataDasar": "jila",
    "artiIndonesia": [
      "lidah"
    ],
    "kelasKata": "nomina",
    "kategori": "tubuh",
    "tingkatan": {
      "enjaIya": "jila",
      "engghiEnten": "jila",
      "engghiBhunten": "lidha"
    },
    "contohKalimat": {
      "madura": "Jila arassa nase' manes.",
      "indonesia": "Lidah merasakan nasi manis."
    }
  },
  {
    "id": "body-leher",
    "kataDasar": "kolong",
    "artiIndonesia": [
      "leher"
    ],
    "kelasKata": "nomina",
    "kategori": "tubuh",
    "tingkatan": {
      "enjaIya": "kolong",
      "engghiEnten": "kolong",
      "engghiBhunten": "jangga"
    },
    "contohKalimat": {
      "madura": "Kalong emmas e kolong.",
      "indonesia": "Kalung emas di leher."
    }
  },
  {
    "id": "body-dada",
    "kataDasar": "dhadha",
    "artiIndonesia": [
      "dada"
    ],
    "kelasKata": "nomina",
    "kategori": "tubuh",
    "tingkatan": {
      "enjaIya": "dhadha",
      "engghiEnten": "dhadha",
      "engghiBhunten": "dhadha"
    },
    "contohKalimat": {
      "madura": "Dhadhana Sakera beddhel ka kerres.",
      "indonesia": "Dada Sakera kebal terhadap keris."
    }
  },
  {
    "id": "body-perut",
    "kataDasar": "tabu'",
    "artiIndonesia": [
      "perut"
    ],
    "kelasKata": "nomina",
    "kategori": "tubuh",
    "tingkatan": {
      "enjaIya": "tabu'",
      "engghiEnten": "tabu'",
      "engghiBhunten": "padharan"
    },
    "contohKalimat": {
      "madura": "Tabu' lapar terro ngakana.",
      "indonesia": "Perut lapar ingin makan."
    }
  },
  {
    "id": "body-punggung",
    "kataDasar": "tengguk",
    "artiIndonesia": [
      "punggung"
    ],
    "kelasKata": "nomina",
    "kategori": "tubuh",
    "tingkatan": {
      "enjaIya": "tengguk",
      "engghiEnten": "tengguk",
      "engghiBhunten": "pengkeran"
    },
    "contohKalimat": {
      "madura": "Tenggukka berra' ngeba gabah.",
      "indonesia": "Punggungnya berat memikul gabah."
    }
  },
  {
    "id": "body-tangan",
    "kataDasar": "tanang",
    "artiIndonesia": [
      "tangan"
    ],
    "kelasKata": "nomina",
    "kategori": "tubuh",
    "tingkatan": {
      "enjaIya": "tanang",
      "engghiEnten": "tanang",
      "engghiBhunten": "asta"
    },
    "contohKalimat": {
      "madura": "Asta tengki marengngi salamet.",
      "indonesia": "Tangan suci memberi selamat."
    }
  },
  {
    "id": "body-kaki",
    "kataDasar": "soko",
    "artiIndonesia": [
      "kaki"
    ],
    "kelasKata": "nomina",
    "kategori": "tubuh",
    "tingkatan": {
      "enjaIya": "soko",
      "engghiEnten": "soko",
      "engghiBhunten": "papeyan"
    },
    "contohKalimat": {
      "madura": "Papeyanna ampon kesel ajhelan jau.",
      "indonesia": "Kakinya sudah lelah berjalan jauh."
    }
  },
  {
    "id": "body-darah",
    "kataDasar": "dhere",
    "artiIndonesia": [
      "darah"
    ],
    "kelasKata": "nomina",
    "kategori": "tubuh",
    "tingkatan": {
      "enjaIya": "dhere",
      "engghiEnten": "dhere",
      "engghiBhunten": "rah"
    },
    "contohKalimat": {
      "madura": "Salam settong dhere Madura.",
      "indonesia": "Salam satu darah Madura."
    }
  },
  {
    "id": "body-hati",
    "kataDasar": "ate",
    "artiIndonesia": [
      "hati"
    ],
    "kelasKata": "nomina",
    "kategori": "tubuh",
    "tingkatan": {
      "enjaIya": "ate",
      "engghiEnten": "ate",
      "engghiBhunten": "galih"
    },
    "contohKalimat": {
      "madura": "Galih senneng ta' sossa.",
      "indonesia": "Hati senang tidak bersusah."
    }
  },
  {
    "id": "body-tulang",
    "kataDasar": "tolang",
    "artiIndonesia": [
      "tulang"
    ],
    "kelasKata": "nomina",
    "kategori": "tubuh",
    "tingkatan": {
      "enjaIya": "tolang",
      "engghiEnten": "tolang",
      "engghiBhunten": "tosan"
    },
    "contohKalimat": {
      "madura": "Lebbi beccik pote tolang e tembhang pote mata.",
      "indonesia": "Lebih baik berputih tulang daripada berputih mata."
    }
  },
  {
    "id": "body-kulit",
    "kataDasar": "kole'",
    "artiIndonesia": [
      "kulit"
    ],
    "kelasKata": "nomina",
    "kategori": "tubuh",
    "tingkatan": {
      "enjaIya": "kole'",
      "engghiEnten": "kole'",
      "engghiBhunten": "kole'"
    },
    "contohKalimat": {
      "madura": "Kole' coklat oreng Madura.",
      "indonesia": "Kulit cokelat orang Madura."
    }
  },
  {
    "id": "dir-utara",
    "kataDasar": "daja",
    "artiIndonesia": [
      "utara"
    ],
    "kelasKata": "nomina",
    "kategori": "arah",
    "tingkatan": {
      "enjaIya": "daja",
      "engghiEnten": "daja",
      "engghiBhunten": "daja"
    },
    "contohKalimat": {
      "madura": "Engkok bari'to buru ka daja.",
      "indonesia": "Saya kemarin lari ke utara."
    }
  },
  {
    "id": "dir-selatan",
    "kataDasar": "lao'",
    "artiIndonesia": [
      "selatan"
    ],
    "kelasKata": "nomina",
    "kategori": "arah",
    "tingkatan": {
      "enjaIya": "lao'",
      "engghiEnten": "lao'",
      "engghiBhunten": "lao'"
    },
    "contohKalimat": {
      "madura": "Tase' lao' tondhu ka samudra.",
      "indonesia": "Laut selatan menuju ke samudra."
    }
  },
  {
    "id": "dir-timur",
    "kataDasar": "temor",
    "artiIndonesia": [
      "timur"
    ],
    "kelasKata": "nomina",
    "kategori": "arah",
    "tingkatan": {
      "enjaIya": "temor",
      "engghiEnten": "temor",
      "engghiBhunten": "temor"
    },
    "contohKalimat": {
      "madura": "Mata are mencar dhari temor.",
      "indonesia": "Matahari terbit dari timur."
    }
  },
  {
    "id": "dir-barat",
    "kataDasar": "bara'",
    "artiIndonesia": [
      "barat"
    ],
    "kelasKata": "nomina",
    "kategori": "arah",
    "tingkatan": {
      "enjaIya": "bara'",
      "engghiEnten": "bara'",
      "engghiBhunten": "bara'"
    },
    "contohKalimat": {
      "madura": "Jembatan Suramadu neng Madura bara'.",
      "indonesia": "Jembatan Suramadu berada di Madura barat."
    }
  },
  {
    "id": "dir-atas",
    "kataDasar": "attas",
    "artiIndonesia": [
      "atas",
      "di atas"
    ],
    "kelasKata": "nomina",
    "kategori": "arah",
    "tingkatan": {
      "enjaIya": "attas",
      "engghiEnten": "attas",
      "engghiBhunten": "inggil"
    },
    "contohKalimat": {
      "madura": "Mano' ngabbher neng attas.",
      "indonesia": "Burung terbang di atas."
    }
  },
  {
    "id": "dir-bawah",
    "kataDasar": "baba",
    "artiIndonesia": [
      "bawah",
      "di bawah"
    ],
    "kelasKata": "nomina",
    "kategori": "arah",
    "tingkatan": {
      "enjaIya": "baba",
      "engghiEnten": "baba",
      "engghiBhunten": "andhap"
    },
    "contohKalimat": {
      "madura": "Toju' neng baba bungkana nyior.",
      "indonesia": "Duduk di bawah pohon kelapa."
    }
  },
  {
    "id": "dir-depan",
    "kataDasar": "adha'",
    "artiIndonesia": [
      "depan",
      "di depan",
      "muka"
    ],
    "kelasKata": "nomina",
    "kategori": "arah",
    "tingkatan": {
      "enjaIya": "adha'",
      "engghiEnten": "adha'",
      "engghiBhunten": "ajunan"
    },
    "contohKalimat": {
      "madura": "Ajhelan neng adha'.",
      "indonesia": "Berjalan di depan."
    }
  },
  {
    "id": "dir-belakang",
    "kataDasar": "budhi",
    "artiIndonesia": [
      "belakang",
      "di belakang"
    ],
    "kelasKata": "nomina",
    "kategori": "arah",
    "tingkatan": {
      "enjaIya": "budhi",
      "engghiEnten": "budhi",
      "engghiBhunten": "pengker"
    },
    "contohKalimat": {
      "madura": "Kolebheng bengkona neng budhi.",
      "indonesia": "Halaman rumahnya di belakang."
    }
  },
  {
    "id": "dir-tengah",
    "kataDasar": "tengnga",
    "artiIndonesia": [
      "tengah",
      "di tengah"
    ],
    "kelasKata": "nomina",
    "kategori": "arah",
    "tingkatan": {
      "enjaIya": "tengnga",
      "engghiEnten": "tengnga",
      "engghiBhunten": "tengnga"
    },
    "contohKalimat": {
      "madura": "Neng tengnga alun-alun.",
      "indonesia": "Di tengah alun-alun."
    }
  },
  {
    "id": "dir-samping",
    "kataDasar": "seddhi'",
    "artiIndonesia": [
      "samping",
      "sebelah",
      "dekat"
    ],
    "kelasKata": "nomina",
    "kategori": "arah",
    "tingkatan": {
      "enjaIya": "seddhi'",
      "engghiEnten": "seddhi'",
      "engghiBhunten": "sandheng"
    },
    "contohKalimat": {
      "madura": "Bengkona e seddhi' masjid.",
      "indonesia": "Rumahnya di sebelah masjid."
    }
  },
  {
    "id": "dir-dalam",
    "kataDasar": "dhalem",
    "artiIndonesia": [
      "dalam",
      "di dalam"
    ],
    "kelasKata": "nomina",
    "kategori": "arah",
    "tingkatan": {
      "enjaIya": "dhalem",
      "engghiEnten": "dhalem",
      "engghiBhunten": "lebet"
    },
    "contohKalimat": {
      "madura": "Neng dhalem bengko cellep.",
      "indonesia": "Di dalam rumah sejuk."
    }
  },
  {
    "id": "dir-luar",
    "kataDasar": "lowar",
    "artiIndonesia": [
      "luar",
      "di luar"
    ],
    "kelasKata": "nomina",
    "kategori": "arah",
    "tingkatan": {
      "enjaIya": "lowar",
      "engghiEnten": "lowar",
      "engghiBhunten": "jawi"
    },
    "contohKalimat": {
      "madura": "Meto ka lowar.",
      "indonesia": "Keluar ke luar."
    }
  },
  {
    "id": "dir-kanan",
    "kataDasar": "kangan",
    "artiIndonesia": [
      "kanan"
    ],
    "kelasKata": "nomina",
    "kategori": "arah",
    "tingkatan": {
      "enjaIya": "kangan",
      "engghiEnten": "kangan",
      "engghiBhunten": "tengen"
    },
    "contohKalimat": {
      "madura": "Tanang kangan kaangghuy ngakan.",
      "indonesia": "Tangan kanan untuk makan."
    }
  },
  {
    "id": "dir-kiri",
    "kataDasar": "kacer",
    "artiIndonesia": [
      "kiri"
    ],
    "kelasKata": "nomina",
    "kategori": "arah",
    "tingkatan": {
      "enjaIya": "kacer",
      "engghiEnten": "kacer",
      "engghiBhunten": "kewe"
    },
    "contohKalimat": {
      "madura": "Belok ka kacer.",
      "indonesia": "Belok ke kiri."
    }
  },
  {
    "id": "dir-sini",
    "kataDasar": "dinna'",
    "artiIndonesia": [
      "sini",
      "di sini"
    ],
    "kelasKata": "pronomina",
    "kategori": "arah",
    "tingkatan": {
      "enjaIya": "dinna'",
      "engghiEnten": "dinna'",
      "engghiBhunten": "ka'dissa'"
    },
    "contohKalimat": {
      "madura": "Entar ka dinna' taretan!",
      "indonesia": "Kemari ke sini saudaraku!"
    }
  },
  {
    "id": "dir-sana",
    "kataDasar": "dhissa'",
    "artiIndonesia": [
      "sana",
      "di sana"
    ],
    "kelasKata": "pronomina",
    "kategori": "arah",
    "tingkatan": {
      "enjaIya": "dhissa'",
      "engghiEnten": "dhissa'",
      "engghiBhunten": "dha' ka'dissa'"
    },
    "contohKalimat": {
      "madura": "Bengkona neng dhissa'.",
      "indonesia": "Rumahnya di sana."
    }
  },
  {
    "id": "num-0",
    "kataDasar": "kosong",
    "artiIndonesia": [
      "nol",
      "kosong"
    ],
    "kelasKata": "numeralia",
    "kategori": "angka",
    "tingkatan": {
      "enjaIya": "kosong",
      "engghiEnten": "kosong",
      "engghiBhunten": "sobung"
    },
    "contohKalimat": {
      "madura": "Angka kosong tadhe' sesa.",
      "indonesia": "Angka nol tanpa sisa."
    }
  },
  {
    "id": "num-1",
    "kataDasar": "settong",
    "artiIndonesia": [
      "satu"
    ],
    "kelasKata": "numeralia",
    "kategori": "angka",
    "tingkatan": {
      "enjaIya": "settong",
      "engghiEnten": "settong",
      "engghiBhunten": "settong"
    },
    "contohKalimat": {
      "madura": "Salam settong dhere!",
      "indonesia": "Salam satu darah!"
    }
  },
  {
    "id": "num-2",
    "kataDasar": "dhuwa'",
    "artiIndonesia": [
      "dua"
    ],
    "kelasKata": "numeralia",
    "kategori": "angka",
    "tingkatan": {
      "enjaIya": "dhuwa'",
      "engghiEnten": "dhuwa'",
      "engghiBhunten": "dhuwa'"
    },
    "contohKalimat": {
      "madura": "Dhuwa' sape karapan.",
      "indonesia": "Dua ekor sapi karapan."
    }
  },
  {
    "id": "num-3",
    "kataDasar": "tello'",
    "artiIndonesia": [
      "tiga"
    ],
    "kelasKata": "numeralia",
    "kategori": "angka",
    "tingkatan": {
      "enjaIya": "tello'",
      "engghiEnten": "tello'",
      "engghiBhunten": "tello'"
    },
    "contohKalimat": {
      "madura": "Tello' arina alako.",
      "indonesia": "Tiga hari bekerja."
    }
  },
  {
    "id": "num-4",
    "kataDasar": "empa'",
    "artiIndonesia": [
      "empat"
    ],
    "kelasKata": "numeralia",
    "kategori": "angka",
    "tingkatan": {
      "enjaIya": "empa'",
      "engghiEnten": "empa'",
      "engghiBhunten": "empa'"
    },
    "contohKalimat": {
      "madura": "Empa' kabupaten neng Madura.",
      "indonesia": "Empat kabupaten di Madura."
    }
  },
  {
    "id": "num-5",
    "kataDasar": "lema'",
    "artiIndonesia": [
      "lima"
    ],
    "kelasKata": "numeralia",
    "kategori": "angka",
    "tingkatan": {
      "enjaIya": "lema'",
      "engghiEnten": "lema'",
      "engghiBhunten": "lema'"
    },
    "contohKalimat": {
      "madura": "Lema' are abidda.",
      "indonesia": "Lima hari lamanya."
    }
  },
  {
    "id": "num-6",
    "kataDasar": "ennem",
    "artiIndonesia": [
      "enam"
    ],
    "kelasKata": "numeralia",
    "kategori": "angka",
    "tingkatan": {
      "enjaIya": "ennem",
      "engghiEnten": "ennem",
      "engghiBhunten": "ennem"
    },
    "contohKalimat": {
      "madura": "Ennem bulanna neng Songennep.",
      "indonesia": "Enam bulan di Sumenep."
    }
  },
  {
    "id": "num-7",
    "kataDasar": "petto'",
    "artiIndonesia": [
      "tujuh"
    ],
    "kelasKata": "numeralia",
    "kategori": "angka",
    "tingkatan": {
      "enjaIya": "petto'",
      "engghiEnten": "petto'",
      "engghiBhunten": "petto'"
    },
    "contohKalimat": {
      "madura": "Petto' are neng Pamekasan.",
      "indonesia": "Tujuh hari di Pamekasan."
    }
  },
  {
    "id": "num-8",
    "kataDasar": "ballu'",
    "artiIndonesia": [
      "delapan"
    ],
    "kelasKata": "numeralia",
    "kategori": "angka",
    "tingkatan": {
      "enjaIya": "ballu'",
      "engghiEnten": "ballu'",
      "engghiBhunten": "ballu'"
    },
    "contohKalimat": {
      "madura": "Jhem ballu' lagghu.",
      "indonesia": "Jam delapan pagi."
    }
  },
  {
    "id": "num-9",
    "kataDasar": "sanga",
    "artiIndonesia": [
      "sembilan"
    ],
    "kelasKata": "numeralia",
    "kategori": "angka",
    "tingkatan": {
      "enjaIya": "sanga",
      "engghiEnten": "sanga",
      "engghiBhunten": "sanga"
    },
    "contohKalimat": {
      "madura": "Sanga bulanna ngandung.",
      "indonesia": "Sembilan bulan mengandung."
    }
  },
  {
    "id": "num-10",
    "kataDasar": "sapolo",
    "artiIndonesia": [
      "sepuluh"
    ],
    "kelasKata": "numeralia",
    "kategori": "angka",
    "tingkatan": {
      "enjaIya": "sapolo",
      "engghiEnten": "sapolo",
      "engghiBhunten": "sapolo"
    },
    "contohKalimat": {
      "madura": "Sapolo ebu ropiya.",
      "indonesia": "Sepuluh ribu rupiah."
    }
  },
  {
    "id": "num-11",
    "kataDasar": "sabellas",
    "artiIndonesia": [
      "sebelas"
    ],
    "kelasKata": "numeralia",
    "kategori": "angka",
    "tingkatan": {
      "enjaIya": "sabellas",
      "engghiEnten": "sabellas",
      "engghiBhunten": "sabellas"
    },
    "contohKalimat": {
      "madura": "Sabellas oreng pemaen bal.",
      "indonesia": "Sebelas pemain bola."
    }
  },
  {
    "id": "num-20",
    "kataDasar": "dhu polo",
    "artiIndonesia": [
      "dua puluh"
    ],
    "kelasKata": "numeralia",
    "kategori": "angka",
    "tingkatan": {
      "enjaIya": "dhu polo",
      "engghiEnten": "dhu polo",
      "engghiBhunten": "dhu polo"
    },
    "contohKalimat": {
      "madura": "Dhu polo taon umorra.",
      "indonesia": "Dua puluh tahun umurnya."
    }
  },
  {
    "id": "num-25",
    "kataDasar": "saghemme'",
    "artiIndonesia": [
      "dua puluh lima",
      "selawe"
    ],
    "kelasKata": "numeralia",
    "kategori": "angka",
    "tingkatan": {
      "enjaIya": "saghemme'",
      "engghiEnten": "saghemme'",
      "engghiBhunten": "saghemme'"
    },
    "contohKalimat": {
      "madura": "Arghana saghemme' ebu.",
      "indonesia": "Harganya dua puluh lima ribu."
    }
  },
  {
    "id": "num-50",
    "kataDasar": "seket",
    "artiIndonesia": [
      "lima puluh"
    ],
    "kelasKata": "numeralia",
    "kategori": "angka",
    "tingkatan": {
      "enjaIya": "seket",
      "engghiEnten": "seket",
      "engghiBhunten": "seket"
    },
    "contohKalimat": {
      "madura": "Seket ebu pesse.",
      "indonesia": "Lima puluh ribu uang."
    }
  },
  {
    "id": "num-100",
    "kataDasar": "satos",
    "artiIndonesia": [
      "seratus"
    ],
    "kelasKata": "numeralia",
    "kategori": "angka",
    "tingkatan": {
      "enjaIya": "satos",
      "engghiEnten": "satos",
      "engghiBhunten": "satos"
    },
    "contohKalimat": {
      "madura": "Satos persen Madura.",
      "indonesia": "Seratus persen Madura."
    }
  },
  {
    "id": "num-1000",
    "kataDasar": "saebu",
    "artiIndonesia": [
      "seribu"
    ],
    "kelasKata": "numeralia",
    "kategori": "angka",
    "tingkatan": {
      "enjaIya": "saebu",
      "engghiEnten": "saebu",
      "engghiBhunten": "saebu"
    },
    "contohKalimat": {
      "madura": "Saebu taretan hadir.",
      "indonesia": "Seribu kawan hadir."
    }
  },
  {
    "id": "num-juta",
    "kataDasar": "sayuta",
    "artiIndonesia": [
      "sejuta",
      "satu juta"
    ],
    "kelasKata": "numeralia",
    "kategori": "angka",
    "tingkatan": {
      "enjaIya": "sayuta",
      "engghiEnten": "sayuta",
      "engghiBhunten": "sayuta"
    },
    "contohKalimat": {
      "madura": "Sayuta pandhudhuk Madura.",
      "indonesia": "Satu juta penduduk Madura."
    }
  },
  {
    "id": "num-setengah",
    "kataDasar": "satengnga",
    "artiIndonesia": [
      "setengah",
      "separuh"
    ],
    "kelasKata": "numeralia",
    "kategori": "angka",
    "tingkatan": {
      "enjaIya": "satengnga",
      "engghiEnten": "satengnga",
      "engghiBhunten": "satengnga"
    },
    "contohKalimat": {
      "madura": "Melle nase' satengnga porse.",
      "indonesia": "Beli nasi setengah porsi."
    }
  },
  {
    "id": "time-sekarang",
    "kataDasar": "sateya",
    "artiIndonesia": [
      "sekarang",
      "saat ini",
      "kini"
    ],
    "kelasKata": "adverba",
    "kategori": "waktu",
    "tingkatan": {
      "enjaIya": "sateya",
      "engghiEnten": "mangken",
      "engghiBhunten": "mangken"
    },
    "contohKalimat": {
      "madura": "Mangken ampon mare alako.",
      "indonesia": "Sekarang sudah selesai bekerja."
    }
  },
  {
    "id": "time-kemarin",
    "kataDasar": "bari'to",
    "artiIndonesia": [
      "kemarin",
      "kemaren"
    ],
    "kelasKata": "adverba",
    "kategori": "waktu",
    "tingkatan": {
      "enjaIya": "bari'to",
      "engghiEnten": "bari'to",
      "engghiBhunten": "kalaenta"
    },
    "contohKalimat": {
      "madura": "Bari'to engkok entar ka Bangkalan.",
      "indonesia": "Kemarin saya pergi ke Bangkalan."
    }
  },
  {
    "id": "time-besok",
    "kataDasar": "lagghu'an",
    "artiIndonesia": [
      "besok",
      "esok"
    ],
    "kelasKata": "adverba",
    "kategori": "waktu",
    "tingkatan": {
      "enjaIya": "lagghu'an",
      "engghiEnten": "lagghu'an",
      "engghiBhunten": "enjhang"
    },
    "contohKalimat": {
      "madura": "Lagghu'an kabbhi mare.",
      "indonesia": "Besok semuanya selesai."
    }
  },
  {
    "id": "time-lusa",
    "kataDasar": "pagghen",
    "artiIndonesia": [
      "lusa"
    ],
    "kelasKata": "adverba",
    "kategori": "waktu",
    "tingkatan": {
      "enjaIya": "pagghen",
      "engghiEnten": "pagghen",
      "engghiBhunten": "pagghen"
    },
    "contohKalimat": {
      "madura": "Pagghen rombongan rabu.",
      "indonesia": "Lusa rombongan tiba."
    }
  },
  {
    "id": "time-tadi",
    "kataDasar": "barina",
    "artiIndonesia": [
      "tadi",
      "tadi barusan"
    ],
    "kelasKata": "adverba",
    "kategori": "waktu",
    "tingkatan": {
      "enjaIya": "barina",
      "engghiEnten": "barina",
      "engghiBhunten": "kalaenta barina"
    },
    "contohKalimat": {
      "madura": "Barina oreng rowa noles sorat.",
      "indonesia": "Tadi orang itu menulis surat."
    }
  },
  {
    "id": "time-pagi",
    "kataDasar": "lagghu",
    "artiIndonesia": [
      "pagi",
      "pagi hari"
    ],
    "kelasKata": "nomina",
    "kategori": "waktu",
    "tingkatan": {
      "enjaIya": "lagghu",
      "engghiEnten": "lagghu",
      "engghiBhunten": "enjhang"
    },
    "contohKalimat": {
      "madura": "Ghul-lagghu ngakan soto Madura.",
      "indonesia": "Pagi-pagi makan soto Madura."
    }
  },
  {
    "id": "time-siang",
    "kataDasar": "seyang",
    "artiIndonesia": [
      "siang",
      "siang hari"
    ],
    "kelasKata": "nomina",
    "kategori": "waktu",
    "tingkatan": {
      "enjaIya": "seyang",
      "engghiEnten": "seyang",
      "engghiBhunten": "seyang"
    },
    "contohKalimat": {
      "madura": "Seyang are ce' panassa.",
      "indonesia": "Siang hari sangat terik."
    }
  },
  {
    "id": "time-sore",
    "kataDasar": "sore",
    "artiIndonesia": [
      "sore",
      "senja"
    ],
    "kelasKata": "nomina",
    "kategori": "waktu",
    "tingkatan": {
      "enjaIya": "sore / asar",
      "engghiEnten": "sore",
      "engghiBhunten": "sore"
    },
    "contohKalimat": {
      "madura": "Sore are entar ka tase'.",
      "indonesia": "Sore hari pergi ke pantai."
    }
  },
  {
    "id": "time-malam",
    "kataDasar": "malem",
    "artiIndonesia": [
      "malam",
      "malam hari"
    ],
    "kelasKata": "nomina",
    "kategori": "waktu",
    "tingkatan": {
      "enjaIya": "malem",
      "engghiEnten": "malem",
      "engghiBhunten": "malem"
    },
    "contohKalimat": {
      "madura": "Malem are angin nasepot.",
      "indonesia": "Malam hari angin bertiup sepoi-sepoi."
    }
  },
  {
    "id": "time-hari",
    "kataDasar": "are",
    "artiIndonesia": [
      "hari",
      "matahari"
    ],
    "kelasKata": "nomina",
    "kategori": "waktu",
    "tingkatan": {
      "enjaIya": "are",
      "engghiEnten": "are",
      "engghiBhunten": "are"
    },
    "contohKalimat": {
      "madura": "Are juma'at are berkah.",
      "indonesia": "Hari jumat hari berkah."
    }
  },
  {
    "id": "time-bulan",
    "kataDasar": "bulan",
    "artiIndonesia": [
      "bulan"
    ],
    "kelasKata": "nomina",
    "kategori": "waktu",
    "tingkatan": {
      "enjaIya": "bulan",
      "engghiEnten": "bulan",
      "engghiBhunten": "sasih"
    },
    "contohKalimat": {
      "madura": "Bulan pajaratan terang.",
      "indonesia": "Bulan purnama terang benderang."
    }
  },
  {
    "id": "time-tahun",
    "kataDasar": "taon",
    "artiIndonesia": [
      "tahun"
    ],
    "kelasKata": "nomina",
    "kategori": "waktu",
    "tingkatan": {
      "enjaIya": "taon",
      "engghiEnten": "taon",
      "engghiBhunten": "taon"
    },
    "contohKalimat": {
      "madura": "Taon anyar parlo semangat anyar.",
      "indonesia": "Tahun baru perlu semangat baru."
    }
  },
  {
    "id": "time-jam",
    "kataDasar": "jhem",
    "artiIndonesia": [
      "jam",
      "pukul",
      "waktu"
    ],
    "kelasKata": "nomina",
    "kategori": "waktu",
    "tingkatan": {
      "enjaIya": "jhem",
      "engghiEnten": "jhem",
      "engghiBhunten": "tabuh"
    },
    "contohKalimat": {
      "madura": "Jhem sapolo malem ampon seppe.",
      "indonesia": "Jam sepuluh malam sudah sunyi."
    }
  },
  {
    "id": "verb-lari",
    "kataDasar": "buru",
    "artiIndonesia": [
      "lari",
      "berlari",
      "kabur"
    ],
    "kelasKata": "verba",
    "kategori": "gerakan",
    "tingkatan": {
      "enjaIya": "buru",
      "engghiEnten": "buru",
      "engghiBhunten": "ngalencak"
    },
    "contohKalimat": {
      "madura": "Kerrong buru ka emba.",
      "indonesia": "Rindu berlari ke pelukan nenek."
    }
  },
  {
    "id": "verb-jalan",
    "kataDasar": "jhelan",
    "artiIndonesia": [
      "jalan",
      "berjalan"
    ],
    "kelasKata": "verba",
    "kategori": "gerakan",
    "tingkatan": {
      "enjaIya": "ajhelan",
      "engghiEnten": "ajhelan",
      "engghiBhunten": "mampar"
    },
    "contohKalimat": {
      "madura": "Mampar dhalem kabhisaan.",
      "indonesia": "Berjalan dalam kebijaksanaan."
    }
  },
  {
    "id": "verb-lompat",
    "kataDasar": "lonca'",
    "artiIndonesia": [
      "lompat",
      "melompat"
    ],
    "kelasKata": "verba",
    "kategori": "gerakan",
    "tingkatan": {
      "enjaIya": "alonca'",
      "engghiEnten": "alonca'",
      "engghiBhunten": "nganjuk"
    },
    "contohKalimat": {
      "madura": "Koceng alonca' ka attas meje.",
      "indonesia": "Kucing melompat ke atas meja."
    }
  },
  {
    "id": "verb-duduk",
    "kataDasar": "toju'",
    "artiIndonesia": [
      "duduk",
      "terduduk"
    ],
    "kelasKata": "verba",
    "kategori": "gerakan",
    "tingkatan": {
      "enjaIya": "toju'",
      "engghiEnten": "toju'",
      "engghiBhunten": "lenggi"
    },
    "contohKalimat": {
      "madura": "Lenggi neng korse tamu.",
      "indonesia": "Duduk di kursi tamu."
    }
  },
  {
    "id": "verb-berdiri",
    "kataDasar": "ngadek",
    "artiIndonesia": [
      "berdiri",
      "tegak"
    ],
    "kelasKata": "verba",
    "kategori": "gerakan",
    "tingkatan": {
      "enjaIya": "ngadek",
      "engghiEnten": "ngadek",
      "engghiBhunten": "jumeneng"
    },
    "contohKalimat": {
      "madura": "Kyai jumeneng adhabu ka santre.",
      "indonesia": "Kyai berdiri memberi wejangan kepada santri."
    }
  },
  {
    "id": "verb-tidur",
    "kataDasar": "tedhung",
    "artiIndonesia": [
      "tidur",
      "berbaring",
      "tertidur"
    ],
    "kelasKata": "verba",
    "kategori": "gerakan",
    "tingkatan": {
      "enjaIya": "tedhung",
      "engghiEnten": "tedhung",
      "engghiBhunten": "sare"
    },
    "contohKalimat": {
      "madura": "Rama ampon sare neng dalem.",
      "indonesia": "Ayahanda sudah tidur di peraduan."
    }
  },
  {
    "id": "verb-bangun",
    "kataDasar": "jhagha",
    "artiIndonesia": [
      "bangun",
      "terjaga",
      "terbangun"
    ],
    "kelasKata": "verba",
    "kategori": "gerakan",
    "tingkatan": {
      "enjaIya": "jhagha",
      "engghiEnten": "jhagha",
      "engghiBhunten": "ungu"
    },
    "contohKalimat": {
      "madura": "Jhala ghul-lagghu subu.",
      "indonesia": "Bangun pagi-pagi sekali saat subuh."
    }
  },
  {
    "id": "verb-jatuh",
    "kataDasar": "labu",
    "artiIndonesia": [
      "jatuh",
      "terjatuh",
      "tumbang"
    ],
    "kelasKata": "verba",
    "kategori": "gerakan",
    "tingkatan": {
      "enjaIya": "labu",
      "engghiEnten": "labu",
      "engghiBhunten": "robbhu"
    },
    "contohKalimat": {
      "madura": "Bungka nyior labu polana angen.",
      "indonesia": "Pohon kelapa tumbang karena angin."
    }
  },
  {
    "id": "verb-terbang",
    "kataDasar": "nabbhang",
    "artiIndonesia": [
      "terbang",
      "melayang"
    ],
    "kelasKata": "verba",
    "kategori": "gerakan",
    "tingkatan": {
      "enjaIya": "nabbhang / ngabbher",
      "engghiEnten": "ngabbher",
      "engghiBhunten": "ngabbher"
    },
    "contohKalimat": {
      "madura": "Mano' ngabbher tengghi ka langnge'.",
      "indonesia": "Burung terbang tinggi ke langit."
    }
  },
  {
    "id": "verb-renang",
    "kataDasar": "ngelangi",
    "artiIndonesia": [
      "berenang"
    ],
    "kelasKata": "verba",
    "kategori": "gerakan",
    "tingkatan": {
      "enjaIya": "ngelangi",
      "engghiEnten": "ngelangi",
      "engghiBhunten": "ngelangi"
    },
    "contohKalimat": {
      "madura": "Ana' kene' ngelangi neng songay.",
      "indonesia": "Anak kecil berenang di sungai."
    }
  },
  {
    "id": "verb-pergi",
    "kataDasar": "entar",
    "artiIndonesia": [
      "pergi",
      "berangkat"
    ],
    "kelasKata": "verba",
    "kategori": "gerakan",
    "tingkatan": {
      "enjaIya": "entar",
      "engghiEnten": "enta",
      "engghiBhunten": "meyos"
    },
    "contohKalimat": {
      "madura": "Abdhina meyos dha' pasar.",
      "indonesia": "Saya pergi ke pasar."
    }
  },
  {
    "id": "verb-pulang",
    "kataDasar": "mole",
    "artiIndonesia": [
      "pulang",
      "kembali"
    ],
    "kelasKata": "verba",
    "kategori": "gerakan",
    "tingkatan": {
      "enjaIya": "mole",
      "engghiEnten": "abali",
      "engghiBhunten": "kondur"
    },
    "contohKalimat": {
      "madura": "Kondur dha' Madura taretan!",
      "indonesia": "Pulanglah ke Madura saudaraku!"
    }
  },
  {
    "id": "verb-datang",
    "kataDasar": "rabu",
    "artiIndonesia": [
      "datang",
      "tiba",
      "sampai",
      "hadir"
    ],
    "kelasKata": "verba",
    "kategori": "gerakan",
    "tingkatan": {
      "enjaIya": "dateng",
      "engghiEnten": "rabu",
      "engghiBhunten": "rabu"
    },
    "contohKalimat": {
      "madura": "Mator sakalangkong rabuna.",
      "indonesia": "Terima kasih atas kedatangannya."
    }
  },
  {
    "id": "verb-masuk",
    "kataDasar": "maso'",
    "artiIndonesia": [
      "masuk",
      "memasuki"
    ],
    "kelasKata": "verba",
    "kategori": "gerakan",
    "tingkatan": {
      "enjaIya": "maso'",
      "engghiEnten": "maso'",
      "engghiBhunten": "malebhed"
    },
    "contohKalimat": {
      "madura": "Ngireng malebhed ka dalem.",
      "indonesia": "Silakan masuk ke dalam kediaman."
    }
  },
  {
    "id": "verb-keluar",
    "kataDasar": "kalowar",
    "artiIndonesia": [
      "keluar",
      "menjauh",
      "meninggalkan"
    ],
    "kelasKata": "verba",
    "kategori": "gerakan",
    "tingkatan": {
      "enjaIya": "meto / kalowar",
      "engghiEnten": "kalowar",
      "engghiBhunten": "medal"
    },
    "contohKalimat": {
      "madura": "Medal sarenge hormat.",
      "indonesia": "Keluar dengan penuh hormat."
    }
  },
  {
    "id": "act-makan",
    "kataDasar": "kakan",
    "artiIndonesia": [
      "makan",
      "menyantap",
      "memakan",
      "santap"
    ],
    "kelasKata": "verba",
    "kategori": "aktivitas",
    "tingkatan": {
      "enjaIya": "ngakan",
      "engghiEnten": "ngadhep",
      "engghiBhunten": "dha'ar"
    },
    "contohKalimat": {
      "madura": "Abdhina ampon dha'ar nase' kobbu'.",
      "indonesia": "Saya sudah makan nasi tumpeng."
    }
  },
  {
    "id": "act-minum",
    "kataDasar": "enom",
    "artiIndonesia": [
      "minum",
      "meneguk",
      "meminum"
    ],
    "kelasKata": "verba",
    "kategori": "aktivitas",
    "tingkatan": {
      "enjaIya": "ngenom",
      "engghiEnten": "ngenom",
      "engghiBhunten": "ngunjhut"
    },
    "contohKalimat": {
      "madura": "Ngunjhut kopi anget madura.",
      "indonesia": "Meminum kopi hangat madura."
    }
  },
  {
    "id": "act-mandi",
    "kataDasar": "mandi",
    "artiIndonesia": [
      "mandi",
      "bersuci"
    ],
    "kelasKata": "verba",
    "kategori": "aktivitas",
    "tingkatan": {
      "enjaIya": "mandi",
      "engghiEnten": "mandi",
      "engghiBhunten": "asiram"
    },
    "contohKalimat": {
      "madura": "Asiram aeng cellep tor seger.",
      "indonesia": "Mandi air dingin dan segar."
    }
  },
  {
    "id": "act-cuci",
    "kataDasar": "masso",
    "artiIndonesia": [
      "cuci",
      "mencuci"
    ],
    "kelasKata": "verba",
    "kategori": "aktivitas",
    "tingkatan": {
      "enjaIya": "masso",
      "engghiEnten": "masso",
      "engghiBhunten": "nyanse"
    },
    "contohKalimat": {
      "madura": "Masso klambhi neng songay.",
      "indonesia": "Mencuci baju di sungai."
    }
  },
  {
    "id": "act-masak",
    "kataDasar": "masak",
    "artiIndonesia": [
      "masak",
      "memasak"
    ],
    "kelasKata": "verba",
    "kategori": "aktivitas",
    "tingkatan": {
      "enjaIya": "mamasak",
      "engghiEnten": "mamasak",
      "engghiBhunten": "nyapo'"
    },
    "contohKalimat": {
      "madura": "Nyapo' juko' tase'.",
      "indonesia": "Memasak ikan laut."
    }
  },
  {
    "id": "act-goreng",
    "kataDasar": "guring",
    "artiIndonesia": [
      "goreng",
      "menggoreng"
    ],
    "kelasKata": "verba",
    "kategori": "aktivitas",
    "tingkatan": {
      "enjaIya": "aguring",
      "engghiEnten": "aguring",
      "engghiBhunten": "aguring"
    },
    "contohKalimat": {
      "madura": "Aguring juko' tongkol.",
      "indonesia": "Menggoreng ikan tongkol."
    }
  },
  {
    "id": "act-bakar",
    "kataDasar": "morop",
    "artiIndonesia": [
      "bakar",
      "membakar",
      "memanggang"
    ],
    "kelasKata": "verba",
    "kategori": "aktivitas",
    "tingkatan": {
      "enjaIya": "morop",
      "engghiEnten": "morop",
      "engghiBhunten": "morop"
    },
    "contohKalimat": {
      "madura": "Morop sate lalat Pamekasan.",
      "indonesia": "Membakar sate lalat Pamekasan."
    }
  },
  {
    "id": "act-sapu",
    "kataDasar": "sapo",
    "artiIndonesia": [
      "sapu",
      "menyapu"
    ],
    "kelasKata": "verba",
    "kategori": "aktivitas",
    "tingkatan": {
      "enjaIya": "nyapo",
      "engghiEnten": "nyapo",
      "engghiBhunten": "nyapo"
    },
    "contohKalimat": {
      "madura": "Nyapo taneyan bengko.",
      "indonesia": "Menyapu halaman pekarangan rumah."
    }
  },
  {
    "id": "act-baca",
    "kataDasar": "maca",
    "artiIndonesia": [
      "baca",
      "membaca"
    ],
    "kelasKata": "verba",
    "kategori": "edukasi",
    "tingkatan": {
      "enjaIya": "maca",
      "engghiEnten": "maca",
      "engghiBhunten": "maos"
    },
    "contohKalimat": {
      "madura": "Santre maos kitab koneng.",
      "indonesia": "Santri membaca kitab kuning."
    }
  },
  {
    "id": "act-tulis",
    "kataDasar": "toles",
    "artiIndonesia": [
      "tulis",
      "menulis",
      "mencatat"
    ],
    "kelasKata": "verba",
    "kategori": "edukasi",
    "tingkatan": {
      "enjaIya": "noles",
      "engghiEnten": "noles",
      "engghiBhunten": "nyerat"
    },
    "contohKalimat": {
      "madura": "Nyerat sorat kaangghuy taretan.",
      "indonesia": "Menulis surat untuk saudara."
    }
  },
  {
    "id": "act-belajar",
    "kataDasar": "ajhar",
    "artiIndonesia": [
      "belajar",
      "menuntut ilmu"
    ],
    "kelasKata": "verba",
    "kategori": "edukasi",
    "tingkatan": {
      "enjaIya": "ajhar",
      "engghiEnten": "ajhar",
      "engghiBhunten": "sinau"
    },
    "contohKalimat": {
      "madura": "Ajhar koding MaduraLang.",
      "indonesia": "Belajar coding MaduraLang."
    }
  },
  {
    "id": "act-kerja",
    "kataDasar": "lako",
    "artiIndonesia": [
      "kerja",
      "bekerja"
    ],
    "kelasKata": "verba",
    "kategori": "profesi",
    "tingkatan": {
      "enjaIya": "alako",
      "engghiEnten": "alako",
      "engghiBhunten": "akarya"
    },
    "contohKalimat": {
      "madura": "Oreng Madura rajin alako kabbhi.",
      "indonesia": "Orang Madura semua rajin bekerja."
    }
  },
  {
    "id": "act-beli",
    "kataDasar": "melle",
    "artiIndonesia": [
      "beli",
      "membeli"
    ],
    "kelasKata": "verba",
    "kategori": "transaksi",
    "tingkatan": {
      "enjaIya": "melle",
      "engghiEnten": "melle",
      "engghiBhunten": "mundhut"
    },
    "contohKalimat": {
      "madura": "Mundhut sate Madura duwe piring.",
      "indonesia": "Membeli sate Madura dua piring."
    }
  },
  {
    "id": "act-jual",
    "kataDasar": "jual",
    "artiIndonesia": [
      "jual",
      "menjual"
    ],
    "kelasKata": "verba",
    "kategori": "transaksi",
    "tingkatan": {
      "enjaIya": "ajual",
      "engghiEnten": "ajual",
      "engghiBhunten": "nyadhe"
    },
    "contohKalimat": {
      "madura": "Nyadhe bako ka Sorbhaja.",
      "indonesia": "Menjual tembakau ke Surabaya."
    }
  },
  {
    "id": "act-ambil",
    "kataDasar": "ala'",
    "artiIndonesia": [
      "ambil",
      "mengambil"
    ],
    "kelasKata": "verba",
    "kategori": "aktivitas",
    "tingkatan": {
      "enjaIya": "ngala'",
      "engghiEnten": "ngala'",
      "engghiBhunten": "mondhut"
    },
    "contohKalimat": {
      "madura": "Mondhut buku neng attas meje.",
      "indonesia": "Mengambil buku di atas meja."
    }
  },
  {
    "id": "act-bawa",
    "kataDasar": "eba",
    "artiIndonesia": [
      "bawa",
      "membawa"
    ],
    "kelasKata": "verba",
    "kategori": "aktivitas",
    "tingkatan": {
      "enjaIya": "ngeba",
      "engghiEnten": "ngeba",
      "engghiBhunten": "ngasta"
    },
    "contohKalimat": {
      "madura": "Sakera ngasta arek clurit.",
      "indonesia": "Sakera membawa celurit."
    }
  },
  {
    "id": "act-pegang",
    "kataDasar": "teggu'",
    "artiIndonesia": [
      "pegang",
      "memegang"
    ],
    "kelasKata": "verba",
    "kategori": "aktivitas",
    "tingkatan": {
      "enjaIya": "neggu'",
      "engghiEnten": "neggu'",
      "engghiBhunten": "nyepeng"
    },
    "contohKalimat": {
      "madura": "Nyepeng kenceng toya.",
      "indonesia": "Memegang cangkir air."
    }
  },
  {
    "id": "act-buka",
    "kataDasar": "mokka'",
    "artiIndonesia": [
      "buka",
      "membuka",
      "terbuka"
    ],
    "kelasKata": "verba",
    "kategori": "aktivitas",
    "tingkatan": {
      "enjaIya": "mokka'",
      "engghiEnten": "mokka'",
      "engghiBhunten": "menga"
    },
    "contohKalimat": {
      "madura": "Menga labang bengkona.",
      "indonesia": "Membuka pintu rumahnya."
    }
  },
  {
    "id": "act-tutup",
    "kataDasar": "notop",
    "artiIndonesia": [
      "tutup",
      "menutup",
      "tertutup"
    ],
    "kelasKata": "verba",
    "kategori": "aktivitas",
    "tingkatan": {
      "enjaIya": "notop",
      "engghiEnten": "notop",
      "engghiBhunten": "mabidha"
    },
    "contohKalimat": {
      "madura": "Notop jandhela polana ojan.",
      "indonesia": "Menutup jendela karena hujan."
    }
  },
  {
    "id": "act-pukul",
    "kataDasar": "pokol",
    "artiIndonesia": [
      "pukul",
      "memukul"
    ],
    "kelasKata": "verba",
    "kategori": "aktivitas",
    "tingkatan": {
      "enjaIya": "mokol",
      "engghiEnten": "mokol",
      "engghiBhunten": "mokol"
    },
    "contohKalimat": {
      "madura": "Mokol ghendhang saronen.",
      "indonesia": "Memukul gendang musik saronen."
    }
  },
  {
    "id": "act-tendang",
    "kataDasar": "sepak",
    "artiIndonesia": [
      "tendang",
      "menendang"
    ],
    "kelasKata": "verba",
    "kategori": "aktivitas",
    "tingkatan": {
      "enjaIya": "nyepak",
      "engghiEnten": "nyepak",
      "engghiBhunten": "nyepak"
    },
    "contohKalimat": {
      "madura": "Nyepak bal ka gawang.",
      "indonesia": "Menendang bola ke gawang."
    }
  },
  {
    "id": "act-lempar",
    "kataDasar": "mantheng",
    "artiIndonesia": [
      "lempar",
      "melempar"
    ],
    "kelasKata": "verba",
    "kategori": "aktivitas",
    "tingkatan": {
      "enjaIya": "mantheng",
      "engghiEnten": "mantheng",
      "engghiBhunten": "mantheng"
    },
    "contohKalimat": {
      "madura": "Mantheng bato ka songay.",
      "indonesia": "Melempar batu ke sungai."
    }
  },
  {
    "id": "act-tangkap",
    "kataDasar": "tekkep",
    "artiIndonesia": [
      "tangkap",
      "menangkap"
    ],
    "kelasKata": "verba",
    "kategori": "aktivitas",
    "tingkatan": {
      "enjaIya": "nekkep",
      "engghiEnten": "nekkep",
      "engghiBhunten": "nekkep"
    },
    "contohKalimat": {
      "madura": "Nelayan nekkep juko' tase'.",
      "indonesia": "Nelayan menangkap ikan laut."
    }
  },
  {
    "id": "act-tarik",
    "kataDasar": "tare'",
    "artiIndonesia": [
      "tarik",
      "menarik"
    ],
    "kelasKata": "verba",
    "kategori": "aktivitas",
    "tingkatan": {
      "enjaIya": "nare'",
      "engghiEnten": "nare'",
      "engghiBhunten": "nare'"
    },
    "contohKalimat": {
      "madura": "Sape nare' cikar garobak.",
      "indonesia": "Sapi menarik cikar gerobak."
    }
  },
  {
    "id": "act-dorong",
    "kataDasar": "surung",
    "artiIndonesia": [
      "dorong",
      "mendorong"
    ],
    "kelasKata": "verba",
    "kategori": "aktivitas",
    "tingkatan": {
      "enjaIya": "nyurung",
      "engghiEnten": "nyurung",
      "engghiBhunten": "nyurung"
    },
    "contohKalimat": {
      "madura": "Nyurung parao ka tase'.",
      "indonesia": "Mendorong perahu ke laut."
    }
  },
  {
    "id": "act-cari",
    "kataDasar": "sare",
    "artiIndonesia": [
      "cari",
      "mencari"
    ],
    "kelasKata": "verba",
    "kategori": "aktivitas",
    "tingkatan": {
      "enjaIya": "nyare",
      "engghiEnten": "nyare",
      "engghiBhunten": "nyare"
    },
    "contohKalimat": {
      "madura": "Nyare rejeke halal.",
      "indonesia": "Mencari rezeki halal."
    }
  },
  {
    "id": "act-temu",
    "kataDasar": "temmo",
    "artiIndonesia": [
      "temu",
      "menemukan",
      "bertemu"
    ],
    "kelasKata": "verba",
    "kategori": "aktivitas",
    "tingkatan": {
      "enjaIya": "nemmo",
      "engghiEnten": "nemmo",
      "engghiBhunten": "mangghi"
    },
    "contohKalimat": {
      "madura": "Nemmo pesse neng dalan.",
      "indonesia": "Menemukan uang di jalan."
    }
  },
  {
    "id": "act-beri",
    "kataDasar": "berri'",
    "artiIndonesia": [
      "beri",
      "memberi",
      "kasih"
    ],
    "kelasKata": "verba",
    "kategori": "sosial",
    "tingkatan": {
      "enjaIya": "aberri'",
      "engghiEnten": "aberri'",
      "engghiBhunten": "marengngi"
    },
    "contohKalimat": {
      "madura": "Marengngi sodakoh ka fakir.",
      "indonesia": "Memberi sedekah kepada orang fakir."
    }
  },
  {
    "id": "act-minta",
    "kataDasar": "nyo'on",
    "artiIndonesia": [
      "minta",
      "meminta",
      "memohon"
    ],
    "kelasKata": "verba",
    "kategori": "kesantunan",
    "tingkatan": {
      "enjaIya": "nyo'on",
      "engghiEnten": "nyo'on",
      "engghiBhunten": "nedha"
    },
    "contohKalimat": {
      "madura": "Nedha do'a barokah guru.",
      "indonesia": "Memohon doa barakah dari guru."
    }
  },
  {
    "id": "com-bicara",
    "kataDasar": "oca'",
    "artiIndonesia": [
      "bicara",
      "berkata",
      "ucap",
      "berbicara",
      "ngomong",
      "berucap"
    ],
    "kelasKata": "verba",
    "kategori": "komunikasi",
    "tingkatan": {
      "enjaIya": "ngoca'",
      "engghiEnten": "ngator",
      "engghiBhunten": "adhabu"
    },
    "contohKalimat": {
      "madura": "Adhabu jha' mangmang.",
      "indonesia": "Berbicaralah jangan ragu-ragu."
    }
  },
  {
    "id": "com-dengar",
    "kataDasar": "keding",
    "artiIndonesia": [
      "dengar",
      "mendengar",
      "mendengarkan"
    ],
    "kelasKata": "verba",
    "kategori": "indera",
    "tingkatan": {
      "enjaIya": "ngeding",
      "engghiEnten": "ngeding",
      "engghiBhunten": "meyarse"
    },
    "contohKalimat": {
      "madura": "Meyarse sowara adzan magrib.",
      "indonesia": "Mendengarkan suara adzan magrib."
    }
  },
  {
    "id": "com-lihat",
    "kataDasar": "kele",
    "artiIndonesia": [
      "lihat",
      "melihat",
      "memandang",
      "menonton",
      "nonton"
    ],
    "kelasKata": "verba",
    "kategori": "indera",
    "tingkatan": {
      "enjaIya": "nenggu / nele",
      "engghiEnten": "ngoladi",
      "engghiBhunten": "merksane"
    },
    "contohKalimat": {
      "madura": "Nenggu karapan sape neng Pamekasan.",
      "indonesia": "Melihat karapan sapi di Pamekasan."
    }
  },
  {
    "id": "com-tanya",
    "kataDasar": "tanya",
    "artiIndonesia": [
      "tanya",
      "bertanya"
    ],
    "kelasKata": "verba",
    "kategori": "komunikasi",
    "tingkatan": {
      "enjaIya": "atanya",
      "engghiEnten": "atanya",
      "engghiBhunten": "mundhut perso"
    },
    "contohKalimat": {
      "madura": "Mundhut perso dalan ka kraton.",
      "indonesia": "Bertanya arah jalan menuju keraton."
    }
  },
  {
    "id": "com-jawab",
    "kataDasar": "saot",
    "artiIndonesia": [
      "jawab",
      "menjawab"
    ],
    "kelasKata": "verba",
    "kategori": "komunikasi",
    "tingkatan": {
      "enjaIya": "nyaot",
      "engghiEnten": "nyaot",
      "engghiBhunten": "matur"
    },
    "contohKalimat": {
      "madura": "Matur kalaban tengka alos.",
      "indonesia": "Menjawab dengan tutur kata halus."
    }
  },
  {
    "id": "com-panggil",
    "kataDasar": "olok",
    "artiIndonesia": [
      "panggil",
      "memanggil"
    ],
    "kelasKata": "verba",
    "kategori": "komunikasi",
    "tingkatan": {
      "enjaIya": "ngolok",
      "engghiEnten": "ngolok",
      "engghiBhunten": "ngaturi"
    },
    "contohKalimat": {
      "madura": "Ngaturi taretan sadaja ka selameddhan.",
      "indonesia": "Mengundang segenap saudara ke kenduri selamatan."
    }
  },
  {
    "id": "com-tertawa",
    "kataDasar": "ghegga",
    "artiIndonesia": [
      "tertawa"
    ],
    "kelasKata": "verba",
    "kategori": "komunikasi",
    "tingkatan": {
      "enjaIya": "aghegga",
      "engghiEnten": "aghegga",
      "engghiBhunten": "guyon"
    },
    "contohKalimat": {
      "madura": "Aghegga polana lelucon kanca.",
      "indonesia": "Tertawa karena gurauan kawan."
    }
  },
  {
    "id": "com-tangis",
    "kataDasar": "nanges",
    "artiIndonesia": [
      "tangis",
      "menangis"
    ],
    "kelasKata": "verba",
    "kategori": "komunikasi",
    "tingkatan": {
      "enjaIya": "nanges",
      "engghiEnten": "nanges",
      "engghiBhunten": "muwun"
    },
    "contohKalimat": {
      "madura": "Jha' nanges ale' kene'.",
      "indonesia": "Jangan menangis wahai adik kecil."
    }
  },
  {
    "id": "cog-tahu",
    "kataDasar": "tao",
    "artiIndonesia": [
      "tahu",
      "mengetahui"
    ],
    "kelasKata": "verba",
    "kategori": "kognisi",
    "tingkatan": {
      "enjaIya": "tao",
      "engghiEnten": "oneng",
      "engghiBhunten": "perso"
    },
    "contohKalimat": {
      "madura": "Rama perso sadajana.",
      "indonesia": "Ayah mengetahui segalanya."
    }
  },
  {
    "id": "cog-ingat",
    "kataDasar": "enga'",
    "artiIndonesia": [
      "ingat",
      "mengingat"
    ],
    "kelasKata": "verba",
    "kategori": "kognisi",
    "tingkatan": {
      "enjaIya": "enga'",
      "engghiEnten": "enga'",
      "engghiBhunten": "emot"
    },
    "contohKalimat": {
      "madura": "Ghi' emot dhari jhamanna asakola.",
      "indonesia": "Masih ingat sejak zaman sekolah."
    }
  },
  {
    "id": "cog-lupa",
    "kataDasar": "loppa",
    "artiIndonesia": [
      "lupa"
    ],
    "kelasKata": "verba",
    "kategori": "kognisi",
    "tingkatan": {
      "enjaIya": "loppa",
      "engghiEnten": "loppa",
      "engghiBhunten": "kalepyan"
    },
    "contohKalimat": {
      "madura": "Ampon kalepyan asma kancana.",
      "indonesia": "Sudah lupa nama kawannya."
    }
  },
  {
    "id": "cog-paham",
    "kataDasar": "arte",
    "artiIndonesia": [
      "paham",
      "mengerti"
    ],
    "kelasKata": "verba",
    "kategori": "kognisi",
    "tingkatan": {
      "enjaIya": "ngarte",
      "engghiEnten": "ngarte",
      "engghiBhunten": "ngartos"
    },
    "contohKalimat": {
      "madura": "Engkok ampon ngartos dhabuna.",
      "indonesia": "Saya sudah paham maksud perkataannya."
    }
  },
  {
    "id": "cog-pikir",
    "kataDasar": "pekker",
    "artiIndonesia": [
      "pikir",
      "berpikir"
    ],
    "kelasKata": "verba",
    "kategori": "kognisi",
    "tingkatan": {
      "enjaIya": "pekker",
      "engghiEnten": "pekker",
      "engghiBhunten": "galih"
    },
    "contohKalimat": {
      "madura": "Pekker dalem sabellunna ngoca'.",
      "indonesia": "Pikirkan masak-masak sebelum berucap."
    }
  },
  {
    "id": "cog-percaya",
    "kataDasar": "parcaja",
    "artiIndonesia": [
      "percaya"
    ],
    "kelasKata": "verba",
    "kategori": "kognisi",
    "tingkatan": {
      "enjaIya": "parcaja",
      "engghiEnten": "parcaja",
      "engghiBhunten": "ngandel"
    },
    "contohKalimat": {
      "madura": "Parcaja ka kanca se beccik.",
      "indonesia": "Percaya kepada kawan yang baik."
    }
  },
  {
    "id": "feel-senang",
    "kataDasar": "senneng",
    "artiIndonesia": [
      "senang",
      "gembira",
      "bahagia"
    ],
    "kelasKata": "adjektiva",
    "kategori": "perasaan",
    "tingkatan": {
      "enjaIya": "senneng",
      "engghiEnten": "senneng",
      "engghiBhunten": "bingah"
    },
    "contohKalimat": {
      "madura": "Bingah ampon rabu ka Madura.",
      "indonesia": "Sangat senang telah tiba di Madura."
    }
  },
  {
    "id": "feel-sedih",
    "kataDasar": "sossa",
    "artiIndonesia": [
      "sedih",
      "susah",
      "duka",
      "berduka"
    ],
    "kelasKata": "adjektiva",
    "kategori": "perasaan",
    "tingkatan": {
      "enjaIya": "sossa",
      "engghiEnten": "sossa",
      "engghiBhunten": "sengkal"
    },
    "contohKalimat": {
      "madura": "Jha' sossa tretan, badha gusti Allah.",
      "indonesia": "Jangan bersedih saudara, ada Allah SWT."
    }
  },
  {
    "id": "feel-rindu",
    "kataDasar": "kerrong",
    "artiIndonesia": [
      "rindu",
      "kangen"
    ],
    "kelasKata": "adjektiva",
    "kategori": "perasaan",
    "tingkatan": {
      "enjaIya": "kerrong",
      "engghiEnten": "kerrong",
      "engghiBhunten": "oneng"
    },
    "contohKalimat": {
      "madura": "Ce' kerrongnga ka compo' madura.",
      "indonesia": "Sangat rindu pada kampung halaman Madura."
    }
  },
  {
    "id": "feel-cinta",
    "kataDasar": "tresna",
    "artiIndonesia": [
      "cinta",
      "sayang"
    ],
    "kelasKata": "adjektiva",
    "kategori": "perasaan",
    "tingkatan": {
      "enjaIya": "tresna",
      "engghiEnten": "tresna",
      "engghiBhunten": "asih"
    },
    "contohKalimat": {
      "madura": "Tresna ka naghara ban tana kalahiran.",
      "indonesia": "Cinta kepada tanah air dan tempat kelahiran."
    }
  },
  {
    "id": "feel-marah",
    "kataDasar": "duka",
    "artiIndonesia": [
      "marah",
      "murka",
      "kesal"
    ],
    "kelasKata": "adjektiva",
    "kategori": "perasaan",
    "tingkatan": {
      "enjaIya": "duka",
      "engghiEnten": "duka",
      "engghiBhunten": "berres"
    },
    "contohKalimat": {
      "madura": "Jha' duka mon kancana sala.",
      "indonesia": "Jangan cepat marah jika teman bersalah."
    }
  },
  {
    "id": "feel-takut",
    "kataDasar": "tako'",
    "artiIndonesia": [
      "takut",
      "gentar"
    ],
    "kelasKata": "adjektiva",
    "kategori": "perasaan",
    "tingkatan": {
      "enjaIya": "tako'",
      "engghiEnten": "tako'",
      "engghiBhunten": "ajrih"
    },
    "contohKalimat": {
      "madura": "Oreng Madura ta' ajrih ka muso.",
      "indonesia": "Orang Madura tidak gentar pada musuh."
    }
  },
  {
    "id": "feel-berani",
    "kataDasar": "bangal",
    "artiIndonesia": [
      "berani",
      "pemberani"
    ],
    "kelasKata": "adjektiva",
    "kategori": "perasaan",
    "tingkatan": {
      "enjaIya": "bangal",
      "engghiEnten": "bangal",
      "engghiBhunten": "kendel"
    },
    "contohKalimat": {
      "madura": "Pendekar Sakera kendel dhalem kabendherran.",
      "indonesia": "Pendekar Sakera berani dalam kebenaran."
    }
  },
  {
    "id": "feel-malu",
    "kataDasar": "todhus",
    "artiIndonesia": [
      "malu",
      "segan"
    ],
    "kelasKata": "adjektiva",
    "kategori": "perasaan",
    "tingkatan": {
      "enjaIya": "todhus",
      "engghiEnten": "todhus",
      "engghiBhunten": "kemba"
    },
    "contohKalimat": {
      "madura": "Todhus mon alako jhubha'.",
      "indonesia": "Malu jika berbuat jahat."
    }
  },
  {
    "id": "adj-besar",
    "kataDasar": "rajhe",
    "artiIndonesia": [
      "besar",
      "akbar",
      "luas"
    ],
    "kelasKata": "adjektiva",
    "kategori": "ukuran",
    "tingkatan": {
      "enjaIya": "rajhe",
      "engghiEnten": "rajhe",
      "engghiBhunten": "ageng"
    },
    "contohKalimat": {
      "madura": "Sape Madura ce' agengnga.",
      "indonesia": "Sapi Madura sangat besar."
    }
  },
  {
    "id": "adj-kecil",
    "kataDasar": "kene'",
    "artiIndonesia": [
      "kecil",
      "mungil"
    ],
    "kelasKata": "adjektiva",
    "kategori": "ukuran",
    "tingkatan": {
      "enjaIya": "kene'",
      "engghiEnten": "kene'",
      "engghiBhunten": "alit"
    },
    "contohKalimat": {
      "madura": "Bengkona alit tape berres.",
      "indonesia": "Rumahnya kecil namun bersih."
    }
  },
  {
    "id": "adj-panjang",
    "kataDasar": "lanjang",
    "artiIndonesia": [
      "panjang"
    ],
    "kelasKata": "adjektiva",
    "kategori": "ukuran",
    "tingkatan": {
      "enjaIya": "lanjang",
      "engghiEnten": "lanjang",
      "engghiBhunten": "panjang"
    },
    "contohKalimat": {
      "madura": "Jembatan Suramadu ce' lanjangnga.",
      "indonesia": "Jembatan Suramadu sangat panjang."
    }
  },
  {
    "id": "adj-pendek",
    "kataDasar": "pandha'",
    "artiIndonesia": [
      "pendek",
      "singkat"
    ],
    "kelasKata": "adjektiva",
    "kategori": "ukuran",
    "tingkatan": {
      "enjaIya": "pandha'",
      "engghiEnten": "pandha'",
      "engghiBhunten": "pandha'"
    },
    "contohKalimat": {
      "madura": "Dalanna pandha' tor alos.",
      "indonesia": "Jalannya pendek dan mulus."
    }
  },
  {
    "id": "adj-tinggi",
    "kataDasar": "tengghi",
    "artiIndonesia": [
      "tinggi"
    ],
    "kelasKata": "adjektiva",
    "kategori": "ukuran",
    "tingkatan": {
      "enjaIya": "tengghi",
      "engghiEnten": "tengghi",
      "engghiBhunten": "inggil"
    },
    "contohKalimat": {
      "madura": "Gunong payudan tengghi neng Songennep.",
      "indonesia": "Gunung Payudan tinggi di Sumenep."
    }
  },
  {
    "id": "adj-tebal",
    "kataDasar": "kandel",
    "artiIndonesia": [
      "tebal"
    ],
    "kelasKata": "adjektiva",
    "kategori": "ukuran",
    "tingkatan": {
      "enjaIya": "kandel",
      "engghiEnten": "kandel",
      "engghiBhunten": "kandel"
    },
    "contohKalimat": {
      "madura": "Buku kamus ce' kandella.",
      "indonesia": "Buku kamus sangat tebal."
    }
  },
  {
    "id": "adj-tipis",
    "kataDasar": "nepes",
    "artiIndonesia": [
      "tipis"
    ],
    "kelasKata": "adjektiva",
    "kategori": "ukuran",
    "tingkatan": {
      "enjaIya": "nepes",
      "engghiEnten": "nepes",
      "engghiBhunten": "nepes"
    },
    "contohKalimat": {
      "madura": "Kertas nepes ta' gampang beddhel.",
      "indonesia": "Kertas tipis tidak mudah robek."
    }
  },
  {
    "id": "adj-berat",
    "kataDasar": "berra'",
    "artiIndonesia": [
      "berat"
    ],
    "kelasKata": "adjektiva",
    "kategori": "kondisi",
    "tingkatan": {
      "enjaIya": "berra'",
      "engghiEnten": "berra'",
      "engghiBhunten": "awrat"
    },
    "contohKalimat": {
      "madura": "Awrat lakona tape ikhlas.",
      "indonesia": "Berat pekerjaannya namun ikhlas."
    }
  },
  {
    "id": "adj-ringan",
    "kataDasar": "enteng",
    "artiIndonesia": [
      "ringan",
      "mudah"
    ],
    "kelasKata": "adjektiva",
    "kategori": "kondisi",
    "tingkatan": {
      "enjaIya": "enteng",
      "engghiEnten": "enteng",
      "engghiBhunten": "enteng"
    },
    "contohKalimat": {
      "madura": "Gotong royong maghampang lako enteng.",
      "indonesia": "Gotong royong membuat pekerjaan terasa ringan."
    }
  },
  {
    "id": "med-sembuh",
    "kataDasar": "berres",
    "artiIndonesia": [
      "sembuh",
      "pulih",
      "waras"
    ],
    "kelasKata": "adjektiva",
    "kategori": "kesehatan",
    "tingkatan": {
      "enjaIya": "berres / waras",
      "engghiEnten": "berres",
      "engghiBhunten": "dhangan"
    },
    "contohKalimat": {
      "madura": "Ampon dhangan dhari songkanna.",
      "indonesia": "Sudah sembuh dari sakitnya."
    }
  },
  {
    "id": "adj-kotor",
    "kataDasar": "kotor",
    "artiIndonesia": [
      "kotor",
      "kumuh"
    ],
    "kelasKata": "adjektiva",
    "kategori": "kondisi",
    "tingkatan": {
      "enjaIya": "kotor",
      "engghiEnten": "kotor",
      "engghiBhunten": "kotor"
    },
    "contohKalimat": {
      "madura": "Masso klambhi se kotor.",
      "indonesia": "Mencuci baju yang kotor."
    }
  },
  {
    "id": "adj-baru",
    "kataDasar": "anyar",
    "artiIndonesia": [
      "baru",
      "anyar"
    ],
    "kelasKata": "adjektiva",
    "kategori": "kondisi",
    "tingkatan": {
      "enjaIya": "anyar",
      "engghiEnten": "anyar",
      "engghiBhunten": "enggal"
    },
    "contohKalimat": {
      "madura": "Melle motor enggal.",
      "indonesia": "Membeli sepeda motor baru."
    }
  },
  {
    "id": "adj-tua",
    "kataDasar": "towa",
    "artiIndonesia": [
      "tua",
      "sepuh"
    ],
    "kelasKata": "adjektiva",
    "kategori": "kondisi",
    "tingkatan": {
      "enjaIya": "towa",
      "engghiEnten": "towa",
      "engghiBhunten": "seppo"
    },
    "contohKalimat": {
      "madura": "Hormati oreng seppo.",
      "indonesia": "Hormatilah orang yang lebih tua."
    }
  },
  {
    "id": "adj-muda",
    "kataDasar": "ngodha",
    "artiIndonesia": [
      "muda",
      "belia"
    ],
    "kelasKata": "adjektiva",
    "kategori": "kondisi",
    "tingkatan": {
      "enjaIya": "ngodha",
      "engghiEnten": "ngodha",
      "engghiBhunten": "anom"
    },
    "contohKalimat": {
      "madura": "Generasi anom panutan bangsa.",
      "indonesia": "Generasi muda teladan bangsa."
    }
  },
  {
    "id": "adj-baik",
    "kataDasar": "beccik",
    "artiIndonesia": [
      "baik",
      "bagus",
      "elok",
      "indah",
      "anggun",
      "cantik"
    ],
    "kelasKata": "adjektiva",
    "kategori": "sifat",
    "tingkatan": {
      "enjaIya": "beccik / bagos",
      "engghiEnten": "sae",
      "engghiBhunten": "sae"
    },
    "contohKalimat": {
      "madura": "Pangrasa se sae ka sesama.",
      "indonesia": "Prasangka yang baik terhadap sesama."
    }
  },
  {
    "id": "adj-jelek",
    "kataDasar": "jubha'",
    "artiIndonesia": [
      "jelek",
      "buruk"
    ],
    "kelasKata": "adjektiva",
    "kategori": "sifat",
    "tingkatan": {
      "enjaIya": "jubha'",
      "engghiEnten": "jubha'",
      "engghiBhunten": "awon"
    },
    "contohKalimat": {
      "madura": "Jha' ngalakone lakona se awon.",
      "indonesia": "Jangan mengerjakan perbuatan yang buruk."
    }
  },
  {
    "id": "adj-mudah",
    "kataDasar": "gampang",
    "artiIndonesia": [
      "mudah",
      "gampang"
    ],
    "kelasKata": "adjektiva",
    "kategori": "kondisi",
    "tingkatan": {
      "enjaIya": "gampang",
      "engghiEnten": "gampang",
      "engghiBhunten": "gampil"
    },
    "contohKalimat": {
      "madura": "Ajhar MaduraLang ce' gampilla.",
      "indonesia": "Belajar MaduraLang sangat mudah."
    }
  },
  {
    "id": "adj-sulit",
    "kataDasar": "malarat",
    "artiIndonesia": [
      "sulit",
      "sukar",
      "susah"
    ],
    "kelasKata": "adjektiva",
    "kategori": "kondisi",
    "tingkatan": {
      "enjaIya": "malarat",
      "engghiEnten": "malarat",
      "engghiBhunten": "rekaot"
    },
    "contohKalimat": {
      "madura": "Ta' badha lako se rekaot mon ikhlas.",
      "indonesia": "Tiada pekerjaan sulit jika dikerjakan ikhlas."
    }
  },
  {
    "id": "adj-cepat",
    "kataDasar": "kenceng",
    "artiIndonesia": [
      "cepat",
      "kencang",
      "lekas"
    ],
    "kelasKata": "adjektiva",
    "kategori": "kecepatan",
    "tingkatan": {
      "enjaIya": "kenceng / gancheng",
      "engghiEnten": "kenceng",
      "engghiBhunten": "enggal"
    },
    "contohKalimat": {
      "madura": "Sape karapan buru ce' kencengnga.",
      "indonesia": "Sapi karapan berlari luar biasa cepat."
    }
  },
  {
    "id": "adj-lambat",
    "kataDasar": "lambat",
    "artiIndonesia": [
      "lambat",
      "pelan"
    ],
    "kelasKata": "adjektiva",
    "kategori": "kecepatan",
    "tingkatan": {
      "enjaIya": "lambat / alon",
      "engghiEnten": "alon",
      "engghiBhunten": "alon"
    },
    "contohKalimat": {
      "madura": "Alon-alon asal kalakon.",
      "indonesia": "Pelan-pelan asal terlaksana."
    }
  },
  {
    "id": "taste-panas",
    "kataDasar": "panas",
    "artiIndonesia": [
      "panas",
      "terik"
    ],
    "kelasKata": "adjektiva",
    "kategori": "suhu",
    "tingkatan": {
      "enjaIya": "panas",
      "engghiEnten": "panas",
      "engghiBhunten": "benter"
    },
    "contohKalimat": {
      "madura": "Benter are neng Madura ce' nyegatta.",
      "indonesia": "Panas matahari di Madura sangat terik."
    }
  },
  {
    "id": "taste-dingin",
    "kataDasar": "cellep",
    "artiIndonesia": [
      "dingin",
      "sejuk"
    ],
    "kelasKata": "adjektiva",
    "kategori": "suhu",
    "tingkatan": {
      "enjaIya": "cellep",
      "engghiEnten": "cellep",
      "engghiBhunten": "asrep"
    },
    "contohKalimat": {
      "madura": "Aeng pegunungan asrep bhender.",
      "indonesia": "Air pegunungan sangat sejuk."
    }
  },
  {
    "id": "taste-manis",
    "kataDasar": "manes",
    "artiIndonesia": [
      "manis"
    ],
    "kelasKata": "adjektiva",
    "kategori": "rasa",
    "tingkatan": {
      "enjaIya": "manes",
      "engghiEnten": "manes",
      "engghiBhunten": "legghi"
    },
    "contohKalimat": {
      "madura": "Buwa pao manes legghi rasana.",
      "indonesia": "Buah mangga sangat manis rasanya."
    }
  },
  {
    "id": "taste-pahit",
    "kataDasar": "paet",
    "artiIndonesia": [
      "pahit"
    ],
    "kelasKata": "adjektiva",
    "kategori": "rasa",
    "tingkatan": {
      "enjaIya": "paet",
      "engghiEnten": "paet",
      "engghiBhunten": "pait"
    },
    "contohKalimat": {
      "madura": "Jhamu tradisional paet tape seger.",
      "indonesia": "Jamu tradisional pahit tapi menyehatkan."
    }
  },
  {
    "id": "taste-asin",
    "kataDasar": "masen",
    "artiIndonesia": [
      "asin"
    ],
    "kelasKata": "adjektiva",
    "kategori": "rasa",
    "tingkatan": {
      "enjaIya": "masen",
      "engghiEnten": "masen",
      "engghiBhunten": "masen"
    },
    "contohKalimat": {
      "madura": "Aeng tase' masen rasana.",
      "indonesia": "Air laut asin rasanya."
    }
  },
  {
    "id": "taste-pedas",
    "kataDasar": "peddhes",
    "artiIndonesia": [
      "pedas"
    ],
    "kelasKata": "adjektiva",
    "kategori": "rasa",
    "tingkatan": {
      "enjaIya": "peddhes",
      "engghiEnten": "peddhes",
      "engghiBhunten": "peddhes"
    },
    "contohKalimat": {
      "madura": "Sambhel petes peddhes mantep.",
      "indonesia": "Sambal petis pedasnya mantap."
    }
  },
  {
    "id": "cond-lapar",
    "kataDasar": "lapar",
    "artiIndonesia": [
      "lapar"
    ],
    "kelasKata": "adjektiva",
    "kategori": "kondisi",
    "tingkatan": {
      "enjaIya": "lapar",
      "engghiEnten": "lapar",
      "engghiBhunten": "sedha"
    },
    "contohKalimat": {
      "madura": "Mon ampon sedha ngireng dha'ar.",
      "indonesia": "Bila sudah lapar marilah santap."
    }
  },
  {
    "id": "cond-kenyang",
    "kataDasar": "bhesso",
    "artiIndonesia": [
      "kenyang"
    ],
    "kelasKata": "adjektiva",
    "kategori": "kondisi",
    "tingkatan": {
      "enjaIya": "bhesso",
      "engghiEnten": "bhesso",
      "engghiBhunten": "tuwuk"
    },
    "contohKalimat": {
      "madura": "Ampon tuwuk ngadhep nase'.",
      "indonesia": "Sudah kenyang menyantap nasi."
    }
  },
  {
    "id": "cond-lelah",
    "kataDasar": "sarah",
    "artiIndonesia": [
      "lelah",
      "capek",
      "letih"
    ],
    "kelasKata": "adjektiva",
    "kategori": "kondisi",
    "tingkatan": {
      "enjaIya": "sarah / lesso",
      "engghiEnten": "lesso",
      "engghiBhunten": "lungkrah"
    },
    "contohKalimat": {
      "madura": "Lesso saellana alako se-are.",
      "indonesia": "Lelah setelah seharian bekerja."
    }
  },
  {
    "id": "cond-sakit",
    "kataDasar": "sake'",
    "artiIndonesia": [
      "sakit",
      "nyeri"
    ],
    "kelasKata": "adjektiva",
    "kategori": "kondisi",
    "tingkatan": {
      "enjaIya": "sake'",
      "engghiEnten": "sake'",
      "engghiBhunten": "gerreng / songkan"
    },
    "contohKalimat": {
      "madura": "Rama songkan ampon parappa'na asare.",
      "indonesia": "Ayahanda sakit saat ini sedang beristirahat."
    }
  },
  {
    "id": "cond-sehat",
    "kataDasar": "seger",
    "artiIndonesia": [
      "sehat",
      "bugar"
    ],
    "kelasKata": "adjektiva",
    "kategori": "kondisi",
    "tingkatan": {
      "enjaIya": "seger / berres",
      "engghiEnten": "seger",
      "engghiBhunten": "waluya"
    },
    "contohKalimat": {
      "madura": "Moga sehat tor waluya taretan.",
      "indonesia": "Semoga senantiasa sehat dan walafiat saudaraku."
    }
  },
  {
    "id": "cond-hidup",
    "kataDasar": "odhi'",
    "artiIndonesia": [
      "hidup"
    ],
    "kelasKata": "adjektiva",
    "kategori": "kondisi",
    "tingkatan": {
      "enjaIya": "odhi'",
      "engghiEnten": "odhi'",
      "engghiBhunten": "gesang"
    },
    "contohKalimat": {
      "madura": "Odhi' rukun ban tatanggha.",
      "indonesia": "Hidup rukun dengan tetangga."
    }
  },
  {
    "id": "cond-mati",
    "kataDasar": "mate",
    "artiIndonesia": [
      "mati",
      "meninggal",
      "wafat"
    ],
    "kelasKata": "adjektiva",
    "kategori": "kondisi",
    "tingkatan": {
      "enjaIya": "mate",
      "engghiEnten": "sedha",
      "engghiBhunten": "sedha"
    },
    "contohKalimat": {
      "madura": "Tokoh pejuang ampon sedha.",
      "indonesia": "Tokoh pejuang telah wafat berpulang."
    }
  },
  {
    "id": "color-merah",
    "kataDasar": "mera",
    "artiIndonesia": [
      "merah"
    ],
    "kelasKata": "adjektiva",
    "kategori": "warna",
    "tingkatan": {
      "enjaIya": "mera",
      "engghiEnten": "mera",
      "engghiBhunten": "abrit"
    },
    "contohKalimat": {
      "madura": "Klambhi mera Sakera.",
      "indonesia": "Baju merah khas Sakera."
    }
  },
  {
    "id": "color-putih",
    "kataDasar": "pote",
    "artiIndonesia": [
      "putih"
    ],
    "kelasKata": "adjektiva",
    "kategori": "warna",
    "tingkatan": {
      "enjaIya": "pote",
      "engghiEnten": "pote",
      "engghiBhunten": "petak"
    },
    "contohKalimat": {
      "madura": "Buji pote dhari Garam Madura.",
      "indonesia": "Garam putih dari garam Madura."
    }
  },
  {
    "id": "color-hitam",
    "kataDasar": "celleng",
    "artiIndonesia": [
      "hitam"
    ],
    "kelasKata": "adjektiva",
    "kategori": "warna",
    "tingkatan": {
      "enjaIya": "celleng",
      "engghiEnten": "celleng",
      "engghiBhunten": "cemeng"
    },
    "contohKalimat": {
      "madura": "Pesak celleng klambhi adat.",
      "indonesia": "Pesak hitam pakaian adat."
    }
  },
  {
    "id": "color-kuning",
    "kataDasar": "koneng",
    "artiIndonesia": [
      "kuning"
    ],
    "kelasKata": "adjektiva",
    "kategori": "warna",
    "tingkatan": {
      "enjaIya": "koneng",
      "engghiEnten": "koneng",
      "engghiBhunten": "jenar"
    },
    "contohKalimat": {
      "madura": "Konyyet koneng bhanto kasarasen.",
      "indonesia": "Kunyit kuning membantu kesehatan."
    }
  },
  {
    "id": "color-hijau",
    "kataDasar": "bungo",
    "artiIndonesia": [
      "hijau"
    ],
    "kelasKata": "adjektiva",
    "kategori": "warna",
    "tingkatan": {
      "enjaIya": "bungo / ijo",
      "engghiEnten": "bungo",
      "engghiBhunten": "ijo"
    },
    "contohKalimat": {
      "madura": "Daun bungo neng sabha.",
      "indonesia": "Dedaunan hijau di persawahan."
    }
  },
  {
    "id": "color-biru",
    "kataDasar": "biru",
    "artiIndonesia": [
      "biru"
    ],
    "kelasKata": "adjektiva",
    "kategori": "warna",
    "tingkatan": {
      "enjaIya": "biru",
      "engghiEnten": "biru",
      "engghiBhunten": "biru"
    },
    "contohKalimat": {
      "madura": "Tase' biru ombana tenang.",
      "indonesia": "Laut biru ombaknya tenang."
    }
  },
  {
    "id": "color-coklat",
    "kataDasar": "coklat",
    "artiIndonesia": [
      "cokelat",
      "coklat"
    ],
    "kelasKata": "adjektiva",
    "kategori": "warna",
    "tingkatan": {
      "enjaIya": "coklat",
      "engghiEnten": "coklat",
      "engghiBhunten": "coklat"
    },
    "contohKalimat": {
      "madura": "Kole' coklat oreng Madura.",
      "indonesia": "Kulit cokelat orang Madura."
    }
  },
  {
    "id": "color-abu",
    "kataDasar": "abu",
    "artiIndonesia": [
      "abu-abu",
      "kelabu"
    ],
    "kelasKata": "adjektiva",
    "kategori": "warna",
    "tingkatan": {
      "enjaIya": "awu / abu",
      "engghiEnten": "abu",
      "engghiBhunten": "awu"
    },
    "contohKalimat": {
      "madura": "Mendhong abu neng langnge'.",
      "indonesia": "Mendung kelabu di langit."
    }
  },
  {
    "id": "trait-jujur",
    "kataDasar": "jujur",
    "artiIndonesia": [
      "jujur",
      "lurus"
    ],
    "kelasKata": "adjektiva",
    "kategori": "moral",
    "tingkatan": {
      "enjaIya": "jujur / leket",
      "engghiEnten": "jujur",
      "engghiBhunten": "jujur"
    },
    "contohKalimat": {
      "madura": "Oreng se jujur e-kasennengnge kanca.",
      "indonesia": "Orang yang jujur disenangi teman."
    }
  },
  {
    "id": "trait-bohong",
    "kataDasar": "lecek",
    "artiIndonesia": [
      "bohong",
      "dusta",
      "tipu"
    ],
    "kelasKata": "adjektiva",
    "kategori": "moral",
    "tingkatan": {
      "enjaIya": "lecek",
      "engghiEnten": "lecek",
      "engghiBhunten": "dora"
    },
    "contohKalimat": {
      "madura": "Jha' ngoca' dora ka oreng towa.",
      "indonesia": "Jangan berkata dusta kepada orang tua."
    }
  },
  {
    "id": "trait-pintar",
    "kataDasar": "penter",
    "artiIndonesia": [
      "pintar",
      "pandai",
      "cerdas"
    ],
    "kelasKata": "adjektiva",
    "kategori": "kemampuan",
    "tingkatan": {
      "enjaIya": "penter",
      "engghiEnten": "penter",
      "engghiBhunten": "pinter"
    },
    "contohKalimat": {
      "madura": "Santre penter maca kitab.",
      "indonesia": "Santri pandai membaca kitab."
    }
  },
  {
    "id": "trait-bodoh",
    "kataDasar": "bungo",
    "artiIndonesia": [
      "bodoh",
      "dungu"
    ],
    "kelasKata": "adjektiva",
    "kategori": "kemampuan",
    "tingkatan": {
      "enjaIya": "bungo",
      "engghiEnten": "bungo",
      "engghiBhunten": "bodo"
    },
    "contohKalimat": {
      "madura": "Ajhar teros makle ta' bungo.",
      "indonesia": "Belajarlah terus agar tidak bodoh."
    }
  },
  {
    "id": "trait-rajin",
    "kataDasar": "rajin",
    "artiIndonesia": [
      "rajin",
      "giat"
    ],
    "kelasKata": "adjektiva",
    "kategori": "moral",
    "tingkatan": {
      "enjaIya": "rajin",
      "engghiEnten": "rajin",
      "engghiBhunten": "sregep"
    },
    "contohKalimat": {
      "madura": "Rajin alako nyare sango.",
      "indonesia": "Rajin bekerja mencari bekal nafkah."
    }
  },
  {
    "id": "trait-malas",
    "kataDasar": "tale",
    "artiIndonesia": [
      "malas",
      "enggan"
    ],
    "kelasKata": "adjektiva",
    "kategori": "moral",
    "tingkatan": {
      "enjaIya": "tale / songkan",
      "engghiEnten": "songkan",
      "engghiBhunten": "sungkan"
    },
    "contohKalimat": {
      "madura": "Jha' tale mon e-suro abanto.",
      "indonesia": "Jangan malas jika dimintai tolong."
    }
  },
  {
    "id": "trait-pelit",
    "kataDasar": "koret",
    "artiIndonesia": [
      "pelit",
      "kikir"
    ],
    "kelasKata": "adjektiva",
    "kategori": "moral",
    "tingkatan": {
      "enjaIya": "koret",
      "engghiEnten": "koret",
      "engghiBhunten": "medhit"
    },
    "contohKalimat": {
      "madura": "Oreng se koret tadhe' kancana.",
      "indonesia": "Orang yang pelit tidak punya kawan."
    }
  },
  {
    "id": "trait-dermawan",
    "kataDasar": "loman",
    "artiIndonesia": [
      "dermawan",
      "murah hati",
      "suka memberi"
    ],
    "kelasKata": "adjektiva",
    "kategori": "moral",
    "tingkatan": {
      "enjaIya": "loman",
      "engghiEnten": "loman",
      "engghiBhunten": "loman"
    },
    "contohKalimat": {
      "madura": "Kyai loman marengngi juko' ka tatanggha.",
      "indonesia": "Kyai dermawan membagikan ikan ke tetangga."
    }
  },
  {
    "id": "trait-cantik",
    "kataDasar": "raddhin",
    "artiIndonesia": [
      "cantik",
      "jelita",
      "manis rupawan"
    ],
    "kelasKata": "adjektiva",
    "kategori": "rupa",
    "tingkatan": {
      "enjaIya": "raddhin",
      "engghiEnten": "raddhin",
      "engghiBhunten": "asre"
    },
    "contohKalimat": {
      "madura": "Parabhan Madura ce' raddhinna.",
      "indonesia": "Gadis Madura sangat cantik jelita."
    }
  },
  {
    "id": "trait-tampan",
    "kataDasar": "gantheng",
    "artiIndonesia": [
      "tampan",
      "gagah"
    ],
    "kelasKata": "adjektiva",
    "kategori": "rupa",
    "tingkatan": {
      "enjaIya": "gantheng",
      "engghiEnten": "gantheng",
      "engghiBhunten": "bhengkes"
    },
    "contohKalimat": {
      "madura": "Pottrana gantheng tor santun.",
      "indonesia": "Putranya tampan dan sopan."
    }
  },
  {
    "id": "trait-sangat",
    "kataDasar": "ce'",
    "artiIndonesia": [
      "sangat",
      "amat",
      "sekali"
    ],
    "kelasKata": "adverba",
    "kategori": "intensitas",
    "tingkatan": {
      "enjaIya": "ce'",
      "engghiEnten": "ce'",
      "engghiBhunten": "sanget"
    },
    "contohKalimat": {
      "madura": "Ce' lezzana soto Madura!",
      "indonesia": "Sangat lezatnya soto Madura!"
    }
  },
  {
    "id": "trait-enak",
    "kataDasar": "lezza",
    "artiIndonesia": [
      "enak",
      "lezat",
      "sedap",
      "nyaman"
    ],
    "kelasKata": "adjektiva",
    "kategori": "rasa",
    "tingkatan": {
      "enjaIya": "nyaman / lezza",
      "engghiEnten": "nyaman",
      "engghiBhunten": "mirasa"
    },
    "contohKalimat": {
      "madura": "Mirasa nase' bebek Sinjay Bangkalan.",
      "indonesia": "Lezat sekali nasi bebek Sinjay Bangkalan."
    }
  },
  {
    "id": "trait-gelap",
    "kataDasar": "petteng",
    "artiIndonesia": [
      "gelap",
      "gulita"
    ],
    "kelasKata": "adjektiva",
    "kategori": "kondisi",
    "tingkatan": {
      "enjaIya": "petteng",
      "engghiEnten": "petteng",
      "engghiBhunten": "petteng"
    },
    "contohKalimat": {
      "madura": "Malem petteng polana tadhe' damar.",
      "indonesia": "Malam gelap karena tiada lampu pelita."
    }
  },
  {
    "id": "trait-terang",
    "kataDasar": "padhang",
    "artiIndonesia": [
      "terang",
      "benderang",
      "jelas"
    ],
    "kelasKata": "adjektiva",
    "kategori": "kondisi",
    "tingkatan": {
      "enjaIya": "padhang / terang",
      "engghiEnten": "padhang",
      "engghiBhunten": "padhang"
    },
    "contohKalimat": {
      "madura": "Bulan pajaratan padhang bhender.",
      "indonesia": "Bulan purnama sangat terang benderang."
    }
  },
  {
    "id": "trait-kering",
    "kataDasar": "kerrang",
    "artiIndonesia": [
      "kering"
    ],
    "kelasKata": "adjektiva",
    "kategori": "kondisi",
    "tingkatan": {
      "enjaIya": "kerrang",
      "engghiEnten": "kerrang",
      "engghiBhunten": "kerrang"
    },
    "contohKalimat": {
      "madura": "Tana kerrang mon nare'.",
      "indonesia": "Tanah mengering bila musim kemarau."
    }
  },
  {
    "id": "trait-basah",
    "kataDasar": "bhesse",
    "artiIndonesia": [
      "basah"
    ],
    "kelasKata": "adjektiva",
    "kategori": "kondisi",
    "tingkatan": {
      "enjaIya": "bhesse",
      "engghiEnten": "bhesse",
      "engghiBhunten": "teppha"
    },
    "contohKalimat": {
      "madura": "Klambhi bhesse polana ojan.",
      "indonesia": "Baju basah kuyup karena hujan."
    }
  },
  {
    "id": "nat-air",
    "kataDasar": "aeng",
    "artiIndonesia": [
      "air"
    ],
    "kelasKata": "nomina",
    "kategori": "alam",
    "tingkatan": {
      "enjaIya": "aeng",
      "engghiEnten": "aeng",
      "engghiBhunten": "toya"
    },
    "contohKalimat": {
      "madura": "Aeng cellep segar rasana.",
      "indonesia": "Air dingin segar rasanya."
    }
  },
  {
    "id": "nat-laut",
    "kataDasar": "tase'",
    "artiIndonesia": [
      "laut",
      "pantai",
      "samudra"
    ],
    "kelasKata": "nomina",
    "kategori": "alam",
    "tingkatan": {
      "enjaIya": "tase'",
      "engghiEnten": "tase'",
      "engghiBhunten": "segara"
    },
    "contohKalimat": {
      "madura": "Nelayan nyare juko' neng segara.",
      "indonesia": "Nelayan mencari ikan di laut luas."
    }
  },
  {
    "id": "nat-sungai",
    "kataDasar": "songay",
    "artiIndonesia": [
      "sungai"
    ],
    "kelasKata": "nomina",
    "kategori": "alam",
    "tingkatan": {
      "enjaIya": "songay",
      "engghiEnten": "songay",
      "engghiBhunten": "lepen"
    },
    "contohKalimat": {
      "madura": "Songay mengalir ka tase'.",
      "indonesia": "Sungai mengalir menuju lautan."
    }
  },
  {
    "id": "nat-gunung",
    "kataDasar": "gunong",
    "artiIndonesia": [
      "gunung",
      "bukit"
    ],
    "kelasKata": "nomina",
    "kategori": "alam",
    "tingkatan": {
      "enjaIya": "gunong",
      "engghiEnten": "gunong",
      "engghiBhunten": "ardi"
    },
    "contohKalimat": {
      "madura": "Gunong tengghi neng tenggna Madura.",
      "indonesia": "Gunung tinggi di tengah pulau Madura."
    }
  },
  {
    "id": "nat-sawah",
    "kataDasar": "sabha",
    "artiIndonesia": [
      "sawah"
    ],
    "kelasKata": "nomina",
    "kategori": "alam",
    "tingkatan": {
      "enjaIya": "sabha",
      "engghiEnten": "sabha",
      "engghiBhunten": "sabin"
    },
    "contohKalimat": {
      "madura": "Tani anamen padi neng sabin.",
      "indonesia": "Petani menanam padi di sawah."
    }
  },
  {
    "id": "nat-hujan",
    "kataDasar": "ojan",
    "artiIndonesia": [
      "hujan"
    ],
    "kelasKata": "nomina",
    "kategori": "alam",
    "tingkatan": {
      "enjaIya": "ojan",
      "engghiEnten": "ojan",
      "engghiBhunten": "jawah"
    },
    "contohKalimat": {
      "madura": "Ojan derres marateng berkah.",
      "indonesia": "Hujan deras mendatangkan berkah kesuburan."
    }
  },
  {
    "id": "nat-angin",
    "kataDasar": "angen",
    "artiIndonesia": [
      "angin"
    ],
    "kelasKata": "nomina",
    "kategori": "alam",
    "tingkatan": {
      "enjaIya": "angen",
      "engghiEnten": "angen",
      "engghiBhunten": "angin"
    },
    "contohKalimat": {
      "madura": "Abhantal omba' asapuk angen.",
      "indonesia": "Berbantalkan ombak berselimutkan angin."
    }
  },
  {
    "id": "nat-tanah",
    "kataDasar": "tana",
    "artiIndonesia": [
      "tanah",
      "bumi"
    ],
    "kelasKata": "nomina",
    "kategori": "alam",
    "tingkatan": {
      "enjaIya": "tana",
      "engghiEnten": "tana",
      "engghiBhunten": "siti"
    },
    "contohKalimat": {
      "madura": "Tana Madura tana pusaka.",
      "indonesia": "Tanah Madura adalah tanah pusaka."
    }
  },
  {
    "id": "nat-batu",
    "kataDasar": "bato",
    "artiIndonesia": [
      "batu"
    ],
    "kelasKata": "nomina",
    "kategori": "alam",
    "tingkatan": {
      "enjaIya": "bato",
      "engghiEnten": "bato",
      "engghiBhunten": "sela"
    },
    "contohKalimat": {
      "madura": "Bato kapur bukit Jaddih Bangkalan.",
      "indonesia": "Batu kapur bukit Jaddih Bangkalan."
    }
  },
  {
    "id": "nat-pohon",
    "kataDasar": "bungkana",
    "artiIndonesia": [
      "pohon",
      "pokok"
    ],
    "kelasKata": "nomina",
    "kategori": "flora",
    "tingkatan": {
      "enjaIya": "bungkana",
      "engghiEnten": "bungkana",
      "engghiBhunten": "kajhu"
    },
    "contohKalimat": {
      "madura": "Bungkana nyior banya' neng pasisir.",
      "indonesia": "Pohon kelapa banyak di tepi pantai."
    }
  },
  {
    "id": "nat-daun",
    "kataDasar": "daun",
    "artiIndonesia": [
      "daun"
    ],
    "kelasKata": "nomina",
    "kategori": "flora",
    "tingkatan": {
      "enjaIya": "daun / dhaun",
      "engghiEnten": "daun",
      "engghiBhunten": "ron"
    },
    "contohKalimat": {
      "madura": "Dhaun bako se ampon towa.",
      "indonesia": "Daun tembakau yang sudah tua."
    }
  },
  {
    "id": "fauna-sapi",
    "kataDasar": "sape",
    "artiIndonesia": [
      "sapi",
      "lembu"
    ],
    "kelasKata": "nomina",
    "kategori": "fauna",
    "tingkatan": {
      "enjaIya": "sape",
      "engghiEnten": "sape",
      "engghiBhunten": "lembu"
    },
    "contohKalimat": {
      "madura": "Sape karapan tradisi Madura kasohor.",
      "indonesia": "Sapi karapan tradisi Madura terkenal."
    }
  },
  {
    "id": "fauna-kambing",
    "kataDasar": "embi'",
    "artiIndonesia": [
      "kambing"
    ],
    "kelasKata": "nomina",
    "kategori": "fauna",
    "tingkatan": {
      "enjaIya": "embi'",
      "engghiEnten": "embi'",
      "engghiBhunten": "menda"
    },
    "contohKalimat": {
      "madura": "Ngangon embi' neng tegghel.",
      "indonesia": "Menggembala kambing di tegalan."
    }
  },
  {
    "id": "fauna-kuda",
    "kataDasar": "jharan",
    "artiIndonesia": [
      "kuda"
    ],
    "kelasKata": "nomina",
    "kategori": "fauna",
    "tingkatan": {
      "enjaIya": "jharan",
      "engghiEnten": "jharan",
      "engghiBhunten": "kapal"
    },
    "contohKalimat": {
      "madura": "Jharan kenca kesenian Songennep.",
      "indonesia": "Kuda kencak kesenian Sumenep."
    }
  },
  {
    "id": "fauna-ayam",
    "kataDasar": "ajam",
    "artiIndonesia": [
      "ayam"
    ],
    "kelasKata": "nomina",
    "kategori": "fauna",
    "tingkatan": {
      "enjaIya": "ajam",
      "engghiEnten": "ajam",
      "engghiBhunten": "ajam"
    },
    "contohKalimat": {
      "madura": "Ajam bekisar swarana landhung.",
      "indonesia": "Ayam bekisar kokoknya panjang melengking."
    }
  },
  {
    "id": "fauna-ikan",
    "kataDasar": "juko'",
    "artiIndonesia": [
      "ikan",
      "lauk pauk"
    ],
    "kelasKata": "nomina",
    "kategori": "fauna",
    "tingkatan": {
      "enjaIya": "juko'",
      "engghiEnten": "juko'",
      "engghiBhunten": "eppan"
    },
    "contohKalimat": {
      "madura": "Juko' tongkol lezza rasana.",
      "indonesia": "Ikan tongkol sangat lezat rasanya."
    }
  },
  {
    "id": "fauna-burung",
    "kataDasar": "mano'",
    "artiIndonesia": [
      "burung",
      "unggas"
    ],
    "kelasKata": "nomina",
    "kategori": "fauna",
    "tingkatan": {
      "enjaIya": "mano'",
      "engghiEnten": "mano'",
      "engghiBhunten": "peksi"
    },
    "contohKalimat": {
      "madura": "Peksi ngabbher menyang langnge'.",
      "indonesia": "Burung terbang membubung ke angkasa."
    }
  },
  {
    "id": "fauna-kucing",
    "kataDasar": "koceng",
    "artiIndonesia": [
      "kucing"
    ],
    "kelasKata": "nomina",
    "kategori": "fauna",
    "tingkatan": {
      "enjaIya": "koceng",
      "engghiEnten": "koceng",
      "engghiBhunten": "koceng"
    },
    "contohKalimat": {
      "madura": "Koceng busok khas polo Raas.",
      "indonesia": "Kucing busok ras khas pulau Raas Madura."
    }
  },
  {
    "id": "obj-rumah",
    "kataDasar": "bengko",
    "artiIndonesia": [
      "rumah",
      "tempat tinggal",
      "kediaman"
    ],
    "kelasKata": "nomina",
    "kategori": "benda",
    "tingkatan": {
      "enjaIya": "bengko",
      "engghiEnten": "roma",
      "engghiBhunten": "dalem"
    },
    "contohKalimat": {
      "madura": "Dalem kyai neng seddhi' pondhok.",
      "indonesia": "Kediaman kyai di sebelah pondok pesantren."
    }
  },
  {
    "id": "obj-pintu",
    "kataDasar": "labang",
    "artiIndonesia": [
      "pintu"
    ],
    "kelasKata": "nomina",
    "kategori": "benda",
    "tingkatan": {
      "enjaIya": "labang",
      "engghiEnten": "labang",
      "engghiBhunten": "konten"
    },
    "contohKalimat": {
      "madura": "Konten kraton Songennep ce' koatta.",
      "indonesia": "Pintu gerbang keraton Sumenep sangat kokoh."
    }
  },
  {
    "id": "obj-jendela",
    "kataDasar": "jandhela",
    "artiIndonesia": [
      "jendela"
    ],
    "kelasKata": "nomina",
    "kategori": "benda",
    "tingkatan": {
      "enjaIya": "jandhela",
      "engghiEnten": "jandhela",
      "engghiBhunten": "jandhela"
    },
    "contohKalimat": {
      "madura": "Mokka' jandhela mekalowar angin anget.",
      "indonesia": "Membuka jendela mengeluarkan hawa panas."
    }
  },
  {
    "id": "obj-uang",
    "kataDasar": "pesse",
    "artiIndonesia": [
      "uang",
      "duit",
      "dana"
    ],
    "kelasKata": "nomina",
    "kategori": "finansial",
    "tingkatan": {
      "enjaIya": "pesse",
      "engghiEnten": "pesse",
      "engghiBhunten": "yatra"
    },
    "contohKalimat": {
      "madura": "Tadhe' pesse neng kanthong.",
      "indonesia": "Tidak ada uang di saku."
    }
  },
  {
    "id": "obj-jalan",
    "kataDasar": "dalan",
    "artiIndonesia": [
      "jalan",
      "jalur",
      "lorong"
    ],
    "kelasKata": "nomina",
    "kategori": "lokasi",
    "tingkatan": {
      "enjaIya": "dalan",
      "engghiEnten": "dalan",
      "engghiBhunten": "mergi"
    },
    "contohKalimat": {
      "madura": "Mergina ampon alos tor lebar.",
      "indonesia": "Jalannya sudah mulus dan lebar."
    }
  },
  {
    "id": "obj-orang",
    "kataDasar": "oreng",
    "artiIndonesia": [
      "orang",
      "manusia"
    ],
    "kelasKata": "nomina",
    "kategori": "sosial",
    "tingkatan": {
      "enjaIya": "oreng",
      "engghiEnten": "oreng",
      "engghiBhunten": "tiang"
    },
    "contohKalimat": {
      "madura": "Tiang Madura kasohor bangal tor leket kabbhi.",
      "indonesia": "Orang Madura tersohor pemberani dan setia kawan."
    }
  },
  {
    "id": "obj-teman",
    "kataDasar": "kanca",
    "artiIndonesia": [
      "teman",
      "sahabat",
      "kawan",
      "sahabatku",
      "temanku"
    ],
    "kelasKata": "nomina",
    "kategori": "sosial",
    "tingkatan": {
      "enjaIya": "kanca",
      "engghiEnten": "kanca",
      "engghiBhunten": "mitra"
    },
    "contohKalimat": {
      "madura": "Kanca alako asarengan.",
      "indonesia": "Kawan bekerja bersama-sama."
    }
  },
  {
    "id": "obj-clurit",
    "kataDasar": "arek",
    "artiIndonesia": [
      "celurit",
      "arit",
      "sabit"
    ],
    "kelasKata": "nomina",
    "kategori": "senjata",
    "tingkatan": {
      "enjaIya": "arek",
      "engghiEnten": "arek",
      "engghiBhunten": "arek"
    },
    "contohKalimat": {
      "madura": "Arek clurit senjata khas Madura.",
      "indonesia": "Celurit adalah senjata khas Madura."
    }
  },
  {
    "id": "obj-baju",
    "kataDasar": "klambhi",
    "artiIndonesia": [
      "baju",
      "pakaian"
    ],
    "kelasKata": "nomina",
    "kategori": "pakaian",
    "tingkatan": {
      "enjaIya": "klambhi",
      "engghiEnten": "klambhi",
      "engghiBhunten": "rasokan"
    },
    "contohKalimat": {
      "madura": "Rasokan pesak sakera gagah bhender.",
      "indonesia": "Pakaian pesak Sakera sangat gagah."
    }
  },
  {
    "id": "obj-sarung",
    "kataDasar": "sarong",
    "artiIndonesia": [
      "sarung"
    ],
    "kelasKata": "nomina",
    "kategori": "pakaian",
    "tingkatan": {
      "enjaIya": "sarong",
      "engghiEnten": "sarong",
      "engghiBhunten": "sarong"
    },
    "contohKalimat": {
      "madura": "Ngangghuy sarong batik Pamekasan.",
      "indonesia": "Mengenakan sarung batik khas Pamekasan."
    }
  },
  {
    "id": "obj-odheng",
    "kataDasar": "odheng",
    "artiIndonesia": [
      "odheng",
      "penutup kepala",
      "ikat kepala"
    ],
    "kelasKata": "nomina",
    "kategori": "pakaian",
    "tingkatan": {
      "enjaIya": "odheng",
      "engghiEnten": "odheng",
      "engghiBhunten": "odheng"
    },
    "contohKalimat": {
      "madura": "Odheng tongkos khas Bangkalan.",
      "indonesia": "Odheng tongkos ikat kepala khas Bangkalan."
    }
  },
  {
    "id": "prep-di",
    "kataDasar": "neng",
    "artiIndonesia": [
      "di",
      "pada"
    ],
    "kelasKata": "partikel",
    "kategori": "kata_depan",
    "tingkatan": {
      "enjaIya": "neng / e",
      "engghiEnten": "neng",
      "engghiBhunten": "neng"
    },
    "contohKalimat": {
      "madura": "Neng Madura banya' parbhasan beccik.",
      "indonesia": "Di Madura banyak peribahasa luhur."
    }
  },
  {
    "id": "prep-ke",
    "kataDasar": "ka",
    "artiIndonesia": [
      "ke",
      "kepada"
    ],
    "kelasKata": "partikel",
    "kategori": "kata_depan",
    "tingkatan": {
      "enjaIya": "ka",
      "engghiEnten": "ka",
      "engghiBhunten": "dha'"
    },
    "contohKalimat": {
      "madura": "Meyos dha' Sumenep.",
      "indonesia": "Pergi menuju Sumenep."
    }
  },
  {
    "id": "prep-dari",
    "kataDasar": "dhari",
    "artiIndonesia": [
      "dari"
    ],
    "kelasKata": "partikel",
    "kategori": "kata_depan",
    "tingkatan": {
      "enjaIya": "dhari",
      "engghiEnten": "dhari",
      "engghiBhunten": "dhari"
    },
    "contohKalimat": {
      "madura": "Dhari Sampang ka Pamekasan seddhi'.",
      "indonesia": "Dari Sampang ke Pamekasan berdekatan."
    }
  },
  {
    "id": "prep-untuk",
    "kataDasar": "kaangghuy",
    "artiIndonesia": [
      "untuk",
      "buat",
      "guna"
    ],
    "kelasKata": "partikel",
    "kategori": "kata_depan",
    "tingkatan": {
      "enjaIya": "kaangghuy",
      "engghiEnten": "kaangghuy",
      "engghiBhunten": "kangghe"
    },
    "contohKalimat": {
      "madura": "Kangghe kabecce'an sadajana.",
      "indonesia": "Untuk kebaikan kita bersama."
    }
  },
  {
    "id": "prep-dengan",
    "kataDasar": "sareng",
    "artiIndonesia": [
      "dengan",
      "bersama",
      "beserta"
    ],
    "kelasKata": "partikel",
    "kategori": "kata_sambung",
    "tingkatan": {
      "enjaIya": "sarenge / ban",
      "engghiEnten": "sareng",
      "engghiBhunten": "sareng"
    },
    "contohKalimat": {
      "madura": "Alako sareng tatanggha rukun.",
      "indonesia": "Bekerja bersama tetangga dengan rukun."
    }
  },
  {
    "id": "conj-dan",
    "kataDasar": "ban",
    "artiIndonesia": [
      "dan",
      "serta"
    ],
    "kelasKata": "partikel",
    "kategori": "kata_sambung",
    "tingkatan": {
      "enjaIya": "ban",
      "engghiEnten": "sareng",
      "engghiBhunten": "sareng"
    },
    "contohKalimat": {
      "madura": "Nase' ban juko' tongkol.",
      "indonesia": "Nasi dan lauk ikan tongkol."
    }
  },
  {
    "id": "conj-atau",
    "kataDasar": "otaba",
    "artiIndonesia": [
      "atau"
    ],
    "kelasKata": "partikel",
    "kategori": "kata_sambung",
    "tingkatan": {
      "enjaIya": "otaba",
      "engghiEnten": "otaba",
      "engghiBhunten": "otaba"
    },
    "contohKalimat": {
      "madura": "Kopi otaba the anget?",
      "indonesia": "Kopi atau teh hangat?"
    }
  },
  {
    "id": "conj-tetapi",
    "kataDasar": "tape",
    "artiIndonesia": [
      "tetapi",
      "tapi",
      "namun"
    ],
    "kelasKata": "partikel",
    "kategori": "kata_sambung",
    "tingkatan": {
      "enjaIya": "tape",
      "engghiEnten": "tape",
      "engghiBhunten": "nanging"
    },
    "contohKalimat": {
      "madura": "Pesse sakoni' nanging cukup barokah.",
      "indonesia": "Uang sedikit namun mencukupi dan penuh barakah."
    }
  },
  {
    "id": "conj-karena",
    "kataDasar": "polana",
    "artiIndonesia": [
      "karena",
      "sebab"
    ],
    "kelasKata": "partikel",
    "kategori": "kata_sambung",
    "tingkatan": {
      "enjaIya": "polana",
      "engghiEnten": "polana",
      "engghiBhunten": "marga"
    },
    "contohKalimat": {
      "madura": "Marga ampon malem koddhu asare.",
      "indonesia": "Karena sudah larut malam hendaknya istirahat."
    }
  },
  {
    "id": "conj-jika",
    "kataDasar": "mon",
    "artiIndonesia": [
      "kalau",
      "jika",
      "apabila"
    ],
    "kelasKata": "partikel",
    "kategori": "kata_sambung",
    "tingkatan": {
      "enjaIya": "mon",
      "engghiEnten": "mon",
      "engghiBhunten": "manabi"
    },
    "contohKalimat": {
      "madura": "Manabi mare ngireng ngopi.",
      "indonesia": "Kalau sudah selesai mari minum kopi."
    }
  },
  {
    "id": "conj-seperti",
    "kataDasar": "mara",
    "artiIndonesia": [
      "seperti",
      "bagai",
      "bagaikan"
    ],
    "kelasKata": "partikel",
    "kategori": "kata_sambung",
    "tingkatan": {
      "enjaIya": "mara / kadi",
      "engghiEnten": "kadi",
      "engghiBhunten": "kados"
    },
    "contohKalimat": {
      "madura": "Kados bhuppa' bhabhu' ghuru rato.",
      "indonesia": "Bagaikan ayah, ibu, guru, dan pemimpin."
    }
  },
  {
    "id": "asp-sudah",
    "kataDasar": "ampon",
    "artiIndonesia": [
      "sudah",
      "telah"
    ],
    "kelasKata": "adverba",
    "kategori": "aspek",
    "tingkatan": {
      "enjaIya": "la / mare",
      "engghiEnten": "ampon",
      "engghiBhunten": "ampon"
    },
    "contohKalimat": {
      "madura": "Ampon mare kabbhi tugasna.",
      "indonesia": "Semua tugasnya sudah selesai terselesaikan."
    }
  },
  {
    "id": "asp-belum",
    "kataDasar": "ghi'",
    "artiIndonesia": [
      "masih",
      "belum"
    ],
    "kelasKata": "adverba",
    "kategori": "aspek",
    "tingkatan": {
      "enjaIya": "ghi'",
      "engghiEnten": "ghi'",
      "engghiBhunten": "dereng"
    },
    "contohKalimat": {
      "madura": "Abdhina dereng dha'ar.",
      "indonesia": "Saya belum bersantap makan."
    }
  },
  {
    "id": "mod-mau",
    "kataDasar": "terro",
    "artiIndonesia": [
      "mau",
      "ingin",
      "hendak"
    ],
    "kelasKata": "adverba",
    "kategori": "keinginan",
    "tingkatan": {
      "enjaIya": "terro",
      "engghiEnten": "terro",
      "engghiBhunten": "kasokan"
    },
    "contohKalimat": {
      "madura": "Kasokan meyos dha' Pamekasan.",
      "indonesia": "Berkehendak pergi ke Pamekasan."
    }
  },
  {
    "id": "mod-bisa",
    "kataDasar": "bisa",
    "artiIndonesia": [
      "bisa",
      "dapat",
      "mampu"
    ],
    "kelasKata": "adverba",
    "kategori": "kemampuan",
    "tingkatan": {
      "enjaIya": "bisa",
      "engghiEnten": "kengeng",
      "engghiBhunten": "kengeng"
    },
    "contohKalimat": {
      "madura": "Kengeng alako sarombongan.",
      "indonesia": "Dapat bekerja serombongan."
    }
  },
  {
    "id": "mod-harus",
    "kataDasar": "koddhu",
    "artiIndonesia": [
      "harus",
      "mesti",
      "wajib"
    ],
    "kelasKata": "adverba",
    "kategori": "keharusan",
    "tingkatan": {
      "enjaIya": "koddhu",
      "engghiEnten": "koddhu",
      "engghiBhunten": "koddhu"
    },
    "contohKalimat": {
      "madura": "Koddhu rajin ajhar kaangghuy masa depan.",
      "indonesia": "Harus rajin belajar demi masa depan."
    }
  },
  {
    "id": "neg-tidak",
    "kataDasar": "enja'",
    "artiIndonesia": [
      "tidak",
      "bukan"
    ],
    "kelasKata": "partikel",
    "kategori": "negasi",
    "tingkatan": {
      "enjaIya": "enja'",
      "engghiEnten": "enten",
      "engghiBhunten": "bhunten"
    },
    "contohKalimat": {
      "madura": "Bhunten abdhina ta' oneng.",
      "indonesia": "Bukan/tidak, hamba tidak tahu."
    }
  },
  {
    "id": "neg-ada",
    "kataDasar": "tadhe'",
    "artiIndonesia": [
      "tidak ada",
      "habis",
      "tiada"
    ],
    "kelasKata": "adverba",
    "kategori": "keberadaan",
    "tingkatan": {
      "enjaIya": "tadhe'",
      "engghiEnten": "sobung",
      "engghiBhunten": "sobung"
    },
    "contohKalimat": {
      "madura": "Sobung halangan apa-apa.",
      "indonesia": "Tidak ada halangan apa pun."
    }
  },
  {
    "id": "neg-jangan",
    "kataDasar": "jha'",
    "artiIndonesia": [
      "jangan"
    ],
    "kelasKata": "partikel",
    "kategori": "larangan",
    "tingkatan": {
      "enjaIya": "jha'",
      "engghiEnten": "jha'",
      "engghiBhunten": "ampon"
    },
    "contohKalimat": {
      "madura": "Jha' ngoca' lecek ka taretan.",
      "indonesia": "Jangan berdusta kepada saudaramu."
    }
  },
  {
    "id": "ques-apa",
    "kataDasar": "apa",
    "artiIndonesia": [
      "apa",
      "apakah"
    ],
    "kelasKata": "pronomina",
    "kategori": "kata_tanya",
    "tingkatan": {
      "enjaIya": "apa",
      "engghiEnten": "ponapa",
      "engghiBhunten": "ponapa"
    },
    "contohKalimat": {
      "madura": "Ponapa kabar taretan?",
      "indonesia": "Apa kabar saudaraku?"
    }
  },
  {
    "id": "ques-siapa",
    "kataDasar": "sapa",
    "artiIndonesia": [
      "siapa"
    ],
    "kelasKata": "pronomina",
    "kategori": "kata_tanya",
    "tingkatan": {
      "enjaIya": "sapa",
      "engghiEnten": "pasera",
      "engghiBhunten": "pasera"
    },
    "contohKalimat": {
      "madura": "Pasera asmana ramana panjhenengngan?",
      "indonesia": "Siapakah nama ayahanda Anda?"
    }
  },
  {
    "id": "ques-dimana",
    "kataDasar": "dhimma",
    "artiIndonesia": [
      "di mana",
      "mana"
    ],
    "kelasKata": "pronomina",
    "kategori": "kata_tanya",
    "tingkatan": {
      "enjaIya": "neng dhimma",
      "engghiEnten": "neng ka'dimma",
      "engghiBhunten": "neng ka'dimma"
    },
    "contohKalimat": {
      "madura": "Neng ka'dimma bengkona Sakera?",
      "indonesia": "Di manakah rumahnya Sakera?"
    }
  },
  {
    "id": "ques-kemana",
    "kataDasar": "kemma",
    "artiIndonesia": [
      "ke mana"
    ],
    "kelasKata": "pronomina",
    "kategori": "kata_tanya",
    "tingkatan": {
      "enjaIya": "kemma / ka dhimma",
      "engghiEnten": "dha' ka'dimma",
      "engghiBhunten": "dha' ka'dimma"
    },
    "contohKalimat": {
      "madura": "Meyos dha' ka'dimma ajunan?",
      "indonesia": "Hendak pergi ke manakah beliau?"
    }
  },
  {
    "id": "ques-kapan",
    "kataDasar": "bila",
    "artiIndonesia": [
      "kapan",
      "bilamana"
    ],
    "kelasKata": "pronomina",
    "kategori": "kata_tanya",
    "tingkatan": {
      "enjaIya": "bila",
      "engghiEnten": "bila",
      "engghiBhunten": "sanapa"
    },
    "contohKalimat": {
      "madura": "Bila karapan sape e-molae?",
      "indonesia": "Kapan karapan sapi dimulai?"
    }
  },
  {
    "id": "ques-mengapa",
    "kataDasar": "arapa",
    "artiIndonesia": [
      "mengapa",
      "kenapa"
    ],
    "kelasKata": "pronomina",
    "kategori": "kata_tanya",
    "tingkatan": {
      "enjaIya": "arapa",
      "engghiEnten": "aponapa",
      "engghiBhunten": "aponapa"
    },
    "contohKalimat": {
      "madura": "Aponapa panjhenengngan ta' rabu?",
      "indonesia": "Mengapa Anda tidak hadir datang?"
    }
  },
  {
    "id": "ques-bagaimana",
    "kataDasar": "baramma",
    "artiIndonesia": [
      "bagaimana",
      "gimana"
    ],
    "kelasKata": "pronomina",
    "kategori": "kata_tanya",
    "tingkatan": {
      "enjaIya": "baramma",
      "engghiEnten": "kados ponapa",
      "engghiBhunten": "kados ponapa"
    },
    "contohKalimat": {
      "madura": "Kados ponapa carana ajhar MaduraLang?",
      "indonesia": "Bagaimanakah caranya belajar MaduraLang?"
    }
  },
  {
    "id": "ques-berapa",
    "kataDasar": "barampan",
    "artiIndonesia": [
      "berapa"
    ],
    "kelasKata": "pronomina",
    "kategori": "kata_tanya",
    "tingkatan": {
      "enjaIya": "barampan",
      "engghiEnten": "saponapa",
      "engghiBhunten": "saponapa"
    },
    "contohKalimat": {
      "madura": "Saponapa arghana sate Madura seporsi?",
      "indonesia": "Berapakah harga sate Madura seporsi?"
    }
  },
  {
    "id": "dem-ini",
    "kataDasar": "reya",
    "artiIndonesia": [
      "ini"
    ],
    "kelasKata": "pronomina",
    "kategori": "penunjuk",
    "tingkatan": {
      "enjaIya": "reya / areya",
      "engghiEnten": "nika",
      "engghiBhunten": "paneka"
    },
    "contohKalimat": {
      "madura": "Paneka kraton pamekasan se kona.",
      "indonesia": "Ini adalah keraton Pamekasan yang bersejarah."
    }
  },
  {
    "id": "dem-itu",
    "kataDasar": "rowa",
    "artiIndonesia": [
      "itu"
    ],
    "kelasKata": "pronomina",
    "kategori": "penunjuk",
    "tingkatan": {
      "enjaIya": "rowa / arowa",
      "engghiEnten": "ghenika",
      "engghiBhunten": "panika"
    },
    "contohKalimat": {
      "madura": "Panika gunong se tengghi.",
      "indonesia": "Itu adalah gunung yang menjulang tinggi."
    }
  },
  {
    "id": "cul-nasi",
    "kataDasar": "nase'",
    "artiIndonesia": [
      "nasi",
      "beras matang"
    ],
    "kelasKata": "nomina",
    "kategori": "makanan",
    "tingkatan": {
      "enjaIya": "nase'",
      "engghiEnten": "nase'",
      "engghiBhunten": "sekul"
    },
    "contohKalimat": {
      "madura": "Ngadhep sekul anget sarenge juko'.",
      "indonesia": "Menyantap nasi hangat bersama ikan."
    }
  },
  {
    "id": "cul-beras",
    "kataDasar": "berres",
    "artiIndonesia": [
      "beras"
    ],
    "kelasKata": "nomina",
    "kategori": "makanan",
    "tingkatan": {
      "enjaIya": "berres",
      "engghiEnten": "berres",
      "engghiBhunten": "uwos"
    },
    "contohKalimat": {
      "madura": "Melle uwos neng pasar.",
      "indonesia": "Membeli beras di pasar."
    }
  },
  {
    "id": "cul-jagung",
    "kataDasar": "jagung",
    "artiIndonesia": [
      "jagung"
    ],
    "kelasKata": "nomina",
    "kategori": "makanan",
    "tingkatan": {
      "enjaIya": "jagung",
      "engghiEnten": "jagung",
      "engghiBhunten": "jagung"
    },
    "contohKalimat": {
      "madura": "Nase' jagung kakanan khas Madura.",
      "indonesia": "Nasi jagung makanan khas Madura."
    }
  },
  {
    "id": "cul-padi",
    "kataDasar": "padi",
    "artiIndonesia": [
      "padi",
      "gabah"
    ],
    "kelasKata": "nomina",
    "kategori": "tanaman",
    "tingkatan": {
      "enjaIya": "padi",
      "engghiEnten": "padi",
      "engghiBhunten": "padi"
    },
    "contohKalimat": {
      "madura": "Anamen padi neng sabha.",
      "indonesia": "Menanam padi di persawahan."
    }
  },
  {
    "id": "cul-kopi",
    "kataDasar": "kopi",
    "artiIndonesia": [
      "kopi"
    ],
    "kelasKata": "nomina",
    "kategori": "minuman",
    "tingkatan": {
      "enjaIya": "kopi",
      "engghiEnten": "kopi",
      "engghiBhunten": "kopi"
    },
    "contohKalimat": {
      "madura": "Ngireng ngopi sarenge taretan.",
      "indonesia": "Mari ngopi bersama kawan."
    }
  },
  {
    "id": "cul-teh",
    "kataDasar": "the",
    "artiIndonesia": [
      "teh"
    ],
    "kelasKata": "nomina",
    "kategori": "minuman",
    "tingkatan": {
      "enjaIya": "the",
      "engghiEnten": "the",
      "engghiBhunten": "the"
    },
    "contohKalimat": {
      "madura": "Ngunjhut the anget manes.",
      "indonesia": "Meminum teh manis hangat."
    }
  },
  {
    "id": "cul-susu",
    "kataDasar": "soso",
    "artiIndonesia": [
      "susu"
    ],
    "kelasKata": "nomina",
    "kategori": "minuman",
    "tingkatan": {
      "enjaIya": "soso",
      "engghiEnten": "soso",
      "engghiBhunten": "soso"
    },
    "contohKalimat": {
      "madura": "Soso sape segar tor nyat-nyat.",
      "indonesia": "Susu sapi murni segar dan menyehatkan."
    }
  },
  {
    "id": "cul-dapur",
    "kataDasar": "dapor",
    "artiIndonesia": [
      "dapur"
    ],
    "kelasKata": "nomina",
    "kategori": "tempat",
    "tingkatan": {
      "enjaIya": "dapor",
      "engghiEnten": "dapor",
      "engghiBhunten": "dapor"
    },
    "contohKalimat": {
      "madura": "Mamasak neng dapor.",
      "indonesia": "Memasak di dapur."
    }
  },
  {
    "id": "cul-pasar",
    "kataDasar": "pasar",
    "artiIndonesia": [
      "pasar"
    ],
    "kelasKata": "nomina",
    "kategori": "tempat",
    "tingkatan": {
      "enjaIya": "pasar",
      "engghiEnten": "pasar",
      "engghiBhunten": "peken"
    },
    "contohKalimat": {
      "madura": "Entar ka peken melle juko'.",
      "indonesia": "Pergi ke pasar membeli ikan."
    }
  },
  {
    "id": "cul-garam",
    "kataDasar": "buji",
    "artiIndonesia": [
      "garam"
    ],
    "kelasKata": "nomina",
    "kategori": "bumbu",
    "tingkatan": {
      "enjaIya": "buji",
      "engghiEnten": "buji",
      "engghiBhunten": "baja"
    },
    "contohKalimat": {
      "madura": "Madura kasohor polo garam.",
      "indonesia": "Madura terkenal sebagai pulau garam."
    }
  },
  {
    "id": "cul-gula",
    "kataDasar": "gula",
    "artiIndonesia": [
      "gula"
    ],
    "kelasKata": "nomina",
    "kategori": "bumbu",
    "tingkatan": {
      "enjaIya": "gula",
      "engghiEnten": "gula",
      "engghiBhunten": "gula"
    },
    "contohKalimat": {
      "madura": "Gula manes kaangghuy the.",
      "indonesia": "Gula manis untuk teh."
    }
  },
  {
    "id": "cul-cabai",
    "kataDasar": "cabbhi",
    "artiIndonesia": [
      "cabai",
      "cabe",
      "lombok"
    ],
    "kelasKata": "nomina",
    "kategori": "bumbu",
    "tingkatan": {
      "enjaIya": "cabbhi",
      "engghiEnten": "cabbhi",
      "engghiBhunten": "cabbhi"
    },
    "contohKalimat": {
      "madura": "Cabbhi peddhes neng sambhel petes.",
      "indonesia": "Cabai pedas di sambal petis."
    }
  },
  {
    "id": "cul-minyak",
    "kataDasar": "mennya'",
    "artiIndonesia": [
      "minyak",
      "minyak goreng"
    ],
    "kelasKata": "nomina",
    "kategori": "bumbu",
    "tingkatan": {
      "enjaIya": "mennya'",
      "engghiEnten": "mennya'",
      "engghiBhunten": "mennya'"
    },
    "contohKalimat": {
      "madura": "Mennya' nyior se ro'om.",
      "indonesia": "Minyak kelapa yang harum."
    }
  },
  {
    "id": "cul-tembakau",
    "kataDasar": "bako",
    "artiIndonesia": [
      "tembakau"
    ],
    "kelasKata": "nomina",
    "kategori": "tanaman",
    "tingkatan": {
      "enjaIya": "bako",
      "engghiEnten": "bako",
      "engghiBhunten": "bako"
    },
    "contohKalimat": {
      "madura": "Bako Madura daun emmas.",
      "indonesia": "Tembakau Madura daun emas."
    }
  },
  {
    "id": "cul-petis",
    "kataDasar": "petes",
    "artiIndonesia": [
      "petis"
    ],
    "kelasKata": "nomina",
    "kategori": "bumbu",
    "tingkatan": {
      "enjaIya": "petes",
      "engghiEnten": "petes",
      "engghiBhunten": "petes"
    },
    "contohKalimat": {
      "madura": "Rujak petes Madura gurih bhender.",
      "indonesia": "Rujak petis Madura sangat gurih."
    }
  },
  {
    "id": "cul-terasi",
    "kataDasar": "trase",
    "artiIndonesia": [
      "terasi"
    ],
    "kelasKata": "nomina",
    "kategori": "bumbu",
    "tingkatan": {
      "enjaIya": "trase",
      "engghiEnten": "trase",
      "engghiBhunten": "trase"
    },
    "contohKalimat": {
      "madura": "Trase dhari pasisir Sampang.",
      "indonesia": "Terasi dari pesisir Sampang."
    }
  },
  {
    "id": "cul-mangga",
    "kataDasar": "pao",
    "artiIndonesia": [
      "mangga"
    ],
    "kelasKata": "nomina",
    "kategori": "buah",
    "tingkatan": {
      "enjaIya": "pao",
      "engghiEnten": "pao",
      "engghiBhunten": "pao"
    },
    "contohKalimat": {
      "madura": "Pao manes rasana.",
      "indonesia": "Mangga manis rasanya."
    }
  },
  {
    "id": "cul-pisang",
    "kataDasar": "gheddhang",
    "artiIndonesia": [
      "pisang"
    ],
    "kelasKata": "nomina",
    "kategori": "buah",
    "tingkatan": {
      "enjaIya": "gheddhang",
      "engghiEnten": "gheddhang",
      "engghiBhunten": "gheddhang"
    },
    "contohKalimat": {
      "madura": "Gheddhang aguring renyah.",
      "indonesia": "Pisang goreng renyah."
    }
  },
  {
    "id": "cul-kelapa",
    "kataDasar": "nyior",
    "artiIndonesia": [
      "kelapa"
    ],
    "kelasKata": "nomina",
    "kategori": "buah",
    "tingkatan": {
      "enjaIya": "nyior",
      "engghiEnten": "nyior",
      "engghiBhunten": "nyior"
    },
    "contohKalimat": {
      "madura": "Aeng nyior ngodhadan cellep.",
      "indonesia": "Air kelapa muda segar dingin."
    }
  },
  {
    "id": "cul-buah",
    "kataDasar": "buwa",
    "artiIndonesia": [
      "buah"
    ],
    "kelasKata": "nomina",
    "kategori": "buah",
    "tingkatan": {
      "enjaIya": "buwa",
      "engghiEnten": "buwa",
      "engghiBhunten": "woh"
    },
    "contohKalimat": {
      "madura": "Buwa seger seppho bhen-saare.",
      "indonesia": "Buah segar santap tiap hari."
    }
  },
  {
    "id": "cul-ubi",
    "kataDasar": "sabhrang",
    "artiIndonesia": [
      "singkong",
      "ubi"
    ],
    "kelasKata": "nomina",
    "kategori": "makanan",
    "tingkatan": {
      "enjaIya": "sabhrang",
      "engghiEnten": "sabhrang",
      "engghiBhunten": "sabhrang"
    },
    "contohKalimat": {
      "madura": "Kakanan sabhrang guring.",
      "indonesia": "Santapan singkong goreng."
    }
  },
  {
    "id": "cul-daging",
    "kataDasar": "dhaging",
    "artiIndonesia": [
      "daging"
    ],
    "kelasKata": "nomina",
    "kategori": "makanan",
    "tingkatan": {
      "enjaIya": "dhaging",
      "engghiEnten": "dhaging",
      "engghiBhunten": "dhaging"
    },
    "contohKalimat": {
      "madura": "Dhaging sape empuk.",
      "indonesia": "Daging sapi empuk."
    }
  },
  {
    "id": "cul-telur",
    "kataDasar": "tellor",
    "artiIndonesia": [
      "telur"
    ],
    "kelasKata": "nomina",
    "kategori": "makanan",
    "tingkatan": {
      "enjaIya": "tellor",
      "engghiEnten": "tellor",
      "engghiBhunten": "tigan"
    },
    "contohKalimat": {
      "madura": "Guring tigan ajam.",
      "indonesia": "Goreng telur ayam."
    }
  },
  {
    "id": "fauna-kerbau",
    "kataDasar": "kerbhu",
    "artiIndonesia": [
      "kerbau"
    ],
    "kelasKata": "nomina",
    "kategori": "fauna",
    "tingkatan": {
      "enjaIya": "kerbhu",
      "engghiEnten": "kerbhu",
      "engghiBhunten": "maesa"
    },
    "contohKalimat": {
      "madura": "Maesa alako neng sabin.",
      "indonesia": "Kerbau membajak di persawahan."
    }
  },
  {
    "id": "fauna-anjing",
    "kataDasar": "pate'",
    "artiIndonesia": [
      "anjing"
    ],
    "kelasKata": "nomina",
    "kategori": "fauna",
    "tingkatan": {
      "enjaIya": "pate'",
      "engghiEnten": "pate'",
      "engghiBhunten": "segawon"
    },
    "contohKalimat": {
      "madura": "Pate' ajaga bengko.",
      "indonesia": "Anjing menjaga rumah."
    }
  },
  {
    "id": "fauna-ular",
    "kataDasar": "olar",
    "artiIndonesia": [
      "ular"
    ],
    "kelasKata": "nomina",
    "kategori": "fauna",
    "tingkatan": {
      "enjaIya": "olar",
      "engghiEnten": "olar",
      "engghiBhunten": "sawer"
    },
    "contohKalimat": {
      "madura": "Jha' seddhi' olar.",
      "indonesia": "Jangan mendekati ular."
    }
  },
  {
    "id": "fauna-buaya",
    "kataDasar": "baya",
    "artiIndonesia": [
      "buaya"
    ],
    "kelasKata": "nomina",
    "kategori": "fauna",
    "tingkatan": {
      "enjaIya": "baya",
      "engghiEnten": "baya",
      "engghiBhunten": "baya"
    },
    "contohKalimat": {
      "madura": "Baya neng songay rajhe.",
      "indonesia": "Buaya di sungai besar."
    }
  },
  {
    "id": "fauna-tikus",
    "kataDasar": "tekos",
    "artiIndonesia": [
      "tikus"
    ],
    "kelasKata": "nomina",
    "kategori": "fauna",
    "tingkatan": {
      "enjaIya": "tekos",
      "engghiEnten": "tekos",
      "engghiBhunten": "tekos"
    },
    "contohKalimat": {
      "madura": "Koceng nangkep tekos.",
      "indonesia": "Kucing menangkap tikus."
    }
  },
  {
    "id": "fauna-lalat",
    "kataDasar": "lala'",
    "artiIndonesia": [
      "lalat"
    ],
    "kelasKata": "nomina",
    "kategori": "fauna",
    "tingkatan": {
      "enjaIya": "lala'",
      "engghiEnten": "lala'",
      "engghiBhunten": "lala'"
    },
    "contohKalimat": {
      "madura": "Sate lalat kene' khas Pamekasan.",
      "indonesia": "Sate lalat kecil khas Pamekasan."
    }
  },
  {
    "id": "fauna-semut",
    "kataDasar": "samot",
    "artiIndonesia": [
      "semut"
    ],
    "kelasKata": "nomina",
    "kategori": "fauna",
    "tingkatan": {
      "enjaIya": "samot",
      "engghiEnten": "samot",
      "engghiBhunten": "samot"
    },
    "contohKalimat": {
      "madura": "Samot ngerre' nyare manes.",
      "indonesia": "Semut merayap mencari makanan manis."
    }
  },
  {
    "id": "fauna-lebah",
    "kataDasar": "tawon",
    "artiIndonesia": [
      "lebah",
      "tawon"
    ],
    "kelasKata": "nomina",
    "kategori": "fauna",
    "tingkatan": {
      "enjaIya": "tawon",
      "engghiEnten": "tawon",
      "engghiBhunten": "tawon"
    },
    "contohKalimat": {
      "madura": "Madu tawon alas alas Madura.",
      "indonesia": "Madu lebah hutan Madura."
    }
  },
  {
    "id": "fauna-kepiting",
    "kataDasar": "kapeteng",
    "artiIndonesia": [
      "kepiting"
    ],
    "kelasKata": "nomina",
    "kategori": "fauna",
    "tingkatan": {
      "enjaIya": "kapeteng",
      "engghiEnten": "kapeteng",
      "engghiBhunten": "kapeteng"
    },
    "contohKalimat": {
      "madura": "Kapeteng bakau lezza e-masak.",
      "indonesia": "Kepiting bakau lezat dimasak."
    }
  },
  {
    "id": "fauna-udang",
    "kataDasar": "odhang",
    "artiIndonesia": [
      "udang"
    ],
    "kelasKata": "nomina",
    "kategori": "fauna",
    "tingkatan": {
      "enjaIya": "odhang",
      "engghiEnten": "odhang",
      "engghiBhunten": "odhang"
    },
    "contohKalimat": {
      "madura": "Odhang tase' Madura seger.",
      "indonesia": "Udang laut Madura segar."
    }
  },
  {
    "id": "fauna-monyet",
    "kataDasar": "bheddhes",
    "artiIndonesia": [
      "monyet",
      "kera"
    ],
    "kelasKata": "nomina",
    "kategori": "fauna",
    "tingkatan": {
      "enjaIya": "bheddhes / kothela",
      "engghiEnten": "bheddhes",
      "engghiBhunten": "bheddhes"
    },
    "contohKalimat": {
      "madura": "Kothela manjat bungka nyior.",
      "indonesia": "Kera memanjat pohon kelapa."
    }
  },
  {
    "id": "fauna-nyamuk",
    "kataDasar": "agas",
    "artiIndonesia": [
      "nyamuk"
    ],
    "kelasKata": "nomina",
    "kategori": "fauna",
    "tingkatan": {
      "enjaIya": "agas / re-nyamok",
      "engghiEnten": "agas",
      "engghiBhunten": "agas"
    },
    "contohKalimat": {
      "madura": "Notop jandhela makle tadhe' agas.",
      "indonesia": "Menutup jendela agar tiada nyamuk."
    }
  },
  {
    "id": "obj-piring",
    "kataDasar": "penger",
    "artiIndonesia": [
      "piring"
    ],
    "kelasKata": "nomina",
    "kategori": "alat",
    "tingkatan": {
      "enjaIya": "penger",
      "engghiEnten": "penger",
      "engghiBhunten": "ambeng"
    },
    "contohKalimat": {
      "madura": "Penger kenceng ampon e-wasso.",
      "indonesia": "Piring dan cangkir sudah dicuci."
    }
  },
  {
    "id": "obj-gelas",
    "kataDasar": "kenceng",
    "artiIndonesia": [
      "gelas",
      "cangkir"
    ],
    "kelasKata": "nomina",
    "kategori": "alat",
    "tingkatan": {
      "enjaIya": "kenceng / ghellas",
      "engghiEnten": "kenceng",
      "engghiBhunten": "kenceng"
    },
    "contohKalimat": {
      "madura": "Ngunjhut toya neng kenceng.",
      "indonesia": "Meminum air di cangkir."
    }
  },
  {
    "id": "obj-sendok",
    "kataDasar": "sando'",
    "artiIndonesia": [
      "sendok"
    ],
    "kelasKata": "nomina",
    "kategori": "alat",
    "tingkatan": {
      "enjaIya": "sando'",
      "engghiEnten": "sando'",
      "engghiBhunten": "sando'"
    },
    "contohKalimat": {
      "madura": "Ngadhep kalaban sando'.",
      "indonesia": "Menyantap dengan sendok."
    }
  },
  {
    "id": "obj-mangkuk",
    "kataDasar": "mangko'",
    "artiIndonesia": [
      "mangkuk",
      "mangkok"
    ],
    "kelasKata": "nomina",
    "kategori": "alat",
    "tingkatan": {
      "enjaIya": "mangko'",
      "engghiEnten": "mangko'",
      "engghiBhunten": "mangko'"
    },
    "contohKalimat": {
      "madura": "Soto Madura neng mangko'.",
      "indonesia": "Soto Madura di mangkuk."
    }
  },
  {
    "id": "obj-pisau",
    "kataDasar": "lading",
    "artiIndonesia": [
      "pisau"
    ],
    "kelasKata": "nomina",
    "kategori": "alat",
    "tingkatan": {
      "enjaIya": "lading",
      "engghiEnten": "lading",
      "engghiBhunten": "peso"
    },
    "contohKalimat": {
      "madura": "Lading tajem kaangghuy ngetter dhaging.",
      "indonesia": "Pisau tajam untuk memotong daging."
    }
  },
  {
    "id": "obj-meja",
    "kataDasar": "meje",
    "artiIndonesia": [
      "meja"
    ],
    "kelasKata": "nomina",
    "kategori": "perabot",
    "tingkatan": {
      "enjaIya": "meje",
      "engghiEnten": "meje",
      "engghiBhunten": "meje"
    },
    "contohKalimat": {
      "madura": "Buku neng attas meje.",
      "indonesia": "Buku di atas meja."
    }
  },
  {
    "id": "obj-kursi",
    "kataDasar": "korsi",
    "artiIndonesia": [
      "kursi"
    ],
    "kelasKata": "nomina",
    "kategori": "perabot",
    "tingkatan": {
      "enjaIya": "korsi",
      "engghiEnten": "korsi",
      "engghiBhunten": "korsi"
    },
    "contohKalimat": {
      "madura": "Lenggi neng korsi kayu jati.",
      "indonesia": "Duduk di kursi kayu jati."
    }
  },
  {
    "id": "obj-kasur",
    "kataDasar": "kasor",
    "artiIndonesia": [
      "kasur",
      "tempat tidur"
    ],
    "kelasKata": "nomina",
    "kategori": "perabot",
    "tingkatan": {
      "enjaIya": "kasor",
      "engghiEnten": "kasor",
      "engghiBhunten": "paturon"
    },
    "contohKalimat": {
      "madura": "Asare neng paturon se lemmbu'.",
      "indonesia": "Beristirahat di tempat tidur yang empuk."
    }
  },
  {
    "id": "obj-bantal",
    "kataDasar": "bantal",
    "artiIndonesia": [
      "bantal"
    ],
    "kelasKata": "nomina",
    "kategori": "perabot",
    "tingkatan": {
      "enjaIya": "bantal",
      "engghiEnten": "bantal",
      "engghiBhunten": "kajhang"
    },
    "contohKalimat": {
      "madura": "Abhantal omba' asapuk angen.",
      "indonesia": "Berbantalkan ombak berselimutkan angin."
    }
  },
  {
    "id": "obj-lampu",
    "kataDasar": "damar",
    "artiIndonesia": [
      "lampu",
      "pelita",
      "lentera"
    ],
    "kelasKata": "nomina",
    "kategori": "alat",
    "tingkatan": {
      "enjaIya": "damar / paleter",
      "engghiEnten": "damar",
      "engghiBhunten": "damar"
    },
    "contohKalimat": {
      "madura": "Damar madhangi malem.",
      "indonesia": "Lampu pelita menerangi malam."
    }
  },
  {
    "id": "obj-cincin",
    "kataDasar": "lepphen",
    "artiIndonesia": [
      "cincin"
    ],
    "kelasKata": "nomina",
    "kategori": "perhiasan",
    "tingkatan": {
      "enjaIya": "lepphen",
      "engghiEnten": "lepphen",
      "engghiBhunten": "seser"
    },
    "contohKalimat": {
      "madura": "Seser emmas neng ramo'.",
      "indonesia": "Cincin emas di jari."
    }
  },
  {
    "id": "obj-kalung",
    "kataDasar": "kalong",
    "artiIndonesia": [
      "kalung"
    ],
    "kelasKata": "nomina",
    "kategori": "perhiasan",
    "tingkatan": {
      "enjaIya": "kalong",
      "engghiEnten": "kalong",
      "engghiBhunten": "kalong"
    },
    "contohKalimat": {
      "madura": "Kalong intan raddhin.",
      "indonesia": "Kalung intan yang elok."
    }
  },
  {
    "id": "obj-sepatu",
    "kataDasar": "sapatu",
    "artiIndonesia": [
      "sepatu"
    ],
    "kelasKata": "nomina",
    "kategori": "pakaian",
    "tingkatan": {
      "enjaIya": "sapatu",
      "engghiEnten": "sapatu",
      "engghiBhunten": "sapatu"
    },
    "contohKalimat": {
      "madura": "Ngangghuy sapatu asakola.",
      "indonesia": "Memakai sepatu bersekolah."
    }
  },
  {
    "id": "obj-sandal",
    "kataDasar": "selop",
    "artiIndonesia": [
      "sandal",
      "selop"
    ],
    "kelasKata": "nomina",
    "kategori": "pakaian",
    "tingkatan": {
      "enjaIya": "selop / sendal",
      "engghiEnten": "selop",
      "engghiBhunten": "cenela"
    },
    "contohKalimat": {
      "madura": "Cenela kulit buatan Madura.",
      "indonesia": "Sandal kulit buatan Madura."
    }
  },
  {
    "id": "obj-perahu",
    "kataDasar": "parao",
    "artiIndonesia": [
      "perahu",
      "sampan",
      "kapal"
    ],
    "kelasKata": "nomina",
    "kategori": "transportasi",
    "tingkatan": {
      "enjaIya": "parao",
      "engghiEnten": "parao",
      "engghiBhunten": "baita"
    },
    "contohKalimat": {
      "madura": "Baita layar nelayan Madura.",
      "indonesia": "Perahu layar nelayan Madura."
    }
  },
  {
    "id": "obj-cangkul",
    "kataDasar": "koror",
    "artiIndonesia": [
      "cangkul"
    ],
    "kelasKata": "nomina",
    "kategori": "alat",
    "tingkatan": {
      "enjaIya": "koror / pacul",
      "engghiEnten": "koror",
      "engghiBhunten": "koror"
    },
    "contohKalimat": {
      "madura": "Koror kaangghuy ngolak tana tegghel.",
      "indonesia": "Cangkul untuk menggemburkan tanah tegalan."
    }
  },
  {
    "id": "obj-jala",
    "kataDasar": "jhala",
    "artiIndonesia": [
      "jala",
      "jaring"
    ],
    "kelasKata": "nomina",
    "kategori": "alat",
    "tingkatan": {
      "enjaIya": "jhala",
      "engghiEnten": "jhala",
      "engghiBhunten": "jhala"
    },
    "contohKalimat": {
      "madura": "Ngalempar jhala ka tase'.",
      "indonesia": "Melemparkan jala ke laut."
    }
  },
  {
    "id": "obj-kamar",
    "kataDasar": "kamar",
    "artiIndonesia": [
      "kamar",
      "bilik"
    ],
    "kelasKata": "nomina",
    "kategori": "tempat",
    "tingkatan": {
      "enjaIya": "kamar",
      "engghiEnten": "kamar",
      "engghiBhunten": "senthong"
    },
    "contohKalimat": {
      "madura": "Senthong langghar seppe tor tenang.",
      "indonesia": "Kamar langgar sunyi dan tenang."
    }
  },
  {
    "id": "int-terima-kasih",
    "kataDasar": "sakalangkong",
    "artiIndonesia": [
      "terima kasih",
      "makasih"
    ],
    "kelasKata": "interjeksi",
    "kategori": "kesantunan",
    "tingkatan": {
      "enjaIya": "mator sakalangkong",
      "engghiEnten": "mator sakalangkong",
      "engghiBhunten": "mator sakalangkong rajhe"
    },
    "contohKalimat": {
      "madura": "Mator sakalangkong rabuna tretan!",
      "indonesia": "Terima kasih atas kedatangannya kawan!"
    }
  },
  {
    "id": "int-maaf",
    "kataDasar": "sapora",
    "artiIndonesia": [
      "maaf",
      "ampun",
      "permisi"
    ],
    "kelasKata": "interjeksi",
    "kategori": "kesantunan",
    "tingkatan": {
      "enjaIya": "nyo'on sapora",
      "engghiEnten": "nyo'on sapora",
      "engghiBhunten": "neda nyo'on pangapora"
    },
    "contohKalimat": {
      "madura": "Nyo'on sapora mon engkok sala.",
      "indonesia": "Minta maaf kalau saya salah."
    }
  },
  {
    "id": "int-ya",
    "kataDasar": "iye",
    "artiIndonesia": [
      "ya",
      "benar",
      "betul",
      "iya"
    ],
    "kelasKata": "partikel",
    "kategori": "kesantunan",
    "tingkatan": {
      "enjaIya": "iye / iya",
      "engghiEnten": "engghi",
      "engghiBhunten": "engghi leres"
    },
    "contohKalimat": {
      "madura": "Engghi leres dhika bhender.",
      "indonesia": "Ya benar, kamu betul."
    }
  },
  {
    "id": "int-silakan",
    "kataDasar": "ngireng",
    "artiIndonesia": [
      "mari",
      "silakan",
      "ayo"
    ],
    "kelasKata": "interjeksi",
    "kategori": "kesantunan",
    "tingkatan": {
      "enjaIya": "mara / ngireng",
      "engghiEnten": "ngireng",
      "engghiBhunten": "ngireng"
    },
    "contohKalimat": {
      "madura": "Ngireng toju' neng dinna'.",
      "indonesia": "Mari silakan duduk di sini."
    }
  },
  {
    "id": "int-selamat",
    "kataDasar": "salamet",
    "artiIndonesia": [
      "selamat",
      "sejahtera",
      "damai"
    ],
    "kelasKata": "interjeksi",
    "kategori": "kesantunan",
    "tingkatan": {
      "enjaIya": "salamet",
      "engghiEnten": "salamet",
      "engghiBhunten": "sugeng"
    },
    "contohKalimat": {
      "madura": "Moga salamet dunnya aherat.",
      "indonesia": "Semoga selamat sejahtera di dunia dan akhirat."
    }
  },
  {
    "id": "id-nama",
    "kataDasar": "nyama",
    "artiIndonesia": [
      "nama",
      "namaku",
      "namamu",
      "namanya",
      "sebutan"
    ],
    "kelasKata": "nomina",
    "kategori": "identitas",
    "tingkatan": {
      "enjaIya": "nyama",
      "engghiEnten": "nyama",
      "engghiBhunten": "asma"
    },
    "contohKalimat": {
      "madura": "Asmana panjhenengngan pasera?",
      "indonesia": "Nama Anda siapa?"
    }
  },
  {
    "id": "id-umur",
    "kataDasar": "omor",
    "artiIndonesia": [
      "umur",
      "usia"
    ],
    "kelasKata": "nomina",
    "kategori": "identitas",
    "tingkatan": {
      "enjaIya": "omor",
      "engghiEnten": "omor",
      "engghiBhunten": "yuswa"
    },
    "contohKalimat": {
      "madura": "Yuswana ampon sanga polo taon.",
      "indonesia": "Usianya sudah sembilan puluh tahun."
    }
  },
  {
    "id": "id-asal",
    "kataDasar": "asal",
    "artiIndonesia": [
      "asal",
      "asal-usul",
      "daerah asal"
    ],
    "kelasKata": "nomina",
    "kategori": "identitas",
    "tingkatan": {
      "enjaIya": "asal",
      "engghiEnten": "asal",
      "engghiBhunten": "pinangka"
    },
    "contohKalimat": {
      "madura": "Asal dhari Pamekasan Madura.",
      "indonesia": "Asal dari Pamekasan Madura."
    }
  },
  {
    "id": "edu-sekolah",
    "kataDasar": "sakola",
    "artiIndonesia": [
      "sekolah",
      "madrasah"
    ],
    "kelasKata": "nomina",
    "kategori": "edukasi",
    "tingkatan": {
      "enjaIya": "sakola",
      "engghiEnten": "sakola",
      "engghiBhunten": "sakola"
    },
    "contohKalimat": {
      "madura": "Moret asakola neng madrasah.",
      "indonesia": "Murid bersekolah di madrasah."
    }
  },
  {
    "id": "edu-murid",
    "kataDasar": "moret",
    "artiIndonesia": [
      "murid",
      "siswa",
      "pelajar"
    ],
    "kelasKata": "nomina",
    "kategori": "edukasi",
    "tingkatan": {
      "enjaIya": "moret",
      "engghiEnten": "moret",
      "engghiBhunten": "santre"
    },
    "contohKalimat": {
      "madura": "Santre rajin maca kitab.",
      "indonesia": "Murid santri rajin membaca kitab."
    }
  },
  {
    "id": "edu-guru",
    "kataDasar": "guru",
    "artiIndonesia": [
      "guru",
      "pengajar",
      "ustadz",
      "ustadzah"
    ],
    "kelasKata": "nomina",
    "kategori": "edukasi",
    "tingkatan": {
      "enjaIya": "guru",
      "engghiEnten": "guru",
      "engghiBhunten": "guru seppo"
    },
    "contohKalimat": {
      "madura": "Hormati bhuppa' bhabhu' ghuru rato.",
      "indonesia": "Hormati ayah, ibu, guru, dan pemimpin."
    }
  },
  {
    "id": "edu-ajar",
    "kataDasar": "ngajar",
    "artiIndonesia": [
      "mengajar",
      "mengajari",
      "mendidik"
    ],
    "kelasKata": "verba",
    "kategori": "edukasi",
    "tingkatan": {
      "enjaIya": "ngajar",
      "engghiEnten": "ngajar",
      "engghiBhunten": "molang"
    },
    "contohKalimat": {
      "madura": "Kyai molang santre ngaji.",
      "indonesia": "Kyai mengajar santri mengaji."
    }
  },
  {
    "id": "edu-kitab",
    "kataDasar": "kitab",
    "artiIndonesia": [
      "kitab",
      "buku"
    ],
    "kelasKata": "nomina",
    "kategori": "edukasi",
    "tingkatan": {
      "enjaIya": "kitab / buku",
      "engghiEnten": "kitab",
      "engghiBhunten": "seratan"
    },
    "contohKalimat": {
      "madura": "Kitab koneng parlo e-baca.",
      "indonesia": "Kitab kuning perlu dibaca."
    }
  },
  {
    "id": "loc-kota",
    "kataDasar": "kotha",
    "artiIndonesia": [
      "kota",
      "perkotaan"
    ],
    "kelasKata": "nomina",
    "kategori": "tempat",
    "tingkatan": {
      "enjaIya": "kotha",
      "engghiEnten": "kotha",
      "engghiBhunten": "kotha"
    },
    "contohKalimat": {
      "madura": "Kotha Pamekasan rame bhender.",
      "indonesia": "Kota Pamekasan sangat ramai."
    }
  },
  {
    "id": "loc-desa",
    "kataDasar": "dhisa",
    "artiIndonesia": [
      "desa",
      "kampung",
      "dusun"
    ],
    "kelasKata": "nomina",
    "kategori": "tempat",
    "tingkatan": {
      "enjaIya": "dhisa / kampon",
      "engghiEnten": "dhisa",
      "engghiBhunten": "dhisa"
    },
    "contohKalimat": {
      "madura": "Odhi' rukun neng dhisa.",
      "indonesia": "Hidup rukun di pedesaan."
    }
  },
  {
    "id": "loc-masjid",
    "kataDasar": "masghit",
    "artiIndonesia": [
      "masjid",
      "mushalla",
      "surau"
    ],
    "kelasKata": "nomina",
    "kategori": "tempat",
    "tingkatan": {
      "enjaIya": "masghit",
      "engghiEnten": "masghit",
      "engghiBhunten": "masjid"
    },
    "contohKalimat": {
      "madura": "Asolat neng masghit agung.",
      "indonesia": "Shalat di masjid agung."
    }
  },
  {
    "id": "loc-langgar",
    "kataDasar": "langghar",
    "artiIndonesia": [
      "langgar",
      "surau"
    ],
    "kelasKata": "nomina",
    "kategori": "tempat",
    "tingkatan": {
      "enjaIya": "langghar",
      "engghiEnten": "langghar",
      "engghiBhunten": "langghar"
    },
    "contohKalimat": {
      "madura": "Ngaji neng langghar tiap sore.",
      "indonesia": "Mengaji di langgar setiap sore."
    }
  },
  {
    "id": "loc-pesantren",
    "kataDasar": "pondhok",
    "artiIndonesia": [
      "pondok",
      "pesantren",
      "pondok pesantren"
    ],
    "kelasKata": "nomina",
    "kategori": "tempat",
    "tingkatan": {
      "enjaIya": "pondhok",
      "engghiEnten": "pondhok",
      "engghiBhunten": "pesantren"
    },
    "contohKalimat": {
      "madura": "Pondhok pesantren banya' neng Madura.",
      "indonesia": "Pondok pesantren banyak di Madura."
    }
  },
  {
    "id": "tra-mobil",
    "kataDasar": "montor",
    "artiIndonesia": [
      "mobil",
      "kendaraan",
      "roda empat"
    ],
    "kelasKata": "nomina",
    "kategori": "transportasi",
    "tingkatan": {
      "enjaIya": "montor",
      "engghiEnten": "montor",
      "engghiBhunten": "tunggangan"
    },
    "contohKalimat": {
      "madura": "Nompang montor ka Sorbhaja.",
      "indonesia": "Naik mobil ke Surabaya."
    }
  },
  {
    "id": "tra-motor",
    "kataDasar": "sepedha",
    "artiIndonesia": [
      "motor",
      "sepeda",
      "sepeda motor"
    ],
    "kelasKata": "nomina",
    "kategori": "transportasi",
    "tingkatan": {
      "enjaIya": "sepedha motor",
      "engghiEnten": "sepedha",
      "engghiBhunten": "tunggangan"
    },
    "contohKalimat": {
      "madura": "Nompang sepedha motor ka pasar.",
      "indonesia": "Naik sepeda motor ke pasar."
    }
  },
  {
    "id": "tra-kapal",
    "kataDasar": "kapal",
    "artiIndonesia": [
      "kapal",
      "kapal laut"
    ],
    "kelasKata": "nomina",
    "kategori": "transportasi",
    "tingkatan": {
      "enjaIya": "kapal",
      "engghiEnten": "kapal",
      "engghiBhunten": "baita rajhe"
    },
    "contohKalimat": {
      "madura": "Kapal feri penyeberangan Kamal.",
      "indonesia": "Kapal feri penyeberangan Kamal."
    }
  },
  {
    "id": "med-obat",
    "kataDasar": "jhamu",
    "artiIndonesia": [
      "obat",
      "ramuan",
      "jamu",
      "tamba"
    ],
    "kelasKata": "nomina",
    "kategori": "kesehatan",
    "tingkatan": {
      "enjaIya": "jhamu / tamba",
      "engghiEnten": "jhamu",
      "engghiBhunten": "landhu"
    },
    "contohKalimat": {
      "madura": "Ngunjhut landhu makle lekas berres.",
      "indonesia": "Minum obat agar cepat sembuh."
    }
  },
  {
    "id": "med-dokter",
    "kataDasar": "dokter",
    "artiIndonesia": [
      "dokter",
      "mantri",
      "tabib"
    ],
    "kelasKata": "nomina",
    "kategori": "profesi",
    "tingkatan": {
      "enjaIya": "dokter",
      "engghiEnten": "dokter",
      "engghiBhunten": "mantri"
    },
    "contohKalimat": {
      "madura": "Pariksa ka dokter neng poskesmas.",
      "indonesia": "Periksa ke dokter di puskesmas."
    }
  },
  {
    "id": "sky-terbit",
    "kataDasar": "mencar",
    "artiIndonesia": [
      "terbit",
      "muncul",
      "terbit matahari"
    ],
    "kelasKata": "verba",
    "kategori": "alam",
    "tingkatan": {
      "enjaIya": "mencar",
      "engghiEnten": "mencar",
      "engghiBhunten": "onggha"
    },
    "contohKalimat": {
      "madura": "Are mencar dhari temor.",
      "indonesia": "Matahari terbit dari timur."
    }
  },
  {
    "id": "sky-terbenam",
    "kataDasar": "serep",
    "artiIndonesia": [
      "terbenam",
      "tenggelam"
    ],
    "kelasKata": "verba",
    "kategori": "alam",
    "tingkatan": {
      "enjaIya": "serep / talebbu'",
      "engghiEnten": "serep",
      "engghiBhunten": "serep"
    },
    "contohKalimat": {
      "madura": "Are serep neng bara'.",
      "indonesia": "Matahari terbenam di barat."
    }
  },
  {
    "id": "sky-deras",
    "kataDasar": "derres",
    "artiIndonesia": [
      "deras",
      "lebat"
    ],
    "kelasKata": "adjektiva",
    "kategori": "cuaca",
    "tingkatan": {
      "enjaIya": "derres",
      "engghiEnten": "derres",
      "engghiBhunten": "ageng"
    },
    "contohKalimat": {
      "madura": "Ojan derres marateng berkah.",
      "indonesia": "Hujan deras mendatangkan berkah."
    }
  },
  {
    "id": "sky-awan",
    "kataDasar": "ombon",
    "artiIndonesia": [
      "awan",
      "mega",
      "mendung"
    ],
    "kelasKata": "nomina",
    "kategori": "cuaca",
    "tingkatan": {
      "enjaIya": "ombon / mendhong",
      "engghiEnten": "ombon",
      "engghiBhunten": "ombon"
    },
    "contohKalimat": {
      "madura": "Ombon pote neng langnge'.",
      "indonesia": "Awan putih di langit."
    }
  },
  {
    "id": "adj-sepi",
    "kataDasar": "seppe",
    "artiIndonesia": [
      "sepi",
      "sunyi",
      "senyap"
    ],
    "kelasKata": "adjektiva",
    "kategori": "kondisi",
    "tingkatan": {
      "enjaIya": "seppe",
      "engghiEnten": "seppe",
      "engghiBhunten": "seppe"
    },
    "contohKalimat": {
      "madura": "Malem seppe ta' kedingan swara.",
      "indonesia": "Malam sunyi tiada terdengar suara."
    }
  },
  {
    "id": "adj-ramai",
    "kataDasar": "rame",
    "artiIndonesia": [
      "ramai",
      "meriah"
    ],
    "kelasKata": "adjektiva",
    "kategori": "kondisi",
    "tingkatan": {
      "enjaIya": "rame",
      "engghiEnten": "rame",
      "engghiBhunten": "rame"
    },
    "contohKalimat": {
      "madura": "Pasar Pamekasan ce' ramena.",
      "indonesia": "Pasar Pamekasan sangat ramai."
    }
  },
  {
    "id": "act-mulai",
    "kataDasar": "molae",
    "artiIndonesia": [
      "mulai",
      "memulai",
      "berawal"
    ],
    "kelasKata": "verba",
    "kategori": "aktivitas",
    "tingkatan": {
      "enjaIya": "molae",
      "engghiEnten": "molae",
      "engghiBhunten": "kawitan"
    },
    "contohKalimat": {
      "madura": "Ngireng molae kalaban bismillah.",
      "indonesia": "Mari kita mulai dengan bismillah."
    }
  },
  {
    "id": "act-berhenti",
    "kataDasar": "ambhu",
    "artiIndonesia": [
      "berhenti",
      "setop",
      "jeda"
    ],
    "kelasKata": "verba",
    "kategori": "aktivitas",
    "tingkatan": {
      "enjaIya": "ambhu",
      "engghiEnten": "kendel",
      "engghiBhunten": "kendel"
    },
    "contohKalimat": {
      "madura": "Ambhu sabellunna ojan derres.",
      "indonesia": "Berhenti berteduh sebelum hujan lebat."
    }
  },
  {
    "id": "soc-tolong",
    "kataDasar": "banto",
    "artiIndonesia": [
      "tolong",
      "menolong",
      "membantu",
      "bantuan"
    ],
    "kelasKata": "verba",
    "kategori": "sosial",
    "tingkatan": {
      "enjaIya": "banto",
      "engghiEnten": "abanto",
      "engghiBhunten": "nyombheng"
    },
    "contohKalimat": {
      "madura": "Abanto taretan se mardhika.",
      "indonesia": "Membantu saudara yang membutuhkan."
    }
  },
  {
    "id": "soc-kabar",
    "kataDasar": "kabar",
    "artiIndonesia": [
      "kabar",
      "berita",
      "warta"
    ],
    "kelasKata": "nomina",
    "kategori": "komunikasi",
    "tingkatan": {
      "enjaIya": "kabar",
      "engghiEnten": "kabar",
      "engghiBhunten": "kabhisaan"
    },
    "contohKalimat": {
      "madura": "Ponapa kabhisaan taretan sadaja?",
      "indonesia": "Bagaimanakah kabar saudara sekalian?"
    }
  }
];

export const PARBHASAN_MADURA: ParbhasanData[] = [
  {
    "teks": "Abhantal omba' asapuk angen",
    "artiHarfiah": "Berbantalkan ombak, berselimutkan angin.",
    "maknaFilosofis": "Menggambarkan ketangguhan pelaut dan perantau Madura yang pantang menyerah dan berani mengarungi samudra kehidupan demi kehormatan dan nafkah keluarga.",
    "tema": "Ketangguhan & Kerja Keras"
  },
  {
    "teks": "Bhuppa' bhabhu' ghuru rato",
    "artiHarfiah": "Ayah, ibu, guru, lalu pemimpin/raja.",
    "maknaFilosofis": "Hierarki penghormatan tertinggi dalam adat Madura: pertama taat kepada ayah dan ibu, lalu menghormati guru/ulama pencari ilmu, dan patuh pada pemimpin/pemerintah.",
    "tema": "Etika & Penghormatan"
  },
  {
    "teks": "Lebbi beccik pote tolang e tembhang pote mata",
    "artiHarfiah": "Lebih baik berputih tulang daripada berputih mata.",
    "maknaFilosofis": "Prinsip harga diri harga mati. Mempertahankan kehormatan, kebenaran, dan martabat diri serta keluarga jauh lebih mulia daripada hidup menanggung aib atau malu.",
    "tema": "Kehormatan & Harga Diri"
  },
  {
    "teks": "Rampak naong beringin korong",
    "artiHarfiah": "Rimbun dan teduh seperti pohon beringin yang memayungi kurungan.",
    "maknaFilosofis": "Cita-cita masyarakat Madura yang mendambakan suasana hidup tenteram, rukun, damai, saling melindungi, dan menaungi sesama warga.",
    "tema": "Kerukunan & Perdamaian"
  },
  {
    "teks": "Mon aeng jhernek juko'na keton",
    "artiHarfiah": "Jika airnya jernih, ikannya akan tampak kelihatan.",
    "maknaFilosofis": "Jika niat dan perbuatan seseorang tulus, bersih, dan jujur tanpa kepalsuan, maka watak aslinya yang mulia akan terpancar jelas bagi semua orang.",
    "tema": "Kejujuran & Ketulusan"
  },
  {
    "teks": "Oca' sala dheddhi bhala",
    "artiHarfiah": "Perkataan yang salah bisa menjadi petaka bencana.",
    "maknaFilosofis": "Peringatan agar senantiasa menjaga lisan dan tutur kata, karena ucapan yang ceroboh atau menyakiti orang lain bisa memicu pertikaian besar.",
    "tema": "Kebijaksanaan Bertutur"
  },
  {
    "teks": "Ta' tao ka ghelluna",
    "artiHarfiah": "Tidak tahu akan asal-usul pangkalnya.",
    "maknaFilosofis": "Menyindir seseorang yang melupakan asal-usulnya, budi baik orang tua, atau tradisi leluhur setelah mendapatkan kekayaan atau kedudukan.",
    "tema": "Kacang Lupa Kulit"
  },
  {
    "teks": "Kerbhu nyoso ka peddhed",
    "artiHarfiah": "Kerbau menyusu kepada anaknya yang masih kecil.",
    "maknaFilosofis": "Keadaan terbalik ketika orang tua atau orang tua yang seharusnya mengayomi malah bergantung sepenuhnya atau diperintah oleh orang yang lebih muda.",
    "tema": "Ketertiban Adat"
  },
  {
    "teks": "Nyare aeng ta' nemmo bucca'",
    "artiHarfiah": "Mencari air tetapi tidak menemukan mata air/timba.",
    "maknaFilosofis": "Berusaha keras mencari rezeki atau jalan keluar tanpa memiliki bekal ilmu atau arah yang tepat sehingga usahanya sia-sia.",
    "tema": "Pentingnya Ilmu"
  },
  {
    "teks": "Katompang tana merrang",
    "artiHarfiah": "Tertimpa tanah berjerami tajam.",
    "maknaFilosofis": "Sudah jatuh tertimpa tangga; musibah atau kesusahan yang datang bertubi-tubi tanpa henti, menuntut kesabaran ekstra baja.",
    "tema": "Ketabahan Menghadapi Ujian"
  }
];
