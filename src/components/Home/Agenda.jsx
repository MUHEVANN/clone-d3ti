import React from "react";
import agenda1 from "../../image/agenda1.jpeg";
import agenda2 from "../../image/agenda2.jpg";
import agenda3 from "../../image/agenda3.jpg";

const Card = ({ image, date, desc }) => {
  return (
    <div className="p-3">
      <div className="shadow rounded w-full  min-h-[350px] ">
        <div className="w-full h-[200px]">
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover rounded"
          />
        </div>
        <div className="p-5">
          <p className="text-[8px] mb-3">{date}</p>
          <h1 className="font-bold text-[14px]">{desc}</h1>
        </div>
      </div>
    </div>
  );
};
const Agenda = () => {
  return (
    <div className="layout min-h-[60vh]">
      <h1 className="text-center my-5 text-oren text-[18px] font-bold">
        Agenda & Pengumuman
      </h1>
      <div className="grid  grid-cols-1 lg:grid-cols-3">
        {/* card */}
        <Card
          image={agenda1}
          date={"16 Juni 2023"}
          desc={
            "Pembukaan Magang di Beecons: Bangun Sistem Kecerdasan dalam Ekosistem Teknik Digital 2.0"
          }
        />
        <Card
          image={agenda2}
          date={" 27 Mei 2023"}
          desc={
            "Amikom meraih peringkat ketiga dalam kompetisi Software Development UNITY #11 Competitions 2023"
          }
        />
        <Card
          image={agenda3}
          date={"16 Juni 2023"}
          desc={"Alur Pengajuan TA"}
        />
      </div>
    </div>
  );
};

export default Agenda;
