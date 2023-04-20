import { useSelector,useDispatch } from "react-redux"
import { RootState } from "@redux/store" 
import { setNetworkModal } from "@slices/modalSlice" 

export default function NetworkButton() {
  const { networkModalState } = useSelector((state:RootState) => state.modal)
  const dispatch = useDispatch()

  function handleModalOpen(){
    if(networkModalState) return;

    dispatch(setNetworkModal(true))
  }

  return (
    <button className="btn-outline btn-animation rounded-full py-3xs px-sm" onClick={handleModalOpen}>Network</button>
  )
}
