import React from "react";
import jaringan from "../../image/jaringan.png";
import { jaringanProfesi } from "../../data/data";
const Jaringan = () => {
  return (
    <div className="layout">
      <h1 className="header">Networking</h1>
      <h2 className="font-bold text-center text-[14px]">Computer Network</h2>
      <h3 className="text-center my-3">
        (Pengembang Infrastruktur Jaringan Komputer, Administrator Jaringan,
        Cloud Computing & Security)
      </h3>
      <img src={jaringan} alt="" />
      <h4>
        Mampu membuat persiapan, perencanaan, perancangan, implementasi,
        pengoperasian dan optimalisasi jaringan komputer. Memiliki keahlian
        untuk menjaga, memelihara serta mengamankan jaringan dari ancaman.
        Memiliki keterampilan untuk membangun jaringan lokal, membuat koneksi
        internet, mengkonfigurasi perangkat jaringan, mampu melakukan instalasi,
        konfigurasi, administrasi dan pemeliharaan server dijaringan fisik
        maupun virtual (cloud computing).
      </h4>
      <div className="mb-[40px] mt-5">
        <h5>Profesi :</h5>
        {jaringanProfesi.map((item) => {
          return <p className="text-[12px] ">{item}</p>;
        })}
      </div>
    </div>
  );
};

export default Jaringan;
