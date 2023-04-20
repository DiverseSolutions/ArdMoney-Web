import Button from "@components/shared/Button"  
import { ConnectWalletButtonProp } from "types/ButtonTypes";
import { useDispatch,useSelector } from "react-redux"
import { toggleConnectWalletModal } from '@slices/modalSlice'
import { RootState } from '@redux/store'
import { alertError } from '@helpers/alert'

export default function ConnectWalletButton({ style="" } : ConnectWalletButtonProp) {
  const { connectWalletModalState } = useSelector((state:RootState) => state.modal)
  const { hasWallet } = useSelector((state:RootState) => state.web3)
  const dispatch = useDispatch()

  function connectWalletHandler() {
    if(!hasWallet){
      alertError("No Web 3.0 Wallet Detected")
      return;
    }

    if(!connectWalletModalState){
      dispatch(toggleConnectWalletModal())
      return;
    }
  }

  return (
    <Button style={style} clickHandler={connectWalletHandler}>Connect Wallet</Button>
  )
}
