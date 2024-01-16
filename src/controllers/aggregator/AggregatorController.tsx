import ComponentLoader from "@/components/shared/ComponentLoader";
import { formatNumber } from "@/helpers/numbers";
import axios from "axios";
import { useEffect, useState } from "react";
import TokenABI from "@abis/ERC20.json";
import { alert } from "@helpers/alert";

import Background1 from "@assets/images/swap/background1.svg";
import Background2 from "@assets/images/swap/background2.svg";
import clouds_left from "@assets/images/swap/clouds_left.svg";
import gradient_left from "@assets/images/swap/gradient_left.svg";
import clouds_right from "@assets/images/swap/clouds_right.svg";
import gradient_right from "@assets/images/swap/gradient_right.svg";
import { format18, parse18 } from "@/helpers/web3";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import TextLoader from "@/components/shared/TextLoader";
import { useTranslation } from "react-i18next";
import { isEmpty } from "radash";
import { getWriteContract } from "@/helpers/contracts/contract";
import { useSelector } from "react-redux";
import { GlobalAppState } from "@/redux/globalStore";
import useProvider from "@/hooks/useProvider";
import ConnectWalletButton from "@/components/web3/ConnectWalletButton";
import ConnectToSupportedNetworkButton from "@/components/web3/ConnectToSupportedNetworkButton";
import useAggregatorTokenList from "@queries/aggregator/useAggregatorTokenList";
import TokenSelectModal from "./components/TokenSelectModal";
import TokenSelectButton from "./components/TokenSelectButton";

export default function AggregatorController() {
  const {
    data: tokenListData,
    isSuccess: isTokensSuccess,
    isLoading: isTokensLoading,
  } = useAggregatorTokenList();
  const { t } = useTranslation();
  const web3 = useProvider();
  const web3Slice = useSelector((state: GlobalAppState) => state.web3);
  const { isUnknown, isConfigured } = useSelector(
    (state: GlobalAppState) => state.network
  );
  const [fromToken, setFromToken] = useState<any>(null);
  const [toToken, setToToken] = useState<any>(null);
  const [tokenList, setTokenList] = useState<Array<Object>>([]);
  const [infoAccordionIsOpen, setInfoAccordionIsOpen] = useState(true);
  const [rate, setRate] = useState(0);

  const [fromTokenBalance, setFromTokenBalance] = useState(0);

  const [fromTokenModalIsOpen, setFromTokenModalIsOpen] = useState(false);
  const [toTokenModalIsOpen, setToTokenModalIsOpen] = useState(false);

  const [isMinReceivedLoading, setIsMinReceivedLoading] = useState(false);
  const [isAmountOutInputLoading, setIsAmountOutInputLoading] = useState(false);

  const [isRateLoading, setIsRateLoading] = useState(false);
  const [isBalanceLoading, setIsBalanceLoading] = useState(false);

  const [isApproveDisabled, setIsApproveDisabled] = useState(false);
  const [isSwapDisabled, setIsSwapDisabled] = useState(false);

  const [isApproveLoading, setIsApproveLoading] = useState(false);
  const [isSwapLoading, setIsSwapLoading] = useState(false);

  const [amountInInput, setAmountInInput] = useState<number | null>(null);
  const [amountOutInput, setAmountOutInput] = useState<number | null>(null);

  const [minReceiveAmount, setMinReceiveAmount] = useState(0);
  const slippage = 1; // 1%

  useEffect(() => {
    if (isTokensSuccess && tokenListData) {
      const tokens = filterTokenList(tokenListData);
      setFromToken(tokens.find((token: any) => token.symbol == "USDC"));
      setToToken(tokens.find((token: any) => token.symbol == "CAKE"));

      setTokenList(tokens);
    }
  }, [isTokensSuccess]);

  function filterTokenList(tokens: Array<any>): Array<Object> {
    let result = tokens.filter((token: any) => {
      if (token.symbol == "BUSD") return true;
      if (token.symbol == "CAKE") return true;
      if (token.symbol == "DODO") return true;
      if (token.symbol == "USDT") return true;
      if (token.symbol == "USDC") return true;
      if (token.symbol == "ADA") return true;
      if (token.symbol == "UNI") return true;
      if (token.symbol == "DAI") return true;
      if (token.symbol == "ETH") return true;
      if (token.symbol == "WBNB") return true;

      if (token.symbol == "DOGE") return true;
      if (token.symbol == "SHIB") return true;
      if (token.symbol == "XRP") return true;
      if (token.symbol == "DOT") return true;
      if (token.symbol == "BCH") return true;
      if (token.symbol == "MATIC") return true;
      if (token.symbol == "ETH") return true;
      if (token.symbol == "LTC") return true;

      return false;
    });

    return result;
  }

  useEffect(() => {
    if (fromToken) getFromTokenBalance();
  }, [fromToken]);

  useEffect(() => {
    if (fromToken) {
      getRate();
      setAmountInInput(null);
      setAmountOutInput(null);
      setFromTokenBalance(0);
    }
  }, [fromToken]);

  useEffect(() => {
    getQuote();
  }, [amountInInput]);

  useEffect(() => {
    if (isEmpty(amountInInput) && isEmpty(amountOutInput)) {
      setIsApproveDisabled(true);
      setIsSwapDisabled(true);
    } else {
      setIsApproveDisabled(false);
    }
  }, [amountInInput, amountOutInput]);

  async function handleReload() {
    await getRate();
  }

  async function getRate() {
    setIsRateLoading(true);

    const resp = await axios.get(
      "https://open-api.openocean.finance/v3/bsc/quote",
      {
        params: {
          chain: "bsc",
          inTokenAddress: fromToken.address,
          outTokenAddress: toToken.address,
          amount: 1,
          gasPrice: 5,
          slippage: slippage,
        },
      }
    );

    if (resp.status == 200) {
      if (resp.data.code == 200) {
        let data = resp.data.data;
        let amountOutBN = data.outAmount;
        let amountOut = parseFloat(format18(amountOutBN));

        setRate(amountOut);
      }
    }

    setIsRateLoading(false);
  }

  async function getFromTokenBalance() {
    setIsBalanceLoading(true);

    const resp = await axios(
      "https://open-api.openocean.finance/v3/bsc/getBalance",
      {
        params: {
          chain: "bsc",
          account: web3Slice.account,
          inTokenAddress: `${fromToken.address}`,
        },
      }
    );

    if (resp.status == 200) {
      if (resp.data.code == 200) {
        const data = resp.data.data;
        setFromTokenBalance(data[0].balance);
      }
    }

    setIsBalanceLoading(false);
  }

  async function handleApprove() {
    if (isApproveDisabled || isApproveLoading || !fromToken) return;
    if (amountInInput == null) return;
    if (web3 == null) return;
    if (fromTokenBalance == 0) {
      alert("error", `${fromToken.symbol} balance is 0.`);
      return;
    }

    setIsApproveLoading(true);
    try {
      // BNB Contract
      let contractAddress = "0x6352a56caadc4f1e25cd6c75970fa768a3304e64";

      let contract = await getWriteContract(web3, fromToken.address, TokenABI);
      console.log(amountInInput);
      let amountBN = parse18(amountInInput);
      console.log(amountBN.toString());

      let tx = await contract.approve(contractAddress, amountBN.toString());

      await tx.wait();
      setIsApproveDisabled(true);
      setIsSwapDisabled(false);
      alert("success", "Successfully Approved");
    } catch (e: any) {
      alert("error", e.message);
    }
    setIsApproveLoading(false);
  }

  async function getGas() {
    let gasResponse = await axios.get(
      `https://open-api.openocean.finance/v3/bsc/gasPrice`
    );
    if (gasResponse.status == 200) {
      if (gasResponse.data.code == 200) {
        return gasResponse.data.data.standard;
      }
    }
  }

  async function handleSwap() {
    if (isSwapDisabled || isSwapLoading) return;
    if (!fromToken || !toToken) return;
    if (!amountInInput) return;
    if (web3 == null) return;
    if (web3.signer == null) return;

    setIsSwapLoading(true);
    try {
      const gas = await getGas();
      let exchangeAddress = "0x6352a56caadc4f1e25cd6c75970fa768a3304e64";

      const resp = await axios.get(
        "https://open-api.openocean.finance/v3/bsc/swap_quote",
        {
          params: {
            inTokenAddress: fromToken.address,
            outTokenAddress: toToken.address,
            amount: amountInInput,
            gasPrice: gas,
            slippage,
            account: web3Slice.account,
          },
        }
      );

      let exchangeQuoteData = resp.data.data;

      const swapParams = {
        from: exchangeQuoteData.from,
        to: exchangeAddress,
        data: exchangeQuoteData.data,
      };
      let tx = await web3.signer.sendTransaction(swapParams);
      await tx.wait();

      setIsApproveDisabled(true);
      setIsSwapDisabled(true);
      setAmountInInput(null);
      setAmountOutInput(null);
      alert("success", t("alert:swapSuccessful"));
    } catch (e: any) {
      alert("error", e.message);
    }
    setIsSwapLoading(false);
  }

  async function getQuote() {
    if (isEmpty(amountInInput)) {
      setAmountOutInput(null);
      setMinReceiveAmount(0);
      setRate(0);
      return;
    }
    if (fromToken == null) return;
    if (toToken == null) return;

    setIsMinReceivedLoading(true);
    setIsAmountOutInputLoading(true);

    const resp = await axios.get(
      "https://open-api.openocean.finance/v3/bsc/quote",
      {
        params: {
          chain: "bsc",
          inTokenAddress: fromToken.address,
          outTokenAddress: toToken.address,
          amount: amountInInput,
          gasPrice: 5,
          enableDexIds: "1,45,46,51",
          slippage: slippage,
        },
      }
    );

    if (resp.status == 200) {
      if (resp.data.code == 200) {
        let data = resp.data.data;
        let amountOutBN = data.outAmount;
        let amountOut = parseFloat(format18(amountOutBN));
        let slippageAmount = (amountOut * slippage) / 100;

        setAmountOutInput(amountOut);
        setMinReceiveAmount(amountOut - slippageAmount);
      }
    }

    setIsMinReceivedLoading(false);
    setIsAmountOutInputLoading(false);
  }

  function handleSwapIcon() {
    if (fromToken == null || toToken == null) return;
    let temp = fromToken;
    setFromToken(toToken);
    setToToken(temp);
    setAmountInInput(null);
    setAmountOutInput(null);
  }

  return (
    <>
      <div className="py-base flex justify-center w-full">
        <div className="flex mt-2 flex-col p-xl min-h-auto min-w-[300px] md:min-w-[500px] bg-black card-gradient-dark rounded-lg z-5">
          <div className="flex justify-between w-full mb-lg">
            <div className="flex items-center text-white gap-sm">
              <span className="font-lg">Aggregator</span>
            </div>
            <div>
              <button
                className="p-2 border border-white/10 rounded-md btn-animation"
                onClick={handleReload}
              >
                <div className="i-ic-outline-refresh icon-size-5" />
              </button>
            </div>
          </div>
          <div className="flex justify-between w-full text-white/60 text-sm mb-base">
            <span>{t("swap:send")}</span>

            <span>
              <TextLoader isLoading={isBalanceLoading}>
                {fromTokenBalance == 0
                  ? "0"
                  : formatNumber(fromTokenBalance, 2)}
              </TextLoader>
            </span>
          </div>
          <div className="flex justify-between items-center w-full border border-primary/20 rounded-lg text-white p-sm mb-sm">
            <ComponentLoader isLoading={false}>
              <div>
                <ComponentLoader isLoading={isTokensLoading}>
                  <TokenSelectButton
                    clickHandler={() => {
                      setFromTokenModalIsOpen(true);
                    }}
                    logo={fromToken && fromToken.icon}
                    symbol={fromToken && fromToken.symbol}
                  />
                </ComponentLoader>
              </div>
              <div className="flex flex-col pr-2">
                <input
                  type="number"
                  className="input text-lg pl-2xs"
                  min={0}
                  placeholder="0"
                  value={amountInInput == null ? "" : amountInInput}
                  onChange={(e) => {
                    setAmountInInput(parseFloat(e.target.value));
                  }}
                />
                <span className="text-right text-light-secondary text-2xs">
                  {formatNumber(0)}
                </span>
              </div>
            </ComponentLoader>
          </div>

          <div className="flex w-full justify-center my-lg">
            <button
              className="flex p-base border border-white/10 rounded-md btn-animation"
              onClick={handleSwapIcon}
            >
              <div className="i-ic-outline-swap-vert icon-size-5" />
            </button>
          </div>

          <div className="flex justify-between w-full text-white/60 text-sm mb-base">
            <span>{t("swap:receive")}</span>
          </div>

          <div className="flex justify-between items-center w-full border border-primary/20 rounded-lg text-white p-sm mb-sm">
            <ComponentLoader isLoading={false}>
              <div>
                <ComponentLoader isLoading={isTokensLoading}>
                  <TokenSelectButton
                    clickHandler={() => {
                      setToTokenModalIsOpen(true);
                    }}
                    logo={toToken && toToken.icon}
                    symbol={toToken && toToken.symbol}
                  />
                </ComponentLoader>
              </div>
              <TextLoader isLoading={isAmountOutInputLoading}>
                <input
                  type="text"
                  readOnly
                  min={0}
                  className="input pointer-events-none text-white/60 text-lg pl-2xs"
                  placeholder="0"
                  value={
                    amountOutInput == null ? "" : formatNumber(amountOutInput)
                  }
                />
              </TextLoader>
            </ComponentLoader>
          </div>

          <Collapsible
            open={infoAccordionIsOpen}
            onOpenChange={(state) => {
              setInfoAccordionIsOpen(state);
            }}
          >
            <div className="flex justify-between w-full mb-lg">
              <div className="flex items-center text-sm gap-xs">
                <div className="p-2 border border-white/10 rounded-md">
                  <div className="i-ic-round-warning-amber icon-size-5" />
                </div>
                {fromToken && toToken && (
                  <TextLoader isLoading={isRateLoading}>
                    <span className="text-white">
                      1 {fromToken?.symbol} = {formatNumber(rate, 6, "0")}{" "}
                      {toToken?.symbol}
                    </span>
                  </TextLoader>
                )}
              </div>
              <CollapsibleTrigger>
                <div className="btn-animation p-2 border border-white/10 rounded-md">
                  {infoAccordionIsOpen ? (
                    <div
                      className={`i-ic-outline-keyboard-arrow-up text-white icon-size-5`}
                    />
                  ) : (
                    <div
                      className={`i-ic-outline-keyboard-arrow-down text-white icon-size-5`}
                    />
                  )}
                </div>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent>
              <div className="border border-primary/20 rounded-2xs mb-lg">
                <div className="flex gap-3xs py-3xs px-base items-center text-sm border-b border-primary/20">
                  <div className="i-ic-outline-info icon-size-4 text-light-secondary" />
                  <p className="grow text-xs text-light-secondary">
                    {t("swap:minReceive")}
                  </p>
                  <span>
                    <TextLoader isLoading={isMinReceivedLoading}>
                      {formatNumber(minReceiveAmount, 3, "0")}
                    </TextLoader>
                  </span>
                </div>
                <div className="flex gap-3xs py-3xs px-base items-center text-sm border-b border-primary/20">
                  <div className="i-ic-outline-info icon-size-4 text-light-secondary" />
                  <p className="grow text-xs text-light-secondary">
                    {t("swap:slippageTolarance")}
                  </p>
                  <span>
                    1<span className="text-2xs pl-1 relative top-0.5">%</span>
                  </span>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>

          {web3Slice.isConnected && isConfigured && (
            <div className="flex flex-col gap-3xs">
              <div
                className={`btn ${isApproveDisabled && "btn-disabled"}`}
                onClick={handleApprove}
              >
                <TextLoader isLoading={isApproveLoading}>
                  {t("swap:approveButton")}
                </TextLoader>
              </div>
              <div
                className={`btn ${isSwapDisabled && "btn-disabled"}`}
                onClick={handleSwap}
              >
                <TextLoader isLoading={isSwapLoading}>
                  {t("swap:swapButton")}
                </TextLoader>
              </div>
            </div>
          )}

          {!web3Slice.isConnected && <ConnectWalletButton style="py-sm" />}
          {web3Slice.isConnected && isUnknown && (
            <ConnectToSupportedNetworkButton style="w-full py-sm" />
          )}
        </div>

        {tokenList && fromToken && (
          <>
            <TokenSelectModal
              tokens={tokenList.filter(
                (token: any) =>
                  token.symbol !== fromToken.symbol &&
                  token.symbol !== toToken.symbol
              )}
              setToken={setFromToken}
              isOpen={fromTokenModalIsOpen}
              closeHandler={() => {
                setFromTokenModalIsOpen(false);
              }}
            />
            <TokenSelectModal
              tokens={tokenList.filter(
                (token: any) =>
                  token.symbol !== fromToken.symbol &&
                  token.symbol !== toToken.symbol
              )}
              setToken={setToToken}
              isOpen={toTokenModalIsOpen}
              closeHandler={() => {
                setToTokenModalIsOpen(false);
              }}
            />
          </>
        )}

        <img src={Background1} alt="" className="absolute left-0" />
        <img src={Background2} alt="" className="absolute right-0" />
        <img src={clouds_left} alt="" className="absolute left-0" />
        <img src={gradient_left} alt="" className="absolute left-0" />

        <img src={clouds_right} alt="" className="absolute right-0" />
        <img src={gradient_right} alt="" className="absolute right-0" />
      </div>
    </>
  );
}
