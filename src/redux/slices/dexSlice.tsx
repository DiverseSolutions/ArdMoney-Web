import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SubgraphIndexType<TValue> {
  [id: number]: TValue;
}

export interface DexState {
  subgraph: SubgraphIndexType<string>;
  slippage: number;
  deadline: number;
}

const dexSlice = createSlice({
  name: "dex",
  initialState: {
    subgraph: {
      56: "https://gateway-arbitrum.network.thegraph.com/api/080d31710dd736277124ba511a64bc3f/subgraphs/id/8ENhWK8XBipkPvN1vXrqcaBs7vTffurRb7x8nPGVbtic",
      97: "https://gateway-arbitrum.network.thegraph.com/api/080d31710dd736277124ba511a64bc3f/subgraphs/id/HMyxZYKVfn9hcGFcVbgmiMAVmxxnCzHugago76WcUrpH",
    },
    slippage: 0.5,
    deadline: 30,
  } as DexState,
  reducers: {
    setSlippage: (state, action: PayloadAction<number>) => {
      state.slippage = action.payload;
    },
    setDeadline: (state, action: PayloadAction<number>) => {
      state.deadline = action.payload;
    },
  },
});

export const { setSlippage, setDeadline } = dexSlice.actions;

export const dexReducer = dexSlice.reducer;
