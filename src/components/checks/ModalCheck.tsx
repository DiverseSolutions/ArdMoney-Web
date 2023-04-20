import { useSelector,useDispatch } from "react-redux"
import ConnectWalletModal from '@components/modals/ConnectWalletModal'
import { DefaultCheckProp } from 'types/CheckTypes'
import { RootState } from '@redux/store'

import ModalLayout from "@components/layouts/ModalLayout" 
import { toggleConnectWalletModal } from "@slices/modalSlice" 

export default function ModalCheck({ children } : DefaultCheckProp) {
  const { connectWalletModalState } = useSelector((state:RootState) => state.modal)
  const dispatch = useDispatch()

  if(connectWalletModalState){
    return ( 
      <ModalLayout handleModalClose={() => { dispatch(toggleConnectWalletModal())}}>
        <ConnectWalletModal />
      </ModalLayout>
    )
  }

  return (<>{children}</>)

}
