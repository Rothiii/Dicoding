Perjalanan kita sudah cukup panjang ya di kelas ini. Anda sudah mempelajari banyak hal tentang Google Cloud, antara lain:

Pengenalan Google Cloud
Layanan Komputasi di Google Cloud
Layanan Data di Google Cloud
Untuk mengasah kemampuan, Anda perlu mengerjakan dan mengirimkan tugas submission berupa aplikasi web yang di-hosting di Google Cloud. Sudah siap? Silakan buka tab Kriteria.

Terdapat beberapa kriteria utama yang harus Anda penuhi untuk menyelesaikan Proyek Pertama ini. Pastikan Anda memahaminya dengan saksama ya.



Kriteria 1: Hosting Aplikasi Profile
Tentunya Anda sudah belajar bagaimana cara membuat Compute Engine instance, baik melalui Google Cloud console maupun gcloud CLI di Cloud Shell. Anda juga sudah paham bagaimana cara menginstal web server di sebuah VM. Nah, sekarang tugas Anda adalah meng-hosting aplikasi Profile buatan sendiri di Compute Engine. 

Silakan Anda bereksplorasi sedemikian rupa agar aplikasi yang Anda hosting menampilkan informasi mengenai profil Anda. Anda bisa menggunakan template atau merancangnya sendiri.



Kriteria 2: Aplikasi Menampilkan Gambar
Aplikasi Profile yang Anda buat haruslah menampilkan gambar berupa foto profil yang disimpan di Cloud Storage. Anda juga boleh menambahkan gambar lain, misalnya banner ataupun background.

Pengantar Kriteria Penilaian Lainnya
Submission Anda akan dinilai oleh Reviewer guna menentukan kebenaran submission yang dikerjakan. Supaya bisa menyelesaikan submission ini, aplikasi Profile Anda harus memenuhi seluruh kriteria yang ada. Apabila ada ketentuan dalam kriteria yang belum terpenuhi, submission Anda akan kami tolak.

Submission Anda akan dinilai oleh Reviewer dengan penilaian bintang berskala 1-5. Untuk mendapatkan nilai tinggi, Anda bisa menerapkan beberapa saran berikut:

Alih-alih menggunakan Compute Engine, Anda meng-hosting aplikasi Profile di App Engine.
Tampilan Aplikasi Profil rapi dan menarik, sebagai contoh:
Tidak menampilkan fitur yang tak relevan.
Alignment konten sedap dipandang.
Tampilan web layaknya halaman portofolio berkelas.

1. buat atau pilih proyek yang sudah ada
2. buka cloud shell lalu clone web sample github yang akan di deploy
3. buat file app.yml didalam direktori/folder web sample
   masukkan kode dibawah kedalam app.yml (menyesuaikan dengan struktur folder web sample)
   runtime: python27
api_version: 1
threadsafe: true

handlers:
- url: /
  static_files: www/index.html
  upload: www/index.html

- url: /(.*)
  static_files: www/\1
  upload: www/(.*)
4. lalu jalankan
  gcloud app deploy
5. untuk mengecek webnya ketik
  gcloud app browse
6. setelah itu jangan lupa untuk menghapus proyeknya atau menonaktifkan app engine agar tidak mendapatkan tagihan berlebih
  https://cloud.google.com/appengine/docs/standard/python3/building-app/cleaning-up#disabling_your_application
