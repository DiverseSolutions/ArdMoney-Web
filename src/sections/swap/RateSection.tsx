import TextLoader from "@/components/shared/TextLoader";
import { getTokenRate } from "@/helpers/contracts/router";
import { formatNumber } from "@/helpers/numbers";
import { formatAndParse } from "@/helpers/web3";
import { Token } from "@constants/TokenList";
import { ProviderContext } from "@contexts/ProviderContext";
import { useContext, useEffect, useState } from "react";

type SectionProp = {
  fromToken: Token | undefined;
  toToken: Token | undefined;
  setRate: Function,
};

export default function RateSection({ fromToken, toToken,setRate }: SectionProp) {
  const web3 = useContext(ProviderContext);
  const [fromTokenRate,setFromTokenRate] = useState(0)
  const [isRateLoading, setIsRateLoading] = useState(false);

  useEffect(() => {
    calculateRate();
  }, [toToken, fromToken,web3]);

  return (
    <TextLoader
      isLoading={!fromToken || !toToken || isRateLoading}
      style="icon-size-6"
    >
      <span className="text-white">
        1 {fromToken?.symbol} = {formatNumber(fromTokenRate)} {toToken?.symbol}
      </span>
    </TextLoader>
  );

  async function calculateRate() {
    if (!fromToken || !toToken) return;
    if (fromToken.address == toToken.address) return;

    setIsRateLoading(true);
    try {
      let path = [fromToken.address, toToken.address];
      let fromTokenRateBN = await getTokenRate(fromToken, path, web3);
      let resultRate = formatAndParse(fromTokenRateBN, fromToken.decimals);
      setFromTokenRate(resultRate);
      setRate(resultRate)
    } catch (e) {
      console.log(e);
    }
    setIsRateLoading(false);
  }
}
