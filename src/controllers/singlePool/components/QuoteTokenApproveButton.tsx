import { GlobalAppState } from "@/redux/store";
import { useSelector } from "react-redux";
import {
  Address,
  erc20ABI,
  useContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { parse18 } from "@/helpers/web3";
import TextLoader from "@/components/shared/TextLoader";
import BigNumber from "bignumber.js";
import { useContext, useMemo } from "react";
import TokensContext from "../context/TokensContext";
import TokenInputsContext from "../context/TokenInputsContext";
import AddPoolButtonsContext from "../context/AddPoolButtonsContext";
import { errorAlert, successAlert } from "@/helpers/alert";
import { useTranslation } from "react-i18next";

export default function QuoteTokenApproveButton({
  approveState,
  balance,
}: {
  approveState: Function;
  balance: string;
}) {
  const { t } = useTranslation("singlePool");
  const { quoteToken } = useContext(TokensContext);
  const { toInput } = useContext(TokenInputsContext);
  const { isQuoteTokenApproved } = useContext(AddPoolButtonsContext);

  const { contracts } = useSelector((state: GlobalAppState) => state.web3);
  const {
    data: approveTokenData,
    write: approveToken,
    isLoading: isApproveLoading,
  } = useContractWrite({
    address: quoteToken.address,
    abi: erc20ABI,
    functionName: "approve",
    args: [
      contracts.router[56] as Address,
      parse18(BigNumber(BigNumber(toInput).toFixed(10)).toNumber()),
    ],
  });
  const { isLoading: isTransactionLoading } = useWaitForTransaction({
    hash: approveTokenData?.hash,
    confirmations: 2,
    onSuccess(data: any) {
      successAlert(t("alert:approveSuccessful"));
      approveState(true);
    },
  });
  const isButtonDisabled = useMemo(
    () =>
      isApproveLoading ||
      isTransactionLoading ||
      isQuoteTokenApproved ||
      toInput == ""
        ? true
        : false,
    [isApproveLoading, isTransactionLoading, isQuoteTokenApproved, toInput]
  );

  async function handleApprove() {
    if (toInput == "") return;
    if (BigNumber(toInput).isGreaterThan(BigNumber(balance))) {
      errorAlert(t("alert:errorNotEnoughBalance"));
      return;
    }

    if (BigNumber(toInput).isLessThan(BigNumber(0))) {
      errorAlert(t("alert:errorAmountBelowZero"));
      return;
    }
    approveToken();
  }

  return (
    <button
      disabled={isButtonDisabled}
      className={`py-4 rounded-3xs flex justify-center ${
        isButtonDisabled
          ? "bg-primary-disabled text-light-disabled"
          : "bg-primary"
      }`}
      onClick={handleApprove}
    >
      <TextLoader isLoading={isApproveLoading || isTransactionLoading}>
        {t("confirm")} {quoteToken.symbol}
      </TextLoader>
    </button>
  );
}
