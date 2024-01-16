import { ConnectWalletButtonProp } from "types/ButtonTypes";
import { useDispatch, useSelector } from "react-redux";
import { setConnectWalletModal } from "@slices/modalSlice";
import { GlobalAppState } from "@/redux/globalStore";
import { alert } from "@helpers/alert";
import OutlineButton from "@components/shared/OutlineButton";
import { useTranslation } from "react-i18next";

export default function ConnectWalletButton({
  style = "",
}: ConnectWalletButtonProp) {
  const { t } = useTranslation();
  const { connectWalletModalState } = useSelector(
    (state: GlobalAppState) => state.modal
  );
  const { hasWallet } = useSelector((state: GlobalAppState) => state.web3);
  const dispatch = useDispatch();

  function connectWalletHandler() {
    if (!hasWallet) {
      alert("error", t("alert:noWeb3WalletDetected"));
      return;
    }

    if (!connectWalletModalState) {
      dispatch(setConnectWalletModal(true));
      return;
    }
  }

  return (
    <OutlineButton style={style} clickHandler={connectWalletHandler}>
      {t("common:connectWallet")}
    </OutlineButton>
  );
}
