import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type NetworkState = {
  isConfigured: boolean,
  name: string,
  chainId: number,
  currency: string,
  explorer: string,
  rpc: string,
  logo: string,
  faucet: string,
  supportedChains: Array<number>,
};

export type Network = {
  isConfigured: boolean,
  name: string,
  chainId: number,
  currency: string,
  explorer: string,
  rpc: string,
  logo: string,
  faucet: string,
};

const networkSlice = createSlice({
  name: "networkSlice",
  initialState: {
    isConfigured: false,
    name: "",
    chainId: -1,
    currency: "",
    explorer: "",
    logo: "",
    rpc: "",
    faucet: "",
    supportedChains: [56]
  } as NetworkState,
  reducers: {
    setNetwork: (state, action: PayloadAction<Network>) => {
      state.isConfigured = action.payload.isConfigured;
      state.name = action.payload.name;
      state.chainId = action.payload.chainId;
      state.currency = action.payload.currency;
      state.rpc = action.payload.rpc;
      state.explorer = action.payload.explorer;
      state.logo = action.payload.logo;
      state.faucet = action.payload.faucet;
    },
  },
});

export const { setNetwork } = networkSlice.actions;

export const networkReducer = networkSlice.reducer;
