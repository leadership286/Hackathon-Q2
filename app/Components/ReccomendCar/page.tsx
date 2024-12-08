"use client";
import React, { useState } from "react";
import { GoHeartFill, GoHeart } from "react-icons/go"; 
import { BsFillFuelPumpDieselFill } from "react-icons/bs";
import { MdPeopleAlt } from "react-icons/md";
import Image from "next/image";
import Rcar1 from "@/public/images/Rcar1.png";
import manual from "@/public/images/manual.png"; 
import Rcar2 from "@/public/images/Rcar2.png";
import Rcar3 from "@/public/images/Rcar3.png";
import Rcar4 from "@/public/images/Rcar4.png";
import Rcar5 from "@/public/images/Rcar5.png";
import Rcar6 from "@/public/images/Rcar6.png";
import Rcar7 from "@/public/images/Rcar7.png";
import Rcar8 from "@/public/images/Rcar8.png";

// Typing the state to indicate it's an array of booleans
export default function ReccomendCar() {
  // State to manage the heart icon for each car (Array of booleans)
  const [likedCars, setLikedCars] = useState<boolean[]>([false, false, false, false]);

  // Toggle function for each car's "like" status
  const toggleHeart = (index: number) => {
    const updatedLikedCars = [...likedCars];
    updatedLikedCars[index] = !updatedLikedCars[index]; // Toggle the specific car's like status
    setLikedCars(updatedLikedCars);
  };

  const carData = [
    { name: "All New Rush", image: Rcar1, price: "$72.00 / day" },
    { name: "CR-V", image: Rcar2, price: "$80.00 / day" },
    { name: "All New Terios", image: Rcar3, price: "$74.00 / day" },
    { name: "CR-V", image: Rcar4, price: "$80.00 / day" },
    { name: "MG ZX Exlusice", image: Rcar5, price: "$76.00 / day" },
    { name: "New MG ZS", image: Rcar6, price: "$80.00 / day" },
    { name: "MG ZX Excite", image: Rcar7, price: "$74.00 / day" },
    { name: "New MG ZS", image: Rcar8, price: "$80.00 / day" }
  ];

  return (
    <div className="w-full h-full mt-[100px] lg:w-[1312px] lg:h-auto">
      <div className="flex justify-between ml-[64px] w-full h-[44px]">
        <div className="text-gray-600 pr-[20px] pl-[20px] hover:shadow-[0_0_15px_5px_#3563E9] transition-all">Reccomendation Car</div>
        <div className="text-[#3563E9] pr-[20px] pl-[20px] hover:shadow-[0_0_15px_5px_#3563E9] transition-all">View All</div>
      </div>

      {/* Car Grid Section */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-8 ml-[64px]">
        {carData.map((car, index) => (
          <div key={index} className="w-[304px] h-[388px] border rounded-lg p-4 shadow-md bg-white hover:shadow-lg flex flex-col items-center">
            <div className="flex items-center justify-between w-full">
              <h1 className="text-xl font-semibold text-black">{car.name}</h1>
              {/* Conditionally render the filled or outline heart */}
              {likedCars[index] ? (
                <GoHeartFill
                  className="ml-[35px] text-xl cursor-pointer text-red-500"
                  onClick={() => toggleHeart(index)} // Correctly pass the index
                />
              ) : (
                <GoHeart
                  className="ml-[35px] text-xl cursor-pointer text-gray-600"
                  onClick={() => toggleHeart(index)} // Correctly pass the index
                />
              )}
            </div>
            <p className="text-sm text-[#3563E9]">SUV</p>
            <div className="w-[232px] h-[72px] mt-[100px] relative">
              <Image
                src={car.image}
                alt={car.name}
                layout="fill"
                className="object-cover rounded-t-lg"
              />
            </div>
            <div className="mt-4 text-center w-full">
              <div className="mt-2 text-gray-600 flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <BsFillFuelPumpDieselFill className="text-gray-500" />
                  <p>90L</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Image
                    src={manual}
                    alt="manual"
                    className="w-[24px] h-[24px]"
                  />
                  <p>Manual</p>
                </div>
                <div className="flex items-center space-x-2">
                  <MdPeopleAlt className="text-gray-500" />
                  <p>2 People</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p className="mt-2 font-bold text-xl text-black">{car.price}</p>
                <div className="mt-4">
                  <button className="bg-[#3563E9] w-[116px] h-[44px] text-white px-4 py-2 rounded-smhover:shadow-[0_0_15px_5px_#3563E9] transition-all">
                    Rent Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
{/* Button to show more cars */}
<div className="flex justify-between items-center mt-[100px] mb-[100px] w-full lg:w-[734px] ml-[135px] lg:h-[44px]">
  <button className="text-white bg-[#3563E9] px-[20px] py-[8px] hover:shadow-[0_0_15px_5px_#3563E9] transition-all">
    Show more cars
  </button>
  <div className="text-gray-600 text-end ml-[500px] hover:shadow-[0_0_15px_5px_#3563E9] transition-all">120 Cars</div>
</div>

      </div>
    </div>
  );
}
