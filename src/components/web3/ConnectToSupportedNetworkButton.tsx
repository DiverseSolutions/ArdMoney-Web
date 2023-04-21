import Button from "@components/shared/Button"  
import { DefaultButtonProp } from "types/ButtonTypes";
import { useDispatch,useSelector } from "react-redux"
import { setNetworkModal } from '@slices/modalSlice'
import { RootState } from '@redux/store'

export default function ConnectToSupportedNetworkButton({ style="" } : DefaultButtonProp) {
  const { networkModalState } = useSelector((state:RootState) => state.modal)
  const dispatch = useDispatch()

  function connectWalletHandler() {
    if(!networkModalState){
      dispatch(setNetworkModal(true))
      return;
    }
  }

  return (
    <Button style={style} clickHandler={connectWalletHandler}>Connect Network</Button>
  )
}
