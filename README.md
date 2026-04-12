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

### 3. JavaScript (Interaktivitas & Logika)
- **DOMContentLoaded Event**: Script menunggu hingga DOM sepenuhnya dimuat sebelum menjalankan kode untuk memastikan semua elemen HTML tersedia.
- **Name Autocomplete/Suggestions**: 
  - Menggunakan array daftar nama pendaftar
  - Fitur filtering real-time saat pengguna mengetik di input nama
  - Menampilkan saran nama yang cocok secara dinamis
  - Pengguna dapat memilih nama dari saran yang ditampilkan
- **Regional Dropdowns (EMSifa API)**:
  - Mengintegrasikan EMSifa Indonesia API (`https://www.emsifa.com/api-wilayah-indonesia/api/`) untuk data regional
  - Dropdown Provinsi dimuat saat page load
  - Dropdown Kabupaten/Kota memuat data berdasarkan provinsi yang dipilih
  - Dropdown Kecamatan memuat data berdasarkan kota yang dipilih
  - Menggunakan `fetch()` untuk menampilkan data dari API secara asinkron
- **Postal Code Search**:
  - Menggunakan kodepos.now.sh API untuk mencari kode pos berdasarkan kecamatan
  - Tombol "Cari Kode Pos" mengambil nilai dari dropdown kota dan kecamatan yang dipilih
  - Menampilkan hasil pencarian dengan detail lokasi (desa, kecamatan, kabupaten, provinsi)
  - Notifikasi loading (tombol berubah menjadi "Mencari...") dan error handling
- **Form Submission**:
  - Mencegah default form submission dengan `e.preventDefault()`
  - Mengumpulkan data form menggunakan `FormData` API
  - Menampilkan pesan terima kasih ke pengguna
  - Me-reset form setelah submit
  - Menghapus hasil pencarian kode pos
  - Mereset state dropdown (disabled) setelah submit

---

