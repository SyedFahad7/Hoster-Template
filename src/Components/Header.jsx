import React from "react";
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex justify-between md:items-center lg:gap-3">
      <div className="flex items-center justify-center gap-2 md:flex md:items-center md:justify-center md:gap-12">
        <img className="md:h-12" src="./assets/Logo.svg" alt="Logo" />
        <button className="bg-gradient-to-r from-orange-400 to-red-400 text-xs text-white px-2.5 py-1.5 rounded-2xl md:h-10 md:text-xl ">Hoster is Hiring </button>
      </div>
      <ul className="hidden lg:flex justify-between items-center font-lato text-gray-800 gap-5">
        <li> <a href="#">Plans</a></li>
        <li> <a href="#">Find Domain</a></li>
        <li> <a href="#">Why Hoster</a></li>
      </ul>
      <div className="hidden lg:flex justify-center items-center font-lato gap-6">
        <a className="text-blue-400 font-bold text-xl " href="#">Sign In</a>
        <button className=" bg-cyan-800 text-white px-4 py-3 hover:bg-cyan-700 lg:rounded-2xl" >Join Waitlist</button>
      </div>
      <div className="lg:hidden">
        <FaBars className="text-base md:text-4xl" />
      </div>
    </div>
  );
};

export default Header;
