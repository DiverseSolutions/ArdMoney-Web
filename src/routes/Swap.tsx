import { useSelector } from "react-redux";
import { RootState } from "@redux/store";
import { FormEvent, useEffect, useState } from "react";

import Info from "../assets/icons/info.svg";
import Chevron_D from "../assets/icons/down_chevron.svg";
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
import SwitchIcon from "@assets/icons/SwitchIcon";
import ReloadIcon from "@assets/icons/ReloadIcon";
import { alert } from "@helpers/alert";
import SettingsIcon from "@assets/icons/SettingsIcon";
import { isEmpty } from "radash";

export default function Swap() {
  const [fromToken, setFromToken] = useState<Token | null>(null);
  const [toToken, setToToken] = useState<Token | null>(null);

  const [fromTokenModal, setFromTokenModal] = useState(false);
  const [toTokenModal, setToTokenModal] = useState(false);
  const [toTokenList, setToTokenList] = useState<Array<Token>>([]);

  const [fromInput,setFromInput] = useState<number | string>("")
  const [toInput,setToInput] = useState<number | string>("")

  const { data: pairs, isLoading: pairsLoading,isFetching: pairsFetching, isSuccess: pairsIsSuccess , refetch : fetchPairs } =
    dexApi.useGetTokensPairsQuery({
      refetchOnFocus: true,
      refetchOnReconnect: true,
      pollingInterval: 5 * 60 * 1000,
    });

  const { isConnected } = useSelector((state: RootState) => state.web3);
  const { dexList: tokenList } = useSelector((state: RootState) => state.token);
  const { isUnknown } = useSelector((state: RootState) => state.network);

  useEffect(() => {
    if(pairsIsSuccess) setFromToken(tokenList[0])
  }, [pairsIsSuccess]);

  useEffect(() => {
    configurePairTokens();
  }, [fromToken]);

  useEffect(() => {
    if(toTokenList.length > 0 ) setToToken(toTokenList[0])
  }, [toTokenList]);

  function handleSwitchTokens() {
    if (fromToken == null || toToken == null) return;

    let from = fromToken;
    setFromToken(toToken);
    setToToken(from);
  }

  async function handleReload(){
    setFromToken(null)
    setToToken(null)
    setToTokenList([])

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
    <div className="py-base flex justify-center w-full">
      <div className="flex flex-col p-xl w-full min-h-auto max-w-[423px] card-gradient-dark rounded-lg z-5">
        <div className="flex justify-between w-full mb-lg">
          <div className="flex items-center text-white gap-sm">
            <button className="p-2 border border-white/10 rounded-md btn-animation" onClick={handleReload}>
              <ReloadIcon />
            </button>
            <span className="font-lg">Swap</span>
          </div>
          <div>
            <div className="p-2 border border-white/10 rounded-md">
              <SettingsIcon />
            </div>
          </div>
        </div>
        <div className="flex justify-between w-full text-white/60 text-sm mb-base">
          <span>You send</span>
          <div className="flex gap-2">
            <span>Balance:</span>
            <span className="text-white">0.000</span>
          </div>
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
            <input type="number" className="input text-lg pl-2xs" placeholder="0" value={fromInput} onChange={handleFromInputChange} />
          </ComponentLoader>
        </div>

        <span className="text-white/60 text-sm mb-lg">0.000</span>

        <div className="flex w-full justify-center mb-lg">
          <button
            className="flex p-base border border-white/10 rounded-md btn-animation"
            onClick={handleSwitchTokens}
          >
            <SwitchIcon />
          </button>
        </div>

        <div className="flex justify-between w-full text-white/60 text-sm mb-base">
          <span>You recieve</span>
          <div className="flex gap-2">
            <span>Balance:</span>
            <span className="text-white">0.000</span>
          </div>
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
            <input type="number" className="input pointer-events-none text-white/60 text-lg pl-2xs" placeholder="0" value={toInput} />
          </ComponentLoader>
        </div>

        <span className="text-white/60 text-sm mb-lg">0.000</span>

        <div className="flex justify-between w-full mb-lg">
          <div className="flex items-center text-sm gap-xs">
            <div className="p-2 border border-white/10 rounded-md">
              <img src={Info} alt="" />
            </div>
            <span className="text-white">1 USDT = 3,407.00 MONT</span>
            <span className="text-white/60">(₮1.00)</span>
          </div>
          <div className="p-2 border border-white/10 rounded-md">
            <img src={Chevron_D} alt="" />
          </div>
        </div>

        {!isConnected && <ConnectWalletButton style="py-sm" />}
        {isConnected && isUnknown && (
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
  );

  function configurePairTokens() {
    if (fromToken == null) return;
    if (pairs == undefined) return;

    let resultList: Array<Token> = [];
    let foundPair = pairs.find((token) =>
      findByAddress(token.id, fromToken.address)
    );

    if (foundPair == undefined) return;

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
      setToTokenList(resultList);
    }
  }
}
