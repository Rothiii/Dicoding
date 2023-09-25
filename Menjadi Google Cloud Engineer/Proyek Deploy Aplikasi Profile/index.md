# Proyek Deploy Aplikasi Profile 
---
## Kriteria 1: Hosting Aplikasi Profile
Tentunya Anda sudah belajar bagaimana cara membuat Compute Engine instance, baik melalui Google Cloud console maupun gcloud CLI di Cloud Shell. Anda juga sudah paham bagaimana cara menginstal web server di sebuah VM. Nah, sekarang tugas Anda adalah meng-hosting aplikasi Profile buatan sendiri di Compute Engine. 

Silakan Anda bereksplorasi sedemikian rupa agar aplikasi yang Anda hosting menampilkan informasi mengenai profil Anda. Anda bisa menggunakan template atau merancangnya sendiri.

## Kriteria 2: Aplikasi Menampilkan Gambar
Aplikasi Profile yang Anda buat haruslah menampilkan gambar berupa foto profil yang disimpan di Cloud Storage. Anda juga boleh menambahkan gambar lain, misalnya banner ataupun background.

---
## Pengantar Kriteria Penilaian Lainnya
Submission Anda akan dinilai oleh Reviewer guna menentukan kebenaran submission yang dikerjakan. Supaya bisa menyelesaikan submission ini, aplikasi Profile Anda harus memenuhi seluruh kriteria yang ada. Apabila ada ketentuan dalam kriteria yang belum terpenuhi, submission Anda akan kami tolak.

Submission Anda akan dinilai oleh Reviewer dengan penilaian bintang berskala 1-5. Untuk mendapatkan nilai tinggi, Anda bisa menerapkan beberapa saran berikut:

Alih-alih menggunakan Compute Engine, Anda meng-hosting aplikasi Profile di App Engine.
Tampilan Aplikasi Profil rapi dan menarik, sebagai contoh:
Tidak menampilkan fitur yang tak relevan.
Alignment konten sedap dipandang.
Tampilan web layaknya halaman portofolio berkelas.

---
1. Buat atau pilih proyek yang sudah ada  
2.. Buka cloud shell lalu clone web sample github yang akan di deploy
   ```bash
   git clone 'LINK REPOSITORI GIT YANG MAU DI CLONE'
   ```
   Contoh [link Github web yang saya gunakan](https://github.com/Rothiii/personal-web.git)
   ```bash
   git clone https://github.com/Rothiii/personal-web.git
   ```
   
3. Buat file `app.yml` didalam direktori/folder web sample nano ap.yaml
   masukkan kode dibawah kedalam app.yml (menyesuaikan dengan struktur folder web yang akan di deploy)
   ```bash
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
     ```
   
4. Lalu jalankan di cloud shell
   `gcloud app deploy`
   
6. Untuk mengecek webnya ketik
   `gcloud app browse`
   Lalu klik link yang muncul
   
7. Setelah itu jangan lupa untuk menghapus proyeknya atau menonaktifkan app engine agar tidak mendapatkan tagihan

   https://cloud.google.com/appengine/docs/standard/python3/building-app/cleaning-up#disabling_your_application
