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
};

export default function RateSection({ fromToken, toToken }: SectionProp) {
  const web3 = useContext(ProviderContext);
  const [rate, setRate] = useState(0);
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
        1 {fromToken?.symbol} = ${formatNumber(rate)} {toToken?.symbol}
      </span>
      <span className="text-white/60">(₮1.00)</span>
    </TextLoader>
  );

  async function calculateRate() {
    if (!fromToken || !toToken) return;
    if (fromToken.address == toToken.address) return;

    setIsRateLoading(true);
    try {
      let path = [fromToken.address, toToken.address];
      let fromTokenRateBN = await getTokenRate(fromToken, path, web3);
      setRate(formatAndParse(fromTokenRateBN, fromToken.decimals));
    } catch (e) {
      console.log(e);
    }
    setIsRateLoading(false);
  }
}
