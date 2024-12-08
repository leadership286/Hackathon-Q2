import Image from "next/image";
import ad1 from "@/public/images/Ad1.png";
import ad2 from "@/public/images/Ad2.png";
import Pickup from "@/public/images/Pickup.png";
import Switch from "@/public/images/Switch.png";
import dropOff from "@/public/images/DropOff.png";

export default function HeroSection() {
  return (
    <div className="flex flex-col mt-[32px] ml-[64px] space-y-8">
      {/* Single row for ad1 and ad2 */}
      <div className="flex justify-between items-center space-x-4">
        <div className="w-[640px] h-[360px] hover:shadow-[0_0_15px_5px_#3563E9] transition-all">
          <Image src={ad1} alt="Ad 1" />
        </div>
        <div className="hidden md:block w-[640px] h-[360px] hover:shadow-[0_0_15px_5px_#3563E9] transition-all">
          <Image src={ad2} alt="Ad 2" />
        </div>
      </div>

      {/* Second row for Pickup, Switch, and DropOff */}
      <div className="flex flex-col lg:flex-row justify-between items-center lg:space-x-4 space-y-4 lg:space-y-0">
        <div className="w-[582px] h-[132px] hover:shadow-[0_0_15px_5px_#3563E9] transition-all">
          <Image src={Pickup} alt="Pickup" />
        </div>
        <div className="w-[200px] h-[200px] lg:mt-0 mt-[70px] hover:shadow-[0_0_15px_5px_#3563E9] transition-all">
          <Image src={Switch} alt="Switch" />
        </div>
        <div className="w-[582px] h-[132px] hover:shadow-[0_0_15px_5px_#3563E9] transition-all">
          <Image src={dropOff} alt="Drop Off" />
        </div>
      </div>
    </div>
  );
}
