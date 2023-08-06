import React from "react";
import { animasiProfesi } from "../../data/data";
import animasi from "../../image/animasi.png";
const Animasi = () => {
  return (
    <div className="layout">
      <h1 className="header">Animation</h1>
      <h2 className="font-bold text-center text-[14px]"> Animasi</h2>
      <h3 className="text-center my-3">
        (Artis Animasi, Pembuat Film Animasi 2D & 3D, Script Writer Animation
        Movie)
      </h3>
      <img src={animasi} alt="" />
      <h4>
        Mampu menciptakan karakter tokoh animasi, menghadirkan gerakan animasi
        berkualitas, produksi film animasi, mulai dari pra produksi (seperti:
        desain karakter, background, set properti, membuat screenplay, naskah
        cerita, storyboard, dll); produksi (membuat karakter dan background 2D,
        animasi karakter 2D, film Animasi 2D), dan pra produksi (editing, visual
        effect, compositing, dll). Mampu melakukan manajemen produksi dan
        memahami konsep distribusi film animasi).
      </h4>
      <div className="mb-[40px] mt-5">
        <h5>Profesi :</h5>
        {animasiProfesi.map((item) => {
          return <p className="text-[12px] ">{item}</p>;
        })}
      </div>
    </div>
  );
};

export default Animasi;
