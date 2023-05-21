import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ModalState {
  connectWalletModalState: boolean;
  networkModalState: boolean;
  walletModalState: boolean;
  swapSettingsModalState: boolean;
}

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    connectWalletModalState: false,
    networkModalState: false,
    walletModalState: false,
    swapSettingsModalState: false,
  } as ModalState,
  reducers: {
    setConnectWalletModal: (state, action: PayloadAction<boolean>) => {
      state.connectWalletModalState = action.payload;
    },
    setNetworkModal: (state, action: PayloadAction<boolean>) => {
      state.networkModalState = action.payload;
    },
    setWalletModal: (state, action: PayloadAction<boolean>) => {
      state.walletModalState = action.payload;
    },
    setSwapSettingsModal: (state, action: PayloadAction<boolean>) => {
      state.swapSettingsModalState = action.payload;
    },
  },
});

export const {
  setConnectWalletModal,
  setNetworkModal,
  setWalletModal,
  setSwapSettingsModal,
} = modalSlice.actions;

export const modalReducer = modalSlice.reducer;
