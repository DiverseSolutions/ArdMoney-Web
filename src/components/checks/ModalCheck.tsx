import { useSelector } from "react-redux";
import { DefaultCheckProp } from "types/CheckTypes";
import { RootState } from "@redux/store";

import ConnectWalletModal from "@components/modals/ConnectWalletModal";
import NetworkModal from "@components/modals/NetworkModal";
import WalletModal from "@components/modals/WalletModal";

export default function ModalCheck({ children }: DefaultCheckProp) {
  const { connectWalletModalState, networkModalState,walletModalState } = useSelector(( state: RootState,) => state.modal);

  return (
    <>
      {networkModalState && <NetworkModal />}
      {connectWalletModalState && <ConnectWalletModal />}
      {walletModalState && <WalletModal />}

      {children}
    </>
  );
}
