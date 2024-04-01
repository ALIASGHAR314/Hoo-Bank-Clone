import React, { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants/Index";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-5 justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1 gap-x-4">
        <li className="text-normal text-white font-semibold cursor-pointer">
          Home
        </li>
        <li className="text-normal text-white font-semibold cursor-pointer">
          Featured
        </li>
        <li className="text-normal text-white font-semibold cursor-pointer">
          Products
        </li>
        <li className="text-normal text-white font-semibold cursor-pointer">
          Clients
        </li>
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[27px] h-[27px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-5 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1 gap-x-4">
            <li className="text-normal text-white font-semibold cursor-pointer">
              Home
            </li>
            <li className="text-normal text-white font-semibold cursor-pointer">
              Featured
            </li>
            <li className="text-normal text-white font-semibold cursor-pointer">
              Products
            </li>
            <li className="text-normal text-white font-semibold cursor-pointer">
              Clients
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
