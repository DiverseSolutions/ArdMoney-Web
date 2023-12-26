import TextLoader from "@/components/shared/TextLoader";
import { useSelector } from "react-redux";
import { GlobalAppState } from "@/redux/store";
import {
  Address,
  useAccount,
  useContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { parse18 } from "@/helpers/web3";
import BigNumber from "bignumber.js";
import ArdMoneyRouterABI from "@abis/ArdMoneyRouterABI.json";
import { useContext, useMemo } from "react";
import TokensContext from "../context/TokensContext";
import RemovePoolButtonsContext from "../context/RemovePoolButtonsContext";
import LpInputsContext from "../context/LpInputsContext";
import ResetStatesContext from "../context/ResetStatesContext";
import { successAlert } from "@/helpers/alert";
import { useTranslation } from "react-i18next";

export default function RemoveLiquidityButton({
  resetButtonState,
}: {
  resetButtonState: Function;
}) {
  const { t } = useTranslation("singlePool");
  const { baseToken, quoteToken } = useContext(TokensContext);
  const { reset } = useContext(ResetStatesContext);
  const lpInput = useContext(LpInputsContext);
  const deadline = new Date().setHours(new Date().getHours() + 2);
  const { address: userAccount } = useAccount();
  const isLpTokenApproved = useContext(RemovePoolButtonsContext);

  const removeInput = useMemo(() => {
    if (lpInput == "") return 0;
    return parse18(BigNumber(BigNumber(lpInput).toFixed(10)).toNumber());
  }, [lpInput]);

  const { contracts } = useSelector((state: GlobalAppState) => state.web3);
  const {
    data: addLiquidityData,
    write: removeLiquidity,
    isLoading: isApproveLoading,
  } = useContractWrite({
    address: contracts.router[56] as Address,
    abi: ArdMoneyRouterABI,
    functionName: "removeLiquidity",
    // tokenA,tokenB,liquidity,amountAMin,amountBMin,to,deadline
    args: [
      baseToken.address,
      quoteToken.address,
      removeInput,
      1,
      1,
      userAccount,
      deadline,
    ],
  });

  const { isLoading: isTransactionLoading } = useWaitForTransaction({
    hash: addLiquidityData?.hash,
    confirmations: 2,
    onSuccess(data: any) {
      successAlert(t("alert:successLpRemoved"));
      resetButtonState();
      reset();
    },
  });

  function handleAddLiquidity() {
    if (!isLpTokenApproved) return;
    if (lpInput == "") return;

    removeLiquidity();
  }

  const isButtonDisabled = useMemo(() => {
    return isLpTokenApproved == false ||
      isApproveLoading ||
      isTransactionLoading ||
      lpInput == ""
      ? true
      : false;
  }, [isApproveLoading, isTransactionLoading, lpInput, isLpTokenApproved]);
  const isButtonLoading = useMemo(() => {
    return isApproveLoading || isTransactionLoading ? true : false;
  }, [isApproveLoading, isTransactionLoading]);

  return (
    <button
      disabled={isButtonDisabled}
      className={`py-4 rounded-3xs flex justify-center ${
        isButtonDisabled
          ? "bg-primary-disabled text-light-disabled"
          : "bg-primary"
      }`}
      onClick={handleAddLiquidity}
    >
      <TextLoader isLoading={isButtonLoading}>{t("removeLP")}</TextLoader>
    </button>
  );
}
