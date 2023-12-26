import TextLoader from "@/components/shared/TextLoader";
import { formatNumber } from "@/helpers/numbers";
import BigNumber from "bignumber.js";
import { Address, useAccount, useBalance, useConnect, useToken } from "wagmi";
import { useContext, useEffect, useMemo } from "react";
import TokensContext from "../context/TokensContext";
import { useParams } from "react-router-dom";
import PoolContext from "../context/PoolContext";
import ResetStatesContext from "../context/ResetStatesContext";
import { ZeroAddress } from "ethers";
import { useTranslation } from "react-i18next";

export default function PoolStatisticsSection() {
  const { t } = useTranslation("singlePool");
  const { poolId: poolAddress } = useParams();
  const { address } = useAccount();
  const { baseToken, quoteToken } = useContext(TokensContext);
  const { resetState } = useContext(ResetStatesContext);
  const { data: pool, isLoading, isFetching } = useContext(PoolContext);
  const {
    data: lpTokenBalance,
    isSuccess: isLpTokenBalanceSuccess,
    isLoading: isLpTokenBalanceLoading,
    isFetching: isLpTokenBalanceFetching,
    refetch: refetchLpTokenBalance,
  } = useBalance({
    address: address ?? (ZeroAddress as Address),
    token: poolAddress as Address,
  });
  const { data: lpToken, isLoading: isLpTokenLoading } = useToken({
    address: poolAddress as Address,
  });

  const baseLpTokenBalance = useMemo(() => {
    if (!isLpTokenBalanceSuccess || !lpTokenBalance || !lpToken || !pool)
      return 0;
    return calculateLpTokenTokenBalance(
      lpTokenBalance.formatted,
      lpToken.totalSupply.formatted,
      pool.reserve0
    );
  }, [lpTokenBalance, lpToken, pool]);

  const quoteLpTokenBalance = useMemo(() => {
    if (!isLpTokenBalanceSuccess || !lpTokenBalance || !lpToken || !pool)
      return 0;
    return calculateLpTokenTokenBalance(
      lpTokenBalance.formatted,
      lpToken.totalSupply.formatted,
      pool.reserve1
    );
  }, [lpTokenBalance, lpToken, pool]);

  useEffect(() => {
    refetchLpTokenBalance();
  }, [resetState]);

  return (
    <div className="flex flex-col gap-y-6">
      <div className="flex flex-col gap-y-4 lg:gap-y-0">
        <div className="flex flex-col lg:flex-row items-center p-4 justify-between bg-primary-back gap-y-4 rounded-3xs border-0.5 border-primary ">
          <p className="font-bold text-xl">{t("TVL")}</p>
          <div className="flex flex-col items-center lg:items-end">
            <TextLoader isLoading={isLoading || isFetching}>
              <p className="text-lg">
                {formatNumber(
                  BigNumber(pool?.reserve0).plus(pool?.reserve1).toNumber()
                )}
              </p>
            </TextLoader>
            <p className="subtext">{t("amount")}</p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-y-4 items-center p-4 justify-between">
          <div className="flex items-center gap-x-2">
            <img src={baseToken.logo} className="w-6 h-6" alt="baseTokenLogo" />
            <p className="text-lg font-bold uppercase">{baseToken.symbol}</p>
          </div>
          <div className="flex flex-col items-center lg:items-end">
            <TextLoader isLoading={isLoading || isFetching}>
              <p className="text-lg">{formatNumber(pool?.reserve0)}</p>
            </TextLoader>
            <p className="subtext">{t("totalInPool")}</p>
          </div>
        </div>
        <div className="flex flex-col items-center p-4 lg:items-end">
          <div className="flex flex-col items-end">
            <TextLoader isLoading={isLoading || isFetching}>
              <p className="text-lg">{formatNumber(pool?.token1Price)}</p>
            </TextLoader>
            <p className="subtext">{t("price")}</p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-y-4 items-center p-4 justify-between">
          <div className="flex items-center gap-x-2">
            <img
              src={quoteToken.logo}
              className="w-6 h-6"
              alt="quoteTokenLogo"
            />
            <p className="text-lg font-bold uppercase">{quoteToken.symbol}</p>
          </div>
          <div className="flex flex-col items-center lg:items-end">
            <TextLoader isLoading={isLoading || isFetching}>
              <p className="text-lg">{formatNumber(pool?.reserve1)}</p>
            </TextLoader>
            <p className="subtext">{t("totalInPool")}</p>
          </div>
        </div>
        <div className="flex flex-col items-center p-4 lg:items-end">
          <div className="flex flex-col items-end">
            <TextLoader isLoading={isLoading || isFetching}>
              <p className="text-lg">{formatNumber(pool?.token0Price)}</p>
            </TextLoader>
            <p className="subtext">{t("price")}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center p-4 justify-between bg-primary-back rounded-3xs border-0.5 border-primary ">
          <p className="font-bold text-xl">{t("my")} LP</p>
          <div className="flex flex-col items-end">
            <TextLoader
              isLoading={isLpTokenBalanceLoading || isLpTokenBalanceFetching}
            >
              <p className="text-lg">
                {formatNumber(lpTokenBalance?.formatted ?? "0", 0)}
              </p>
            </TextLoader>
            <p className="subtext">LP {t("amount")}</p>
          </div>
        </div>
        <div className="flex items-center p-4 justify-between">
          <p className="text-lg uppercase">{baseToken.symbol}</p>
          <div className="flex flex-col items-end">
            <TextLoader
              isLoading={
                isLpTokenLoading ||
                isLoading ||
                isLpTokenBalanceLoading ||
                isLpTokenBalanceFetching
              }
            >
              <p className="text-lg">
                {formatNumber(baseLpTokenBalance, 0, 0)}
              </p>
            </TextLoader>
            <p className="subtext">{t("amount")}</p>
          </div>
        </div>
        <div className="flex items-center p-4 justify-between">
          <p className="text-lg uppercase">{quoteToken.symbol}</p>
          <div className="flex flex-col items-end">
            <TextLoader
              isLoading={
                isLpTokenLoading ||
                isLoading ||
                isLpTokenBalanceLoading ||
                isLpTokenBalanceFetching
              }
            >
              <p className="text-lg">
                {formatNumber(quoteLpTokenBalance, 0, 0)}
              </p>
            </TextLoader>
            <p className="subtext">{t("amount")}</p>
          </div>
        </div>
      </div>
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
