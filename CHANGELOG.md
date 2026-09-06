# Changelog

Semua perubahan penting dalam proyek **MaduraLang** akan dicatat dalam dokumen ini.

## [2.0.0] - 2026-09-06
### Ditambahkan
- **Object-Oriented Programming (OOP / Class)**: Kata kunci `bhangsa`, `katoronan` (extends), `nyiptaaghi` (constructor), `anyar` (new), dan `dibi'` (this).
- **Asynchronous Programming**: Kata kunci `nyambi` (async) dan `antose` (await).
- **Sistem Modul**: Kata kunci `ngala'` ... `dhari` (import ... from) dan `baghi` (export).
- **Modern Arrow Functions**: Dukungan `(params) => expr` dan `(params) => { ... }`.
- **String Template Literals**: Dukungan interpolasi string backtick dengan `${expr}`.
- **Switch Case & Ternary**: Kata kunci `pilih`, `kadhadhiyan`, `bawaan`, dan operator `? :`.
- **Contoh Program Baru**: Menambahkan 4 contoh baru (06 s.d. 09) di folder `examples/`.
- **Web Playground Update**: Sinkronisasi engine v2.0 ke browser playground dan penambahan dropdown contoh modern.
- **Pengujian**: Peningkatan unit test menjadi 19 tes otomatis.

## [1.0.0] - 2026-09-06
### Ditambahkan
- **Compiler / Transpiler Core**: Lexer, Parser, AST, dan JavaScript Code Generator.
- **Kata Kunci Madura**: `sango`, `paggun`, `kocaaghi`, `tanyaaghi`, `lamon`, `lamon enja'`, `laen`, `poter`, `sampek`, `ambu`, `terros`, `lakona`, `pabali`, `jhe_sossa`, `ngarte`, `ngamok`, `totop`, `bhender`, `sala`, `tadhe'`, `ta_tao`, `ban`, `otaba`, `benne`.
- **CLI Runner**: Perintah `madura run`, `madura build`, dan interaktif `madura repl`.
- **Standard Library & Runtime**: Fungsi bawaan I/O dan pembantu objek.
- **Suite Pengujian Otomatis**: 11 pengujian unit (Lexer, Parser, Codegen, Integration).
- **Ekstensi VS Code**: Dukungan pewarnaan sintaks (*syntax highlighting*) untuk file `.mdr`.
- **Contoh Program**: 5 program contoh yang mendemonstrasikan seluruh fitur.
