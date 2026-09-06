# Tata Bahasa & Spesifikasi MaduraLang (.mdr)

Dokumen ini berisi spesifikasi resmi tata bahasa, kata kunci (*keywords*), dan konvensi penulisan kode dalam **MaduraLang**.

---

## 1. Variabel & Konstanta

| Kata Kunci | Setara JS | Keterangan |
| :--- | :--- | :--- |
| `sango` | `let` / `var` | Deklarasi variabel yang nilainya bisa diubah. |
| `paggun` | `const` | Deklarasi konstanta yang nilainya tetap. |

```mdr
sango nyama = "Tretan";
nyama = "Sakera"; // Valid

paggun pi = 3.14;
// pi = 3.15; // Error
```

---

## 2. Nilai Primitif & Boolean

| Nilai | Setara JS | Keterangan |
| :--- | :--- | :--- |
| `bhender` | `true` | Nilai benar |
| `sala` | `false` | Nilai salah |
| `tadhe'` | `null` | Kosong / tidak bernilai |
| `ta_tao` | `undefined` | Belum didefinisikan |

---

## 3. Input & Output

| Fungsi | Setara JS | Keterangan |
| :--- | :--- | :--- |
| `kocaaghi(...)` | `console.log(...)` | Mencetak nilai ke terminal |
| `tanyaaghi(...)` | `prompt(...)` | Membaca masukan dari pengguna |

```mdr
kocaaghi("Salam settong dhere!");
sango jhuban = tanyaaghi("Sapa nyama sampiyan? ");
kocaaghi("Halo, " + jhuban);
```

---

## 4. Percabangan Kondisional

Menggunakan struktur `lamon`, `lamon enja'`, dan `laen`.

```mdr
lamon (skor >= 90) {
  kocaaghi("Lulus nilai A!");
} lamon enja' (skor >= 70) {
  kocaaghi("Lulus nilai B!");
} laen {
  kocaaghi("Kodhu remidi!");
}
```

### Operator Logika
* `ban`: Logika AND (`&&`)
* `otaba`: Logika OR (`||`)
* `benne`: Logika NOT (`!`)

---

## 5. Perulangan (Loops)

### For Loop (`poter`)
```mdr
poter (sango i = 0; i < 5; i++) {
  lamon (i == 2) {
    terros; // continue
  }
  kocaaghi("Iterasi ka: " + i);
}
```

### While Loop (`sampek`)
```mdr
sango gas = 3;
sampek (gas > 0) {
  kocaaghi("Gas sisa: " + gas);
  gas--;
}
```

---

## 6. Fungsi (`lakona` & `pabali`)

Fungsi didefinisikan menggunakan kata kunci `lakona` dan mengembalikan nilai dengan `pabali`.

```mdr
lakona petong_luas(panjang, lebar) {
  pabali panjang * lebar;
}

sango luas = petong_luas(10, 5);
kocaaghi("Luas: " + luas);
```

---

## 7. Error Handling

* `jhe_sossa`: blok `try`
* `ngarte`: blok `catch`
* `ngamok`: melempar pengecualian (`throw`)
* `totop`: blok `finally`

```mdr
jhe_sossa {
  ngamok "Ada kekeliruan!";
} ngarte (err) {
  kocaaghi("Error tertangkap:", err);
} totop {
  kocaaghi("Selesai dijalankan.");
}
```

---

## 8. Pemrograman Berorientasi Objek (OOP / Class)

| Kata Kunci | Setara JS | Keterangan |
| :--- | :--- | :--- |
| `bhangsa` | `class` | Deklarasi kelas objek |
| `katoronan` | `extends` | Pewarisan kelas (inheritance) |
| `nyiptaaghi` | `constructor` | Konstruktor inisialisasi objek |
| `anyar` | `new` | Membuat instance baru dari kelas |
| `dibi'` | `this` | Referensi ke instance objek saat ini |

```mdr
bhangsa Pendekar {
  nyiptaaghi(nyama, senjata) {
    dibi'.nyama = nyama;
    dibi'.senjata = senjata;
  }

  serang() {
    kocaaghi(`${dibi'.nyama} nyerang ngangghuy ${dibi'.senjata}!`);
  }
}

bhangsa Jawara katoronan Pendekar {
  nyiptaaghi(nyama, senjata, pangkat) {
    dibi'.nyama = nyama;
    dibi'.senjata = senjata;
    dibi'.pangkat = pangkat;
  }

  lapor() {
    dibi'.serang();
    kocaaghi(`Pangkat jawara: ${dibi'.pangkat}`);
  }
}

sango pendekar = anyar Jawara("Sakera", "Calok Sakti", "Panglima");
pendekar.lapor();
```

---

## 9. Asynchronous Programming (`nyambi` & `antose`)

* `nyambi lakona`: `async function`
* `antose`: `await`

```mdr
nyambi lakona masakSate(menu) {
  antose anyar Promise((resolve) => setTimeout(resolve, 500));
  pabali `${menu} ampon berres!`;
}

nyambi lakona jalan() {
  kocaaghi("Ngentos pesanan...");
  sango status = antose masakSate("Sate Pamekasan");
  kocaaghi(status);
}

antose jalan();
```

---

## 10. Arrow Function & Template String

* **Arrow Function**: `(param) => expr` atau `(param) => { ... }`
* **Template String**: Menggunakan backtick `` `... ${expr} ...` ``

```mdr
sango kaliDua = (x) => x * 2;
sango angka = [1, 2, 3, 4];
sango hasil = angka.map((n) => kaliDua(n));

kocaaghi(`Hasil kali dua: [${hasil.join(", ")}]`);
```

---

## 11. Switch Case (`pilih`, `kadhadhiyan`, `bawaan`)

```mdr
pilih (hari) {
  kadhadhiyan "Jumat":
    kocaaghi("Solat Jumat tretan!");
    ambu;
  kadhadhiyan "Minggu":
    kocaaghi("Libur");
    ambu;
  bawaan:
    kocaaghi("Alako bhei");
}
```

---

## 12. Sistem Modul (`ngala'` & `baghi`)

* **Impor**: `ngala' { a, b } dhari "modul";` atau `ngala' express dhari "express";`
* **Ekspor**: `baghi lakona ...`, `baghi sango ...`, `baghi bawaan expr;`

```mdr
ngala' express dhari "express";
ngala' { kocaaghi } dhari "./helper.mdr";

baghi paggun VERSI = "2.0.0";
baghi lakona info() {
  pabali "MaduraLang v2";
}
```

