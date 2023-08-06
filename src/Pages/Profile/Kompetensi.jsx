import React from "react";
import kompetensi from "../../image/kompetensi.jpg";
import { Kompetensi as Komp } from "../../data/data";
const Kompetensi = () => {
  return (
    <div className="layout">
      <h1 className="header">Kompetensi Kelulusan</h1>
      <h2 className="text-[14px]">
        Kompetensi Alumni Prodi D3 Teknik Informatika
      </h2>
      <h3 className="text-[14px] my-4">
        Indikator alumni : Program Studi D3-TI dilihat dari kompetensi utama dan
        kompetensi keahlian.
      </h3>
      <img src={kompetensi} alt="" />
      <h4 className="mt-5">Kompetensi utama lulusan D3 Teknik Informatika:</h4>
      <ul className="list-decimal flex flex-col gap-y-2 mb-5 text-[12px]">
        {Komp.map((item) => {
          return (
            <li>
              <p>{item}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Kompetensi;
