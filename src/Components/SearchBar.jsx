// src/Components/SearchBar.jsx
import React from "react";
import { LuArrowDownUp } from "react-icons/lu";
import { FaFilter } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa6";

const SearchBar = () => {
  return (
    <div className="flex justify-between items-center p-4 border border-gray-200 rounded-lg bg-white shadow-sm mb-4">
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-16 py-2   rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="absolute left-0 top-0 mt-2 ml-2 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.9 14.32a8 8 0 111.414-1.414l4.35 4.35a1 1 0 01-1.415 1.415l-4.35-4.35zM8 14a6 6 0 100-12 6 6 0 000 12z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className="flex items-center space-x-2 ">
          <select className=" rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>September</option>
            <option>October</option>
            <option>November</option>
          </select>
          <select className=" rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>2023</option>
            <option>2024</option>
          </select>
        </div>

        <div className="flex gap-6 ">
          <button className="text-black focus:outline-none ml-3">
            <FaFilter />
          </button>
          <button className="text-black focus:outline-none">
            <LuArrowDownUp />
          </button>
          <button className="text-black focus:outline-none">
            <FaDownload />
          </button>
        </div>
      </div>
      <button className="ml-4 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 focus:outline-none">
        Add incident +
      </button>
    </div>
  );
};

export default SearchBar;
