import Background1 from "@assets/images/swap/background1.svg";
import Background2 from "@assets/images/swap/background2.svg";

import * as Tabs from "@radix-ui/react-tabs";

import Info from "@components/stake/Info";
import StakingForms from "@/components/stake/StakeForms";
import { ProviderContext } from "@contexts/ProviderContext";
import useProvider from "@/hooks/useProvider";
import StakeTab from "@/components/stake/StakeTab";
import UnStakeTab from "@/components/stake/UnstakeTab";
import { useContext, useEffect, useState } from "react";
import { getTotalLockedARDM } from "@/helpers/contracts/sStaking";
import { getTokenBalance } from "@/helpers/contracts/token";
import { useSelector } from "react-redux";
import { WalletTokenList } from "@constants/TokenList";
import { RootState } from "@/redux/store";
import { format18, parse18 } from "@/helpers/web3";
import { formatNumber } from "@/helpers/numbers";
import { useTranslation } from "react-i18next";

type TabState = "unstake" | "stake";

export default function SingleStake() {
  const { t } = useTranslation();
  const { account } = useSelector((state: RootState) => state.web3);
  const { chainId } = useSelector((state: RootState) => state.network);
  const [tab, setTab] = useState<TabState>("stake");
  const [ardmBalance, setArdmBalance] = useState("0");
  const [sArdmBalance, setSArdmBalance] = useState("0");
  const web3 = useProvider();

  useEffect(() => {
    setUpArdmBalance();
    setUpsArdmBalance();
  }, [web3]);

  async function setUpArdmBalance() {
    let ardmToken = WalletTokenList[chainId].find(
      (token) => token.symbol === "ARDM"
    );
    if (!ardmToken || !account) return;

    const result = await getTokenBalance(web3, ardmToken?.address, account);
    if (result) setArdmBalance(format18(result));
  }

  async function setUpsArdmBalance() {
    let sArdmToken = WalletTokenList[chainId].find(
      (token) => token.symbol === "sARDM"
    );
    if (!sArdmToken || !account) return;

    const result = await getTokenBalance(web3, sArdmToken?.address, account);
    if (result) setSArdmBalance(format18(result));
  }

  return (
    <>
      <ProviderContext.Provider value={web3}>
        <div className="flex flex-col gap-xl">
          <span className="text-2xl lg:text-4xl text-light font-extrabold">
            {t("stake:title")}
          </span>
          <Info />

          <div className="flex flex-col lg:flex-row gap-lg text-light w-full h-full">
            <div className="relative md:min-h-[48rem] flex flex-col p-lg w-full lg:w-1/2 rounded-3xs border border-[#ABFC86] h-full">
              <span className="text-xl mb-lg font-extrabold">
                {t("stake:myAssets")}
              </span>
              <span className="text-base mb-2xl">{t("stake:balance")}</span>
              <div className="flex items-center gap-xs mb-sm p-sm border border-primary/10 rounded-lg">
                <span>{formatNumber(ardmBalance)}</span>
                <span className="flex items-end text-xs text-light/60">
                  ARDM
                </span>
              </div>
              <div className="flex items-center gap-xs mb-2xl p-sm border border-primary/10 rounded-lg">
                <span>{formatNumber(sArdmBalance, 3, 0)}</span>
                <span className="flex items-end text-xs text-light/60">
                  sARDM
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

        <img
          src={Background1}
          alt=""
          className="absolute -z-10  left-0 top-1/2"
        />
        <img
          src={Background2}
          alt=""
          className="absolute -z-10  right-0 top-1/2"
        />
      </ProviderContext.Provider>
    </>
  );
}

function StakingInfo() {
  const { t } = useTranslation();
  const web3 = useContext(ProviderContext);
  const [totalLockedARDM, setTotalLockedARDM] = useState(0);

  useEffect(() => {
    setUpTotalLockedARDM();
  }, [web3]);

  async function setUpTotalLockedARDM() {
    const result = await getTotalLockedARDM(web3);
    if (result) setTotalLockedARDM(parseFloat(result));
  }

  return (
    <div className="flex flex-col border border-primary rounded-3xs p-lg gap-lg">
      <div className="flex w-full justify-between text-xl">
        <span className="font-extrabold">{t("stake:total")} ARDM</span>
        <span>{formatNumber(totalLockedARDM, 0)}</span>
      </div>
      <div className="flex w-full justify-between text-xl">
        <span className="font-extrabold">{t("stake:apy")}</span>
        <div className="flex items-center gap-xs">
          <span>7,2%</span>
          <span className="flex items-end text-xs text-light/60">
            1 {t("stake:year")}
          </span>
        </div>
      </div>
    </div>
  );
}
