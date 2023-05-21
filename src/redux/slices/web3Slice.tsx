import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ProviderType = "metamask" | "web" | "default";

interface ContractsIndexType<TValue> {
  [id: number]: TValue;
}

export type Web3State = {
  hasWallet: boolean;
  isConnected: boolean;
  account: string | undefined;
  defaultRpc: string;
  contracts: {
    router: ContractsIndexType<string>;
  };
  providerType: ProviderType;
};

const web3Slice = createSlice({
  name: "web3",
  initialState: {
    hasWallet: false,
    isConnected: false,
    account: undefined,
    defaultRpc: "https://bscrpc.com",
    providerType: "default",
    contracts: {
      router: {
        56: "0x21710E02f466ee8a83B4467Bd7b0f42bdaEF7452",
        97: "",
      },
    },
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

export const {
  setWeb3Connection,
  setWeb3Account,
  setHasWeb3Wallet,
  setProviderType,
} = web3Slice.actions;

export const web3Reducer = web3Slice.reducer;
