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

export default function AddTabBaseTokenApproveButton({
  approveState,
  balance,
}: {
  approveState: Function;
  balance: string;
}) {
  const { t } = useTranslation("singlePool");
  const { baseToken } = useContext(TokensContext);
  const { isBaseTokenApproved } = useContext(AddPoolButtonsContext);
  const { fromInput } = useContext(TokenInputsContext);

  const { contracts } = useSelector((state: GlobalAppState) => state.web3);
  const {
    data: approveTokenData,
    write: approveToken,
    isLoading: isApproveLoading,
  } = useContractWrite({
    address: baseToken.address,
    abi: erc20ABI,
    functionName: "approve",
    args: [
      contracts.router[56] as Address,
      parse18(BigNumber(BigNumber(fromInput).toFixed(10)).toNumber()),
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
      isBaseTokenApproved ||
      fromInput == ""
        ? true
        : false,
    [isApproveLoading, isTransactionLoading, isBaseTokenApproved, fromInput]
  );

  async function handleBaseTokenApprove() {
    if (fromInput == "") return;
    if (BigNumber(fromInput).isGreaterThan(BigNumber(balance))) {
      errorAlert(t("alert:errorNotEnoughBalance"));
      return;
    }

    if (BigNumber(fromInput).isLessThan(BigNumber(0))) {
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
      onClick={handleBaseTokenApprove}
    >
      <TextLoader isLoading={isApproveLoading || isTransactionLoading}>
        {t("confirm")} {baseToken.symbol}
      </TextLoader>
    </button>
  );
}
