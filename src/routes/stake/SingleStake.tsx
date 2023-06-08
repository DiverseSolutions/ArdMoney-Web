import Cero_staking1 from "@assets/images/staking/Cero_staking1.svg";
import Cero_staking2 from "@assets/images/staking/Cero_staking2.svg";
import Cero_staking3 from "@assets/images/staking/Cero_staking3.svg";
import Background1 from "@assets/images/swap/background1.svg";
import Background2 from "@assets/images/swap/background2.svg";

import PageContainer from "@/components/layouts/PageContainer";
import Info from "@components/stake/Info";
import { useParams } from "react-router-dom";
import StakingForms from "@/components/stake/StakeForms";

export default function SingleStake() {
  const params = useParams();

  return (
    <>
      <PageContainer>
        <span className="text-2xl lg:text-4xl text-light font-extrabold lg:mt-xl mb-sm lg:mb-lg">
          {params.id} Staking
        </span>
        <Info />

        <div className="flex flex-col lg:flex-row gap-lg text-light w-full h-full">
          <div className="relative md:min-h-[48rem] flex flex-col p-lg w-full lg:w-1/2 rounded-3xs border border-[#ABFC86] h-full">
            <span className="text-xl mb-lg font-extrabold">MY ASSETS</span>
            <span className="text-base mb-2xl">Balance</span>
            <div className="flex items-center gap-xs mb-sm p-sm border border-primary/10 rounded-lg">
              <span>100,000 </span>
              <span className="flex items-end text-xs text-light/60">CERO</span>
            </div>
            <div className="flex items-center gap-xs mb-2xl p-sm border border-primary/10 rounded-lg">
              <span>0 </span>
              <span className="flex items-end text-xs text-light/60">
                xCERO
              </span>
            </div>
            <span className="text-base mb-2xl">Amount of Stake</span>
            <div className="flex items-center gap-xs mb-lg p-sm border border-primary/10 rounded-lg">
              <span>0 </span>
              <span className="flex items-end text-xs text-light/60">
                xCERO
              </span>
            </div>
            <span className="mb-lg text-base">Penalty for early release</span>
            <div className="flex flex-col text-sm text-light/60 border border-primary/10 rounded-lg sm:px-3 py-2 gap-xs">
              <div className="flex justify-between w-full border-b border-primary/10 p-1">
                <span>Penalty rate:</span>
                <div className="flex items-center gap-sm text-light">
                  <span>5.0%</span>
                  <div className="i-ic-round-warning-amber icon-size-5" />
                </div>
              </div>
              <div className="flex justify-between w-full border-b border-primary/10 p-1">
                <span>Penalty period:</span>
                <div className="flex items-center gap-sm text-light">
                  <span>within 1hrs</span>
                  <div className="i-ic-round-warning-amber icon-size-5" />
                </div>
              </div>
              <div className="flex justify-between w-full border-b border-primary/10 p-1">
                <span>Date of staking:</span>
                <div className="flex items-center gap-sm text-light">
                  <span>2023.01.25</span>
                  <div className="i-ic-round-warning-amber icon-size-5" />
                </div>
              </div>
              <div className="flex justify-between w-full p-1">
                <span>Penalty expiry date:</span>
                <div className="flex items-center gap-sm text-light">
                  <span>2023.01.26</span>
                  <div className="i-ic-round-warning-amber icon-size-5" />
                </div>
              </div>
            </div>
            <div className="hidden lg:flex">
              <img
                src={Cero_staking1}
                alt="Cero_staking1"
                className="absolute left-0 bottom-0"
              />
              <img
                src={Cero_staking2}
                alt="Cero_staking2"
                className="absolute right-0 bottom-0"
              />
              <img
                src={Cero_staking3}
                alt="Cero_staking3"
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/5"
              />
            </div>
          </div>

          <div className="flex flex-col gap-lg w-full lg:w-1/2">
            <div className="flex flex-col border border-primary rounded-3xs p-lg gap-lg">
              <div className="flex w-full justify-between text-xl">
                <span className="font-extrabold">Total CERO</span>
                <span>22,311</span>
              </div>
              <div className="flex w-full justify-between text-xl">
                <span className="font-extrabold">Staking fee</span>
                <div className="flex items-center gap-xs">
                  <span>7,9%</span>
                  <span className="flex items-end text-xs text-light/60">
                    1 year APY
                  </span>
                </div>
              </div>
            </div>
            <StakingForms />
          </div>
        </div>
      </PageContainer>
      <img src={Background1} alt="" className="absolute left-0 top-1/2" />
      <img src={Background2} alt="" className="absolute right-0 top-1/2" />
    </>
  );
}
