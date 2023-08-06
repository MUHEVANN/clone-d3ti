import React from "react";
import YouTubePlayer from "react-youtube";
const DeskripsiProdi = () => {
  return (
    <div className="layout">
      <h1 className="header">Deskripsi Prodi</h1>
      <div className="w-full grid place-content-center mb-5">
        <YouTubePlayer videoId="Vw5HencK40g" className="w-full h-full " />
      </div>
      <p className="text-[12px] mb-5">
        Mulai proses belajar-mengajar sejak tahun 1994, dan telah meluluskan
        lebih dari 1000 alumni sejak tahun 1997. Tersebar diseluruh pelosok
        negeri hingga mancanegara. Berprofesi sebagai tenaga ahli bidang IT,
        programmer, desainer dan web developer, teknisi komputer dan jaringan,
        sutradara film animasi, professional, pengusaha, staf, pns, hingga
        pejabat kantor pemerintah. Banyak pula yang sudah melanjutkan ke jenjang
        pendidikan program sarjana, master hingga doctoral. Saat ini Prodi D3TI
        berada didalam Fakultas Ilmu Komputer, dengan gelar lulusan Ahli Madya
        Komputer (A.Md.Kom), memiliki 3 kopetensi keahlian: Web Development,
        Computer Network, dan 2D Animation. Program “Graduate on Time” (GoT)
        yang di canangkan oleh prodi akan mengupayakan kelancaran proses studi
        dan kelulusan tepat waktu (maksimal 3 tahun).
      </p>
    </div>
  );
};

export default DeskripsiProdi;
