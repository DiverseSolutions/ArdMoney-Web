import { createSlice } from "@reduxjs/toolkit"

interface SubgraphIndexType<TValue> {
    [id: number]: TValue;
}

export interface DexState {
  subgraph : SubgraphIndexType<string>;
}

const dexSlice = createSlice({
  name: "dex",
  initialState: {
    subgraph: {
      56: "https://api.thegraph.com/subgraphs/name/mnkhod/ardmoney-bnb-v1-subgraph",
      97: "https://api.thegraph.com/subgraphs/name/mnkhod/ardmoney-chapel-v4-subgraph",
    },
  } as DexState,
  reducers: {},
})

export const dexReducer = dexSlice.reducer

