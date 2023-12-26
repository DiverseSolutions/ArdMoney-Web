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
import TokenInputsContext from "../context/TokenInputsContext";
import AddPoolButtonsContext from "../context/AddPoolButtonsContext";
import ResetStatesContext from "../context/ResetStatesContext";
import { successAlert } from "@/helpers/alert";
import { useTranslation } from "react-i18next";

export default function AddLiquidityButton({
  resetButtonState,
}: {
  resetButtonState: Function;
}) {
  const { t } = useTranslation("singlePool");
  const { reset } = useContext(ResetStatesContext);
  const { baseToken, quoteToken } = useContext(TokensContext);
  const { fromInput, toInput } = useContext(TokenInputsContext);
  const deadline = new Date().setHours(new Date().getHours() + 2);
  const { address: userAccount } = useAccount();
  const { isBaseTokenApproved, isQuoteTokenApproved } = useContext(
    AddPoolButtonsContext
  );

  const fromAmount = useMemo(() => {
    if (fromInput == "") return 0;
    return parse18(BigNumber(BigNumber(fromInput).toFixed(10)).toNumber());
  }, [fromInput]);
  const toAmount = useMemo(() => {
    if (fromInput == "") return 0;
    return parse18(BigNumber(BigNumber(toInput).toFixed(10)).toNumber());
  }, [toInput]);

  const { contracts } = useSelector((state: GlobalAppState) => state.web3);
  const {
    data: addLiquidityData,
    write: addLiquidity,
    isLoading: isApproveLoading,
  } = useContractWrite({
    address: contracts.router[56] as Address,
    abi: ArdMoneyRouterABI,
    functionName: "addLiquidity",
    args: [
      baseToken.address,
      quoteToken.address,
      fromAmount ?? 0,
      toAmount ?? 0,
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
      successAlert(t("alert:successLpAdded"));
      resetButtonState();
      reset();
    },
  });

  function handleAddLiquidity() {
    if (!isBaseTokenApproved || !isQuoteTokenApproved) return;
    if (fromInput == "" || toInput == "") return;

    addLiquidity();
  }

  const isButtonDisabled = useMemo(
    () =>
      isApproveLoading ||
      isTransactionLoading ||
      !isBaseTokenApproved ||
      !isQuoteTokenApproved
        ? true
        : false,
    [
      isApproveLoading,
      isTransactionLoading,
      isBaseTokenApproved,
      isQuoteTokenApproved,
    ]
  );

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
      <TextLoader isLoading={isApproveLoading || isTransactionLoading}>
        {t("addTokenPairs")} ({baseToken.symbol}/{quoteToken.symbol})
      </TextLoader>
    </button>
  );
}
