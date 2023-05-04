import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type NetworkState = {
  isConfigured: boolean,
  isTestNet: boolean,
  isUnknown: boolean,
  name: string,
  chainId: number,
  currency: string,
  explorer: string,
  logo: string,
  faucet: string,
};

export type Network = {
  isConfigured: boolean,
  isTestNet: boolean,
  name: string,
  chainId: number,
  currency: string,
  explorer: string,
  logo: string,
  faucet: string,
};

const networkSlice = createSlice({
  name: "networkSlice",
  initialState: {
    isConfigured: false,
    isUnknown: false,
    isTestNet: false,
    name: "",
    chainId: 97,
    currency: "",
    explorer: "",
    logo: "",
    faucet: "",
  } as NetworkState,
  reducers: {
    setNetwork: (state, action: PayloadAction<Network>) => {
      state.isConfigured = action.payload.isConfigured;
      state.isTestNet = action.payload.isTestNet;
      state.name = action.payload.name;
      state.chainId = action.payload.chainId;
      state.currency = action.payload.currency;
      state.explorer = action.payload.explorer;
      state.logo = action.payload.logo;
      state.faucet = action.payload.faucet;
    },
    setNetworkConfigured: (state, action: PayloadAction<boolean>) => {
      state.isConfigured = action.payload;
    },
    setNetworkUnknown: (state, action: PayloadAction<boolean>) => {
      state.isUnknown = action.payload;
    },
  },
});

export const { setNetwork,setNetworkConfigured,setNetworkUnknown } = networkSlice.actions;

export const networkReducer = networkSlice.reducer;
