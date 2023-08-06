import React from "react";

const Kalender = () => {
  const KalenderLinks = ({ label, link }) => {
    return (
      <a href={link} className="text-[12px] text-blue-500 hover:underline">
        {label}
      </a>
    );
  };
  return (
    <div className="layout min-h-[60vh]">
      <h1 className="header">Kalender</h1>
      <div className="flex flex-col gap-y-3 mt-3">
        <KalenderLinks
          label="KALENDER AKADEMIK 2021- 2022"
          link={
            "https://daak.amikom.ac.id/media/3/REVISI_Terbaru_Kal_Akademik_2021_2022.pdf"
          }
        />
        <KalenderLinks
          label="KALENDER AKADEMIK 2020 - 2021"
          link={
            "https://drive.google.com/file/d/1v57tNh-V3pszDx8IOlt8yKJASco2gfne/view"
          }
        />
        <KalenderLinks
          label="KALENDER AKADEMIK 2019 - 2020"
          link={
            "http://daak.amikom.ac.id/media/3/kalender_akademik_2019_-_2020_Edit_25_Januari_2020.pdf"
          }
        />
      </div>
    </div>
  );
};

export default Kalender;
