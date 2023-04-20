import { configureStore } from "@reduxjs/toolkit"
import { web3Reducer } from "@redux/slices/web3Slice"
import { modalReducer } from "@redux/slices/modalSlice"

const store = configureStore({
  reducer: {
    web3: web3Reducer,
    modal: modalReducer,
  }
})

export default store;
