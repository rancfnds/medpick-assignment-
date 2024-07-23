// src/components/Sidebar.js
import React from "react";
import { MdDashboard } from "react-icons/md";
import { BsTools } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa6";
import { IoIosSettings } from "react-icons/io";
import { RiMessage2Line } from "react-icons/ri";
import { FaUsersLine } from "react-icons/fa6";
import { TbReport } from "react-icons/tb";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { MdLogout } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-4">
      <div className="pb-14 ">
        <h1 className="text-xl mb-4 pl-14 pt-10 mb-10">
          
          <img src="/Images/logo.png" alt="Logo" className="w-24 h-auto" />
        </h1>
        <ul className="ml-5">
          <li className="mb-3">
            <a
              href="#"
              className="hover:text-blue-300 flex items-center py-2 px-6 gap-3"
            >
              <MdDashboard />
              DashBoard
            </a>
          </li>
          <li className="mb-3">
            <a
              href="#"
              className="hover:text-blue-300 flex items-center py-2 px-6 gap-3"
            >
              <FaLaptopCode />
              Assets
            </a>
          </li>
          <li className="mb-3">
            <a
              href="#"
              className="hover:text-blue-300 flex items-center py-2 px-6 gap-3"
            >
              <BsTools />
              Incidents
            </a>
          </li>
          <li className="mb-3">
            <a
              href="#"
              className="hover:text-blue-300 flex items-center py-2 px-6 gap-3"
            >
              <IoIosSettings />
              Services
            </a>
          </li>
          <li className="mb-3">
            <a
              href="#"
              className="hover:text-blue-300 flex items-center py-2 px-6 gap-3"
            >
              <RiMessage2Line />
              Request
            </a>
          </li>
          <li className="mb-3">
            <a
              href="#"
              className="hover:text-blue-300 flex items-center py-2 px-6 gap-3"
            >
              <FaUsersLine />
              Users
            </a>
          </li>
          <li className="mb-3">
            <a
              href="#"
              className="hover:text-blue-300 flex items-center py-2 px-6 gap-3"
            >
              <TbReport />
              Reports
            </a>
          </li>
        </ul>
      </div>

      <div className="ml-8">
        <button className="w-40 border mb-4 border-white hover:border-gray-600 text-white py-2 px-4 rounded-full outline outline-whitefocus:outline-2 flex gap-2 items-center">
          <TfiHeadphoneAlt />
          Contact Us
        </button>
        <button className="w-40 flex gap-2 items-center border border-white hover:border-gray-600 text-white py-2 px-4 rounded-full outline outline-white focus:outline-2">
          <MdLogout />
          Log Out    
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
