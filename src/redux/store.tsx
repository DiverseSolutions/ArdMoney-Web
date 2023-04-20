import { configureStore } from "@reduxjs/toolkit"
import { web3Reducer } from "@redux/slices/web3Slice"
import { modalReducer } from "@redux/slices/modalSlice"
import { networkReducer } from "@redux/slices/networkSlice"

const store = configureStore({
  reducer: {
    web3: web3Reducer,
    modal: modalReducer,
    network: networkReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export default store;
