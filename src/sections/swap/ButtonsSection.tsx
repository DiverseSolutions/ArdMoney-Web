import TextLoader from "@/components/shared/TextLoader";
import { GlobalAppState } from "@/redux/globalStore";
import { ProviderContext } from "@contexts/ProviderContext";
import { isEmpty } from "radash";
import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { alert } from "@helpers/alert";
import { approveSwapToken, swapTokens } from "@/helpers/contracts/router";
import { Token } from "@constants/TokenList";
import { SwapPageActions as Actions } from "@/reducers/swapReducer";
import { useTranslation } from "react-i18next";

type ButtonsSectionProp = {
  fromToken: Token | undefined;
  toToken: Token | undefined;
  fromInput: number | string;
  toInput: number | string;
  minAmount: number;
  dispatcher: any;
};

export default function ButtonsSection({
  fromToken,
  toToken,
  fromInput,
  toInput,
  minAmount,
  dispatcher,
}: ButtonsSectionProp) {
  const { t } = useTranslation();
  const web3 = useContext(ProviderContext);
  const { isConnected } = useSelector((state: GlobalAppState) => state.web3);
  const { isConfigured } = useSelector(
    (state: GlobalAppState) => state.network
  );

  const [isApproveDisabled, setIsApproveDisabled] = useState(true);
  const [isSwapDisabled, setIsSwapDisabled] = useState(true);

  const [isApproveLoading, setIsApproveLoading] = useState(false);
  const [isSwapLoading, setIsSwapLoading] = useState(false);

  useEffect(() => {
    if (isEmpty(fromInput) && isEmpty(toInput)) {
      setIsApproveDisabled(true);
      setIsSwapDisabled(true);
    } else {
      setIsApproveDisabled(false);
    }
  }, [fromInput, toInput]);

  async function handleApprove() {
    if (isApproveDisabled || isApproveLoading || !fromToken) return;

    setIsApproveLoading(true);
    try {
      const transaction = await approveSwapToken(
        web3,
        fromToken.address,
        parseFloat(fromInput.toString())
      );
      await transaction.wait();
      setIsApproveDisabled(true);
      setIsSwapDisabled(false);
      alert("success", "Successfully Approved");
      alert("success", t("alert:swapSuccessful"));
    } catch (e: any) {
      alert("error", e.message);
    }
    setIsApproveLoading(false);
  }

  async function handleSwap() {
    if (isSwapDisabled || isSwapLoading) return;
    if (!fromToken || !toToken) return;

    setIsSwapLoading(true);
    try {
      let path = [fromToken.address, toToken.address];
      let amount = parseFloat(fromInput.toString());
      let tx = await swapTokens(web3, amount, minAmount, path);
      await tx.wait();

      setIsApproveDisabled(false);
      setIsSwapDisabled(true);
      alert("success", t("alert:swapSuccessful"));
      dispatcher(Actions.setFromInput(""));
    } catch (e: any) {
      alert("error", e.message);
    }
    setIsSwapLoading(false);
  }

  if (!isConnected || !isConfigured) return <></>;

  return (
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
  );
}
