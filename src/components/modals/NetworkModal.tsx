import CloseIcon from '@assets/icons/CloseIcon'
import ChainList from '@constants/ChainList'
import { useDispatch } from "react-redux";

import { setNetworkModal } from "@slices/modalSlice" 

export default function NetworkModal() {
  const dispatch = useDispatch();

  function handleModalClose(){
    dispatch(setNetworkModal(false))
  }

  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <h5>Choose Chain</h5>
        <button
          className="btn-animation p-2xs rounded-4xs border border-light-back"
          onClick={handleModalClose}
        >
          <CloseIcon />
        </button>
      </div>
      <div className="my-xl grid gap-3 grid-cols-1 md:grid-cols-3">
        { ChainList.map((chain) => (
          <button className="btn-outline btn-animation gap-xs items-center">
            <img src={chain.logos[0]} className="h-8 w-auto" alt="chain_logo" />
            <span>{chain.name[0]}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
