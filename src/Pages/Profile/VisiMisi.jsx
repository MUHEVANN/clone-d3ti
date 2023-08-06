import React from "react";
import visi from "../../image/visi-misi1.jpg";
import misi from "../../image/visi-misi2.jpg";
import { Visi } from "../../data/data";
const VisiMisi = () => {
  return (
    <div className="layout">
      <h1 className="header">VisiMisi</h1>
      <div>
        <div>
          <h2 className="text-[16px] font-bold">visi Program Study D3 TI</h2>
          <img src={visi} alt="" />
        </div>
        <div>
          <h2 className="text-[16px] font-bold">misi Program Study D3 TI</h2>
          <img src={misi} alt="" />
        </div>
        <ul className="list-decimal flex flex-col gap-y-5 my-5">
          {Visi.map((item) => {
            return (
              <li>
                <h3 className="mb-2">{item.title}</h3>
                <ul className="list-disc text-[14px] pl-5">
                  {item.desc.map((des) => {
                    return <li>{des}</li>;
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default VisiMisi;
