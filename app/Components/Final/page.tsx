import React from "react";
import Image from "next/image";
import final from "@/public/images/final.png"
import Dfinal from "@/public/images/Dfinal.png"

export default function Final(){
    return(
        <div>
       
        <div className="w-[1440px] h-[900px] ml-[64px] hover:shadow-[0_0_15px_5px_#3563E9] transition-all hidden sm:block">
          <Image src={final} alt="image" />
        </div>
        <div className="w-[327px] h-[1272px] hover:shadow-[0_0_15px_5px_#3563E9] transition-all block lg:hidden">
    <Image src={Dfinal} alt="image" />
  </div>
      </div>
      
    )
}