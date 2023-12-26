import { useSelector } from "react-redux";
import { DefaultCheckProp } from "types/CheckTypes";
import { GlobalAppState } from "@redux/store";

import ConnectWalletModal from "@components/modals/ConnectWalletModal";
import NetworkModal from "@components/modals/NetworkModal";
import WalletModal from "@components/modals/WalletModal";
import SwapSettingsModal from "../modals/SwapSettingsModal";

export default function ModalCheck({ children }: DefaultCheckProp) {
  const {
    connectWalletModalState,
    networkModalState,
    walletModalState,
    swapSettingsModalState,
  } = useSelector((state: GlobalAppState) => state.modal);

  return (
    <>
      {networkModalState && <NetworkModal />}
      {connectWalletModalState && <ConnectWalletModal />}
      {walletModalState && <WalletModal />}
      {swapSettingsModalState && <SwapSettingsModal />}

      {children}
    </>
  );
}
