import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Web3State = {
  hasWallet: boolean;
  isConnected: boolean;
  checkedConnection: boolean;
  account: string | null;
  defaultRpc: string,
};

const web3Slice = createSlice({
  name: "web3",
  initialState: {
    hasWallet: false,
    isConnected: false,
    checkedConnection: false,
    account: null,
    defaultRpc : "https://bscrpc.com",
  } as Web3State,
  reducers: {
    setWeb3Connection: (state, action: PayloadAction<boolean>) => {
      state.isConnected = action.payload;
    },
    setWeb3Account: (state, action: PayloadAction<string>) => {
      state.account = action.payload;
    },
    setHasWeb3Wallet: (state, action: PayloadAction<boolean>) => {
      state.hasWallet = action.payload;
    },
  },
});

export const { setWeb3Connection,setWeb3Account,setHasWeb3Wallet } = web3Slice.actions;

export const web3Reducer = web3Slice.reducer;
