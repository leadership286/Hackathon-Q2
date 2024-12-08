import React from "react";
import Image from "next/image";
import view from "@/public/images/View.png";
import Dcar from "@/public/images/Dcar.png"
import Review from "@/public/images/Reviews.png";
import view1 from "@/public/images/View1.png";
import view2 from "@/public/images/View2.png";
import view3 from "@/public/images/View3.png";

export default function Details() {
  return (
    <div className="w-full h-auto flex">
      {/* Sidebar */}
      <div className="w-[360px] bg-white p-8 hidden sm:block">
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-600 mb-4 hover:shadow-[0_0_15px_5px_#3563E9] transition-all">Type</h3>
          <ul className="space-y-2">
            {["Sport", "SUV", "MPV", "Sedan", "Coupe", "Hatchback"].map(
              (item, index) => (
                <li key={index} className="flex items-center">
                  <input
                    type="checkbox"
                    id={item}
                    className="mr-2 accent-blue-500"
                  />
                  <label htmlFor={item} className="text-gray-600">
                    {item}
                  </label>
                </li>
              )
            )}
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-600 mb-4 hover:shadow-[0_0_15px_5px_#3563E9] transition-all">Capacity</h3>
          <ul className="space-y-2">
            {["2 Person", "4 Person", "6 Person", "8 or More"].map(
              (item, index) => (
                <li key={index} className="flex items-center">
                  <input
                    type="checkbox"
                    id={item}
                    className="mr-2 accent-blue-500"
                  />
                  <label htmlFor={item} className="text-gray-600">
                    {item}
                  </label>
                </li>
              )
            )}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-600 mb-4">Price</h3>
          <input
            type="range"
            min="0"
            max="100"
            className="w-full h-[16px] accent-blue-500"
          />
          <div className="text-gray-600 mt-2">Max. $100.00</div>
        </div>
      </div>

      {/* Image Content */}
      <div className="flex-1 mt-8 px-8">
        {/* First two images (view and Dcar) side by side */}
        <div className="flex  gap-6">
          <div className=" w-[327px] h-[232px] lg:w-[492px] lg:h-[360px] hover:shadow-[0_0_15px_5px_#3563E9] transition-all">
            <Image src={view} alt="view" />
          </div>
          <div className=" lg::w-[492px] lg::h-[408px] hover:shadow-[0_0_15px_5px_#3563E9] transition-all">
            <Image src={Dcar} alt="Dcar" />
          </div>
        </div>

        {/* Additional images below in a flex row */}
        <div className="flex gap-6 mb-6">
          <div className=" w-[96px] h-[64px] md:w-[148px] md:h-[124px] hover:shadow-[0_0_15px_5px_#3563E9] transition-all">
            <Image src={view1} alt="view1" />
          </div>
          <div className="w-[96px] h-[64px] md:w-[148px] md:h-[124px] hover:shadow-[0_0_15px_5px_#3563E9] transition-all">
            <Image src={view2} alt="view2" />
          </div>
          <div className="w-[96px] h-[64px] md:w-[148px] md:h-[124px] hover:shadow-[0_0_15px_5px_#3563E9] transition-all">
            <Image src={view3} alt="view3" />
          </div>
        </div>

        {/* Review image below */}
        <div className="w-[1016px] h-[452px] hover:shadow-[0_0_15px_5px_#3563E9] transition-all">
          <Image src={Review} alt="Review" />
        </div>
      </div>
    </div>
  );
}
