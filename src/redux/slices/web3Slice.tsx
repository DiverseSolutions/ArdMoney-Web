import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Web3State = {
  hasConnection: boolean;
  isConnected: boolean;
  checkedConnection: boolean;
  account: string | null;
};

const web3Slice = createSlice({
  name: "web3Slice",
  initialState: {
    hasConnection: false,
    isConnected: false,
    checkedConnection: false,
    account: null,
  } as Web3State,
  reducers: {
    web3Connected: (state) => {
      state.isConnected = true;
    },
    setWeb3Account: (state, action: PayloadAction<string>) => {
      state.account = action.payload;
    },
  },
});

export const { web3Connected, setWeb3Account } = web3Slice.actions;

export const web3Reducer = web3Slice.reducer;
