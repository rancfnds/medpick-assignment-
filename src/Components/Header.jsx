// src/Components/Header.js
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaBell } from "react-icons/fa";

import { TbAppsFilled } from "react-icons/tb";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 ">
      <div className="flex items-center gap-2">
        <div className="bg-white rounded-full w-5 h-5 flex items-center justify-center">
          <FaArrowLeft className="text-blue-500" />
        </div>

        <h1 className="text-2xl font-bold">Incidents.</h1>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2 bg-white p-2 rounded-full shadow">
          <div className="bg-black text-white w-12 h-12 flex items-center justify-center rounded-full">
            B
          </div>
          <span>Non Bio Medical</span>
        </div>
        <div className="flex items-center space-x-2 bg-white p-2 rounded-full shadow">
          <select className="bg-transparent focus:outline-none h-12">
            <option>Vijayanagar</option>
            <option>Other Location</option>
          </select>
        </div>
        <TbAppsFilled className="text-black bg-white p-2 rounded-full shadow w-12 h-12" />
        <FaBell className="text-black bg-white p-2 rounded-full shadow w-12 h-12" />
        <div className="bg-black text-white w-12 h-12 flex items-center justify-center rounded-full">
          B
        </div>
      </div>
    </div>
  );
};

export default Header;
