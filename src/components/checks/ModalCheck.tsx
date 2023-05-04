import { useSelector } from "react-redux";
import { DefaultCheckProp } from "types/CheckTypes";
import { RootState } from "@redux/store";

import ConnectWalletModal from "@components/modals/ConnectWalletModal";
import NetworkModal from "@components/modals/NetworkModal";

export default function ModalCheck({ children }: DefaultCheckProp) {
  const { connectWalletModalState, networkModalState } = useSelector(( state: RootState,) => state.modal);

  return (
    <>
      {networkModalState && <NetworkModal />}
      {connectWalletModalState && <ConnectWalletModal />}

      {children}
    </>
  );
}
