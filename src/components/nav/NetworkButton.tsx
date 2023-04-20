import { useSelector,useDispatch } from "react-redux"
import { RootState } from "@redux/store" 
import { setNetworkModal } from "@slices/modalSlice" 

export default function NetworkButton() {
  const { networkModalState } = useSelector((state:RootState) => state.modal)
  const network = useSelector((state:RootState) => state.network)
  const dispatch = useDispatch()

  function handleModalOpen(){
    if(networkModalState) return;

    dispatch(setNetworkModal(true))
  }

  if(network.isConfigured){
    return (
      <button className="btn-outline btn-animation gap-3xs rounded-full py-3xs px-sm" onClick={handleModalOpen}>
        <img src={network.logo} className="w-2xl h-auto" alt="network_logo" />
        <span>{network.name}</span>
      </button>
    )
  }

  return (
    <button className="btn-outline btn-animation rounded-full py-3xs px-sm" onClick={handleModalOpen}>Connect To Chain</button>
  )
}
