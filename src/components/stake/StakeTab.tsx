import useProvider from "@/hooks/useProvider";
import { RootState } from "@/redux/store";
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

export default function StakeTab() {
  const { account } = useSelector((state: RootState) => state.web3);
  const { chainId } = useSelector((state: RootState) => state.network);
  const web3Slice = useSelector((state: RootState) => state.web3);
  const { isUnknown } = useSelector((state: RootState) => state.network);

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
      alert("error", "Above Balance");
      return;
    }

    if (parseFloat(inputValue) > 10 ** 18) {
      alert("error", "Reached Max");
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

      alert("success", "Successfully Approved");
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

      alert("success", "Successfully Unstaked");
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
        <span>sARDM Stake</span>
        {account != undefined && (
          <div className="flex gap-1 items-center">
            <span>Balance</span>
            <span>:</span>
            <span className="text-light">{formatNumber(ardmBalance)}</span>
          </div>
        )}
      </div>

      <div className="flex px-base items-center gap-2 py-sm border border-primary/10 rounded-lg mb-sm">
        <span className="text-light text-xl">ARDM</span>
        <input
          type="number"
          placeholder="0.000"
          value={fromInput == 0 ? "" : fromInput}
          onChange={handleFromInput}
          className="flex disabled text-right w-full bg-transparent outline-none md:text-xl appearance-none"
        />
      </div>

      <div className="flex px-base items-center gap-2 py-sm border border-primary/10 rounded-lg mb-sm">
        <span className="text-light/60 text-xl">sARDM</span>
        <input
          type="number"
          placeholder="0"
          disabled
          value={toInput == 0 ? "" : toInput}
          className="flex disabled text-right w-full bg-transparent outline-none md:text-xl appearance-none"
        />
      </div>
      <h5 className="text-light/60 text-right text-sm mb-lg">0.00</h5>

      <div className="flex items-center justify-between w-full mb-xl gap-1">
        <div className="flex items-center text-sm gap-xs">
          <div className="p-2 border border-primary/10 rounded-md cursor-pointer">
            <div className="i-ic-round-warning-amber icon-size-5" />
          </div>
          <span className="text-xs sm:text-sm text-white">
            1 ARDM = {1 / rate} sARDM
          </span>
        </div>
        <div className="p-2 border border-primary/10 rounded-md cursor-pointer">
          <div className="i-ic-round-keyboard-arrow-down icon-size-5" />
        </div>
      </div>

      <div className="flex flex-col text-[#EB8100] text-sm mb-lg space-y-2">
        <div className="flex gap-base items-center">
          <div className="flex self-start mt-1 w-2 h-2 flex-shrink-0 bg-[#EB8100] rounded-full whitespace-nowrap"></div>
          <span>
            Please be aware that this action is executed via a blockchain smart
            contract and is recorded permanently. Therefore, it cannot be undone
          </span>
        </div>
      </div>
      <div className="h-auto">
        {!web3Slice.isConnected && <ConnectWalletButton style="py-sm" />}
        {web3Slice.isConnected && isUnknown && (
          <ConnectToSupportedNetworkButton style="w-full py-sm" />
        )}
        {web3Slice.isConnected && (
          <div className="flex flex-col gap-3xs">
            <div
              className={`btn ${isApproveDisabled && "btn-disabled"}`}
              onClick={handleApprove}
            >
              <TextLoader isLoading={isApproveLoading}>Approve</TextLoader>
            </div>
            <div
              className={`btn ${isContractActionDisabled && "btn-disabled"}`}
              onClick={handleContractAction}
            >
              <TextLoader isLoading={isContractActionLoading}>Stake</TextLoader>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
