import Background1 from "@assets/images/swap/background1.svg";
import Background2 from "@assets/images/swap/background2.svg";

import PageContainer from "@/components/layouts/PageContainer";
import Info from "@/components/stake/Info";
import StakingTabs from "@/components/stake/StakingTabs";

export default function Stake() {
  return (
    <>
      <div className="space-y-6">
        <span className="text-2xl lg:text-4xl text-light font-extrabold lg:mt-xl mb-sm lg:mb-lg">
          Staking
        </span>
        <Info />
        <StakingTabs />
      </div>
      <img src={Background1} alt="" className="absolute left-0 top-1/2" />
      <img src={Background2} alt="" className="absolute right-0 top-1/2" />
    </>
  );
}
