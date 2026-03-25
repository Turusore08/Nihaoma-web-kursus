# Nihaoma - Kursus Bahasa Mandarin

## Penjelasan Code:

### 1. HTML (Struktur)
- **Tag Semantik**: Menggunakan elemen seperti `<header>`, `<main>`, `<section>`, dan `<footer>` untuk struktur yang lebih baik.
- **Interaktivitas Tanpa JS**: Menggunakan tag `<details>` dan `<summary>` pada bagian kursus. Ini memungkinkan pengguna untuk mengklik kartu kursus guna melihat detail kurikulum dan harga tanpa memerlukan JavaScript.
- **Kontainer**: Kelas `.container` digunakan di setiap bagian untuk menjaga lebar konten tetap konsisten (80%) dan berada di tengah halaman.

### 2. CSS (Tampilan & Tata Letak)
- **Tema Warna**: Menggunakan palet warna merah Mandarin (`#c0392b`) dan emas (`#f1c40f`) untuk memperkuat nuansa kebudayaan China.
- **Flexbox**: Bagian `.course-list` menggunakan `display: flex` dengan `justify-content: space-between` untuk mengatur kartu kursus secara horizontal dan responsif.
- **Animasi**: Menambahkan `@keyframes fadeIn` untuk memberikan efek visual yang halus saat detail kursus dibuka melalui elemen `<details>`.
- **Hover Effects**: Memberikan umpan balik visual pada navigasi dan tombol saat kursor diarahkan (hover), seperti perubahan warna dan ketebalan teks.

---

