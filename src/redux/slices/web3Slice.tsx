import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ProviderType = "metamask" | "web" | undefined;

export type Web3State = {
  hasWallet: boolean;
  isConnected: boolean;
  account: string | undefined;
  defaultRpc: string,

  providerType: ProviderType,
};

const web3Slice = createSlice({
  name: "web3",
  initialState: {
    hasWallet: false,
    isConnected: false,
    account: undefined,
    defaultRpc : "https://bscrpc.com",
    providerType: undefined,
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
    setProviderType: (state, action: PayloadAction<ProviderType>) => {
      state.providerType = action.payload;
    },
  },
});

export const { setWeb3Connection,setWeb3Account,setHasWeb3Wallet,setProviderType } = web3Slice.actions;

export const web3Reducer = web3Slice.reducer;
