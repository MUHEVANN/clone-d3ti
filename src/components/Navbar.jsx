import React, { useRef, useState } from "react";
import { BsInstagram, BsChevronDown } from "react-icons/bs";
import logo from "../image/logo-brand.png";
import { Link } from "react-router-dom";
import { Menu, Popover, Transition } from "@headlessui/react";
import {
  ProfileLinks,
  KonsentrasiLinks,
  AkademikLinks,
  ProgramLinks,
} from "../data/data";
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
  const [dropOpen, setDropOpen] = useState(false);
  const dropDown = useRef();
  window.addEventListener("click", (e) => {
    if (dropDown.current !== e.target) {
      setDropOpen(!dropDown);
    }
  });

  return (
    <div className=" bg-ungu">
      <nav className="">
        <div className="flex justify-between text-white h-[40px] layout items-center">
          <h1 className="text-[16px] font-bold">D3 Teknik Informatika</h1>
          <BsInstagram />
        </div>
        {/* navbar */}
        <div className="h-[40px] shadow-2xl layout flex justify-between items-center bg-[#6b21a8] w-full">
          <div className="h-[70%]">
            <img src={logo} alt="" className="w-full h-full object-contain" />
          </div>
          <div className="md:block hidden">
            <ul className="flex gap-x-2 text-white">
              <li className="p-2 hover:bg-[#f59e0b] hover:rounded">
                <Link className="text-[12px] flex items-center" to={"/"}>
                  Beranda
                </Link>
              </li>
              <li className="p-2 hover:bg-[#f59e0b] hover:rounded">
                <Menu className="relative" as="div">
                  <Menu.Button className="flex items-center gap-x-2 text-[12px]">
                    Profile <BsChevronDown />
                  </Menu.Button>
                  <Transition
                    enter="transition-opacity duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-150"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Menu.Items className="absolute flex flex-col bg-[#f59e0b] rounded text-white w-auto max-w-[300px] h-auto p-2 shadow-lg">
                      {ProfileLinks.map((item) => {
                        return (
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                className={`p-2 rounded whitespace-nowrap text-[12px]  ${
                                  active && "bg-white text-[#f59e0b]"
                                }`}
                                href={item.link}
                              >
                                {item.label}
                              </a>
                            )}
                          </Menu.Item>
                        );
                      })}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </li>
              <li className="p-2 hover:bg-[#f59e0b] hover:rounded">
                <Menu className="relative" as="div">
                  <Menu.Button className="flex items-center gap-x-2 text-[12px]">
                    Konsentrasi <BsChevronDown />
                  </Menu.Button>
                  <Transition
                    enter="transition-opacity duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-150"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Menu.Items className="absolute flex flex-col bg-[#f59e0b] rounded text-white w-auto max-w-[300px] h-auto p-2 shadow-lg">
                      {KonsentrasiLinks.map((item) => {
                        return (
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                className={`p-2 rounded whitespace-nowrap text-[12px] ${
                                  active && "bg-white text-[#f59e0b]"
                                }`}
                                href={item.link}
                              >
                                {item.label}
                              </a>
                            )}
                          </Menu.Item>
                        );
                      })}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </li>
              <li className="p-2 hover:bg-[#f59e0b] hover:rounded">
                <Menu className="relative" as="div">
                  <Menu.Button className="flex items-center gap-x-2 text-[12px]">
                    Akademik <BsChevronDown />
                  </Menu.Button>
                  <Transition
                    enter="transition-opacity duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-150"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Menu.Items className="absolute flex flex-col bg-[#f59e0b] rounded text-white w-auto max-w-[300px] h-auto p-2 shadow-lg">
                      {AkademikLinks.map((item) => {
                        return (
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                className={`p-2 rounded whitespace-nowrap text-[12px] ${
                                  active && "bg-white text-[#f59e0b]"
                                }`}
                                href={item.link}
                              >
                                {item.label}
                              </a>
                            )}
                          </Menu.Item>
                        );
                      })}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </li>
            </ul>
          </div>
          <div className="block md:hidden">
            <Popover className="relative">
              <Popover.Button>
                <CiMenuFries className="text-white" />
              </Popover.Button>
              <Transition
                enter="transition-opacity duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Popover.Panel className="absolute  bg-ungu w-[200px] py-2 px-4 rounded right-0 z-10">
                  <div className="">
                    <ul className="flex flex-col gap-x-2 text-white">
                      <li className="p-2 hover:bg-[#f59e0b] hover:rounded">
                        <Link
                          className="text-[12px] flex items-center"
                          to={"/"}
                        >
                          Beranda
                        </Link>
                      </li>
                      <li className="p-2 hover:bg-[#f59e0b] hover:rounded">
                        <Menu className="relative" as="div">
                          <Menu.Button className="flex items-center gap-x-2 text-[12px]">
                            Profile <BsChevronDown />
                          </Menu.Button>
                          <Transition
                            enter="transition-opacity duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Menu.Items className="absolute flex flex-col bg-[#f59e0b] rounded text-white w-auto max-w-[300px] h-auto p-2 shadow-lg">
                              {ProfileLinks.map((item) => {
                                return (
                                  <Menu.Item>
                                    {({ active }) => (
                                      <a
                                        className={`p-2 rounded whitespace-nowrap text-[12px]  ${
                                          active && "bg-white text-[#f59e0b]"
                                        }`}
                                        href={item.link}
                                      >
                                        {item.label}
                                      </a>
                                    )}
                                  </Menu.Item>
                                );
                              })}
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </li>
                      <li className="p-2 hover:bg-[#f59e0b] hover:rounded">
                        <Menu className="relative" as="div">
                          <Menu.Button className="flex items-center gap-x-2 text-[12px]">
                            Konsentrasi <BsChevronDown />
                          </Menu.Button>
                          <Transition
                            enter="transition-opacity duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Menu.Items className="absolute z-50 flex flex-col bg-[#f59e0b] rounded text-white w-auto max-w-[300px] h-auto p-2 shadow-lg">
                              {KonsentrasiLinks.map((item) => {
                                return (
                                  <Menu.Item>
                                    {({ active }) => (
                                      <a
                                        className={`p-2 rounded whitespace-nowrap text-[12px] ${
                                          active && "bg-white text-[#f59e0b]"
                                        }`}
                                        href={item.link}
                                      >
                                        {item.label}
                                      </a>
                                    )}
                                  </Menu.Item>
                                );
                              })}
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </li>

                      <li className="p-2 hover:bg-[#f59e0b] hover:rounded">
                        <Menu className="relative" as="div">
                          <Menu.Button className="flex items-center gap-x-2 text-[12px]">
                            Akademik <BsChevronDown />
                          </Menu.Button>
                          <Transition
                            enter="transition-opacity duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Menu.Items className="absolute flex flex-col bg-[#f59e0b] rounded text-white w-auto max-w-[300px] h-auto p-2 shadow-lg">
                              {AkademikLinks.map((item) => {
                                return (
                                  <Menu.Item>
                                    {({ active }) => (
                                      <a
                                        className={`p-2 rounded whitespace-nowrap text-[12px] ${
                                          active && "bg-white text-[#f59e0b]"
                                        }`}
                                        href={item.link}
                                      >
                                        {item.label}
                                      </a>
                                    )}
                                  </Menu.Item>
                                );
                              })}
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </li>
                    </ul>
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
