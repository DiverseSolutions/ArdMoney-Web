import Button from "@components/shared/Button";
import { DefaultButtonProp } from "types/ButtonTypes";
import { useDispatch, useSelector } from "react-redux";
import { setNetworkModal } from "@slices/modalSlice";
import { GlobalAppState } from "@redux/store";

export default function ConnectToSupportedNetworkButton({
  style = "",
}: DefaultButtonProp) {
  const baseStyle = "text-base";
  const resultStyle = `${baseStyle} ${style}`;
  const { networkModalState } = useSelector(
    (state: GlobalAppState) => state.modal
  );
  const dispatch = useDispatch();

  function connectWalletHandler() {
    if (!networkModalState) {
      dispatch(setNetworkModal(true));
      return;
    }
  }

  return (
    <Button style={resultStyle} clickHandler={connectWalletHandler}>
      Connect To Chain
    </Button>
  );
}
