import { useDispatch, useSelector } from "react-redux";

import { setWalletModal } from "@slices/modalSlice";
import ModalLayout from "@components/layouts/ModalLayout";
import { GlobalAppState } from "@/redux/store";
import { Token, WalletTokenList } from "@constants/TokenList";
import { useContext, useEffect, useState } from "react";
import useProvider from "@/hooks/useProvider";
import { ProviderContext } from "@contexts/ProviderContext";
import { getUserTokenBalance } from "@/helpers/contracts/token";
import { formatAndParse18 } from "@/helpers/web3";
import TextLoader from "@components/shared/TextLoader";
import { formatNumber } from "@/helpers/numbers";
import ComponentLoader from "@components/shared/ComponentLoader";
import Divider from "@components/shared/Divider";
import OutlineButton from "../shared/OutlineButton";
import { alert } from "@helpers/alert";
import { useTranslation } from "react-i18next";

export default function WalletModal() {
  const { t } = useTranslation();
  const { account } = useSelector((state: GlobalAppState) => state.web3);
  const { chainId, explorer } = useSelector(
    (state: GlobalAppState) => state.network
  );
  const [isRefreshing, setIsRefreshing] = useState(false);
  const dispatch = useDispatch();
  const web3 = useProvider();

  useEffect(() => {
    if (isRefreshing) {
      setTimeout(() => {
        setIsRefreshing(false);
      }, 250);
    }
  }, [isRefreshing]);

  function handleModalClose() {
    dispatch(setWalletModal(false));
  }

  function handleRefresh() {
    setIsRefreshing(true);
  }

  function handleExplorer() {
    if (!account || !window || !window.open) return;

    let explorerLink = `${explorer}/address/${account}`;

    window.open(explorerLink, "_blank")?.focus();
  }

  function handleCopy() {
    if (!account) return;

    navigator.clipboard.writeText(account);
    alert("success", t("alert:copy"));
  }

  return (
    <ModalLayout
      width="w-[35rem]"
      alignment="right"
      fullHeight
      handleModalClose={handleModalClose}
    >
      <ProviderContext.Provider value={web3}>
        <div className="w-full flex flex-col gap-xl">
          <div className="flex items-center justify-between">
            <div className="w-8/12 md:w-4.5/12">
              <button
                className="flex gap-0.5 items-center btn-animation"
                onClick={handleCopy}
              >
                <h5 className="relative top-0.5 text-secondary">
                  {accountNameShortener(account)}
                </h5>
                <div className="i-ic-baseline-content-copy relative top-1.5 icon-size-4 text-secondary" />
              </button>
            </div>

            <div className="flex gap-3xs">
              {
                // <div className="i-ic-outline-settings icon-size-5 btn-animation" />
              }
              <div
                className="i-ic-round-open-in-new icon-size-6 btn-animation"
                onClick={() => {
                  handleExplorer();
                }}
              />
              <div
                className="i-ic-outline-refresh icon-size-6 btn-animation"
                onClick={handleRefresh}
              />
              <div
                className="i-ic-outline-close icon-size-6 btn-animation"
                onClick={handleModalClose}
              />
            </div>
          </div>
          <Divider />
          <div className="flex gap-3xs text-sm">
            <span className="uppercase">Tokens</span>
            <span className="text-light-secondary uppercase">Nfts</span>
          </div>
          <ComponentLoader isLoading={isRefreshing}>
            <div className="flex flex-col gap-3xs">
              {WalletTokenList[chainId].map((token, index) => (
                <WalletToken key={index} token={token} />
              ))}
            </div>
          </ComponentLoader>
        </div>
      </ProviderContext.Provider>
    </ModalLayout>
  );

  function accountNameShortener(account: string | undefined) {
    if (!account) return "";

    return `${account.substring(0, 6)}...${account.substring(
      account.length - 5,
      account.length
    )}`;
  }
}

function WalletToken({ token }: { token: Token }) {
  const web3 = useContext(ProviderContext);
  const [balance, setBalance] = useState(0);
  const [balanceLoading, setBalanceLoading] = useState(false);

  useEffect(() => {
    fetchBalance();
  }, [token, web3]);

  return (
    <div className="flex gap-3xs items-center">
      <img src={token.logo} className="w-10 h-10" alt="logo" />
      <span className="text-sm grow">{token.name}</span>
      <TextLoader isLoading={balanceLoading}>
        <div className="flex items-center gap-3xs">
          <span className="text-lg">{formatNumber(balance, 0, 0)}</span>
          <span className="text-2xs self-end">({token.symbol})</span>
        </div>
      </TextLoader>
    </div>
  );

  async function fetchBalance() {
    if (!web3) {
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
}
