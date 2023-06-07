import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@redux/store";
import { setNetworkModal } from "@slices/modalSlice";
import OutlineButton from "@components/shared/OutlineButton";

export default function NetworkButton() {
  const { networkModalState } = useSelector((state: RootState) => state.modal);
  const network = useSelector((state: RootState) => state.network);
  const dispatch = useDispatch();

  function handleModalOpen() {
    if (networkModalState) return;

    dispatch(setNetworkModal(true));
  }

  if (network.isConfigured) {
    return (
      <OutlineButton style="gap-xs" clickHandler={handleModalOpen}>
        <img src={network.logo} className="w-lg h-auto" alt="network_logo" />
        <span className="text-base">{network.name}</span>
      </OutlineButton>
    );
  }

  return (
    <OutlineButton style="gap-xs" clickHandler={handleModalOpen}>
      Connect To Chain
    </OutlineButton>
  );
}
