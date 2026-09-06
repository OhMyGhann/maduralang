<div align="center">

# 🐂 MaduraLang (.mdr)

### *Salam Settong Dhere! Bahasa Pemrograman Khas Madura.*

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen.svg)](https://nodejs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue.svg)](https://www.typescriptlang.org/)
[![Tests](https://img.shields.io/badge/tests-11%20passed-brightgreen.svg)]()

**MaduraLang** adalah bahasa pemrograman esoterik (*recreational language*) dengan sintaksis berbasis kosa kata bahasa Madura. MaduraLang di-transpile langsung ke JavaScript modern sehingga cepat, modular, dan dapat dijalankan di mana saja (Node.js & browser).

[Web Playground](playground/index.html) • [Tata Bahasa](docs/tata-bahasa.md) • [Contoh Kode](examples/) • [Ekstensi VS Code](vscode-extension/) • [Kontribusi](CONTRIBUTING.md)

</div>

---

## ⚡ Sekilas Contoh Kode (`.mdr`)

```mdr
// Deklarasi variabel & konstanta
sango nyama = "Mat Sakera";
paggun asal = "Bangkalan";
sango omor = 25;

// Output
kocaaghi("Salam settong dhere!");
kocaaghi("Nyama engkok: " + nyama + " dhari " + asal);

// Logika percabangan
lamon (omor >= 17) {
  kocaaghi("Lah towa, wajib ngodeh!");
} lamon enja' (omor >= 12) {
  kocaaghi("Gi' ngodhadan");
} laen {
  kocaaghi("Kene' kene'!");
}

// Fungsi & Perulangan
lakona petong(maks) {
  poter (sango i = 1; i <= maks; i++) {
    kocaaghi("Putaran ka-" + i);
  }
  pabali "Mareh!";
}

petong(3);
```

---

## 📦 Instalasi & Penggunaan

### 1. Jalankan via `npx` (Tanpa Install)
```bash
npx maduralang run program.mdr
```

### 2. Install Global via `npm`
```bash
npm install -g maduralang
```

### 3. Perintah CLI

#### Jalankan Program Langsung
```bash
madura run program.mdr
# atau singkatnya:
mdr run program.mdr
```

#### Kompilasi ke JavaScript Standar
```bash
madura build program.mdr -o dist/program.js
node dist/program.js
```

#### Mode Terminal Interaktif (REPL)
```bash
madura repl
# atau cukup:
madura
```

---

## 🗺️ Pemetaan Sintaks (MaduraLang vs JavaScript)

| Konsep Pemrograman | Kata Kunci MaduraLang | Ekivalen JavaScript | Makna Harfiah Madura |
| :--- | :--- | :--- | :--- |
| **Variabel (let)** | `sango` | `let` | Bekal / simpanan |
| **Konstanta (const)** | `paggun` | `const` | Tetap / tidak berubah |
| **Cetak Konsol** | `kocaaghi` | `console.log` | Katakan / sampaikan |
| **Input Terminal** | `tanyaaghi` | `prompt` / `readline` | Tanyakan / minta |
| **Percabangan If** | `lamon` | `if` | Kalau / jika |
| **Else If** | `lamon enja'` | `else if` | Kalau bukan |
| **Else** | `laen` | `else` | Lainnya / selain itu |
| **For Loop** | `poter` | `for` | Putar / perputaran |
| **While Loop** | `sampek` | `while` | Sampai / selama |
| **Break** | `ambu` | `break` | Berhenti / stop |
| **Continue** | `terros` | `continue` | Lanjut terus |
| **Boolean True** | `bhender` | `true` | Benar / betul |
| **Boolean False** | `sala` | `false` | Salah / keliru |
| **Null** | `tadhe'` | `null` | Habis / tidak ada |
| **Undefined** | `ta_tao` | `undefined` | Tidak tahu / belum jelas |
| **Fungsi** | `lakona` | `function` | Pekerjaan / tindakan |
| **Return** | `pabali` | `return` | Kembalikan |
| **Try** | `jhe_sossa` | `try` | Jangan risau / coba dulu |
| **Catch** | `ngarte` | `catch` | Mengerti / menangkap |
| **Throw** | `ngamok` | `throw` | Mengamuk / melempar error |
| **Finally** | `totop` | `finally` | Penutup / selesai |
| **Logika AND** | `ban` / `&&` | `&&` | Dan |
| **Logika OR** | `otaba` / `\|\|` | `\|\|` | Atau |
| **Logika NOT** | `benne` / `!` | `!` | Bukan |

---

## 📂 Struktur Repositori

```text
maduralang/
├── bin/
│   └── madura.js                  # Entry point CLI (executable)
├── src/
│   ├── core/                      # Engine Kompiler
│   │   ├── tokens.ts              # Daftar token kata kunci
│   │   ├── lexer.ts               # Tokenizer / Lexical Analyzer
│   │   ├── ast.ts                 # Definisi Abstract Syntax Tree
│   │   ├── parser.ts              # Recursive Descent Parser
│   │   └── codegen.ts             # JavaScript Code Generator
│   ├── stdlib/                    # Standard library bawaan
│   │   └── runtime.ts             # Runtime helper (kocaaghi, tanyaaghi)
│   ├── cli/                       # Implementasi CLI (run, build, repl)
│   └── index.ts                   # Export library
├── examples/                      # Koleksi contoh program .mdr
├── tests/                         # Suite pengujian otomatis (Vitest)
├── docs/                          # Dokumentasi tata bahasa
├── vscode-extension/              # Ekstensi Syntax Highlighter VS Code
└── package.json
```

---

## 🔌 Ekstensi Visual Studio Code

Kamu dapat memasang ekstensi pewarnaan sintaks (*syntax highlighting*) untuk file `.mdr`:
1. Salin folder `vscode-extension` ke folder ekstensi VS Code lokal:
   * Windows: `%USERPROFILE%\.vscode\extensions\maduralang-vscode`
   * Linux/macOS: `~/.vscode/extensions/maduralang-vscode`
2. Muat ulang (reload) VS Code kamu.
3. Semua file berekstensi `.mdr` akan otomatis berwarna rapi dan dikenali sebagai MaduraLang!

---

## 🧪 Menjalankan Pengujian

```bash
npm test
```

Semua 11 pengujian unit mencakup:
- Tokenisasi kosa kata tunggal & majemuk
- Pembuatan pohon sintaks (AST)
- Keabsahan JavaScript yang dihasilkan
- Eksekusi kode secara dinamis (*end-to-end*)

---

## 🤝 Kontribusi

Tertarik menambahkan idiom Madura lainnya atau meningkatkan performa compiler? Silakan baca panduan di [CONTRIBUTING.md](CONTRIBUTING.md). Pull Request sangat diterima!

---

## 👨‍💻 Pengembang (Author)

Dibuat dengan ❤️ oleh **[OhMyGhann](https://github.com/OhMyGhann)**.

---

## 📜 Lisensi

Didistribusikan di bawah Lisensi MIT. Lihat [LICENSE](LICENSE) untuk informasi lebih lanjut.

*Mator sakalangkong! Salam settong dhere!* 🐂
