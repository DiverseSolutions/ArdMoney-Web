import Background1 from "@assets/images/swap/background1.svg";
import Background2 from "@assets/images/swap/background2.svg";

import * as Tabs from "@radix-ui/react-tabs";

import PageContainer from "@/components/layouts/PageContainer";
import Info from "@components/stake/Info";
import StakingForms from "@/components/stake/StakeForms";
import { ProviderContext } from "@contexts/ProviderContext";
import useProvider from "@/hooks/useProvider";
import StakeTab from "@/components/stake/StakeTab";
import UnStakeTab from "@/components/stake/UnstakeTab";
import { useState } from "react";

type TabState = "unstake" | "stake";

export default function SingleStake() {
  const [tab, setTab] = useState<TabState>("stake");
  const web3 = useProvider();

  return (
    <>
      <ProviderContext.Provider value={web3}>
        <div className="flex flex-col gap-xl">
          <span className="text-2xl lg:text-4xl text-light font-extrabold">
            sARDM Staking
          </span>
          <Info />

          <div className="flex flex-col lg:flex-row gap-lg text-light w-full h-full">
            <div className="relative md:min-h-[48rem] flex flex-col p-lg w-full lg:w-1/2 rounded-3xs border border-[#ABFC86] h-full">
              <span className="text-xl mb-lg font-extrabold">MY ASSETS</span>
              <span className="text-base mb-2xl">Balance</span>
              <div className="flex items-center gap-xs mb-sm p-sm border border-primary/10 rounded-lg">
                <span>100,000</span>
                <span className="flex items-end text-xs text-light/60">
                  ARDM
                </span>
              </div>
              <div className="flex items-center gap-xs mb-2xl p-sm border border-primary/10 rounded-lg">
                <span>0</span>
                <span className="flex items-end text-xs text-light/60">
                  sARDM
                </span>
              </div>
              <span className="text-base mb-2xl">Amount of Stake</span>
              <div className="flex items-center gap-xs mb-lg p-sm border border-primary/10 rounded-lg">
                <span>0</span>
                <span className="flex items-end text-xs text-light/60">
                  ARDM
                </span>
              </div>
            </div>
            <div className="flex flex-col grow gap-lg w-full lg:w-1/2">
              <StakingInfo />
              <StakingForms tab={tab} setTab={setTab}>
                <Tabs.Content value={"stake"}>
                  <StakeTab />
                </Tabs.Content>

                <Tabs.Content value={"unstake"}>
                  <UnStakeTab />
                </Tabs.Content>
              </StakingForms>
            </div>
          </div>
        </div>
        <img src={Background1} alt="" className="absolute left-0 top-1/2" />
        <img src={Background2} alt="" className="absolute right-0 top-1/2" />
      </ProviderContext.Provider>
    </>
  );
}

function StakingInfo() {
  // const web3 = useContext(ProviderContext);
  return (
    <div className="flex flex-col border border-primary rounded-3xs p-lg gap-lg">
      <div className="flex w-full justify-between text-xl">
        <span className="font-extrabold">Total ARDM</span>
        <span>22,311</span>
      </div>
      <div className="flex w-full justify-between text-xl">
        <span className="font-extrabold">APY</span>
        <div className="flex items-center gap-xs">
          <span>7,9%</span>
          <span className="flex items-end text-xs text-light/60">1 year</span>
        </div>
      </div>
    </div>
  );
}
