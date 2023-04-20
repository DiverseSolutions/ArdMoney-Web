import { configureStore } from "@reduxjs/toolkit"
import { web3Reducer,Web3State } from "@redux/slices/web3Slice"
import { modalReducer,ModalState } from "@redux/slices/modalSlice"

const store = configureStore({
  reducer: {
    web3: web3Reducer,
    modal: modalReducer,
  }
})

export interface RootState {
  web3 : Web3State,
  modal : ModalState
}

export default store;
