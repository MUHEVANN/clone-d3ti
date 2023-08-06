import React from "react";

const ContactProdi = () => {
  return (
    <div className="layout min-h-[50vh]">
      <h1 className="header">Contact Prodi</h1>
      <div className="flex flex-col gap-y-[50px]">
        <div>
          <h1 className="font-bold">Email Resmi Prodi: </h1>
          <p className="text-[12px]">d3ti@amikom.ac.id</p>
        </div>
        <div>
          <h1 className="font-bold">Instagram Resmi Prodi: </h1>
          <a
            href="https://www.instagram.com/prodid3ti/?hl=en"
            className="text-blue-600 underline text-[12px]"
          >
            @prodid3ti
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactProdi;
