import { useSelector } from "react-redux";
import { RootState } from "@redux/store";
import { FormEvent, useEffect, useMemo, useReducer } from "react";

import Background1 from "../assets/images/swap/background1.svg";
import Background2 from "../assets/images/swap/background2.svg";
import clouds_left from "../assets/images/swap/clouds_left.svg";
import gradient_left from "../assets/images/swap/gradient_left.svg";
import clouds_right from "../assets/images/swap/clouds_right.svg";
import gradient_right from "../assets/images/swap/gradient_right.svg";

import TokenSelectButton from "@components/trade/TokenSelectButton";
import ConnectWalletButton from "@components/web3/ConnectWalletButton";
import ConnectToSupportedNetworkButton from "@components/web3/ConnectToSupportedNetworkButton";
import ComponentLoader from "@/components/shared/ComponentLoader";
import TokenSelectionModal from "@/components/modals/TokenSelectionModal";

import { Token } from "@constants/TokenList";
import { dexApi } from "@apis/dexApi";
import { findByAddress } from "@/helpers/dex";
import { alert } from "@helpers/alert";
import { isEmpty, isNumber } from "radash";
import { formatNumber } from "@/helpers/numbers";
import BalanceSection from "@sections/swap/BalanceSection";
import useProvider from "@/hooks/useProvider";
import { ProviderContext } from "@contexts/ProviderContext";
import RateSection from "@sections/swap/RateSection";
import {
  swapInitialState,
  SwapPageActions as Actions,
  swapReducer,
} from "@/reducers/swapReducer";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import PriceImpactSection from "@sections/swap/PriceImpactSection";
import ButtonsSection from "@sections/swap/ButtonsSection";

export default function Swap() {
  const {
    data: pairs,
    isLoading: pairsLoading,
    isFetching: pairsFetching,
    isSuccess: pairsIsSuccess,
    refetch: fetchPairs,
  } = dexApi.useGetTokensPairsQuery({
    refetchOnFocus: true,
    refetchOnReconnect: true,
    pollingInterval: 5 * 60 * 1000,
  });

  const web3 = useProvider();
  const web3Slice = useSelector((state: RootState) => state.web3);
  const { dexList: tokenList } = useSelector((state: RootState) => state.token);
  const { isUnknown } = useSelector((state: RootState) => state.network);

  const [
    {
      fromToken,
      fromInput,
      toToken,
      fromModal,
      toModal,
      rate,
      isMoreInfoOpen,
    },
    dispatcher,
  ] = useReducer(swapReducer, swapInitialState);

  const toInput = useMemo<number | string>(configureReceiveAmount, [fromInput]);
  const toTokenList = useMemo<Array<Token>>(configurePairTokens, [fromToken]);
  const minAmount = useMemo<number>(calculateMinReceiveAmount, [toInput]);

  useEffect(() => {
    if (pairsIsSuccess) dispatcher(Actions.setFromToken(tokenList[0]));
  }, [pairsIsSuccess]);

  function handleSwitchTokens() {
    if (!fromToken || !toToken) return;

    let from = fromToken;
    dispatcher(Actions.setFromInput(""));

    dispatcher(Actions.setFromToken(toToken));
    dispatcher(Actions.setToToken(from));
  }

  async function handleReload() {
    dispatcher(Actions.setFromToken(undefined));
    dispatcher(Actions.setToToken(undefined));

    try {
      await fetchPairs();
      dispatcher(Actions.setFromToken(tokenList[0]));
      alert("success", "Successfully Reloaded");
    } catch (e) {
      alert("error", "Reload Failed");
    }
  }

  function handleFromInputChange(e: FormEvent<HTMLInputElement>) {
    const inputValue = e.currentTarget.value;
    if (isEmpty(inputValue)) {
      dispatcher(Actions.setFromInput(""));
      return;
    }

    dispatcher(Actions.setFromInput(parseFloat(inputValue)));
  }

  return (
    <ProviderContext.Provider value={web3}>
      <div className="py-base flex justify-center w-full">
        <div className="flex flex-col p-xl max-w-[500px] min-h-auto min-w-[423px] card-gradient-dark rounded-lg z-5">
          <div className="flex justify-between w-full mb-lg">
            <div className="flex items-center text-white gap-sm">
              <button
                className="p-2 border border-white/10 rounded-md btn-animation"
                onClick={handleReload}
              >
                <div className="i-ic-outline-refresh icon-size-5" />
              </button>
              <span className="font-lg">Swap</span>
            </div>
            <div>
              <button className="btn-animation p-2 border border-white/10 rounded-md">
                <div className="i-ic-outline-settings icon-size-5" />
              </button>
            </div>
          </div>
          <div className="flex justify-between w-full text-white/60 text-sm mb-base">
            <span>You send</span>
            <BalanceSection token={fromToken} />
          </div>
          <div className="flex justify-between items-center w-full border border-primary/20 rounded-lg text-white p-sm mb-sm">
            <ComponentLoader isLoading={pairsLoading || pairsFetching}>
              <div>
                <TokenSelectButton
                  token={fromToken}
                  clickHandler={() => {
                    dispatcher(Actions.setFromModal(true));
                  }}
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="number"
                  className="input text-lg pl-2xs"
                  placeholder="0"
                  value={fromInput}
                  onChange={handleFromInputChange}
                />
                <span className="text-right text-light-secondary text-2xs">
                  {formatNumber(fromInput, 0)}
                </span>
              </div>
            </ComponentLoader>
          </div>

          <div className="flex w-full justify-center my-lg">
            <button
              className="flex p-base border border-white/10 rounded-md btn-animation"
              onClick={handleSwitchTokens}
            >
              <div className="i-ic-outline-swap-vert icon-size-5" />
            </button>
          </div>

          <div className="flex justify-between w-full text-white/60 text-sm mb-base">
            <span>You recieve</span>
          </div>

          <div className="flex justify-between items-center w-full border border-primary/20 rounded-lg text-white p-sm mb-sm">
            <ComponentLoader isLoading={pairsLoading || pairsFetching}>
              <div>
                <TokenSelectButton
                  token={toToken}
                  clickHandler={() => {
                    dispatcher(Actions.setToModal(true));
                  }}
                />
              </div>
              <input
                type="text"
                readOnly
                className="input pointer-events-none text-white/60 text-lg pl-2xs"
                placeholder="0"
                value={formatNumber(toInput)}
              />
            </ComponentLoader>
          </div>

          <Collapsible
            open={isMoreInfoOpen}
            onOpenChange={(state) =>
              dispatcher(Actions.setSwapMoreInfoCollapsible(state))}
          >
            <div className="flex justify-between w-full mb-lg">
              <div className="flex items-center text-sm gap-xs">
                <div className="p-2 border border-white/10 rounded-md">
                  <div className="i-ic-round-warning-amber icon-size-5" />
                </div>
                <RateSection
                  fromToken={fromToken}
                  toToken={toToken}
                  setRate={(value: number) => {
                    dispatcher(Actions.setRate(value));
                  }}
                />
              </div>
              <CollapsibleTrigger>
                <div className="btn-animation p-2 border border-white/10 rounded-md">
                  {isMoreInfoOpen
                    ? (
                      <div
                        className={`i-ic-outline-keyboard-arrow-up text-white icon-size-5`}
                      />
                    )
                    : (
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
                    Minimum Receive
                  </p>
                  <span>{formatNumber(minAmount ?? 0, 3, 0)}</span>
                </div>
                <div className="flex gap-3xs py-3xs px-base items-center text-sm border-b border-primary/20">
                  <div className="i-ic-outline-info icon-size-4 text-light-secondary" />
                  <p className="grow text-xs text-light-secondary">
                    Price Impact
                  </p>
                  <PriceImpactSection
                    fromInput={fromInput}
                    toInput={toInput}
                    fromToken={fromToken}
                    toToken={toToken}
                  />
                </div>
                <div className="flex gap-3xs py-3xs px-base items-center text-sm border-b border-primary/20">
                  <div className="i-ic-outline-info icon-size-4 text-light-secondary" />
                  <p className="grow text-xs text-light-secondary">
                    Slippage Tolerance
                  </p>
                  <span>
                    10<span className="text-2xs pl-1 relative top-0.5">%</span>
                  </span>
                </div>
                <div className="flex gap-3xs py-3xs px-base items-center text-sm">
                  <div className="i-ic-outline-info icon-size-4 text-light-secondary" />
                  <p className="grow text-xs text-light-secondary">Swap Fee</p>
                  <span>
                    0.3<span className="text-2xs pl-1 relative top-0.5">%</span>
                  </span>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>

          <ButtonsSection
            dispatcher={dispatcher}
            toToken={toToken}
            minAmount={minAmount}
            fromToken={fromToken}
            fromInput={fromInput}
            toInput={toInput}
          />

          {!web3Slice.isConnected && <ConnectWalletButton style="py-sm" />}
          {web3Slice.isConnected && isUnknown && (
            <ConnectToSupportedNetworkButton style="py-sm" />
          )}
        </div>

        <TokenSelectionModal
          tokenList={tokenList}
          setToken={(token: Token) => {
            dispatcher(Actions.setFromToken(token));
          }}
          isOpen={fromModal}
          handleClose={() => {
            dispatcher(Actions.setFromModal(false));
          }}
        />
        <TokenSelectionModal
          tokenList={toTokenList}
          setToken={(token: Token) => {
            dispatcher(Actions.setToToken(token));
          }}
          isOpen={toModal}
          handleClose={() => {
            dispatcher(Actions.setToModal(false));
          }}
        />

        <img src={Background1} alt="" className="absolute left-0" />
        <img src={Background2} alt="" className="absolute right-0" />
        <img src={clouds_left} alt="" className="absolute left-0" />
        <img src={gradient_left} alt="" className="absolute left-0" />

        <img src={clouds_right} alt="" className="absolute right-0" />
        <img src={gradient_right} alt="" className="absolute right-0" />
      </div>
    </ProviderContext.Provider>
  );

  function configurePairTokens() {
    if (!fromToken) return [];
    if (!pairs) return [];

    let resultList: Array<Token> = [];
    let foundPair = pairs.find((token) =>
      findByAddress(token.id, fromToken.address)
    );

    if (foundPair == undefined) return [];

    if (foundPair.pairBase.length != 0) {
      foundPair.pairBase.forEach((token) => {
        let found = tokenList.find((dexToken) =>
          findByAddress(token.token1.id, dexToken.address)
        );
        if (found != undefined) resultList.push(found);
      });
    }

    if (foundPair.pairQuote.length != 0) {
      foundPair.pairQuote.forEach((token) => {
        let found = tokenList.find((dexToken) =>
          findByAddress(token.token0.id, dexToken.address)
        );
        if (found != undefined) resultList.push(found);
      });
    }

    if (resultList.length > 0) {
      dispatcher(Actions.setToToken(resultList[0]));
      return resultList;
    }
    return [];
  }

  function configureReceiveAmount() {
    if (!fromInput || !isNumber(fromInput) || rate == 0) {
      return "";
    }

    return fromInput * rate;
  }

  function calculateMinReceiveAmount() {
    if (fromInput != "" && toInput != "") {
      let amountOut = parseFloat(toInput.toString());
      let slippageTolerancePercentage = 10;
      let result = amountOut -
        ((amountOut * slippageTolerancePercentage) / 100);
      return result;
    }

    return 0;
  }
}
