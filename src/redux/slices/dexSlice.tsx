import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface SubgraphIndexType<TValue> {
    [id: number]: TValue;
}

export interface DexState {
  subgraph : SubgraphIndexType<string>;
  slippage: number,
  deadline: number,
}

const dexSlice = createSlice({
  name: "dex",
  initialState: {
    subgraph: {
      56: "https://api.thegraph.com/subgraphs/name/mnkhod/ardmoney-bnb-v1-subgraph",
      97: "https://api.thegraph.com/subgraphs/name/mnkhod/ardmoney-chapel-v4-subgraph",
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
})

export const { setSlippage,setDeadline } = dexSlice.actions;

export const dexReducer = dexSlice.reducer

