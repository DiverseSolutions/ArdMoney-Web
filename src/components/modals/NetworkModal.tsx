import CloseIcon from '@assets/icons/CloseIcon'
import { ChainList,Chain } from '@constants/ChainList'
import { useDispatch } from "react-redux";

import { setNetworkModal } from "@slices/modalSlice" 
import { addingChain,switchToChain } from "@helpers/web3/metamask" 
import { alertError,alertSuccess } from "@helpers/alert" 

export default function NetworkModal() {
  const dispatch = useDispatch();

  function handleModalClose(){
    dispatch(setNetworkModal(false))
  }

  async function handleChainConnect(chain: Chain){
    try {
      await switchToChain(chain)
      alertSuccess("Successfully Switched to Chain")
      handleModalClose()
    } catch (error) {
      try {
        await addingChain(chain)
        alertSuccess("Successfully Added Chain")
        handleModalClose()
      } catch (e) {
        alertError("Error Adding Chain") 
      }
    }
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
          <button onClick={() => { handleChainConnect(chain) }} className="btn-outline btn-animation gap-xs items-center">
            <img src={chain.logos[0]} className="h-8 w-auto" alt="chain_logo" />
            <span>{chain.name[0]}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
