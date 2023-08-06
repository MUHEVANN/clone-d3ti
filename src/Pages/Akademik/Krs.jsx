import React from "react";

const Krs = () => {
  return (
    <div className="layout min-h-[60vh]">
      <h1 className="header">Krs</h1>
      <div className="flex flex-col gap-y-3 ">
        <a
          className="text-blue-500 hover:underline text-[12px]"
          href="https://drive.google.com/file/d/1TMJgNCTDzI1qqEMaaAeC9ryct59AprtQ/view"
        >
          Sosialisasi KRS
        </a>
        <a
          className="text-blue-500 hover:underline text-[12px]"
          href="https://docs.google.com/presentation/d/1jeskIGeYi4ZgrXpAwnC-nlF2RNlOvqep/edit?usp=sharing&ouid=102628772923336174877&rtpof=true&sd=true"
        >
          Materi Bimbingan KRS
        </a>
      </div>
    </div>
  );
};

export default Krs;
