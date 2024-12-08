import React from "react";

import HeroSection from "@/app/Components/HeroSection/page";
import Type from "./Components/Type/page";
import PopularCar from "./Components/PopularCar/page";
import ReccomendCar from "./Components/ReccomendCar/page";
import Details from "./Components/Details/page";
import Billing from "./Components/Billing/page";
import RecentCar from "./Components/RecentCar/page";
import Final from "./Components/Final/page";
export default function Home() {
  return (
<div className="bg-[#F6F7F9]">
<HeroSection/>
  <PopularCar />
 <ReccomendCar />
 <Type />
 <Details />
 <RecentCar/>
< Billing/>
< Final />
</div>

  );
}
