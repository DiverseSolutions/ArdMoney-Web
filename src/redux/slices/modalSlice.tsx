import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface ModalState {
  connectWalletModalState: boolean,
  networkModalState: boolean,
}

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    connectWalletModalState: false,
    networkModalState: false,
  } as ModalState,
  reducers: {
    setConnectWalletModal: (state, action: PayloadAction<boolean>) => {
      state.connectWalletModalState = action.payload
    },
    setNetworkModal: (state, action: PayloadAction<boolean>) => {
      state.networkModalState = action.payload
    }
  },
})


export const {
  setConnectWalletModal,
  setNetworkModal,
} = modalSlice.actions

export const modalReducer = modalSlice.reducer
