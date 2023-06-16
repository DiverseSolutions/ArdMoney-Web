import useProvider from "@/hooks/useProvider";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Button from "../shared/Button";
import { WalletTokenList } from "@constants/TokenList";
import ConnectToSupportedNetworkButton from "../web3/ConnectToSupportedNetworkButton";
import ConnectWalletButton from "../web3/ConnectWalletButton";
import { getTokenBalance } from "@/helpers/contracts/token";
import { format18 } from "@/helpers/web3";
import { formatNumber } from "@/helpers/numbers";
import { getSARDMRate } from "@/helpers/contracts/sStaking";

export default function UnStakeTab() {
  const { account } = useSelector((state: RootState) => state.web3);
  const web3 = useProvider();
  const { chainId } = useSelector((state: RootState) => state.network);
  const [sArdmBalance, setSArdmBalance] = useState("0");
  const [rate, setRate] = useState(1);
  const web3Slice = useSelector((state: RootState) => state.web3);
  const { isUnknown } = useSelector((state: RootState) => state.network);

  useEffect(() => {
    setUpsArdmBalance();
    setUpRate();
  }, [web3]);

  async function setUpRate() {
    const result = await getSARDMRate(web3);
    if (!result) return;

    if (parseFloat(result) > 0) {
      setRate(parseFloat(result));
    }
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
    <div className="mt-7">
      <div className="flex justify-between text-light/60 text-sm w-full mb-base">
        <span>sARDM Unstake</span>
        {!isUnknown && (
          <div className="flex gap-1 items-center">
            <span>Balance</span>
            <span>:</span>
            <span className="text-light">{formatNumber(sArdmBalance)}</span>
          </div>
        )}
      </div>

      <div className="flex px-base items-center gap-2 py-sm border border-primary/10 rounded-lg mb-sm">
        <span className="text-light text-xl">sARDM</span>
        <input
          type="number"
          placeholder="0.000"
          name=""
          className="flex disabled text-right w-full bg-transparent outline-none md:text-xl appearance-none"
        />
      </div>

      <div className="flex px-base items-center gap-2 py-sm border border-primary/10 rounded-lg mb-sm">
        <span className="text-light/60 text-xl">ARDM</span>
        <input
          type="number"
          placeholder="0"
          disabled
          name=""
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
            1 sARDM = {1 * rate} ARDM
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
        {web3Slice.isConnected && <Button children={"Stake"} />}
      </div>
    </div>
  );
}
