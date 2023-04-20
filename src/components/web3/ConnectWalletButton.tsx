import Button from "@components/shared/Button"  
import { ConnectWalletButtonProp } from "types/ButtonTypes";
import { useDispatch,useSelector } from "react-redux"
import { toggleNetworkModal,modalState } from '@slices/modalSlice'

export default function ConnectWalletButton({ style="" } : ConnectWalletButtonProp) {
  const { networkModalState } = useSelector((state:modalState) => state)
  const dispatch = useDispatch()

  function connectWalletHandler() {
    if(!networkModalState){
      dispatch(toggleNetworkModal())
      return;
    }
  }

  return (
    <Button style={style} clickHandler={connectWalletHandler}>Connect Wallet</Button>
  )
}
