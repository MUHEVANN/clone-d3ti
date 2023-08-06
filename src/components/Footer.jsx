import React from "react";
import logo from "../image/logo-brand.png";
import { BsFillTelephoneFill, BsInstagram } from "react-icons/bs";
import { FaMailBulk } from "react-icons/fa";
import { AiOutlineMail, AiOutlineRight } from "react-icons/ai";
import { Departments } from "../data/data";

const Footer = () => {
  return (
    <div className="bg-ungu  layout py-[20px]">
      <div className="w-full grid md:grid-cols-2 mb-[20px] grid-cols-1 lg:grid-cols-3 ">
        <div className="flex flex-col gap-y-5">
          <div className="w-[150px]">
            <img src={logo} alt="" className="object-contain " />
          </div>
          <p className="text-white text-[12px]">
            Alamat Kampus: Jl. Ring Road Utara, Condong Catur, Sleman,
            Yogyakarta
          </p>
          <div className="flex flex-col gap-y-2 text-[12px]">
            <h1 className="flex gap-x-2 items-center text-white">
              <BsFillTelephoneFill />
              (0274) 884201 - 207
            </h1>
            <h1 className="flex gap-x-2 items-center text-white">
              <FaMailBulk />
              Kodepos: 55283
            </h1>
            <h1 className="flex gap-x-2 items-center text-white">
              <AiOutlineMail />
              amikom@amikom.ac.id
            </h1>
          </div>
        </div>
        <div className="flex flex-col gap-y-3">
          <h1 className="text-[18px] text-white font-bold">Akademik</h1>
          <ul className="text-[12px] flex flex-col gap-y-2">
            <li className="group">
              <a
                href="https://pmb.amikom.ac.id/daftar#!/"
                className="hover:text-[#f59e0b] text-white"
              >
                PMB (Pendaftaran)
              </a>
            </li>
            <li>
              <a
                className="hover:text-[#f59e0b] text-white"
                href="https://react-icons.github.io/react-icons/search?q=mail"
              >
                Info Akademik
              </a>
            </li>
            <li>
              <a
                className="hover:text-[#f59e0b] text-white"
                href="https://react-icons.github.io/react-icons/search?q=mail"
              >
                Info Keuangan{" "}
              </a>
            </li>
            <li>
              <a
                className="hover:text-[#f59e0b] text-white"
                href="https://react-icons.github.io/react-icons/search?q=mail"
              >
                Info Kemahasiswaan
              </a>
            </li>
            <li>
              <a
                className="hover:text-[#f59e0b] text-white"
                href="https://elearning.amikom.ac.id/"
              >
                Elearning
              </a>
            </li>
            <li>
              <a
                className="hover:text-[#f59e0b] text-white"
                href="https://wisuda.amikom.ac.id/"
              >
                Wisuda
              </a>
            </li>
          </ul>
          <h1 className="text-white font-bold">Alumni</h1>
          <a
            className="hover:text-[#f59e0b] text-white text-[12px]"
            href="https://career.amikom.ac.id/"
          >
            BPC
          </a>
        </div>
        <div className="flex flex-col gap-y-3">
          <h1 className="text-white font-bold text-[18px]">Department</h1>
          <div>
            <ul className="flex-col flex gap-y-2">
              {Departments.map((item) => {
                return (
                  <li className="text-white text-[12px]  hover:text-[#f59e0b]">
                    <a href={item.link} className="flex items-center ">
                      <AiOutlineRight />
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex justify-between h-[40px] text-white items-center">
        <h1 className="text-[12px]">
          &copy;2022 UNIVERSITAS AMIKOM YOGYAKARTA
        </h1>
        <BsInstagram />
      </div>
    </div>
  );
};

export default Footer;
