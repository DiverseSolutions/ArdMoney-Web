import TextLoader from "@/components/shared/TextLoader";
import { formatNumber } from "@/helpers/numbers";
import { Address, useAccount, useBalance, useConnect } from "wagmi";
import { bsc } from "wagmi/chains";
import { useContext, useEffect, useState } from "react";
import BigNumber from "bignumber.js";
import QuoteTokenApproveButton from "../../components/QuoteTokenApproveButton";
import BaseTokenApproveButton from "../../components/BaseTokenApproveButton";
import AddLiquidityButton from "../../components/AddLiquidityButton";
import TokensContext from "../../context/TokensContext";
import PoolContext from "../../context/PoolContext";
import TokenInputsContext from "../../context/TokenInputsContext";
import AddPoolButtonsContext from "../../context/AddPoolButtonsContext";
import ResetStatesContext from "../../context/ResetStatesContext";
import { MetaMaskConnector } from "@wagmi/core/connectors/metaMask";
import { ethers, ZeroAddress } from "ethers";
import { useTranslation } from "react-i18next";
import ConnectWallet from "@controllers/singlePool/components/ConnectWallet";

export default function AddTab() {
  const { t } = useTranslation("singlePool");
  const { baseToken, quoteToken } = useContext(TokensContext);
  const { resetState } = useContext(ResetStatesContext);
  const { data: pool, isSuccess: isPoolDataSuccess } = useContext(PoolContext);

  const { address, isDisconnected: isWalletDisconnected } = useAccount();

  const [isBaseTokenApproved, setIsBaseTokenApproved] = useState(false);
  const [isQuoteTokenApproved, setIsQuoteTokenApproved] = useState(false);

  const [fromInput, setFromInput] = useState<number | "">("");
  const [toInput, setToInput] = useState<number | "">("");

  const [isSwitched, setIsSwitched] = useState(false);
  const [fromToken, setFromToken] = useState(baseToken);
  const [toToken, setToToken] = useState(quoteToken);

  const {
    data: baseTokenBalance,
    isLoading: isBaseTokenBalanceLoading,
    refetch: refetchBaseTokenBalance,
  } = useBalance({
    address: address ?? (ZeroAddress as Address),
    token: fromToken.address,
  });
  const {
    data: quoteTokenBalance,
    isLoading: isQuoteTokenBalanceLoading,
    refetch: refetchQuoteTokenBalance,
  } = useBalance({
    address: address ?? (ZeroAddress as Address),
    token: toToken.address,
  });

  useEffect(() => {
    setFromInput("");
    setToInput("");
    refetchBaseTokenBalance();
    refetchQuoteTokenBalance();
  }, [resetState]);

  function handleFromInput(e: any) {
    if (pool == null) return;

    const value = parseFloat(e.target.value);

    if (BigNumber(value).isGreaterThan("1000000000000000")) return;
    if (Number.isNaN(value)) {
      setFromInput("");
      setToInput("");
      return;
    }
    if (value == 0) {
      setFromInput(value);
      return;
    }

    const result = calculateToInput(e.target.value);

    setFromInput(e.target.value);
    setToInput(result);
  }

  function calculateToInput(amount: any) {
    // ( Token B Supply / Token A Supply ) * Contribution Token A || ( Token A Supply / Token B Supply ) * Contribution Token B
    const tokenContributionAmount = BigNumber(amount);
    const tokenASupply = BigNumber(pool.reserve0);
    const tokenBSupply = BigNumber(pool.reserve1);

    const ratio = !isSwitched
      ? tokenBSupply.dividedBy(tokenASupply)
      : tokenASupply.dividedBy(tokenBSupply);
    const result = ratio.multipliedBy(tokenContributionAmount).toNumber();
    return result;
  }

  function handleSwitchTokens() {
    setFromInput("");
    setToInput("");

    setFromToken(isSwitched ? baseToken : quoteToken);
    setToToken(isSwitched ? quoteToken : baseToken);

    setIsSwitched(!isSwitched);
  }

  function handleMaxBalance() {
    if (baseTokenBalance == undefined) return;
    if (BigNumber(baseTokenBalance.formatted).isZero()) return;

    setFromInput(BigNumber(baseTokenBalance.formatted).toNumber());
    const result = calculateToInput(
      BigNumber(baseTokenBalance.formatted).toNumber()
    );
    setToInput(result);
  }

  return (
    <div className="flex flex-col grow">
      <div className="flex flex-col gap-y-4">
        <div className="py-4 flex flex-col gap-y-4">
          <div className="flex justify-between">
            <p className="subtext text-sm">{t("amount")}</p>
            <p
              className="subtext text-sm flex gap-x-1 cursor-pointer"
              onClick={() => {
                handleMaxBalance();
              }}
            >
              <span>{t("balance")}</span>
              <span>:</span>
              <TextLoader isLoading={isBaseTokenBalanceLoading}>
                <span className="text-white">
                  {formatNumber(baseTokenBalance?.formatted ?? 0, 0, 0)}
                </span>
              </TextLoader>
            </p>
          </div>
          <div className="flex items-center justify-between">
            <input
              min={0}
              value={fromInput}
              onChange={handleFromInput}
              type="number"
              placeholder="0.000"
              className="text-xl w-full placeholder:text-gray-500"
              disabled={isWalletDisconnected || !isPoolDataSuccess}
            />
            <div className="p-2 flex justify-between bg-primary-back rounded-3xs gap-x-6 cursor-pointer">
              <div className="flex overflow-hidden gap-x-2 items-center justify-center grow w-[100px]">
                <img
                  src={fromToken.logo}
                  alt="addBaseTokenLogo"
                  className="h-6"
                />
                <p className="uppercase">{fromToken.symbol}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full justify-center">
          <button
            className="flex p-base border border-white/10 rounded-md btn-animation"
            onClick={handleSwitchTokens}
          >
            <div className="i-ic-outline-swap-vert icon-size-5" />
          </button>
        </div>

        <div className="py-4 flex flex-col gap-y-4">
          <div className="flex justify-between">
            <p className="subtext text-sm">{t("amount")}</p>
            <p className="subtext text-sm flex gap-x-1">
              <span>{t("balance")}</span>
              <span>:</span>
              <TextLoader isLoading={isQuoteTokenBalanceLoading}>
                <span className="text-white">
                  {formatNumber(quoteTokenBalance?.formatted ?? 0, 0, 0)}
                </span>
              </TextLoader>
            </p>
          </div>
          <div className="flex items-center justify-between">
            <input
              min={0}
              value={toInput}
              type="number"
              placeholder="0.000"
              className="text-xl w-full placeholder:text-gray-500 disabled:text-gray-500"
              disabled={true}
            />
            <div className="p-2 flex justify-between bg-primary-back rounded-3xs gap-x-6 cursor-pointer">
              <div className="flex overflow-hidden gap-x-2 items-center justify-center grow w-[100px]">
                <img
                  src={toToken.logo}
                  alt="addBaseTokenLogo"
                  className="h-6 w-6"
                />
                <p className="uppercase">{toToken.symbol}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {baseToken.symbol != "MONT" && quoteToken.symbol != "USDT" && (
        <ConnectWallet>
          <div className="flex flex-col justify-end gap-y-2 grow">
            <AddPoolButtonsContext.Provider
              value={{ isBaseTokenApproved, isQuoteTokenApproved }}
            >
              <TokensContext.Provider
                value={{ baseToken: fromToken, quoteToken: toToken }}
              >
                <TokenInputsContext.Provider
                  value={{
                    fromInput: fromInput == "" ? 0 : fromInput,
                    toInput: toInput == "" ? 0 : toInput,
                  }}
                >
                  <div className="h-auto border border-primary/20 rounded-2xs w-full">
                    <div className="flex gap-3xs py-3xs px-base items-center text-sm border-b border-primary/20">
                      <div className="i-ic-outline-warning w-10 h-10 lg:w-3 lg:h-3 text-light-secondary" />
                      <p className="grow text-xs text-light-secondary">
                        {t("warning")}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-2 gap-y-2">
                    <BaseTokenApproveButton
                      approveState={setIsBaseTokenApproved}
                      balance={baseTokenBalance?.formatted ?? "0"}
                    />
                    <QuoteTokenApproveButton
                      approveState={setIsQuoteTokenApproved}
                      balance={quoteTokenBalance?.formatted ?? "0"}
                    />
                  </div>

                  <AddLiquidityButton
                    resetButtonState={() => {
                      setIsBaseTokenApproved(false);
                      setIsQuoteTokenApproved(false);
                    }}
                  />
                </TokenInputsContext.Provider>
              </TokensContext.Provider>
            </AddPoolButtonsContext.Provider>
          </div>
        </ConnectWallet>
      )}
    </div>
  );
}
