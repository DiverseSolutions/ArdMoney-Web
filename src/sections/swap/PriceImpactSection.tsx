import TextLoader from "@/components/shared/TextLoader";
import { formatNumber } from "@/helpers/numbers";
import { dexApi } from "@apis/dexApi";
import { Token } from "@constants/TokenList";
import { isEmpty, isString } from "radash";
import { useMemo } from "react";

type PriceImpactSectionProp = {
  fromToken: Token | undefined;
  toToken: Token | undefined;
  fromInput: string | number;
  toInput: string | number;
};

export default function PriceImpactSection({
  fromToken,
  toToken,
  toInput,
  fromInput,
}: PriceImpactSectionProp) {
  if (!fromToken || !toToken || isEmpty(toInput) || isEmpty(fromInput)) {
    return (
      <span>
        0<span className="text-2xs pl-1 relative top-0.5">%</span>
      </span>
    );
  }

  const { data: pair, isLoading: pairIsFinding } = dexApi.useFindPairQuery({
    fromTokenSymbol: fromToken.symbol,
    toTokenSymbol: toToken.symbol,
  });

  const priceImpact = useMemo<number>(calculatePriceImpact, [pair, toInput]);

  return (
    <span>
      <TextLoader isLoading={pairIsFinding}>
        {formatNumber(priceImpact, 3, 0)}
      </TextLoader>
      <span className="text-2xs pl-1 relative top-0.5">%</span>
    </span>
  );

  function calculatePriceImpact() {
    if (!pair) return 0;
    if (!fromToken || !toToken) return 0;
    if (isString(toInput) || isString(fromInput)) return 0;

    let baseTokenReserve =
      pair.token0.symbol == fromToken.symbol ? pair.reserve0 : pair.reserve1;
    let quoteTokenReserve =
      pair.token0.symbol == toToken.symbol ? pair.reserve0 : pair.reserve1;

    let nowBaseReserve = parseFloat(baseTokenReserve);
    let nowQuoteReserve = parseFloat(quoteTokenReserve);
    let constant = nowBaseReserve * nowQuoteReserve;

    let newBaseReserve = nowBaseReserve + fromInput;
    let newQuoteReserve = constant / newBaseReserve;

    let baseTokenPrice =
      pair.token0.symbol == toToken.symbol
        ? pair.token0Price
        : pair.token1Price;

    let oldPrice = parseFloat(baseTokenPrice);
    let newPrice = newQuoteReserve / newBaseReserve;

    let result = 1 - oldPrice / newPrice;

    if (result < -100) {
      return -100;
    }

    return result;
  }
}
