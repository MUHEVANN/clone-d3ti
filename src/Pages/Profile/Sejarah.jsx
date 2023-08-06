import React from "react";
import sejarah from "../../image/sejarah.jpg";
const Sejarah = () => {
  return (
    <div className="layout my-5">
      <h1 className="header">Sejarah</h1>
      <div className="flex flex-col gap-y-5 text-[14px]">
        <p>
          Berawal dari keluhan beberapa pengusaha yang menyatakan bahwa mencari
          tenaga kerja Profesional di bidan Teknologi Informasi sulit, maka
          pendiri Yayasan ini berkeinginan untuk menjawab kesulitan yang dialami
          pengusaha dalam mencari tenaga ahli bidang informatika sehingga
          didirikanlah Yayasan AMIKOM YOGYAKARTA. Untuk pertama kalinya Yayasan
          ini berkantor pusat di Jl.Wolter Monginsidi No.8 Yogyakarta. Nama
          pendirinya adalah Mohammad Suyanto dan Purdi E.Chandra. Notaris
          pembuat Akte Pendirian : Daliso Rudianto, SH. Nomor: 76 Tanggal 29
          Desember 1992.
        </p>
        <img src={sejarah} alt="" />
        <p>
          Pada tahun pertama jumlah mahasiswa yang diterima sejumlah 44 orang
          pada jurusan manajemen informatika. Setahun kemudian AMIKOM
          mendapatkan status terdaftar berdasarkan Surat Keputusan Menteri
          Penddikan dan Kebudayaan Republik Indonesia No. 084/D/O/1994 tanggal
          11 Oktober 1994. Untuk saat ini semua program studi sudah
          terakreditasi.
        </p>
        <p>
          Seiring dengan bertambahnya mahasiswa AMIKOM menggunakan dua lokasi
          kampus, kampus I di Jalan Wolter Monginsidi dan Kampus II terletak di
          Jalan Kaliurang Yogyakarta. Beberapa ruangan di bangun di lokasi baru
          untuk menampung kegiatan perkuliahan dan praktikum serta perpustakaan.
          Pada tahun akademik 1998 dimana mahasiswa baru mencapai hampir 800
          orang, dan gedung yang saat itu dipakai sudah tidak lagi dapat memuat
          jumlah mahasiswa yang ada. Maka sejak tahun akademik 1998/1999 AMIKOM
          menyewa bangunan ruko dan diubah menjadi kampus terpadu di Ring Road
          Utara, Condong Catur dengan 9 ruang kuliah, 1 pelayanan akademik, 1
          ruang perpustakaan dari gedung sebanyak 2 lantai (semua pelayanan
          akademik telah dipindahkan di kampus terpadu ini, kecuali pelayanan
          beberapa lab komputer dan internet yang masih terdapat di Kampus II
          jalan Kaliurang km 5,6 Yogyakarta).
        </p>
        <p>
          Oleh karena kepercayaan masyarakat terhadap AMIKOM yang semakin tinggi
          dibuktikan dengan jumlah pendaftar yang naik secara signifikan dari
          tahun ke tahun maka pihak lembaga kiranya merasa perlu untuk membangun
          kampus yang representatif. Pada tanggal 20 Januari 2017, berdasarkan
          SK KemeristekDIKTI No. 99/KPT/I/2017 STMIK AMIKOM Yogyakarta resmi
          berubah bentuk menjadi Universitas AMIKOM Yogyakarta yang memiliki 3
          Fakultas dengan 1 program Magister, 13 Program Sarjana dan 2 program
          Diploma 3.
        </p>
      </div>
    </div>
  );
};

export default Sejarah;
