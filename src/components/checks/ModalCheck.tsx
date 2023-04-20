import { useSelector,useDispatch } from "react-redux"
import { DefaultCheckProp } from 'types/CheckTypes'
import { RootState } from '@redux/store'
import { setConnectWalletModal,setNetworkModal } from "@slices/modalSlice" 

import ConnectWalletModal from '@components/modals/ConnectWalletModal'
import NetworkModal from '@components/modals/NetworkModal'
import ModalLayout from "@components/layouts/ModalLayout" 

export default function ModalCheck({ children } : DefaultCheckProp) {
  const { connectWalletModalState,networkModalState } = useSelector((state:RootState) => state.modal)
  const dispatch = useDispatch()

  if(connectWalletModalState){
    return ( 
      <ModalLayout handleModalClose={() => { dispatch(setConnectWalletModal(false))}}>
        <ConnectWalletModal />
      </ModalLayout>
    )
  }

  if(networkModalState){
    return ( 
      <ModalLayout handleModalClose={() => { dispatch(setNetworkModal(false))}}>
        <NetworkModal />
      </ModalLayout>
    )
  }

  return (<>{children}</>)

}
