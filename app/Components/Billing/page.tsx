import React from "react";
import Image from "next/image";
import Payment from "@/public/images/Payment.png"
import Rental from "@/public/images/Rental Summary.png"
import { DiVim } from "react-icons/di";

export default function Billing(){
    return(
        <div className="w-[1440px] h-[2240px] flex mt-[100px]" >
<div className="w-[805px] h-[2176px] ml-[32px] hover:shadow-[0_0_15px_5px_#3563E9] transition-all hidden sm:block">
<Image 
src={Payment} alt="page"
/>
</div>
<div className="w-[492px] h-[560px] ml-[50px] hover:shadow-[0_0_15px_5px_#3563E9] transition-all">
<Image src={Rental} alt="car" />
</div>
        </div>
    )
}  
