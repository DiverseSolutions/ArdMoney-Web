import { useSelector } from "react-redux";
import { RootState } from "@redux/store";
import { FormEvent, useEffect, useMemo, useState } from "react";

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

export default function Swap() {
  const web3 = useProvider()
  const { data: pairs, isLoading: pairsLoading,isFetching: pairsFetching, isSuccess: pairsIsSuccess , refetch : fetchPairs } =
    dexApi.useGetTokensPairsQuery({
      refetchOnFocus: true,
      refetchOnReconnect: true,
      pollingInterval: 5 * 60 * 1000,
    });

  const [fromToken, setFromToken] = useState<Token | undefined>(undefined);
  const [toToken, setToToken] = useState<Token | undefined>(undefined);

  const [fromTokenModal, setFromTokenModal] = useState(false);
  const [toTokenModal, setToTokenModal] = useState(false);

  const [rate,setRate] = useState(0);

  const [fromInput,setFromInput] = useState<number | string>("")

  const web3Slice = useSelector((state: RootState) => state.web3);
  const { dexList: tokenList } = useSelector((state: RootState) => state.token);
  const { isUnknown } = useSelector((state: RootState) => state.network);

  const toInput = useMemo<number | string>(configureReceiveAmount, [fromInput])
  const toTokenList = useMemo<Array<Token>>(configurePairTokens, [fromToken])

  useEffect(() => {
    if(pairsIsSuccess) setFromToken(tokenList[0])
  }, [pairsIsSuccess]);

  function handleSwitchTokens() {
    if (!fromToken || !toToken) return;

    let from = fromToken;
    setFromInput("");
    setFromToken(toToken);
    setToToken(from);
  }

  async function handleReload(){
    setFromToken(undefined)
    setToToken(undefined)

    try{
      await fetchPairs()
      setFromToken(tokenList[0])
      alert("success","Successfully Reloaded")
    }catch(e){
      alert("error","Reload Failed")
    }
  }

  function handleFromInputChange(e:FormEvent<HTMLInputElement>){
    const inputValue = e.currentTarget.value
    if(isEmpty(inputValue)){
      setFromInput("");
      return;
    }

    setFromInput(parseFloat(inputValue))
  }

  return (
    <ProviderContext.Provider value={web3} >
      <div className="py-base flex justify-center w-full">
        <div className="flex flex-col p-xl max-w-[500px] min-h-auto min-w-[423px] card-gradient-dark rounded-lg z-5">
          <div className="flex justify-between w-full mb-lg">
            <div className="flex items-center text-white gap-sm">
              <button className="p-2 border border-white/10 rounded-md btn-animation" onClick={handleReload}>
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
                    setFromTokenModal(true);
                  }}
                />
              </div>
              <div className="flex flex-col">
                <input type="number" className="input text-lg pl-2xs" placeholder="0" value={fromInput} onChange={handleFromInputChange} />
                <span className="text-right text-light-secondary text-2xs">{formatNumber(fromInput,0)}</span>
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
                    setToTokenModal(true);
                  }}
                />
              </div>
              <input type="text" readOnly className="input pointer-events-none text-white/60 text-lg pl-2xs" placeholder="0" value={formatNumber(toInput)} />
            </ComponentLoader>
          </div>

          <div className="flex justify-between w-full mb-lg">
            <div className="flex items-center text-sm gap-xs">
              <div className="p-2 border border-white/10 rounded-md">
                <div className="i-ic-round-warning-amber icon-size-5" />
              </div>
              <RateSection fromToken={fromToken} toToken={toToken} setRate={setRate} />
            </div>
            <div className="p-2 border border-white/10 rounded-md">
              <div className="i-ic-round-keyboard-arrow-down icon-size-5" />
            </div>
          </div>

          {!web3Slice.isConnected && <ConnectWalletButton style="py-sm"  />}
          {web3Slice.isConnected && isUnknown && (
            <ConnectToSupportedNetworkButton style="py-sm" />
          )}
        </div>

        <TokenSelectionModal
          tokenList={tokenList}
          setToken={(token: Token) => {
            setFromToken(token);
          }}
          isOpen={fromTokenModal}
          handleClose={() => {
            setFromTokenModal(false);
          }}
        />
        <TokenSelectionModal
          tokenList={toTokenList}
          setToken={(token: Token) => {
            setToToken(token);
          }}
          isOpen={toTokenModal}
          handleClose={() => {
            setToTokenModal(false);
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

    if (resultList.length > 0){
      setToToken(resultList[0])
      return resultList
    } 
    return []
  }

  function configureReceiveAmount(){
    if(!fromInput || !isNumber(fromInput) || rate == 0) {
      return "";
    }

    return fromInput * rate
  }
}
