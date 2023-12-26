import useProvider from "@/hooks/useProvider";
import { GlobalAppState } from "@/redux/store";
import { useSelector } from "react-redux";
import ConnectToSupportedNetworkButton from "../web3/ConnectToSupportedNetworkButton";
import ConnectWalletButton from "../web3/ConnectWalletButton";
import { WalletTokenList } from "@constants/TokenList";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { getTokenBalance } from "@/helpers/contracts/token";
import { format18 } from "@/helpers/web3";
import { formatNumber } from "@/helpers/numbers";
import {
  getSARDMRate,
  stakingApproveArdmToken,
  stakingStakeToken,
} from "@/helpers/contracts/sStaking";
import { isEmpty } from "radash";
import { alert } from "@helpers/alert";
import TextLoader from "../shared/TextLoader";
import * as Accordion from "@radix-ui/react-accordion";
import { useTranslation } from "react-i18next";

export default function StakeTab() {
  const { t } = useTranslation();
  const { account } = useSelector((state: GlobalAppState) => state.web3);
  const { chainId } = useSelector((state: GlobalAppState) => state.network);
  const web3Slice = useSelector((state: GlobalAppState) => state.web3);
  const { isUnknown, isConfigured } = useSelector(
    (state: GlobalAppState) => state.network
  );

  const web3 = useProvider();

  const [isApproveDisabled, setIsApproveDisabled] = useState(true);
  const [isContractActionDisabled, setIsContractActionDisabled] =
    useState(true);

  const [isApproveLoading, setIsApproveLoading] = useState(false);
  const [isContractActionLoading, setIsContractActionLoading] = useState(false);

  const [ardmBalance, setArdmBalance] = useState(0);
  const [rate, setRate] = useState(1);

  const [fromInput, setFromInput] = useState(0);
  const toInput = useMemo<number>(calculateToTokenAmont, [fromInput]);

  function calculateToTokenAmont() {
    if (rate == 1) return fromInput * 1;

    return fromInput / rate;
  }

  useEffect(() => {
    setIsApproveDisabled(fromInput != 0 && toInput != 0 ? false : true);
  }, [toInput]);

  useEffect(() => {
    setUpArdmBalance();
    setUpRate();
  }, [web3]);

  async function setUpArdmBalance() {
    let ardmToken = WalletTokenList[chainId].find(
      (token) => token.symbol === "ARDM"
    );
    if (!ardmToken || !account) return;

    const result = await getTokenBalance(web3, ardmToken?.address, account);
    if (result) setArdmBalance(parseFloat(format18(result)));
  }

  async function setUpRate() {
    const result = await getSARDMRate(web3);
    if (!result) return;

    if (parseFloat(result) > 0) {
      setRate(parseFloat(result));
    }
  }

  function handleFromInput(e: FormEvent<HTMLInputElement>) {
    const inputValue = e.currentTarget.value;
    if (isEmpty(inputValue)) {
      setFromInput(0);
      return;
    }

    if (parseFloat(inputValue) > ardmBalance) {
      alert("error", `ARDM ${t("stake:aboveBalance")}`);
      return;
    }

    if (parseFloat(inputValue) > 10 ** 18) {
      alert("error", t("stake:reachedMax"));
      return;
    }

    setFromInput(parseFloat(inputValue));
  }

  async function handleApprove() {
    if (isApproveDisabled || isApproveLoading || fromInput == 0 || toInput == 0)
      return;

    setIsApproveLoading(true);
    try {
      const transaction = await stakingApproveArdmToken(
        web3,
        parseFloat(fromInput.toString())
      );

      await transaction.wait();
      setIsApproveDisabled(true);
      setIsContractActionDisabled(false);

      alert("success", t("stake:successfullyApproved"));
    } catch (e: any) {
      alert("error", e.message);
    }
    setIsApproveLoading(false);
  }

  async function handleContractAction() {
    if (
      isContractActionDisabled ||
      isContractActionLoading ||
      fromInput == 0 ||
      toInput == 0
    )
      return;

    setIsContractActionLoading(true);

    try {
      const transaction = await stakingStakeToken(
        web3,
        parseFloat(fromInput.toString())
      );

      await transaction.wait();

      setIsApproveDisabled(true);
      setIsContractActionDisabled(true);

      alert("success", t("stake:successfullyStaked"));
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (e: any) {
      alert("error", e.message);
    }

    setIsContractActionLoading(false);
  }

  return (
    <div className="mt-7">
      <div className="flex justify-between text-light/60 text-sm w-full mb-base">
        <span>sARDM {t("stake:stake")}</span>
        {isConfigured && web3Slice.isConnected && account != undefined && (
          <div className="flex gap-1 items-center">
            <span>{t("stake:balance")}</span>
            <span>:</span>
            <span className="text-light">
              {formatNumber(ardmBalance, 3, 0)}
            </span>
          </div>
        )}
      </div>

      <div className="flex px-base items-center gap-2 py-sm border border-primary/10 rounded-lg mb-sm">
        <span className="text-light text-xl">ARDM</span>
        <input
          type="number"
          placeholder="0.000"
          value={fromInput == 0 ? "" : fromInput}
          disabled={!isConfigured && true}
          onChange={handleFromInput}
          className="flex disabled text-right w-full bg-transparent outline-none md:text-xl appearance-none"
        />
      </div>
      <h5 className="text-light/60 text-right text-sm mb-lg">
        {formatNumber(toInput)}
      </h5>

      <div className="flex px-base items-center gap-2 py-sm border border-primary/10 rounded-lg mb-sm">
        <span className="text-light/60 text-xl">sARDM</span>
        <input
          placeholder="0"
          disabled
          value={toInput == 0 ? "" : formatNumber(toInput, 3)}
          className="flex disabled text-right w-full bg-transparent outline-none md:text-xl appearance-none"
        />
      </div>
      <Accordion.Root type="single" defaultValue="item-1" collapsible>
        <Accordion.Item className="AccordionItem" value="item-1">
          <Accordion.Header className="AccordionHeader">
            <Accordion.Trigger className="AccordionTrigger w-full">
              <div className="flex items-center justify-between w-full mb-xl gap-1">
                <div className="flex items-center text-sm gap-xs">
                  <div className="p-2 border border-primary/10 rounded-md cursor-pointer">
                    <div className="i-ic-round-warning-amber icon-size-5" />
                  </div>
                  <span className="text-xs sm:text-sm text-white">
                    1 ARDM = {1 / rate} sARDM
                  </span>
                </div>
                <div className="p-2 border border-primary/10  rounded-md cursor-pointer">
                  <div className="i-ic-round-keyboard-arrow-down AccordionChevron transform  relative icon-size-5" />
                </div>
              </div>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="AccordionContent">
            <div className="flex flex-col text-[#EB8100] text-sm mb-lg space-y-2">
              <div className="flex gap-base items-center">
                <div className="flex self-start mt-1 w-2 h-2 flex-shrink-0 bg-[#EB8100] rounded-full whitespace-nowrap"></div>
                <span>{t("stake:accordion1")}</span>
              </div>
            </div>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
      <div className="h-auto">
        {!web3Slice.isConnected && <ConnectWalletButton style="py-sm" />}
        {web3Slice.isConnected && isUnknown && (
          <ConnectToSupportedNetworkButton style="w-full py-sm" />
        )}
        {isConfigured && web3Slice.isConnected && account != undefined && (
          <div className="flex flex-col gap-3xs">
            <div
              className={`btn ${isApproveDisabled && "btn-disabled"}`}
              onClick={handleApprove}
            >
              <TextLoader isLoading={isApproveLoading}>
                {t("stake:approve")}
              </TextLoader>
            </div>
            <div
              className={`btn ${isContractActionDisabled && "btn-disabled"}`}
              onClick={handleContractAction}
            >
              <TextLoader isLoading={isContractActionLoading}>
                {t("stake:stake")}
              </TextLoader>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
