import React, { useState } from "react";
import KoinX from "../assets/KoinX.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" relative  w-full bg-white z-10 border-b-2 border-gray ">
      <div className="flex items-center justify-between p-6">
        <div className="flex">
          <img src={KoinX} alt="" className="h-6" />
          <sup className="mt-1">TM</sup>
        </div>
        <div className="hidden md:flex space-x-10">
          <a href="#features" className="text-black-400 ">
            Crypto Taxes
          </a>
          <a href="#" className="text-black-400 ">
            Free Tools
          </a>
          <a href="#early-access" className="text-black-400 ">
            Resource Center
          </a>
          <a
            href="#early-access"
            className="text-white font-medium  bg-navBlue py-1 px-4 rounded-md "
          >
            Get Started
          </a>
        </div>

        {/* Hamburger Icon */}
        <button
          id="menu-btn"
          className={`block hamburger md:hidden focus:outline-none ${
            isOpen ? "open" : ""
          }`}
          onClick={toggleMenu}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
      {/* Mobile view hamburger */}
      <div className={`md:hidden ${isOpen ? "" : "hidden"}`}>
        <div
          id="menu"
          className="absolute flex flex-col items-center self-end py-8  w-dvw space-y-6 font-bold  bg-navBlue sm:self-center   drop-shadow-md"
        >
          <a href="#features" className="text-white">
            Crypto Taxes
          </a>
          <a href="#" className="text-white">
            Free Tools
          </a>
          <a href="#early-access" className="text-white">
            Resource Center
          </a>
          <a href="#early-access" className="text-white">
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
