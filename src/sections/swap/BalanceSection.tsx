import { Token } from "@constants/TokenList";
import { useContext, useEffect, useState } from "react";
import { formatAndParse18 } from "@/helpers/web3";
import { formatNumber } from "@/helpers/numbers";
import TextLoader from "@components/shared/TextLoader";
import { getUserTokenBalance } from "@/helpers/contracts/token";
import { ProviderContext } from "@contexts/ProviderContext";
import { useSelector } from "react-redux";
import { GlobalAppState } from "@/redux/globalStore";

type SectionProp = {
  token: Token | undefined;
};

export default function BalanceSection({ token }: SectionProp) {
  const web3 = useContext(ProviderContext);
  const web3Slice = useSelector((state: GlobalAppState) => state.web3);
  const [balance, setBalance] = useState(0);
  const [balanceLoading, setBalanceLoading] = useState(false);

  useEffect(() => {
    fetchBalance();
  }, [token, web3]);

  async function fetchBalance() {
    if (!token || !web3) {
      setBalance(0);
      return;
    }

    setBalanceLoading(true);
    try {
      let balanceBN = await getUserTokenBalance(web3, token.address);
      if (balanceBN) setBalance(formatAndParse18(balanceBN));
    } catch (e) {
      console.log(e);
    }
    setBalanceLoading(false);
  }

  return (
    <TextLoader isLoading={balanceLoading} style="icon-size-5 mr-2">
      {web3Slice.providerType != "default" && (
        <div className="flex gap-1 text-white items-center mr-2">
          <div className="i-ic-outline-account-balance-wallet icon-size-4" />
          <span className="relative">{formatNumber(balance)}</span>
        </div>
      )}
    </TextLoader>
  );
}
