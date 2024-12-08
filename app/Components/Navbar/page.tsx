import React from "react";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { GoHeartFill } from "react-icons/go";
import { FaBell } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";

import Image from "next/image";
import filter from "@/public/images/filter.png"
import profile from "@/public/images/Profil.png"
export default function Navbar() {
  return (
    <div className="w-full lg:w-[1440px] h-[124px] border border-[#C3D4E966] flex items-center justify-between px-10">
      {/* Logo Section */}
      <div className="text-lg font-bold text-[#3563E9] hover:border-2 hover:border-[#33ffaa] hover:rounded-lg p-2 overflow-hidden hover:shadow-[0_0_10px_2px_#3563E9]">
        MORENT
      </div>
 
      {/* Search Bar */}
      <div className="relative w-[492px] h-[44px]   border border-[#C3D4E966] rounded-full bg-white flex items-center px-4">
        <FiSearch className="text-gray-600 text-xl overflow-hidden hover:shadow-[0_0_10px_2px_#3563E9] hover:scale-110 transition-all"/>
        <input
          type="text"
          placeholder="Search something here..."
          className="ml-2 w-full bg-transparent outline-none text-sm text-gray-600 overflow-hidden hover:shadow-[0_0_10px_2px_#3563E9]"
        />
        <Image 
        src={filter}
        alt="filter"
        width={24}
        height={24}
        className="overflow-hidden hover:shadow-[0_0_10px_2px_#3563E9] hover:scale-110 transition-all"
        />
      </div>

      {/* Placeholder for Right Section */}
      <div className="flex items-center space-x-4">
      <GoHeartFill className="text-gray-600 border border-[#C3D4E966]  overflow-hidden hover:shadow-[0_0_10px_2px_#3563E9] hover:scale-110 transition-allhidden lg:block"/>
      <FaBell  className="text-gray-600 border border-[#C3D4E966] overflow-hidden hover:shadow-[0_0_10px_2px_#3563E9] hover:scale-110 transition-allhidden lg:block "/>
      <IoMdSettings  className="text-gray-600 border border-[#C3D4E966] overflow-hidden hover:shadow-[0_0_10px_2px_#3563E9] hover:scale-110 transition-all hidden lg:block"/>
        <div className="w-8 h-8 rounded-full border border-[#C3D4E966] overflow-hidden hover:shadow-[0_0_10px_2px_#3563E9] hover:scale-110 transition-all">
            <Image 
            src={profile}
            alt="pic"
            />
        </div>
      </div>
    </div>
  );
}
