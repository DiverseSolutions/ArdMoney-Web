import { createSlice } from "@reduxjs/toolkit"

export interface ModalState {
  connectWalletModalState: boolean
}

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    connectWalletModalState: true,
  },
  reducers: {
    toggleConnectWalletModal: (state) => {
      state.connectWalletModalState = !state.connectWalletModalState
    }
  },
})


export const {
  toggleConnectWalletModal,
} = modalSlice.actions

export const modalReducer = modalSlice.reducer
