import TextLoader from "@/components/shared/TextLoader";
import { parse18 } from "@/helpers/web3";
import { GlobalAppState } from "@/redux/store";
import BigNumber from "bignumber.js";
import React, { useContext, useMemo } from "react";
import { useSelector } from "react-redux";
import {
  Address,
  erc20ABI,
  useContractWrite,
  useWaitForTransaction,
} from "wagmi";
import LpInputsContext from "../context/LpInputsContext";
import { useParams } from "react-router-dom";
import RemovePoolButtonsContext from "../context/RemovePoolButtonsContext";
import { errorAlert, successAlert } from "@/helpers/alert";
import { useTranslation } from "react-i18next";

export default function LpTokenApproveButton({
  text,
  approveState,
  balance,
}: {
  text: any;
  approveState: Function;
  balance: string;
}) {
  const { t } = useTranslation("singlePool");
  const lpInput = useContext(LpInputsContext);
  const isLpTokenApproved = useContext(RemovePoolButtonsContext);
  const { poolId: lpTokenAddress } = useParams();
  const { contracts } = useSelector((state: GlobalAppState) => state.web3);
  const {
    data: approveTokenData,
    write: approveToken,
    isLoading: isApproveLoading,
  } = useContractWrite({
    address: lpTokenAddress as Address,
    abi: erc20ABI,
    functionName: "approve",
    args: [
      contracts.router[56] as Address,
      parse18(BigNumber(BigNumber(lpInput).toFixed(10)).toNumber()),
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

  const isButtonDisabled = useMemo(() => {
    return isLpTokenApproved ||
      isApproveLoading ||
      isTransactionLoading ||
      lpInput == ""
      ? true
      : false;
  }, [isApproveLoading, isTransactionLoading, lpInput, isLpTokenApproved]);
  const isButtonLoading = useMemo(() => {
    return isApproveLoading || isTransactionLoading ? true : false;
  }, [isApproveLoading, isTransactionLoading]);

  async function handleTokenApprove() {
    if (lpInput == "") return;
    if (BigNumber(lpInput).toNumber() > BigNumber(balance).toNumber()) {
      errorAlert(t("alert:errorNotEnoughBalance"));
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
      onClick={handleTokenApprove}
    >
      <TextLoader isLoading={isButtonLoading}>{t("confirmLP")}</TextLoader>
    </button>
  );
}
