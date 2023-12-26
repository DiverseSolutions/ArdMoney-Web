import TextLoader from "@/components/shared/TextLoader";
import { formatNumber } from "@/helpers/numbers";
import { useContext, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { Address, useAccount, useBalance, useToken } from "wagmi";
import BigNumber from "bignumber.js";
import LpTokenApproveButton from "../../components/LpTokenApproveButton";
import PoolContext from "../../context/PoolContext";
import LpInputsContext from "../../context/LpInputsContext";
import TokensContext from "../../context/TokensContext";
import RemovePoolButtonsContext from "../../context/RemovePoolButtonsContext";
import RemoveLiquidityButton from "../../components/RemoveLiquidityButton";
import ResetStatesContext from "../../context/ResetStatesContext";
import { useTranslation } from "react-i18next";
import ConnectWallet from "@controllers/singlePool/components/ConnectWallet";

export default function RemoveTab() {
  const { t } = useTranslation("singlePool");
  const { poolId: poolAddress } = useParams();
  const { baseToken, quoteToken } = useContext(TokensContext);
  const { data: pool } = useContext(PoolContext);
  const { resetState } = useContext(ResetStatesContext);
  const [lpInput, setLpInput] = useState<number | "">("");
  const { address, isDisconnected: isWalletDisconnected } = useAccount();
  const {
    data: lpTokenBalance,
    isSuccess: isLpTokenBalanceSuccess,
    isLoading: isLpTokenBalanceLoading,
    isFetching: isLpTokenBalanceFetching,
    refetch: refetchLpTokenBalance,
  } = useBalance({
    address,
    token: poolAddress as Address,
  });
  const { data: lpToken } = useToken({ address: poolAddress as Address });

  useEffect(() => {
    refetchLpTokenBalance();
    setLpInput("");
  }, [resetState]);

  function handleLpInput(e: any) {
    const value = parseFloat(e.target.value);
    if (BigNumber(value).isGreaterThan("1000000000000000")) return;
    if (Number.isNaN(value)) {
      setLpInput("");
      return;
    }
    if (value == 0) {
      setLpInput(value);
      return;
    }
    if (value < 0) {
      setLpInput(0);
      return;
    }

    setLpInput(value);
  }

  const baseLpTokenBalance = useMemo(() => {
    if (
      !isLpTokenBalanceSuccess ||
      !lpTokenBalance ||
      !lpToken ||
      !pool ||
      lpInput == ""
    )
      return 0;
    return calculateLpTokenTokenBalance(
      lpInput.toString(),
      lpToken.totalSupply.formatted,
      pool.reserve0
    );
  }, [lpInput, lpTokenBalance, lpToken, pool]);

  const quoteLpTokenBalance = useMemo(() => {
    if (
      !isLpTokenBalanceSuccess ||
      !lpTokenBalance ||
      !lpToken ||
      !pool ||
      lpInput == ""
    )
      return 0;
    return calculateLpTokenTokenBalance(
      lpInput.toString(),
      lpToken.totalSupply.formatted,
      pool.reserve1
    );
  }, [lpInput, lpTokenBalance, lpToken, pool]);

  const [isLpTokenApproved, setIsLpTokenApproved] = useState(false);

  function handleMaxBalance() {
    if (lpTokenBalance == undefined) return;
    if (BigNumber(lpTokenBalance.formatted).isZero()) return;

    setLpInput(BigNumber(lpTokenBalance.formatted).toNumber());
  }

  return (
    <div className="flex flex-col grow">
      <div className="flex flex-col gap-y-4">
        <div className="py-4 flex flex-col gap-y-4">
          <div
            className="flex justify-between cursor-pointer"
            onClick={() => {
              handleMaxBalance();
            }}
          >
            <p className="subtext text-sm">{t("amount")}</p>
            <TextLoader
              isLoading={isLpTokenBalanceLoading || isLpTokenBalanceFetching}
            >
              <span className="text-white text-sm">
                <span className="subtext">{t("balance")} :</span>{" "}
                {formatNumber(lpTokenBalance?.formatted ?? 0, 0, 0)}
              </span>
            </TextLoader>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <input
              value={lpInput}
              disabled={isWalletDisconnected}
              type="number"
              placeholder="0.000"
              className="text-xl text-center lg:text-left w-full placeholder:text-gray-500"
              onChange={handleLpInput}
            />
            <div className="p-2 flex justify-between bg-primary-back rounded-3xs gap-x-6">
              <div className="flex overflow-hidden gap-x-2 items-center justify-center grow w-[200px]">
                <p>
                  <span className="uppercase">
                    {baseToken.symbol} / {quoteToken.symbol}
                  </span>{" "}
                  LP Token
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center p-4 justify-between bg-primary-back rounded-3xs border-0.5 border-primary gap-y-2">
          <div className="flex gap-x-2 items-center">
            <img src={baseToken.logo} alt="logo" className="w-7 h-7" />
            <p className="font-bold text-xl">{baseToken.symbol}</p>
          </div>
          <div className="flex flex-col items-center lg:items-end gap-y-2">
            <p className="text-lg">{baseLpTokenBalance}</p>
            <p className="subtext">{t("recieveAmount")}</p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center p-4 justify-between bg-primary-back rounded-3xs border-0.5 border-primary gap-y-2">
          <div className="flex gap-x-2 items-center">
            <img src={quoteToken.logo} alt="logo" className="w-7 h-7" />
            <p className="font-bold text-xl">{quoteToken.symbol}</p>
          </div>
          <div className="flex flex-col items-center lg:items-end gap-y-2">
            <p className="text-lg">{quoteLpTokenBalance}</p>
            <p className="subtext">{t("recieveAmount")}</p>
          </div>
        </div>
      </div>

      {baseToken.symbol != "MONT" && quoteToken != "USDT" && (
        <ConnectWallet>
          <div className="flex flex-col justify-end gap-y-2 mt-4 lg:mt-0 grow">
            <RemovePoolButtonsContext.Provider value={isLpTokenApproved}>
              <LpInputsContext.Provider value={lpInput == "" ? 0 : lpInput}>
                <div className="h-auto border border-primary/20 rounded-2xs w-full">
                  <div className="flex gap-3xs py-3xs px-base items-center text-sm border-b border-primary/20">
                    <div className="i-ic-outline-warning w-10 h-10 lg:w-3 lg:h-3 text-light-secondary" />
                    <p className="grow text-xs text-light-secondary">
                      {t("warning")}
                    </p>
                  </div>
                </div>

                <LpTokenApproveButton
                  balance={lpTokenBalance?.formatted ?? "0"}
                  text={`${baseToken.symbol}/${quoteToken.symbol}`}
                  approveState={setIsLpTokenApproved}
                />
                <RemoveLiquidityButton
                  resetButtonState={() => {
                    setIsLpTokenApproved(false);
                  }}
                />
              </LpInputsContext.Provider>
            </RemovePoolButtonsContext.Provider>
          </div>
        </ConnectWallet>
      )}
    </div>
  );

  function calculateLpTokenTokenBalance(
    lpTokenBalance: string,
    lpTokenTotalSupply: string,
    reserve: any
  ) {
    const balance = BigNumber(lpTokenBalance);
    const totalSupply = BigNumber(lpTokenTotalSupply);
    const tokenReserve = BigNumber(reserve);
    const formulaResult = balance
      .dividedBy(totalSupply)
      .multipliedBy(tokenReserve)
      .toNumber();

    return formulaResult;
  }
}
