# Panduan Kontribusi MaduraLang 🐂

Halo Tretan! Terima kasih telah tertarik berkontribusi pada **MaduraLang**!

## Cara Mulai Berkontribusi

1. **Fork repositori ini** di GitHub.
2. **Clone** hasil fork ke komputer lokal kamu:
   ```bash
   git clone https://github.com/<username-kamu>/maduralang.git
   cd maduralang
   ```
3. **Install dependensi**:
   ```bash
   npm install
   ```
4. **Buat branch baru** untuk fitur atau perbaikan bug:
   ```bash
   git checkout -b fitur/tambah-fitur-anyar
   ```
5. **Jalankan pengujian** sebelum membuat commit:
   ```bash
   npm test
   npm run build
   ```
6. **Push & Buat Pull Request** ke branch `main`.

## Konvensi Kode
- Gunakan TypeScript modern dengan strict mode.
- Pastikan semua tes di folder `tests/` lolos (`npm test`).
- Pesan error dan dokumentasi diutamakan memakai gaya bahasa Madura / Indonesia yang ramah dan sopan.

Salam Settong Dhere!
