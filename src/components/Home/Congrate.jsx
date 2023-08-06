import React from "react";
import congrate from "../../image/congrate.jpeg";
const Congrate = () => {
  return (
    <div className="w-full h-[90vh] justify-center md:h-[70vh] bg-gradient flex flex-col md:flex-row layout items-center">
      <div className="flex flex-col gap-y-2 mb-4 md:gap-y-14">
        <h1 className="underline text-[30px]  md:leading-[36px] text-white  ">
          Congratulation
        </h1>
        <p className="text-white italic text-[18px]">
          Congratulation, Kepada teman-teman tim OSORA dari Universitas Amikom
          Yogyakarta
        </p>
      </div>
      <div className="border-[#f59e0b] p-2 border-2  rounded-lg ">
        <img src={congrate} alt="" className=" w-[800px] rounded-lg" />
      </div>
    </div>
  );
};

export default Congrate;
