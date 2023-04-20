import Button from "@components/shared/Button"  
import { ConnectWalletButtonProp } from "types/ButtonTypes";
import { useDispatch,useSelector } from "react-redux"
import { toggleConnectWalletModal } from '@slices/modalSlice'
import { RootState } from '@redux/store'

export default function ConnectWalletButton({ style="" } : ConnectWalletButtonProp) {
  const { connectWalletModalState } = useSelector((state:RootState) => state.modal)
  const dispatch = useDispatch()

  function connectWalletHandler() {
    if(!connectWalletModalState){
      dispatch(toggleConnectWalletModal())
      return;
    }
  }

  return (
    <Button style={style} clickHandler={connectWalletHandler}>Connect Wallet</Button>
  )
}
